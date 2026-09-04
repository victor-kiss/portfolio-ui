import type { NextConfig } from "next";

// A Content Security Policy (CSP) atua como uma "lista de permissões" rigorosa para o navegador.
// Qualquer recurso ou conexão que não esteja explicitamente declarada aqui será bloqueada, segue um pouco sobre cada política definida

{
  // 1. O Fallback de Segurança
  // Se alguma diretiva específica (ex: font-src ou media-src) não for declarada,
  // o navegador aplicará esta regra. 'self' garante que a origem padrão para
  // qualquer carregamento é exclusivamente o próprio domínio.
  //default-src 'self';
  // 2. A Camada de Comunicação (Blindagem contra Exfiltração de Dados)
  // Controla para onde o frontend pode fazer requisições de rede (fetch, XHR, WebSockets).
  // Se um atacante conseguir injetar um script malicioso (XSS), esta regra o impedirá
  // de transmitir os dados roubados (como tokens de sessão) para um servidor de terceiros.
  //connect-src 'self' https://sua-api-oficial.com.br wss://sua-api-oficial.com.br;
  // 3. Execução de JavaScript (Controle de XSS)
  // 'self' permite os arquivos compilados do seu diretório /_next/.
  // 'unsafe-inline' permite scripts diretamente no HTML e 'unsafe-eval' permite a função eval().
  // Nota de AppSec: O Next.js frequentemente exige ambos para hidratação de componentes e
  // Fast Refresh. Em ambientes de altíssima segurança, o ideal é remover o 'unsafe-inline'
  // e usar um "nonce" gerado no lado do servidor (via middleware).
  //script-src 'self' 'unsafe-eval' 'unsafe-inline';
  // 4. Folhas de Estilo e CSS
  // 'self' permite o CSS do seu domínio. 'unsafe-inline' é frequentemente necessário
  // se você utiliza Tailwind, styled-components ou injeta estilos diretamente via tags style.
  //style-src 'self' 'unsafe-inline';
  // 5. Carregamento de Imagens (Prevenção contra Tracking e Defacement visual)
  // Bloqueia imagens de servidores não autorizados, o que evita o carregamento de "tracking pixels".
  // 'blob:' permite exibir arquivos manipulados em memória (ex: preview de imagem antes do upload).
  // 'data:' permite imagens codificadas em base64 diretamente no código.
  //img-src 'self' blob: data: https://suas-imagens-confiaveis.com;
  // 6. Tipografia
  // Impede o carregamento de fontes de domínios externos. Como o Next.js possui a biblioteca
  // next/font (que baixa e serve as fontes do Google localmente durante o build),
  // você pode manter isso estritamente restrito a 'self'.
  // font-src 'self';
  // 7. Mitigação de Plugins Legados
  // Bloqueia completamente o carregamento de tags <object>, <embed> ou <applet>.
  // Isso elimina vetores antigos e perigosos de injeção envolvendo Java Applets, Flash ou PDFs maliciosos.
  // object-src 'none';
  // 8. Prevenção de Base Tag Hijacking
  // Impede que um invasor injete uma tag <base href="https://atacante.com/">.
  // Se ele conseguisse, todos os scripts carregados por caminho relativo (ex: <script src="/app.js">)
  // seriam redirecionados e baixados do servidor do invasor.
  //base-uri 'self';
  // 9. Bloqueio de Sequestro de Formulários
  // Se o projeto possuir tags <form>, os dados preenchidos só poderão ser enviados
  // (via método POST/GET) para o seu próprio domínio.
  // Se um atacante alterar o "action" do formulário via injeção, o envio falhará silenciosamente.
  // form-action 'self';
  // 10. Proteção contra Clickjacking e Framing
  // Instrução moderna que substitui e aprimora o cabeçalho X-Frame-Options.
  // Garante que o navegador bloqueie a aplicação de ser renderizada dentro de iframes ou
  // objetos de outros sites, prevenindo que usuários sejam enganados a clicar em funções invisíveis.
  //frame-ancestors 'none';
  // 11. Criptografia Automática em Trânsito (Prevenção de Mixed Content)
  // Instrui o navegador a reescrever automaticamente qualquer requisição http:// legada
  // no código (como uma imagem antiga) para https:// antes que ela saia para a rede,
  // evitando ataques de Man-in-the-Middle e bloqueios de Mixed Content.
  //upgrade-insecure-requests;
}

const nextConfig: NextConfig = {
  // Essencial para o seu hardening de Docker: cria uma build enxuta copiando apenas
  // os arquivos necessários (node_modules/ etc) para o deploy.
  async headers() {
    return [
      {
        // Aplica esses cabeçalhos de segurança em TODAS as rotas da aplicação
        source: "/(.*)",
        headers: [
          {
            // Proteção contra Clickjacking: impede que seu site seja renderizado dentro de um <iframe>.
            // O valor 'DENY' proíbe totalmente. Se precisasse permitir para o mesmo domínio, usaria 'SAMEORIGIN'.
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            // Proteção contra MIME-Sniffing: obriga o navegador a respeitar o Content-Type declarado.
            // Impede que um arquivo malicioso disfarçado de imagem seja executado como JavaScript.
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Proteção de Privacidade e Vazamento de Dados: controla quanta informação de navegação
            // é enviada no cabeçalho 'Referer'. 'strict-origin-when-cross-origin' envia a URL completa
            // dentro do mesmo site, mas apenas o domínio raiz quando a requisição vai para fora (e nada se cair de HTTPS para HTTP).
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
         {
  key: "Content-Security-Policy",
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://www.googletagmanager.com",
    
    // Adicionado raw.githubusercontent.com
    "connect-src 'self' data: blob: https://raw.githack.com https://raw.githubusercontent.com https://www.gstatic.com https://www.google-analytics.com",
    
    "font-src 'self' data:",
    "worker-src 'self' blob:",
    "frame-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; "),
},
          {
            // Filtro XSS Legado (Cross-Site Scripting): força navegadores mais antigos (IE, Safari antigo)
            // a bloquear a página ('mode=block') se detectarem um ataque XSS refletido na requisição.
            // Hoje, a CSP (script-src) faz o trabalho principal, mas este header é uma boa defesa em profundidade.
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

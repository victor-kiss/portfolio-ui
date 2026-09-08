# Victor Kiss - Portfólio.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat&colorA=000000&colorB=000000)](#)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat&colorA=000000&colorB=000000)](#)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat&colorA=000000&colorB=000000)](#)
[![License](https://img.shields.io/badge/license-MIT-black?style=flat&colorA=000000&colorB=000000)](#)

Repositório do meu portfólio pessoal. A ideia aqui é juntar uma pegada **tech** com experiências 3D de alta performance, rodando tudo em cima de uma stack moderna.

[Live Demo](#) · [Reportar Bug](#)

---

### Setup

```bash
git clone https://github.com/victor-kiss/portfolio-ui.git
cd portfolio-ui
npm install
npm run dev
```

### Arquitetura & Stack

A estrutura foi pensada para escalar e manter a performance em dia, mesmo socando WebGL no meio da tela. Inspirado no ecossistema `pmndrs` (`@react-three/fiber`, `drei`), o core é focado em renderização declarativa e componentização estrita.

#### 1. React Three Fiber (R3F) & WebGL
Zero código imperativo do Three.js puro. O canvas 3D vive direto na árvore do React. Isso permite injetar modelos de estética tech/biomecânica e interfaces retrô (como o Mac 128k) integrando os eventos do DOM perfeitamente com o contexto do WebGL.

```jsx
// WebGL declarativo amarrado ao ciclo de vida do React
import { Canvas } from '@react-three/fiber'
import { Environment, PresentationControls, Float } from '@react-three/drei'
import { CyberpunkTerminal } from './components/CyberpunkTerminal'

export default function HeroScene() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <Float rotationIntensity={0.4}>
          <CyberpunkTerminal />
        </Float>
      </PresentationControls>
      <Environment preset="city" />
    </Canvas>
  )
}
```

#### 2. Next.js (App Router) & Animações
O routing e SSR ficam na conta do App Router do Next. 
- **Server vs Client Boundaries:** *Server Components* cuidam do esqueleto da página e do SEO. Os *Client Components* rodam apenas na ponta onde a interatividade (state, WebGL) é estritamente necessária.
- **Coreografia de UI:** O DOM e o Canvas conversam através de motores como **Framer Motion** e **GSAP**, amarrando timelines de scroll às posições de câmera sem derrubar o framerate.
- **Lazy Loading:** Os chunks mais pesados de 3D carregam via `next/dynamic` pra não penalizar o First Contentful Paint (FCP).

#### 3. AppSec & Infra
Frontend não é terra sem lei. O app sobe com Content Security Policy (CSP) bem restrito e security headers injetados direto na config do Next. O ambiente de desenvolvimento (Linux/Mint) reflete o de produção: rodamos um container Docker com hardening aplicado, garantindo deploy rápido, isolamento e mitigação de vetores de ataque comuns.

### Roadmap: Integração com Backend

Embora este repositório foque na UI, a arquitetura do frontend já está preparada para o consumo de microsserviços. O escopo futuro prevê a integração com APIs conteinerizadas que serão desenvolvidas para o projeto usando tecnologias como (Golang / Python / Typescript). 

---
<div align="center">
  <b>Victor Kiss</b> • Software Engineer
</div>

import { Person, WithContext } from 'schema-dts';
import { knowledges } from './knowledges';

export const myInfoSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Victor Kiss',
  jobTitle: 'Software Engineer',
  url: 'https://mydomain.com.br',
  sameAs: [
    'https://github.com/victor-kiss',
    'https://www.linkedin.com/in/victor-kiss'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR'
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Casa Civil do Estado de São Paulo' 
  },
  knowsAbout: knowledges
};
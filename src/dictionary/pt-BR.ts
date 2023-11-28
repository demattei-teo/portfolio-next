import { DictionaryType } from '@/utils/general'

const PT_BR: DictionaryType = {
  home: {
    header: {
      logo: 'TDO',
      contentLinks: {
        contentLinkHome: 'Início',
        contentLinkProyects: 'Projectos',
        contentLinkContact: 'Contacto'
      }
    },
    hero: {
      title_h1: 'Olá, o meu nome é Teo',
      description: 'Sou um programador Frontend com 2 anos de experiência a trabalhar para a agência digital nubedi e para a start up No Country'
    },
    footer: {
      title_span: 'Quer trabalhar em conjunto?',
      description: 'Não hesite em contactar-nos para colaborações ou apenas para um olá amigável',
      email: 'dematteiteo@gmail.com'
    }
  },
  proyects: {
    mova: {
      srcImg: '/assets/mockups/mova.jpeg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Mova',
        description: 'Uma aplicação móvel onde se pode consultar os catálogos de filmes populares, filmes de grande sucesso, filmes futuros, séries e muito mais, este projeto foi feito como exemplo.',
        tecnologies: 'tecnologia: Expo - React Native - nativeWind - clsx - husky - TypeScript',
        githubUrlProyect: 'https://github.com/davidmedev222/mova'
      }
    },
    lawyer: {
      srcImg: '/assets/mockups/lawyer.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Lawyer',
        description: 'Landing page para um escritório de advogados, este projeto foi feito a título de exemplo. Trata-se de um site que procura captar a atenção de potenciais clientes, mostrando os serviços oferecidos pelo escritório, a sua história e valores.',
        tecnologies: 'tecnologia: Next.js - React-tailwind.CSS - TypeScript - clsx - husky',
        githubUrlProyect: 'https://github.com/davidmedev222/mova',
        LinkProyect: 'https://github.com/davidmedev222/mova'
      }
    },
    rodaroArchitects: {
      srcImg: '/assets/mockups/rodaroArquitectos.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Rodaro arquitectos',
        description: 'Landing page para um gabinete de arquitetura, este projeto foi realizado para um cliente. É uma página web que procura captar a atenção dos clientes, mostrando os serviços oferecidos.',
        tecnologies: 'tecnologia: HTML - CSS - JAVASCRIPT - SASS',
        LinkProyect: 'https://github.com/davidmedev222/mova'
      }
    },
    lotTodo: {
      srcImg: '/assets/mockups/lottodo-mock2.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Lot todo',
        description: 'The objective of the application is to provide potential users with tools to organize their daily activities through to-do lists divided into categories and with the possibility of viewing them on a daily, weekly and monthly basis.',
        tecnologies: 'tecnologia: Expo - React Native - nativeWind - clsx - husky - JavaScript',
        githubUrlProyect: 'https://github.com/davidmedev222/mova',
        LinkProyect: 'https://github.com/davidmedev222/mova'
      }
    },
    footer: {
      title_span: 'Quer trabalhar em conjunto?',
      description: 'Não hesite em contactar-nos para colaborações ou apenas para um olá amigável',
      email: 'dematteiteo@gmail.com'
    }
  }
}

export default PT_BR

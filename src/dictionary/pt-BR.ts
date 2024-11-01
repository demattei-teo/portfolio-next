import { DictionaryType } from '@/utils/general'

const PT_BR: DictionaryType = {
  home: {
    header: {
      logo: 'TDO',
      contentLinks: {
        contentLinkHome: 'Início',
        contentLinkProyects: 'Projetos',
        contentLinkContact: 'Contacto'
      }
    },
    hero: {
      title_h1: 'Olá, o meu nome é Teo',
      description:
        'Sou um desenvolvedor de software com 2 anos de experiência trabalhando para a ISSD e para a startup No Country.',
      contentButton: 'Contacte-Me',
      linkCV: 'https://drive.google.com/file/d/1QigTVsDJwECQ4-TOA4m7TzieBi_iVhN_/view?usp=drive_link'
    },
    reviews: [
      {
        name: 'David Mamani',
        description: 'Trabalhei em muitos projectos com o Teo, excelente desempenho.',
        hrefLinkedin: 'https://www.linkedin.com/in/davidmedev/',
        hrefGithub: 'https://github.com/davidmedev222',
        srcImage: '/assets/reviews-images/david.png'
      },
      {
        name: 'Nahuel Krowicki',
        description: 'Muito boa qualidade nos projectos realizados',
        hrefLinkedin: 'https://www.linkedin.com/in/nahuel-krowicki/',
        hrefGithub: 'https://github.com/nkrowicki',
        srcImage: '/assets/reviews-images/Nahuel.png'
      },
      {
        name: 'Dylan Ramirez',
        description: 'Muito simpáticos para trabalhar e dedicados ao projeto em questão.',
        hrefLinkedin: 'https://www.linkedin.com/in/dylanramirez20/',
        hrefGithub: 'https://github.com/DruckDeveloper',
        srcImage: '/assets/reviews-images/dylan.jpeg'
      }
    ],
    footer: {
      title_span: 'Quer trabalhar em conjunto?',
      description: 'Não hesite em contactar-nos para colaborações ou apenas para um olá amigável',
      email: 'dematteiteo@gmail.com',
      contentButton: 'Contacte-me',
      linkCV: 'https://drive.google.com/file/d/1QigTVsDJwECQ4-TOA4m7TzieBi_iVhN_/view?usp=drive_link'
    }
  },
  proyects: {
    mova: {
      srcImg: '/assets/mockups/mova.jpeg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Mova',
        description:
          'Uma aplicação móvel onde se pode consultar os catálogos de filmes populares, filmes de grande sucesso, filmes futuros, séries e muito mais, este projeto foi feito como exemplo.',
        tecnologies: 'tecnologias: Expo - React Native - nativeWind - clsx - husky - TypeScript',
        githubUrlProyect: 'https://github.com/davidmedev222/mova'
      }
    },
    lawyer: {
      srcImg: '/assets/mockups/lawyer.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Lawyer',
        description:
          'Landing page para um escritório de advogados, este projeto foi feito a título de exemplo. Trata-se de um site que procura captar a atenção de potenciais clientes, mostrando os serviços oferecidos pelo escritório, a sua história e valores.',
        tecnologies: 'tecnologias: Next.js - React-tailwind.CSS - TypeScript - clsx - husky',
        githubUrlProyect: 'https://github.com/demattei-teo/Lawyer',
        LinkProyect: 'https://lawyerdev.vercel.app/'
      }
    },
    rodaroArchitects: {
      srcImg: '/assets/mockups/rodaroArquitectos.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Rodaro arquitectos',
        description:
          'Landing page para um gabinete de arquitetura, este projeto foi realizado para um cliente. É uma página web que procura captar a atenção dos clientes, mostrando os serviços oferecidos.',
        tecnologies: 'tecnologias: HTML - CSS - JAVASCRIPT - SASS',
        LinkProyect: 'https://www.rodaroarquitectos.com.ar/index.html'
      }
    },
    lotTodo: {
      srcImg: '/assets/mockups/lottodo-mock2.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Lot todo',
        description:
          'O objetivo da aplicação é fornecer aos potenciais utilizadores ferramentas para organizar as suas actividades diárias através de listas de tarefas divididas em categorias e com a possibilidade de as visualizar numa base diária, semanal e mensal.',
        tecnologies: 'tecnologias: Expo - React Native - nativeWind - clsx - husky - JavaScript',
        githubUrlProyect: 'https://github.com/No-Country/C12-38-M-REACTNATIVE',
        LinkProyect: 'https://expo.dev/@florencia09/lot-todo?serviceType=classic&distribution=expo-go'
      }
    },
    nfthub: {
      srcImg: '/assets/mockups/NFTHUB_1.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'NFTHUB',
        description:
          'O objetivo da página de destino é atrair a atenção dos utilizadores para os serviços ou produtos oferecidos pela página de destino, apresentando um design atrativo, reativo e moderno.',
        tecnologies: 'Tecnologias: Next.js - React.js - clsx - TypeScript - NextAuth.js - tailwind.css',
        githubUrlProyect: 'https://github.com/demattei-teo/nfthub',
        LinkProyect: 'https://nfthub-mu.vercel.app/'
      }
    },
    teachit: {
      srcImg: '/assets/mockups/teachIT.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'TeachIT',
        description:
          'Landing page orientada para a educação dos utilizadores, este projeto apresenta uma landing page para a agência de educação (em construção...).',
        tecnologies: 'Tecnologias: Next.js - React.js - clsx - TypeScript - tailwind.css - Axios',
        githubUrlProyect: 'https://github.com/demattei-teo/teach-it',
        LinkProyect: 'https://teachit.vercel.app/'
      }
    },
    footer: {
      title_span: 'Quer trabalhar em conjunto?',
      description: 'Não hesite em contactar-nos para colaborações ou apenas para um olá amigável',
      email: 'dematteiteo@gmail.com',
      contentButton: 'Contacte-me',
      linkCV: 'https://drive.google.com/file/d/1QigTVsDJwECQ4-TOA4m7TzieBi_iVhN_/view?usp=drive_link'
    }
  }
}

export default PT_BR

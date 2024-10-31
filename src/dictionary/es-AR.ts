import { DictionaryType } from '@/utils/general'

const ES_AR: DictionaryType = {
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
      title_h1: 'Hola, me llamo Teo',
      description:
        'Soy un desarrollador de software con 2 años de experiencia trabajando para la empresa ISSD y el startup No Country.',
      contentButton: 'Contacteme',
      linkCV: 'https://drive.google.com/file/d/1QErRcOb2djsfMhLf9tfBCzfh8HfRs1lp/view?usp=sharing'
    },
    reviews: [
      {
        name: 'David Mamani',
        description: 'Trabaje en muchos proyectos con Teo, excelente desempeño',
        hrefLinkedin: 'https://www.linkedin.com/in/davidmedev/',
        hrefGithub: 'https://github.com/davidmedev222',
        srcImage: '/assets/reviews-images/david.png'
      },
      {
        name: 'Nahuel Krowicki',
        description: 'Muy buena calidad en los proyectos realizados',
        hrefLinkedin: 'https://www.linkedin.com/in/nahuel-krowicki/',
        hrefGithub: 'https://github.com/nkrowicki',
        srcImage: '/assets/reviews-images/Nahuel.png'
      },
      {
        name: 'Dylan Ramirez',
        description: 'Muy amigable al trabajar y dedicado con el proyecto a realizar.',
        hrefLinkedin: 'https://www.linkedin.com/in/dylanramirez20/',
        hrefGithub: 'https://github.com/DruckDeveloper',
        srcImage: '/assets/reviews-images/dylan.jpeg'
      }
    ],
    footer: {
      title_span: '¿Quieres que trabajemos juntos?',
      description:
        'No dude en ponerse en contacto con nosotros para colaborar o simplemente para saludarnos amistosamente.',
      email: 'dematteiteo@gmail.com',
      contentButton: 'Contactame',
      linkCV: 'https://drive.google.com/file/d/1QErRcOb2djsfMhLf9tfBCzfh8HfRs1lp/view?usp=sharing'
    }
  },
  proyects: {
    mova: {
      srcImg: '/assets/mockups/mova.jpeg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Mova',
        description:
          'Una aplicación móvil en la que se pueden consultar los catálogos de películas populares, películas más taquilleras, próximas películas, series y mucho más, este proyecto se realizó a modo de ejemplo.',
        tecnologies: 'Tecnologias: Expo - React Native - nativeWind - clsx - husky - TypeScript',
        githubUrlProyect: 'https://github.com/davidmedev222/mova'
      }
    },
    lawyer: {
      srcImg: '/assets/mockups/lawyer.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Lawyer',
        description:
          'Landing page para un bufete de abogados, este proyecto se realizó a modo de ejemplo. Se trata de una página web que busca captar la atención de clientes potenciales, mostrando los servicios que ofrece el bufete, su historia y sus valores.',
        tecnologies: 'Tecnologias: Next.js - React - tailwind.CSS - TypeScript - clsx - husky',
        githubUrlProyect: 'https://github.com/demattei-teo/Lawyer',
        LinkProyect: 'https://lawyerdev.vercel.app/'
      }
    },
    rodaroArchitects: {
      srcImg: '/assets/mockups/rodaroArquitectos.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Rodaro architects',
        description:
          'Landing page para un estudio de arquitectura, este proyecto fue realizado para un cliente. es una página web que busca captar la atención de los clientes, mostrando los servicios ofrecidos.',
        tecnologies: 'Tecnologias: HTML - CSS - JAVASCRIPT - SASS',
        LinkProyect: 'https://www.rodaroarquitectos.com.ar/index.html'
      }
    },
    lotTodo: {
      srcImg: '/assets/mockups/lottodo-mock2.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Lot todo',
        description:
          'El objetivo de la aplicación es proporcionar a los usuarios potenciales herramientas para organizar sus actividades diarias mediante listas de tareas divididas en categorías y con la posibilidad de visualizarlas diaria, semanal y mensualmente.',
        tecnologies: 'Tecnologias: Expo - React Native - nativeWind - clsx - husky - JavaScript',
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
          'El objetivo de la landing page es atraer la atencion de los usuarios sobre los servicios o productos que ofrece la misma, mostrando un diseño atractivo, responsivo y moderno.',
        tecnologies: 'Tecnologias: Next.js - React.js - clsx - TypeScript - NextAuth.js - tailwind.css',
        githubUrlProyect: 'https://github.com/demattei-teo/nfthub',
        LinkProyect: 'https://nfthub-mu.vercel.app/'
      }
    },
    teachit: {
      srcImg: '/assets/mockups/teachIT.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'NFTHUB',
        description:
          'Landing page orientada a la educación de los usuarios, este proyecto muestra una landing page para la agencia de educación (en construcción...).',
        tecnologies: 'Tecnologias: Next.js - React.js - clsx - TypeScript - tailwind.css - Axios',
        githubUrlProyect: 'https://github.com/demattei-teo/teach-it',
        LinkProyect: 'https://teachit.vercel.app/'
      }
    },
    footer: {
      title_span: '¿Quieres que trabajemos juntos?',
      description:
        'No dude en ponerse en contacto con nosotros para colaborar o simplemente para saludarnos amistosamente.',
      email: 'dematteiteo@gmail.com',
      contentButton: 'Contactame',
      linkCV: 'https://drive.google.com/file/d/1QErRcOb2djsfMhLf9tfBCzfh8HfRs1lp/view?usp=sharing'
    }
  }
}

export default ES_AR

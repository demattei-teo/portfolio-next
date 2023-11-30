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
      description: 'Soy un desarrollador Frontend con 2 años de experiencia trabajando para la agencia digital nubedi y la start up No Country'
    },
    footer: {
      title_span: '¿Quieres que trabajemos juntos?',
      description: 'No dude en ponerse en contacto con nosotros para colaborar o simplemente para saludarnos amistosamente.',
      email: 'dematteiteo@gmail.com'
    }
  },
  proyects: {
    mova: {
      srcImg: '/assets/mockups/mova.jpeg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Mova',
        description: 'Una aplicación móvil en la que se pueden consultar los catálogos de películas populares, películas más taquilleras, próximas películas, series y mucho más, este proyecto se realizó a modo de ejemplo.',
        tecnologies: 'Tecnologias: Expo - React Native - nativeWind - clsx - husky - TypeScript',
        githubUrlProyect: 'https://github.com/davidmedev222/mova'
      }
    },
    lawyer: {
      srcImg: '/assets/mockups/lawyer.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Lawyer',
        description: 'Landing page para un bufete de abogados, este proyecto se realizó a modo de ejemplo. Se trata de una página web que busca captar la atención de clientes potenciales, mostrando los servicios que ofrece el bufete, su historia y sus valores.',
        tecnologies: 'Tecnologias: Next.js - React-tailwind.CSS - TypeScript - clsx - husky',
        githubUrlProyect: 'https://github.com/demattei-teo/Lawyer',
        LinkProyect: 'https://github.com/demattei-teo/Lawyer'
      }
    },
    rodaroArchitects: {
      srcImg: '/assets/mockups/rodaroArquitectos.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Rodaro architects',
        description: 'Landing page para un estudio de arquitectura, este proyecto fue realizado para un cliente. es una página web que busca captar la atención de los clientes, mostrando los servicios ofrecidos.',
        tecnologies: 'Tecnologias: HTML - CSS - JAVASCRIPT - SASS',
        LinkProyect: 'https://www.rodaroarquitectos.com.ar/index.html'
      }
    },
    lotTodo: {
      srcImg: '/assets/mockups/lottodo-mock2.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Lot todo',
        description: 'El objetivo de la aplicación es proporcionar a los usuarios potenciales herramientas para organizar sus actividades diarias mediante listas de tareas divididas en categorías y con la posibilidad de visualizarlas diaria, semanal y mensualmente.',
        tecnologies: 'Tecnologias: Expo - React Native - nativeWind - clsx - husky - JavaScript',
        githubUrlProyect: 'https://github.com/No-Country/C12-38-M-REACTNATIVE',
        LinkProyect: 'https://expo.dev/@florencia09/lot-todo?serviceType=classic&distribution=expo-go'
      }
    },
    footer: {
      title_span: '¿Quieres que trabajemos juntos?',
      description: 'No dude en ponerse en contacto con nosotros para colaborar o simplemente para saludarnos amistosamente.',
      email: 'dematteiteo@gmail.com'
    }
  }
}

export default ES_AR

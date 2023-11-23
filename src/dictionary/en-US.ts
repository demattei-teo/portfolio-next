import { DictionaryType } from '@/utils/general'

const EN_US: DictionaryType = {
  home: {
    header: {
      logo: 'TDO',
      contentLinks: {
        contentLinkHome: 'Home',
        contentLinkProyects: 'Proyects',
        contentLinkContact: 'Contact'
      }
    },
    hero: {
      title_h1: 'Hi, my name is Teo',
      description: 'I am a Frontend developer with 2 years of experience working for the digital agency nubedi and the start up No Country,'
    },
    footer: {
      title_span: 'Want to work together?',
      description: 'Feel free to reach out for collaborations or just a friendly hello',
      email: 'dematteiteo@gmail.com'
    }
  },
  proyects: {
    mova: {
      srcImg: '/assets/mockups/mova.jpeg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Mova',
        description: 'A mobile application where you can consult the catalogs of popular movies, blockbuster movies, upcoming movies, series and much more, this project was made as an example.',
        tecnologies: 'technology: Expo - React Native - nativeWind - clsx - husky - TypeScript',
        githubUrlProyect: 'https://github.com/davidmedev222/mova'
      }
    },
    lawyer: {
      srcImg: '/assets/mockups/lawyer.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Lawyer',
        description: 'Landing page for a law firm, this project was done as an example. It is a website that seeks to capture the attention of potential customers, showing the services offered by the firm, its history and values.',
        tecnologies: 'technology: Next.js - React-tailwind.CSS - TypeScript - clsx - husky',
        githubUrlProyect: 'https://github.com/davidmedev222/mova',
        LinkProyect: 'https://github.com/davidmedev222/mova'
      }
    },
    rodaroArchitects: {
      srcImg: '/assets/mockups/rodaroArquitectos.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Rodaro architects',
        description: 'Landing page for an architectural firm, this project was made for a client. it is a web page that seeks to capture the attention of customers, showing the services offered.',
        tecnologies: 'technology: HTML - CSS - JAVASCRIPT - SASS',
        LinkProyect: 'https://github.com/davidmedev222/mova'
      }
    },
    lotTodo: {
      srcImg: '/assets/mockups/lottodo-mock2.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Lot todo',
        description: 'The objective of the application is to provide potential users with tools to organize their daily activities through to-do lists divided into categories and with the possibility of viewing them on a daily, weekly and monthly basis.',
        tecnologies: 'technology: Expo - React Native - nativeWind - clsx - husky - JavaScript',
        githubUrlProyect: 'https://github.com/davidmedev222/mova',
        LinkProyect: 'https://github.com/davidmedev222/mova'
      }
    },
    footer: {
      title_span: 'Want to work together?',
      description: 'Feel free to reach out for collaborations or just a friendly hello',
      email: 'dematteiteo@gmail.com'
    }
  }
}

export default EN_US

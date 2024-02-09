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
      description:
        'I am a Frontend developer with 2 years of experience working for the digital agency nubedi and the start up No Country,',
      contentButton: 'Contact Me',
      linkCV: 'https://drive.google.com/file/d/1jzb5Lqk93m4mcxVlwNzrLcJs3LEd-NcB/view?usp=drive_link'
    },
    reviews: [
      {
        name: 'David Mamani',
        description: 'I`ve worked on many projects with Teo, excellent performance.',
        hrefLinkedin: 'https://www.linkedin.com/in/davidmedev/',
        hrefGithub: 'https://github.com/davidmedev222',
        srcImage: '/assets/reviews-images/david.png'
      },
      {
        name: 'Nahuel Krowicki',
        description: 'Very good quality projects',
        hrefLinkedin: 'https://www.linkedin.com/in/nahuel-krowicki/',
        hrefGithub: 'https://github.com/nkrowicki',
        srcImage: '/assets/reviews-images/Nahuel.png'
      },
      {
        name: 'Dylan Ramirez',
        description: 'Very friendly to work and dedicated to the project in question.',
        hrefLinkedin: 'https://www.linkedin.com/in/dylanramirez20/',
        hrefGithub: 'https://github.com/DruckDeveloper',
        srcImage: '/assets/reviews-images/dylan.jpeg'
      }
    ],
    footer: {
      title_span: 'Want to work together?',
      description: 'Feel free to reach out for collaborations or just a friendly hello',
      email: 'dematteiteo@gmail.com',
      contentButton: 'Contact Me',
      linkCV: 'https://drive.google.com/file/d/1jzb5Lqk93m4mcxVlwNzrLcJs3LEd-NcB/view?usp=drive_link'
    }
  },
  proyects: {
    mova: {
      srcImg: '/assets/mockups/mova.jpeg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Mova',
        description:
          'A mobile application where you can consult the catalogs of popular movies, blockbuster movies, upcoming movies, series and much more, this project was made as an example.',
        tecnologies: 'Technology: Expo - React Native - nativeWind - clsx - husky - TypeScript',
        githubUrlProyect: 'https://github.com/davidmedev222/mova'
      }
    },
    lawyer: {
      srcImg: '/assets/mockups/lawyer.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Lawyer',
        description:
          'Landing page for a law firm, this project was done as an example. It is a website that seeks to capture the attention of potential customers, showing the services offered by the firm, its history and values.',
        tecnologies: 'Technologies: Next.js - React-tailwind.CSS - TypeScript - clsx - husky',
        githubUrlProyect: 'https://github.com/demattei-teo/Lawyer',
        LinkProyect: 'https://github.com/demattei-teo/Lawyer'
      }
    },
    rodaroArchitects: {
      srcImg: '/assets/mockups/rodaroArquitectos.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Rodaro architects',
        description:
          'Landing page for an architectural firm, this project was made for a client. it is a web page that seeks to capture the attention of customers, showing the services offered.',
        tecnologies: 'Technologies: HTML - CSS - JAVASCRIPT - SASS',
        LinkProyect: 'https://www.rodaroarquitectos.com.ar/index.html'
      }
    },
    lotTodo: {
      srcImg: '/assets/mockups/lottodo-mock2.jpg',
      proyectCard: {
        mode: 'proyect',
        title_h1: 'Lot todo',
        description:
          'The objective of the application is to provide potential users with tools to organize their daily activities through to-do lists divided into categories and with the possibility of viewing them on a daily, weekly and monthly basis.',
        tecnologies: 'Technologies: Expo - React Native - nativeWind - clsx - husky - JavaScript',
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
          'The objetive of the landing page is to attract users` attention to the services or products offered by the landing page, presenting an attractive, responsive and modern design.',
        tecnologies: 'Technologies: Next.js - React.js - clsx - TypeScript - NextAuth.js - tailwind.css',
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
          'Landing page oriented to the education of users, this project shows a landing page for the education agency (in construction...).',
        tecnologies: 'Tecnologias: Next.js - React.js - clsx - TypeScript - tailwind.css - Axios',
        githubUrlProyect: 'https://github.com/demattei-teo/teach-it',
        LinkProyect: 'https://teachit.vercel.app/'
      }
    },
    footer: {
      title_span: 'Want to work together?',
      description: 'Feel free to reach out for collaborations or just a friendly hello',
      email: 'dematteiteo@gmail.com',
      contentButton: 'Contact Me',
      linkCV: 'https://drive.google.com/file/d/1jzb5Lqk93m4mcxVlwNzrLcJs3LEd-NcB/view?usp=drive_link'
    }
  }
}

export default EN_US

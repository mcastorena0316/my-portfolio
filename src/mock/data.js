import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Meli Castorena's Portfolio",
  lang: 'en',
  description: "Meli Castorena's Portfolio",
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Melissa Castorena',
  subtitle: "I'm a Full Stack Developer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  paragraphOne:
    'My name is Melissa and I’m a Mexican full-stack developer who in her past life was an Industrial Engineer. Some of my tech skills are HTML5, CSS3, Databases, Ruby, Ruby On Rails,Javascript, React and Redux. ',
  paragraphTwo:
    ' When I’m not coding, I enjoy: cooking for others (usually my husband), play around with Benito and Lucho (my cats and bosses), and spend more time outdoors as possible.',
  paragraphThree:
    "Below you can see the result of my +1300 hours of work I’ve been doing for the last months. Some of them were made working on pair programming, an amazing experience that helped me interact with people from all over the world. Feel free to give them a look. I'm always available to have a good conversation, so don't be shy to contact me by mail or twitter.",
  resume: 'https://resume.creddle.io/resume/7e3mp9wmmwy',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'spacex.png',
    title: 'SpaceX Launch Missions',
    info:
      'The object of this project was to build with React and Redux, a catalog that contains a browsable list of items, these can be filtered and also, can access the details of each one of them.',
    info2: 'This catalog includes information about the launches executed by the company SpaceX.',
    url: 'https://react-redux-spacex.herokuapp.com/',
    repo: 'https://github.com/mcastorena0316/react-redux-capstone',
    tec1: 'React',
    tec2: 'Redux',
    tec3: 'Jest & Enzyme',
    tec4: 'Heroku',
  },
  {
    id: nanoid(),
    img: 'bookstore.png',
    title: 'Bookstore CMS',
    info:
      'Front-end application built with React & Redux that helps organize and manage a bookstore. ',
    info2:
      'Each book has its information including title, name, id, category, and % of the books that have been read. The user can filter add and erase a book and also filter them by category,',
    url: 'https://bookstorecms.herokuapp.com/',
    repo: 'https://github.com/mcastorena0316/Bookstore_CMS',
    tec1: 'React',
    tec2: 'Redux',
    tec3: 'Heroku',
  },
  {
    id: nanoid(),
    img: 'falsebook.png',
    title: 'FACEBOOK-CLONE',
    info:
      'In this project, we were requested to build a Facebook-like social network application including some of the core features of this social media: users, profiles, friendships, posts, news-feed, and likes.',
    info2: '',
    url: 'https://young-fortress-61632.herokuapp.com/',
    repo: 'https://github.com/mcastorena0316/facebook-clone',
    tec1: 'Ruby on Rails',
    tec2: 'Capybara',
    tec3: 'PostgreSQL',
    tec4: 'Omniauth',
  },
  {
    id: nanoid(),
    img: 'sampleapp2.png',
    title: 'SAMPLE TWITTER',
    info: 'This project consists of a sample twitter-like applicatioN',
    info2:
      'It includes the next features: users sign in with authentication, log in with validation, profiles, followers and following, micro-posts with images, among others.',
    url: 'https://pacific-plateau-91098.herokuapp.com/',
    repo: 'https://github.com/mcastorena0316/sample_app',
    tec1: 'Ruby on Rails',
    tec2: 'SaaS',
    tec3: 'AWS',
  },
  {
    id: nanoid(),
    img: 'game2.png',
    title: 'Shooter Game: CatGun',
    info:
      'The objective of this project was to design and build a platform game like the one in Space Shooter Game using Phaser and Javascript among other technologies.',
    info2:
      "This game is inspired in my cat 'Benito' and the villains include one of his worst enemies: dogs, snakes (and reptiles in general), and the representation of my husband who is always trying to hug him (which he doesn't like at all).",
    url: 'https://cat-gun.netlify.app/',
    repo: 'https://github.com/mcastorena0316/Javascript-Capstone',
    tec1: 'Javascript',
    tec2: 'Phaser',
    tec3: 'Jest',
    tec4: 'Netlify',
  },
  {
    id: nanoid(),
    img: 'illnest2.png',
    title: 'illnest',
    info:
      'The objective of this project was to create a mobile tracking App in which a user is presented with a list of things to be measured. For the Front End, I used React and Ruby on Rails for the Back-End API',
    info2:
      'On illnest, you can track a specific illness you have, whether is chronic or is a recent affliction, it can be measure here.',
    url: 'https://illnest.netlify.app/',
    repo: 'https://github.com/mcastorena0316/final-capstone',
    tec1: 'React-Redux',
    tec2: 'Ruby on Rails',
    tec3: 'PostgreSQL',
    tec4: 'Rspec',
  },
];

// // ARTICLE DATA
export const articleData = {
  title1: 'Hacerknoon-The Definitive Command Cheat Sheet for Rails Beginners',
  title2: 'Hackernoon-Understanding (And Making Your Life Easier) With Bootstrap',
  title3: 'Hackernoon-Beginners Guider To React Router',
  url1: 'https://hackernoon.com/the-definitive-command-cheat-sheet-for-rails-beginners-2uli3yb8',
  url2: 'https://hackernoon.com/understanding-and-making-your-life-easier-with-bootstrap-nnr2gpb',
  url3: 'https://hackernoon.com/beginners-guider-to-react-router-dw1j3uuq',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/melicastorena16',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto: mcastorena0316@gmail.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/melissa-castorena/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mcastorena0316',
    },
  ],
};

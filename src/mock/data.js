import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Meli Castorena's Portfolio",
  lang: 'en',
  description: "Meli Castorena's Portfolio",
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  paragraphOne:
    'My name is Melissa and I’m a Mexican full-stack developer who in her past life was an Industrial Engineer. Some of my tech skills are HTML5, CSS3, Databases, Ruby, Ruby On Rails,Javascript, React and Redux. ',
  paragraphTwo:
    ' When I’m not coding, I enjoy: cooking for others (usually my husband), play around with Benito and Lucho (my cats and bosses), and spend more time outdoors as possible.',
  paragraphThree:
    "Below you can see the result of my +1300 hours of work I’ve been doing for the last months. Some of them were made working on pair programming, an amazing experience that helped me interact with people from all over the world. Feel free to give them a look. I'm always available to have a good conversation, so don't be shy to contact me by mail or twitter.",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/mcastorena0316', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/mcastorena0316', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/mcastorena0316', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
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

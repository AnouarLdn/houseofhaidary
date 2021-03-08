import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'House of Haidary', // e.g: 'Name | Developer'
  lang: 'en, fr', // e.g: en, es, fr, jp
  description: 'We are a creative House', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'House of Haidary',
  subtitle: 'A creative house',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Anouar_Haidary_WebDeveloper.png',
    title: 'Anouar Haidary Portfolio',
    info: `This website showcases Anouar Haidary's portfolio. As a Javascript Developer, the projects indicates a different level of complexity.`,
    info2: '',
    url: 'https://houseofhaidary.netlify.app/',
    repo: 'https://github.com/AnouarLdn/resume', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jillpoole.png',
    title: 'Jill Poole Nature Art',
    info: 'Jill Poole is a British artist who has asked us to move from a static website to an E-Commerce platform. We have also been able to assist her by photographing and styling her artwork for her brand new online store.',
    info2: '',
    url: 'https://www.jillpoole.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'houseofhaidary@gmail.com',
};

// FOOTER DATA
// export const footerData = {
//   networks: [
//     {
//       id: nanoid(),
//       name: 'twitter',
//       url: '',
//     },
//     {
//       id: nanoid(),
//       name: 'codepen',
//       url: '',
//     },
//     {
//       id: nanoid(),
//       name: 'linkedin',
//       url: '',
//     },
//     {
//       id: nanoid(),
//       name: 'github',
//       url: '',
//     },
//   ],
// };

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

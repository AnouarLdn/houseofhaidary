import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'House of Haidary', // e.g: 'Name | Developer'
  lang: 'en, fr', // e.g: en, es, fr, jp
  description: 'We are a creative House', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'House of Haidary',
  name: 'House of Haidary',
  subtitle: 'A creative house',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `50 milliseconds is the time a visitor takes to form their first impression on a website. Your website must capture the attention of visitors as soon as they arrive. Communicating a clear message is a key element in your digital strategy towards success.`,
  paragraphTwo: `House of Haidary is a Franco-British duo, passionate about technology, art and design. We want your website to stand out from the crowd.`,
  paragraphThree: `Knowing your vision is essential for us so we can create a winning design tailored to your needs. Our mission is to help you develop your digital presence.`,
  paragraphFour: `Responsive Web Design`,
  paragraphFive: `E-Commerce Web Design`,
  paragraphSix: `"Click and Collect" Web platform`,
  paragraphSeven: `Mobile App Design`,
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
    url: 'https://resume.houseofhaidary.com/',
    repo: '', // if no repo, the button will not show up
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
  {
    id: nanoid(),
    img: 'Zegny_landingPage.png',
    title: 'Zegny',
    info: 'This is the landing page for a future Mobile Application',
    info2: '',
    url: 'https://zegny.houseofhaidary.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'weare@houseofhaidary.com',
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

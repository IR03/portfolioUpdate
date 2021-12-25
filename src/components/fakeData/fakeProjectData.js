import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
const fakeProjectData = [
  {
    id: 1,
    img: 'https://i.ibb.co/gRWwfwm/pora-Lekha.png',
    url: 'https://elearningproject.netlify.app/',
    client: ' https://drive.google.com/file/d/1jy5yMAUPJtUIjzp82YTUTqK2742T6UTn/view?usp=sharing',
    name: 'Poralekha Online',
    details:
      'A single page web app for Software Agency Service with Admin dashboard. Authenticated user can order for a service and check his/her service and can give reviews.',
    git: faGithubSquare,
    live: faExternalLinkAlt,
    tools: [
      { name: 'JavaScript' },
      { name: 'Bootstrap5' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Netlify Hosting' }
    ],
  },
  {
    id: 2,
    img: 'https://i.ibb.co/ryyJGPb/bcolbd.png',
    url: 'https://bcolbd.netlify.app/',
    client: 'https://github.com/IR03/bcolbd.git',
    name: 'BCOLBD 2022',
    details:
      'Blockchain Olympiad Bangladesh 2022.',
    git: faGithubSquare,
    live: faExternalLinkAlt,
    tools: [
      { name: 'JavaScript' },
      { name: 'Bootstrap' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Netlify Hosting' }
    ],
  },
  {
    id: 3,
    img: 'https://i.ibb.co/WywNyTK/digi-E.png',
    url: 'https://digie-ir.web.app/',
    name: 'Digi.E',
    client:
      'https://github.com/IR03/digi.E-client.',
    details:
      'A dynamic secure website where user can login and order product which is saved in a database. And admin can handle the product & users order by delete & update option.',
    git: faGithubSquare,
    live: faExternalLinkAlt,
    tools: [
      { name: 'React' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
      { name: 'Node' },
      { name: 'ReactBootstrap' },
    ],
  },
  {
    id: 4,
    img: 'https://i.ibb.co/CVRmC68/tram-Ticket.png',
    url: 'https://tram-ticket.web.app/',
    client: 'https://github.com/IR03/tram-ticket',
    name: 'Tram Ticket',
    details:
      'Website for booking tickets online. If user click on the buy button, user will be taken to the login page for Sign up or Sign in to view the destination page. Then user must be Sign up and Login to view the destination page. After user successfully Sign up or Sign in to the website, the Destination page will unlock for user. In the Destination page, there has a Google Map and input field for search for user destination.',
    git: faGithubSquare,
    live: faExternalLinkAlt,
    tools: [
      { name: 'React' },
      { name: 'Firebase' },
      { name: 'Bootstrap' },
      { name: 'CSS' },

    ],
  },
];

export default fakeProjectData;

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
const fakeProjectData = [
  {
    id: 1,
    img: 'https://i.imgur.com/cFEIGmo.png',
    url: 'https://hashtechitsolutionbd.web.app/',
    client: 'https://github.com/marufpbt/hashtech-client',
    name: 'Hastech IT Solution BD',
    details:
      'A single page web app for Software Agency Service with Admin dashboard. Authenticated user can order for a service and check his/her service and can give reviews.',
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
    id: 2,
    img: 'https://i.imgur.com/uELiu45.png',
    url: 'https://doctors-portal-marufpbt.web.app/',
    client: 'https://github.com/marufpbt/doctors-portal-client',
    name: 'Doctors Portal',
    details:
      'A single page web app for Doctors clinic to maintain appointment and manage appointment and patient as well as their prescription status in online. ',
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
    id: 3,
    img: 'https://i.imgur.com/epcgTzi.png',
    url: 'https://burj-al-arab-59182.web.app/',
    name: 'Burj Al Arab',
    client:
      'https://github.com/marufpbt/burj-al-arab',
    details:
      'A Single page web app with dashboard where people can pick the date and time and fix room booking.',
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
    img: 'https://i.imgur.com/zvtRWmy.png',
    url: 'https://marufpbt.github.io/panda-ecommerce-bootstrap/',
    client: 'https://github.com/marufpbt/shopping-cart',
    name: 'Panda Ecommerce',
    details:
      'A single page web app for E-commerce business and Manage order with stripe payment gateway and Authentication with firebase ',
    git: faGithubSquare,
    live: faExternalLinkAlt,
    tools: [
      { name: 'Bootstrap' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Github Hosting' }
    ],
  },
];

export default fakeProjectData;

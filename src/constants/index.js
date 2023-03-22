import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  //swift,
  //python,
  //mysql,
  //tensorflow,
  tripguide,
  threejs,
} from "../assets";
import swift from "../assets/tech/swift.png";
import mysql from "../assets/tech/mysql.png";
import python from "../assets/tech/python.png";
import tensorflow from "../assets/tech/tensorflow.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "IOS developer",
    icon: mobile,
  },
  {
    title: "Tensorflow",
    icon: web,
  },
  {
    title: "Data Structures",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "UIKit changes on CMS",
    company_name: "Crux-BITS Pilani",
    icon: carrent,
    iconBg: "#383E56",
    date: "January 2023 - present",
    points: [
      "#Issue125 - ability to turn off/on push notifications through a custom UISwitch by registering and registering moodle service",
      "#Issue123 - updated UI for module and announcement cells while searching in dark mode ",
      "#Issue121 - improvement of module and announcement detail UIView specifically within DiscussionView",
      "#Issue120 - display an emptyView UI when no announcements published which was blank earlier",
    ],
  },
  {
    title: "Custom-BITS Impartus",
    company_name: "Video-Player",
    icon: jobit,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Dec 2022",
    points: [
      "Made a video player app using AVKit and SwiftUI",
      "Fetches inputs from an REST API",
      "Implementing better user experience",
      
    ],
  },
  // {
  //   title: "IOS Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CMS-IOS",
    description:
      "An app that uses moodle , manages courses and interacts between instructor and students",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "Alamofire",
        color: "green-text-gradient",
      },
      {
        name: "UIKit",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/TanmayDev16/CMS-iOS-Tanmay/tree/main",
  },
  {
    name: "Custom-Impartus",
    description:
      "A video player app that creates a unique user experience",
    tags: [
      {
        name: "SwiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Xcode",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/TanmayDev16/Custom_BITS_Impartus-v2-",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };

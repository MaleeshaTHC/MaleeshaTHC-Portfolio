// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#1ad7c0, #ff9b11, #4484ce, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Chathumini",
  middleName: "",
  lastName: "Maleesha",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/THCMaleesha",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/chathumini-maleesha-39a016215/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/chathumini.jpeg"),
  imageSize: 450,
  message:
    "My name is Chathumini Maleesha. I’m an undergraduate in BSc.(Hons) in Information Technology at University of Sri Jayewardenepura, Sri Lanka. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of UI/UX designing. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1c9-cl2b3BgIF9h21seXZWNERr9aLQoHn/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "THCMaleesha", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const memberships = {
  show: true,
  heading: "Memberships",
  message:
    "A leader should be visionary and have more foresight than an employee. The very essence of leadership is that you have to have vision. You can't blow an uncertain trumpet. Leadership and learning are indispensable to each other. A good objective of leadership is to help those who are doing poorly to do well and to help those who are doing well to do even better.",
  images: [
    { 
      img: require("../assets/img/leo.jpeg"), 
      label: "Leo Club of District 306 C2 University of Sri Jayewardenepura", 
      paragraph: "Leo Club of District 306 C2 University of Sri Jayewardenepura sponsored by Lions Club of Colombo Chariot is established in the year 2019 to encourage youths to develop leadership qualities by participating in social activities." 
    },
    { 
      img: require("../assets/img/vikings.jpg"), 
      label: "Jpura Vikings", 
      paragraph: "We are the Vikings club of university of Sri Jayewardenepura is the Sri Lanka’s first social entrepreneurship development club, founded by young entrepreneur Mr. Dulaj Udayanga in 2017, giving expectations for young people who were waiting to start their own businesses." 
    },
  ],
  imageSize: {
    width:"400",
    height:"400"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "Java", value: 75 },
    { name: "SQL", value: 70 },
    { name: "Data Structures", value: 65 },
    { name: "JavaScript", value: 48 },
    { name: "React", value: 55 },
    { name: "HTML/CSS", value: 85 },
    { name: "Adobe Collection", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 50 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 80 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Front-End Development Engineering or UI/UX Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to contact me at",
  email: "thcmaleesha@gmail.com",
  phone : "+9470 514 9750"
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Information & Communication Technology Technician (Intern)',// Here Add Company Name
      companylogo: " ",
      date: 'July 2019 – Feb 2020',
    },
  ]
}

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      role: 'University of Sri Jayewardenepura',// Here Add Company Name
      companylogo: require('../assets/img/usjp.png'),
      date: 'March 2020 – Present',
    },
    {
      role: 'Vocational Training Authority of Sri Lanka',// Here Add Company Name
      companylogo: require('../assets/img/vta.png'),
      date: 'Jan 2019 – Jan 2020',
    },
    {
      role: 'MR/Deniyaya Central College',// Here Add Company Name
      companylogo: require('../assets/img/dcc.png'),
      date: 'Jan 2005 – Aug 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, memberships, getInTouch, experiences, education };

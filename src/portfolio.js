
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hey, I'm Lucas !",
  subTitle: "Robotics engineer, software nerd and AI enthusiast !",
  resumeLink: "https://drive.google.com/file/d/1hIQYprXoW6sIEXM571SL_7ZZXwIIYWZc/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/lucasguenebaud",
  linkedin: "https://www.linkedin.com/in/lucas-guenebaud-51227711b/",
  gmail: "lucas.guenebaud@gmail.com",
  facebook: "https://www.facebook.com/lucas.guenebaud",
  medium: "https://medium.com/@lucas.guenebaud",
  gitlab: "https://gitlabee.dt.renault.com/",
  stackoverflow: "https://stackoverflow.com/users/12452421/lucasguenebaud",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "I'm crazy about machine learning and data science, and how it can power technologies !",
  skills: [
    emoji("⚡ TODO"),
    emoji("⚡ TODO"),
    emoji("⚡ TODO"),
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "ROS",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "Pytorch",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "fab fa-dev"
    },
    {
      skillName: "SolidWorks",
      fontAwesomeClassname: "fab fa-whmcs"
    },
        {
      skillName: "Embedded",
      fontAwesomeClassname: "fab fa-usb"
    },
    {
      skillName: "Microcontroller",
      fontAwesomeClassname: "fab fa-raspberry-pi"
    },
    {
      skillName: "Spark",
      fontAwesomeClassname: "fab fa-stack-overflow"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Sorbonne University",
      logo: require("./assets/images/sorbonne.png"),
      subHeader: "Master of Robotics and intelligent systems",
      duration: "May 2018 - Nov 2018",
      desc: "Pierre and Marie Curie Science University, ISIR lab. Specialty program",
      descBullets: [
        "Perception",
        "Computer vision",
        "Problem-solving algorithms",
        "Path optimisation",
      ]
    },
    {
      schoolName: "Sorbonne University Polytechnique School",
      logo: require("./assets/images/polytech.png"),
      subHeader: "Engineering diploma in Robotics",
      duration: "Sep 2013 - Jul 2017",
      desc: "Robotics engineering program. Ranked top 10%",
      descBullets: [
        "Mechatronics",
        "Cybernetics",
        "Software engineering",
        "Embedded systems",
      ]
    },
    {
      schoolName: "UQAC",
      logo: require("./assets/images/quebec.png"),
      subHeader: "Master of software engineering",
      duration: "Sep 2016 - Jul 2017",
      desc: "International engineering program",
      descBullets: [
        "Neural networks",
        "Human-robot interactions",
        "Motor control",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data science & engineering",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Intelligent systems & AI",
      progressPercentage: "90%"
    },
    {
      Stack: "Mechatronics",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Engineer",
      company: "Renault",
      companylogo: require("./assets/images/renault.png"),
      date: "Aug 2019 – Present",
      desc: "data science & validation for autonomous driving (AD)",
      descBullets: [
        "Autonomous vehicle data management, indexation & processing",
        "Dev of validation tools for AD fleet data",
        "Batch simulation of experimental embedded software",
      ]
    },
    {
      role: "Simulation Engineer",
      company: "Renault",
      companylogo: require("./assets/images/renault.png"),
      date: "Jun 2018 – Jul 2019",
      desc: "advanced driver assistance systems (ADAS)",
      descBullets: [
        "Dev algorithms for auto-parking systems",
        "Simulation of level 2 & 3 ADAS functions"
      ]
    },
    {
      role: "Mechatronics Intern",
      company: "X-Polytechnique Startup",
      companylogo: require("./assets/images/xnov.jpg"),
      date: "Sep 2017 – Apr 2018",
      desc: "developing a 4-legged delivery robot",
      descBullets: [
        "low-level mechatronics, embedded motor control",
        "mechanical modelisation, equilibrium, torque detection",
        "simultaneous location and mapping (SLAM), path planning (ROS)",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "lucasguenebaud", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "Some personal projects I'm working on !",
  projects: [
    // {
    //   image: require("./assets/images/saayaHealthLogo.webp"),
    //   link: "http://saayahealth.com/"
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   link: "http://nextu.se/"
    // }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: "Achievements",
  subtitle: "Things I can be proud of!",

  achievementsCards: [
    {
      title: "E-sport - Team Fortress 2",
      subtitle: "Lead the 2013 french national Team-Fortress 2 to the second step of the international podium !",
      image: require("./assets/images/tf2.png"),
      footerLink: [
        { name: "What's TF2", url: "https://www.teamfortress.com/" },
        { name: "Hall of Fame", url: "https://etf2l.org/etf2l/archives/219/" }
      ]
    },
    {
      title: "Computer vision, deep learning",
      subtitle: "Trained my own deep-vision algorithm on public datasets to make live image segmentation",
      image: require("./assets/images/view_nn.png"),
      footerLink: [
        { name: "What I'm talking about", url: "https://medium.com/@arthur_ouaknine/review-of-deep-learning-algorithms-for-image-semantic-segmentation-509a600f7b57" },
      ]
    },
    {
      title: "Data Scientist volunteer, AP-HP",
      subtitle: "Helped with code review and graphs for discussion and visualisation during the COVID-19 pandemic",
      image: require("./assets/images/aphp.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1sIPH-xGHQXQrkrTPTr8aUTU1p_TzsWAI/view?usp=sharing" },
        { name: "Some graphs", url: "TODO COVID repo" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Articles",
  subtitle: "I love to write on what I'm passionate about",

  blogs: [
    {
      url: "https://wikipedia.com",
      title: "This a title",
      description: "This is a text"
    },
    {
      url: "https://medium.com/@lucas.guenebaud",
      title: "Medium article",
      description: "SQUALALAAAAA, nous sommes partis !"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "Trainings",
  subtitle: emoji("Sharing my limited knowledge with others"),

  talks: [
    {
      title: "Python for smart vehicles",
      subtitle: "Learn how you can use Python to power-up your smart vehicle project",
      slides_url: "https://github.com/lucasguenebaud/ADADASpy",
      event_url: "https://github.com/lucasguenebaud/ADADASpy"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---lucas-guenebaud-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+33",
  email_address: "lucas.guenebaud@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};

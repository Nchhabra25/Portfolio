//This is ypur personal information used all throughout the wesite in different sections, update this with your personal detais to see them in the portfolio

export const Info = {
    name: "Niharika Chhabra",
    roles: [   //enter the roles you're applying for here
      "Software Developer",
      "Web Developer",
      "Student",
      "Frontend Developer",
    ],
    description:
      "Hello! I'm Niharika. I'm a frontend developer and a student at Delhi University. I'm currently on the road to learning Full stack Development. I'm dedicated to creating websites that are both functional and enchanting, offering users seamless interactions and engagement. When I'm not coding, you'll find me immersed in books, exploring new literary worlds, or savoring delicious food. ",
    resume:"https://drive.google.com/file/d/1yzEMkdObY9iV2vrTvRpmA4lF7NmZnymc/view?usp=drive_link",
  };
  export const links=[
    //update these links so that they lead to your social profiles, and remove the objects for the links you don't want to share from the array!
    //you can get these the value for icon from ion-icons (https://ionic.io/ionicons), pls only use ion icons as the element in the hero component is an ion icon😅
    //when you click on a logo in ion icon you might see something like this <ion-icon name="logo-facebook">, you just have to copy the text in the name attribute and paste it here!
  {
    link: "https://www.linkedin.com/in/niharikachhabra25/",
    icon: 'logo-linkedin',
    label: 'Linkedin'
  },
  // {
  //   link: "https://twitter.com",
  //   icon: "logo-twitter",
  //   label: 'twitter'
  // },
  {
    link: "https://github.com/Nchhabra25",
    icon: "logo-github",
    label: 'github'
  },
  // {
  //   link: "https://facebook.com",
  //   icon: "logo-facebook",
  //   label: 'facebook'
  // },
  {
    link: "https://www.instagram.com/niharikachhabra25/",
    icon: "logo-instagram",
    label: 'instagram'
  },
]
  export const skills = [
    //Update and remove the skills according to your needs
    //These icons are from box-icons (https://boxicons.com/), they have icons for pretty much everything so you shouldn't face problem finding them, but if you don't find the icons for your skills you can also include the link for an image like I've done for styled components, C etc.
    //Pls make sure to include only one out of property class and src, based on if ur using an image or icon.
    //when you click on an icon in boxicons, navigate to the font tab, and you should see something like <i class='bx bxl-java'>, copy the class name use it here!
    //if ur using image, use any image you like and it will resize itself.
    {
      title: "Proficient In:",
      skills: [
        {
          name: "React Js",
          class:"bx bxl-react",
        },
        {
          name: " Javascript",
          class:"bx bxl-javascript",
        },
         {
          name:"SQL",
          class:"bx bxl-sql"
        },
        {
          name: "CSS 3",
          class:"bx bxl-css3",
        },
        {
          name: "Tailwind Css",
          class:"bx bxl-tailwind-css",
        },
        {
          name:"Framer Motion",
          src:"data:image/png;base64,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"
        },
        {
          name: "NodeJs",
          class:"bx bxl-nodejs",
        },
        {
          name: "ExpressJs",
          src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAAB7CAMAAAB+Qmb/AAAAkFBMVEX///+2ur5sdn48SVahp60iNEOYnqSXnKCqrrL4+PkqOkgwP0wPJzn8/Pzv8PEnOEY2RFGRlptGUl3m6Onz9PVATVnb3d8fMUHh4+XIy84aLj58g4kuPkvLzc98golaZG1QW2W0ub2Ei5Fmb3hgaXJrdH2/wsXU1tiJkJelqq7Iy89UXmgIIzYACSZMV2EAGi88GHiCAAAONklEQVR4nO2cCZOyuhKGZQkCEQi7IrILONzL/f//7sLMqCwJhBk9NVUnT9Wp86mENHmT7izN7HYMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMxr8FJxXNLIoyU0zL99Wil1KdRedzLd1OW8opF7kvtz9ifvuB5fbNrM+dGVFWixe6IsfvIufMvFW0Zv8e+ZoISDV831CR4Ma1h7nGyUzc11M86ax9/1PLRi2l3fLERaEBfKBC5MZnXDN/oWdD3dJrYnXWgaCZN4nMd5aHy5aPKfm4RbC7ne+DrpAVF6KzUiTti4TPIk1+W63mFdRARW6RSfLpIxXr7kkhsER9epXDg5zclHfsyD/f/y0G5uCXTFWh2/C1yJ3KrpbYhQCJCvYm2j6QHx8k2FnX1LeUK2fVm8a35R+nBcuHcBaAbhL1w+ty4mSJb3vNC0UjF5GR0RnwWeSjL3JtXaQCfqmWV6CnrpFEsj346sPMLTDvnXrup6u3kw3+0f9EsL//05ERsHJzWIvT1xLrOGk0CXwLo3QNaUWijblog+WP++qZjyJpPKoUOWpCXyKMGk3nAzeSxl1Cv50TFa4OtF9xyYFVz/yswkUQXKbNUbXGmhcvYfJ8hocw2jEL1X057cpOGakI18EfwiiSijJCnXjLNazl998s44xzQpXkGjy2jCK7aobrjpc9Us+LY/N3lAnMTrhhbHONz08ctiIK7nLgq1o3fd7tIcyp8BMZd72dCmE2f7y7MJ7pxyRvvsnyL1IBmXjfuStjrDLaDQkSwQC5Md6nTOoik3Rzr1Cvk+dzsjBevF8RDp/8LkwZA4kk6KmAc2W+hTkWoCBNmrhtln+a4QoSQZeuS8UqRpnUdWVi9Dk1RvQmbya7kGzqzo5DfhJundwgdaAe04iGt7sLYxl7cmytYjh7vG9hchCR2n6z5R0uJI2XTzsa1Zw1swvFhVnBKTGWfv45pxZgHcwdO1anLfOBBHIRGVqjgfEtTAvqpVoulmpOvvoSRlJzUplT6y9OWDvLz9P+f1uZSJUQTrtBvWx598Bw8fcfcsyNaYtMsPNgug4UjZbkXU4uGsfpL2FyNVuu5dQeJi3yKcyHK5D8X2f5cot1M8iZ5ZbALRep1XzS/4N2eRmsR+EbZs3a3ojWrrlYcOqszyDDOwQlAhM39ynMDSVrqx9ZcMe3/BQmM0TC9ZpkrLZHNbX8w21WinQOZCwMt9pAqaWuGbIZjUPN6qTC2cNpE2iFuscp49SzXtwLo+dgdaNEz9X96ItemCohNiSHku2WS2itlfUoGGuZwZVxubML8PKJmZ1Dbj1y2VcwHc0XS0jnBRUZNdPY2Qsjwuu6LZXQjkZVJ0wqGySXaV8hxoDZVTz4GH7OVNIAfCCFY+2uaDEE95wnXeoFlLjp4ZybMO24mgwxHfZoCbOR0QljXxHNBhsPR9Gu81VmFpOmUNSWJ8OPEVgOMbt+ctyOPsfzR5pVgl4dZJwCru+vdGjxLMp0/XlmjZNjJngiEMuwpplQOkE+bGtNUmOLFHdpLVcKdWj52Vjt/h/teJJVrEwXOkpheWG3HSfAzPRxZHA2dTtejelE6zoN/D2icTYBzYDZ7QR32NiaBFFLMu+HltfhyhS0X8qA0ecIrXq/y3hYvoBk3X9+UaF5n7g0wbgvmSDHCCCGlkVcIk4u9YfN1gkD56u9b+gtH/VmcTX4d6F8PGLq1eDfefBXj5igoOvKXUO4c0/LCdawwW0VO+EXQwQpD5UUNR5c2QmjElcQ9JY37qD7pEKz6lTLseSyyq8W4Va93TaOwcqq7wnGl/WbL9enMnYCsVGyEyambEQlHwZaTQoF0pzsGJwJv8yoh5brrUAVmgZ0/e2Np7l4znBpz2tECjAaOjHa332NHRHW9mK4tKE1QukmyM9PXfAnDouM3nJuZPk55LeuOQqYvfXMBUNrfaxf9EUXbDEP5CH37mxk1OKfWAxV6k56CQZBpRMmIs2IcZ6VwNhy/SAQ96MJeIFLOkB7Ex4mohNBMS5QXPxvN3VpVULvFsP1+ebDonBwbt1NyEl7lMfZumqBseVeINQblbn4CycF74BDBf3FsYXro53z+eyPXgJIAV5UY8oclH4/eLAz/TxansFt6VITyyUDtTRL0ydOraL2nxwz8pYFK2Fnwo6ApO3sHHOM8Y2oUq44dv1GFXyKuCDMbyzX0hgFlug49Icoyq2Bh1h2/ilxpPUZ+pMI4lvJK7qxYgLy/oi44exVzwCVMBstn3hEW8oF3yhSj37geGaBfDXnNhT5BTWhrbGYIcHhl5ZbgoVVxSBLZhWnDqiEMadtvQTG8mMqNaqPcq6saDuNJ++Trsi1pC/yY84o46jhScIokgCthfC+RRgtpRMmg5ssx+2pVKXUGIGanG8pbQi8lGYLgrDJbtx70zB5JNCDiBvmJwstbepvEWZ3OlAJE22zHL/mUbxKvKIACE1mcnQuyvEqKYddkTib52G9jisqeHqupNWIiYC74BPfIQwPX2L5TnF0z4yBr7oxT7lWUXS9qhvfh1YcvScJo3+8V2zxiLDdAZd8p7eMmPClm1OXukEQwmJDinuZJX2R61t8GmmitQlOELSdDBOio94U/E26GHMmBbwfo3HnWAiSVKcfBE4axYIfl6+fRG/YcCLiNQKn7RRTJW5BiWD1COQB7XS5foHl88rTzPUTipP2J7Z8FkD88j1Oc8tqAI9mGp+7FfoZkOYGokHc8ZqhRyHldPnXlmPhalXYGDi4s7qQZPczJEi9d068Bai/RrIXqwTztqz87cKl2pJZT3b5IYrkbk2s0E1BfbFjTRExyZES+bkxn1oIv1UtqgV1hDwKg6ObBWF+bzkJTRSwy54FFBPR5R9QU23ZxMTeAA5mYyZMsBeJIXb7E8vRH+S0LghTvTz74YmEqFJ6BmgZXE1n3IZLTHSdI2Pmks0oBkcqdmdRDEPa/qTdgtFBGTmp2rV+YrlGFT744YkfXZEEvXYyEtOHLe4/s3ikRZOsyxaamMfohKGtRYmGK6slYTZYXv7nHo9s/r80Y4FDyeMxjsV/aWbD8ovf+cMe5OOpZ5cqEkrG33wIFiY5UgwRbfR3hGYwEJaE2WL5I2NJ2QdUhrRPB+1kB6plCkioz4JpqHzqd24ad+qPTpY7dSeyikm7EEOhpYz+p2B4QrAkTOXztJYPBpd8oBKmGAzH/YHq7NJd2sb9AQa10LPGtXl1Zot2w7xkJKpxfKNbG+SjI60lYTrLafdPBuFIDqimIcMclX1AFczyF69liHv5U8rpBM6JfIwpNm/MkmFFw7wldEtMMDqdXxQGv5ePoRycQstGRtNDpME7VPu1d3C+OG85IKLADihX5fx0D8TEv+B7SWaRvs9dBlS1SMZogrEojB1Q5ZT3Cj4tL92WxjENN3xkuuxX/sUjxrEQ1eAuLTT+IvWxSTP9sweTZxeBdCwKmgZxxzlJi8I4LaLy6qc2fH7w8oAmMg1buYoPNNUkL44xikh4s32Mlk3eGdF9YnaiLAjjh/98P8anmKeeJ5UsCqOJxpXG8np00z0u631GM+wgEaBZhanUIY8Svat33e2WljBqWL2BZA+fqeMJUy/MsTBWW/HUTlbci8JQWz666Q2562V0d5jeZMKC4v2o8Qskr+BCSqAcoE96jdMNILJLOCZoP3ud/AbXprc2P+2ay8LQWj66hV2svx/ThZjhIDu2aH3I8PTLKlqcGpeUPLlkMgZkwVrqH5Ux2hz7FMZZm//pGZy9tLYsjGNut3wnoWata3vNeKpSh6ujoXIXG+RnVM3KW7lKjZJRoL8kK+8hPfJmP/k6wXTChdPnz20EazqbWBFm3XJtanlXT4tWstzsCI43SBWwllN7zMN3nEKU7vIr+Odw/NqLVxxWFvJKBgaB+fto2T6ghQRgCc7fuFgTpgsgy5ZH4fyFnVOwEB53/SCD4cTppv5yboQehWjp9x/TKROR4pumJcY49VjnDWI27POawZ8BuJ/56xYgLZqUBmB2i1eF6ZWJSNu/mtaABrNq56CxsHV3zA13NjxkaMz+wsaTKjbcZTN/DNcaQoobrZp+gzAbj4/Sp5hge7H/6KuPZIxjEQq4LEbHdtUYM9tcF2ZXdpbLZMuxuylyq7onvG/SKyuM56opoqVahPxLu3TD4m05zR+ZoPLlLHBUcgysycBfzIYdXGYZdz2fWTLH2g2uF2/s0I4XEyIRd08KYXaXurd85lo7y42p5Y/bniIEridv2pqKd+F9GOFGk1LyEERTy/v8v0vhrwWtX6GkhWE0KVfd63aqUhZb35UmPbkS6I4ju2B+f+F4+Bf+yisIiz13+dbBrk43HvoN3oXTCLPT0nxu+Q1j+QBdLAzQmOlDUN2rTty+UP1rSfAGRyn2jWL/LGJ7VcmZMTD4N2Zk7vq/vpfy6IDiPDM/ORcWCFqxmjhwOwFLf1RqgMMfvs+ORnllx1MUBrDJv2rhixZAzFD9tsn8H83O4DGNKCwfoXgVHwaGG9dfZaI8tmCA+BM5+Cje6aoGqhWb36Z3RcIARdXb0/813faughEcDn733wHlom3PNFCOR1p/qh/nI+bze/uUJf7hEHS1ALe42eQOpx+pOiOV5bN725V5Rd3lvSFBAOPstGDJ3XIzh48iqMgua0VehaZ0aOWl///L0nLnmZhaf3+7+qztRZWMLKc0Xfsq5Hlf/6cvolS2Ql3k77Ipd5nxz8GE+aMwYf4oTJg/ChPmj8KE+aMwYf4oTJg/ChPmj8KE+aMwYf4oTJg/ChPmj8KE+aMwYf4o4uHlWYqMV3BZOH1nMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBj/Lv4Pn3YKVlVFQ0YAAAAASUVORK5CYII=",
        },
        {
          name: "MongoDB",
          class:"bx bxl-mongodb",
        },
      ],
    },
    {
      title: "Familiar With:",
      skills: [
         {
          name: "C++",
          class:"bx bxl-c-plus-plus",
        },
        {
          name: "C",
          src:"data:image/png;base64,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",
        },
        
        {
          name: "Python",
          class:"bx bxl-python",
        },
         {
          name: "Java",
          class:"bx bxl-java",
        },
        {
          name:"Docker",
          class:"bx bxl-docker"
        },
         {
          name:"AWS",
          class:"bx bxl-aws"
        },

        {
          name:"MaterialUI",
          src:"data:image/png;base64,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"
        },
        {
          name: "EJS",
          src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgs7zmA2X55TVRum7fe9_03F2Y5hWmNjX4Q&usqp=CAU"
        },
      ],
    },
  ];
  
  export const experiences = [
    //these are pretty self explaatory, but if you don't have anything to write here just remove the Experience component from app.jsx, footer.jsx and navigation.jsx, and you'll be good to go
    // If you have more experience, you will need to add more objects to the array. Just copy from the opening bracket to the comma of one object and continue pasting as many as you need. 
    {
      id: 0,
      subheading: "Frontend Intern",
      institution: "Google",
      date: "June 2023 - Present",
      desc: "Working on the frontend of the web application using ReactJS, Redux, and Material UI.",
      skills: [
        "ReactJS",
        "Redux",
        "Material UI",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      id: 1,
      subheading: "Fullstack Internship",
      institution: "Flipkart",
      date: "June 2023 - July 2023",
      desc: "Built an admin dashboard with react, styled components and react charts and a self made trello board. I was the top performer in the program.",
      skills: [
        "ReactJS",
        "Redux",
        "NodeJs",
        "Material UI",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      id: 2,
      subheading: "Frontend Engineer Intern ",
      institution: "Facebook",
      date: "May 2023 - Present",
      desc: "Contributing to different amazing projects and learning from industry experts",
    },
    {
      id: 3,
      subheading: "Frontend Developer",
      institution: "Amazon",
      date: "Nov2021 - Present",
      desc: "As a Frontend Intern at XYZ Company, I had the privilege of being part of an incredible team dedicated to pushing the boundaries of web development. During my internship, I worked on a variety of projects that allowed me to expand my skills and make meaningful contributions to the company's success. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas voluptatibus numquam consectetur similique placeat, officia quia. Nostrum tenetur illo earum unde, corporis quas vel. Cum eaque laborum placeat corrupti eligendi!",
      skills: [
        "JavaScript",
        "React",
        "TailwindCSS",
        "Figma",
      ],
    },
    
  ];
  
  export const education = [
      // If you have more qualifications, you will need to add more objects to the array. Just copy from the opening bracket to the comma of one object and continue pasting as many as you need. 
    {
      id: 0,
      institution: "Guru Gobind Singh Indraprastha University",
      date: "Sep 2024 - May 2026",
      desc: "I am currently pursuing masters of Computer applications from Guru Gobind Singh Indraprastha University. The course has taught me valuable skills like Java, Python, C++, Artificial Intelligence and Web Developement",
      degree: "Bachelors in Computer Science and Economics",
    },
      {
      id: 1,
      institution: "Delhi University",
      date: "Oct 2021 - May 2024",
      desc: "I am currently pursuing bachelors in Delhi University with a major in computer Applications and a minor in Economics. The course includes subjects like Web development, Python, Relational Databases like SQL and editing softwares like Blender.",
      degree: "Bachelors in Computer Science and Economics",
    },
    {
      id: 2,
      institution: "Indraprastha World School, Delhi",
      date: "Apr 2019 - Apr 2021",
      subheading: "92%",
      desc: "I completed my class 12 high school education at Indraprastha World School, Delhi, where I pursued Commerce with Maths. I studied subjects like Mathematics, Accounts, Economics and Business Mangement.",
      degree: "CBSE(XII), Commerce With Maths",
    },
    
  ];
  export const certifications = [
    // If you have more qualifications, you will need to add more objects to the array. Just copy from the opening bracket to the comma of one object and continue pasting as many as you need. 
  {
    id: 0,
    institution: "Coding Blocks",
    date: "May 2023",
    desc: "Certificate of excellence earned in data structures and algorithms using C++. In this course I learnt data structures and algorithms in C++. I also solved lots of competitive programming questions. I was in the top 5 students",
    degree: "Launchpad C++",
  },
  {
    id: 1,
    institution: "Coding Blocks",
    date: "Nov 23",
    desc: "This is an ongoing course. This is a full stack development course and I'm currently learning backend development with nodeJS, mongoBD, ExpressJS and EJS. Certificate Awaited",
    degree: "Web Development",
  },
  {
    id: 2,
    institution: "Aptech Education",
    date: "Nov 21",
    desc: "Certificate of Appreciation earned in C++ course done with Aptech Education. In this course I learned basics of C++ as well as object oriented programming using classes and objects.",
    degree: "Object Oriented programming with C++",
  },
];
  //this labels array is for the buttons above the projects, which filter them.
  //match the category section in projects array to the label it belong to here, and the filter component will work perfectly
  //add as many labels as you want
  export const labels=["all","react","javascript","css","MERN"]
  export const projects = [
    //name ur images mock1, mock2 etc. and add them in the public folder, they will replace themselves with my images but if you wanna use other names pls replace them here, and pls put ./ before ur image names to be able to access the public folder
    // If you have more than 6 projects, you will need to add more objects to the array. Just copy from the opening bracket to the comma of one object and continue pasting as many as you need. 
    {
      id: 7,
      title: "DocBook",
      description:
        "A doctors appointment booking website built using MERN Stack. Incorporated payment getaway through paypal and integrated Nodemailer for Email Updates on appointments.",
      image:
        "./mock6.png",
      tags: ["JavaScript", "html", "MERN", "reactJS"],
      category: "MERN", //match this with the label it belongs in labels array (important)
      github: "https://github.com/Nchhabra25/DocBook",
      webapp: "https://docbook-frontend-crpe.onrender.com/",
    },
    {
      id: 0,
      title: "Admin Dashboard",
      date: "Jun 2023 - Jul 2023",
      description:
        "This is an admin dashboard built in react using React E charts, Material UI Table and a fully functional trello board built from scratch. It features CRUD functionalities and has a captivating colour scheme which looks proffessional ",
      image:
        "./mock1.png", //make sure your image is in public folder, and if you change the name of the image pls replace it here with ./yourimagename.png, otherwise u won't be able to access it
      tags: [
        "React JS",
        "React Echarts",
        "Material UI",
        "Zustand",
        "CSS",
        "React Router"
      ],
      category: "react", //match this with the label it belongs in labels array (important)
      github: "https://github.com/Nchhabra25/AdminDashboard",
      webapp: "https://friendly-naiad-16949b.netlify.app/dashboard",
    },
    {
      id: 1,
      title: "VideoFlix",
      description:
        "A fully functional video streaming app built using react, Material UI, Tailwind Css where you can search videos as well as play them. It has light and dark mode functionality and a fully fuctional navigation bar.",
      image:
        "./mock2.png",
      tags: ["React Js","React Router", "Material UI", "Youtube API","Html", "Tailwind CSS", ],
      category: "react", //match this with the label it belongs in labels array (important)
      github: "https://github.com/Nchhabra25/VideoFlix",
      webapp: "https://vocal-paletas-94d0fb.netlify.app/",
      
    },
    {
      id: 2,
      title: "Wonder Events",
      description:
        "A fully fuctional multi page event management company website built with react using styled components and react router, which has features such as an image carousel, typewriter text, acordian component and smooth animations",
      image:
        "./mock3.png",
      tags: [
        "React Js",
        "Styled Components",
        "React Router",
      ],
      category: "react", //match this with the label it belongs in labels array (important)
      github: "https://github.com/Nchhabra25/WonderEvents",
      webapp: "https://calm-figolla-49c271.netlify.app/",
    },
    {
      id: 3,
      title: "Gradient Generator",
      description:
        "A gradient generator built using JavaScipt, where you can generate radial as well as linear gradients, generate gradients from random colours as well as copy the code too",
      image:
        "./mock4.png",
      tags: ["JavaScript", "html", "CSS"],
      category: "javascript", //match this with the label it belongs in labels array (important)
      github: "https://github.com/Nchhabra25/Gradient-Generator",
      webapp: "https://nchhabra25.github.io/Gradient-Generator/",
    },
    {
      id: 4,
      title: "Weather App",
      date: "Dec 2021 - Apr 2022",
      description:
        "Weather App built using Html, Css, Javascript and Rapid API. You can search for weather of any city in the world, and the image on top of the weather changes acoording to temprature as well!",
      image:
        "./mock5.png",
      tags: ["JavaScript", "html", "CSS","Api"],
      category: "javascript", //match this with the label it belongs in labels array (important)
      github: "https://github.com/Nchhabra25/WeatherApp",
      webapp: "https://silver-brioche-ed63f4.netlify.app/",
    },
    {
      id: 6,
      title: "Calculator",
      description:
        "A fully dfunctional calculator with with all arithematic operators as well as the exponential operator and backspace buttons.",
      image:
        "./mock8.png",
      tags: ["JavaScript", "html", "CSS"],
      category: "javascript", //match this with the label it belongs in labels array (important)
      github: "https://github.com/Nchhabra25/CalculatorApp",
      webapp: "https://calm-bombolone-209bad.netlify.app",
    },
    
    
  ];
  
  export const ContactData = [
    //feel free to change the emojis, titles, add more information or remove the points here.
    // on Mac you should be able to access the emoji keyboard with ctrl+cmd+space, and on Windows with windows+period('.')
    {
      title1:"📍 Based in: ",
      title2:" India"
    },
    {
      title1:"📧 Email me at: ",
      title2:" niharikachhabra@hotmail.com"
    },
    {
      title1:"📞 Call me at: ",
      title2:" 9210132135"
    }
  ];
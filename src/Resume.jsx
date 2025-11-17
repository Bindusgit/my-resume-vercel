import React from 'react';
import './Resume.css';

function Header({ name, title, profilePic }) {
  return (
    <header className="resume-header">
      <div className="profile-pic-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <h1>{name}</h1>
      <p className="title">{title}</p>
    </header>
  );
}

function Contact({ email, phone, address }) {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </section>
  );
}

function Skills({ skills = [] }) {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </section>
  );
}

// function Languages({ languages = [] }) {
//   return (
//     <section className="languages-section">
//       <h2>Languages</h2>
//       <ul className="languages-list">
//         {languages.map((language, i) => <li key={i}>{language}</li>)}
//       </ul>
//     </section>
//   );
// }

function Languages({ languages = [] }) {
  return (
    <section className="languages-section">
      <h2>Languages</h2>
      <ul className="languages-list">
        {languages.map(({ name, level }, i) => (
          <li key={i} className="kv-row">
            <span className="kv-key">{name}</span>
            <span className="kv-colon">:</span>
            <span className="kv-value">{level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}


// function Languages({ languages = [] }) {
//   return (
//     <section className="languages-section">
//       <h2>Languages</h2>
//       <ul className="languages-list">
//         {languages.map(({ name, level }, i) => (
//           <li key={i} className="kv-row">
//             <span className="kv-key">{name}</span>
//             <span className="kv-colon">:</span>
//             <span className="kv-value">{level}</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }



// function Hobbies({ hobbies = [] }) {
//   return (
//     <section className="hobbies-section">
//       <h2>Hobbies</h2>
//       <ul className="hobbies-list">
//         {hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
//       </ul>
//     </section>
//   );
// }

function AdditionalInfo({ info = [] }) {
  return (
    <section className="additional-info-section">
      <h2>Additional Expertise</h2>
      <ul className="skills-list">
        {info.map((point, i) => <li key={i}>{point}</li>)}
      </ul>
    </section>
  );
}



// function PersonalDetails({ details}) {
//   return (
//     <section className="personal-details-section">
//       <h2>Personal Details</h2>
//       <ul className="personal-details-list">
      


//         <li><strong>Name:</strong> {details.name}</li>
//         <li><strong>Gender:</strong> {details.gender}</li>
//         <li><strong>Hobbies:</strong> {details.hobbies.join(", ")}</li>
//         <li><strong>Nationality:</strong> {details.nationality}</li>
//         <li><strong>Marital Status:</strong> {details.maritalStatus}</li>
//       </ul>
//     </section>
//   );
// }

function PersonalDetails({ details }) {
  return (
    <section className="personal-details-section">
      <h2>Personal Details</h2>
      <ul className="personal-details-list">

        <li className="kv-row"><span className="kv-key">Name</span><span className="kv-colon">:</span><span className="kv-value">{details.name}</span></li>

        <li className="kv-row"><span className="kv-key">Gender</span><span className="kv-colon">:</span><span className="kv-value">{details.gender}</span></li>

        <li className="kv-row"><span className="kv-key">Nationality</span><span className="kv-colon">:</span><span className="kv-value">{details.nationality}</span></li>

        <li className="kv-row"><span className="kv-key">Marital Status</span><span className="kv-colon">:</span><span className="kv-value">{details.maritalStatus}</span></li>

      </ul>
    </section>
  );
}



function Profile({ text }) {
  return (
    <section className="profile-section">
      <h2>Profile</h2>
      <p>{text}</p>
    </section>
  );
}

function Experience({ items = [] }) {
  return (
    <section className="experience-section">
      <h2>Work Experience</h2>
      {items.map(({ role, company, duration, description }, idx) => (
        <div key={idx} className="experience-item">
          <h3>{role} <span className="company">@ {company}</span></h3>
          <p className="duration">{duration}</p>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
}

function Education({ items = [] }) {
  return (
    <section className="education-section">
      <h2>Education</h2>
      {items.map(({ degree, institution, year }, idx) => (
        <div key={idx} className="education-item">
          <h3>{degree}</h3>
          <p>{institution}</p>
        </div>
      ))}
    </section>
  );
}


function Projects({ items = [] }) {
  return (
    <section className="projects-section">
      <h2>Project Details</h2>
      {items.map(({ role, company, duration, description }, idx) => (
        <div key={idx} className="project-item">
          <h3>{role} <span className="company">@ {company}</span></h3>
          <p className="duration">{duration}</p>
          <ul>
            {description.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}



export default function Resume() {
  const data = {
    name: 'Bindu',
    title: 'Software Engineer',
    profilePic: '/src/assets/profilepic.avif',  // Replace with the actual image path

    contact: {
      email: 'bindu@gmail.vcom',
      phone: '99087886768',
      address: '#1 Road, City/State-pin code'
    },
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'Python'],
    languages: [
  { name: 'Telugu', level: 'Proficient' },
  { name: 'Hindi', level: 'Moderate' },
  { name: 'English', level: 'Proficient' }
],
    // hobbies: ['Playing', 'Cooking', 'Music'],
    additionalInfo: [
  "Experience with progressive web apps",
  "High ability in secure & responsive web application implementation",
  "Expert knowledge of accessibility and performance testing",
  "Knowledge on Git, Bitbucket, Docker, SVN, Jenkins"
],

    personalDetails: {
  name: "Bindu",
  gender: "Female",
  hobbies: ['Playing', 'Cooking', 'Music'],
  nationality: "Indian",
  maritalStatus: "Single"
},

    profileText: 'Software Engineer with 4 years of experience in the IT industry. Started career as an Analyst and transitioned into Software Development driven by strong personal interest. Experienced in UI development across multiple applications, delivering high-quality, scalable solutions.',

    experience: [
      {
        role: 'Senior Software Developer',
        company: 'CGS',
        duration: 'Oct 2023 — Sep 2025',
        description: 'Developed and maintained React-based web applications, focusing primarily on frontend development, while utilizing Python for basic backend tasks. Collaborated with cross-functional teams to deliver high-quality, scalable software solutions.'
      },
      {
        role: 'Web Developer',
        company: 'Zinovia Technologies Pvt Ltd',
        duration: 'Sep 2023 — Dec 2021',
        description: 'Developed and maintained various web applications using HTML, CSS, JavaScript, and Java. Worked with cross-functional teams to gather requirements and design user interfaces.'
      }
    ],
    education: [
      { degree: 'Computer Science and Engineering', institution: 'Chintalapudi Engineering College, Ponnur'},
    ],
    projects: [
  {
    role: "Software Engineer (React Developer)",
    company: "Computer Generated Solutions Pvt Ltd",
    duration: "Oct 2023 – Sep 2025",
    description: [
      "Developed responsive and scalable features for the Threadvine B2B e-commerce platform using React, improving digital catalog browsing and product visibility.",
      "Built reusable UI components, optimized state management, and enhanced frontend performance for smoother user experiences.",
      "Fixed UI bugs, implemented new feature enhancements, and ensured timely delivery based on client requirements.",
      "Collaborated with designers, backend engineers, and QA teams to translate business needs into functional and user-friendly interfaces.",
      "Integrated REST APIs, improved data handling, and performed code reviews to maintain clean and maintainable code.",
      "Deployed builds on Linux environments using PuTTY and supported production releases for stable application delivery."
    ]
  },
  {
    role: "Web Developer",
    company: "Zinovia Technologies Pvt Ltd",
    duration: "Sep 2023 — Dec 2021",
    description: [
      "Developed user-friendly web pages using HTML, CSS, JavaScript, and implemented backend integrations using basic Java.",
      "Created responsive UI layouts and improved the overall look and feel of web applications.",
      "Collaborated with teams to gather requirements and convert them into functional interface designs.",
      "Fixed front-end defects, optimized page performance, and ensured browser compatibility.",
      "Integrated REST APIs to fetch and display data dynamically within web pages.",
      "Assisted in testing, debugging, and improving application workflows for better user experience."
    ]
  }
]

  };

  return (
    <main className="resume-container">
      <div className="resume-sidebar">
        <Header name={data.name} title={data.title} profilePic={data.profilePic} />
        <Contact {...data.contact} />
        <Skills skills={data.skills} />
        <AdditionalInfo info={data.additionalInfo} />
        {/* <Hobbies hobbies={data.hobbies} /> */}
        <Languages languages={data.languages} />
                <PersonalDetails details={data.personalDetails} /> 

      </div>

      <div className="resume-main">
        <Profile text={data.profileText} />
        <Experience items={data.experience} />
        <Education items={data.education} />
        <Projects items={data.projects} /> 
      </div>
    </main>
  );
}

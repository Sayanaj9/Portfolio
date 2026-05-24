import "../styles/home.scss"
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoDownloadOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { MdComputer } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { IoAccessibilitySharp } from "react-icons/io5";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Home() {
function handleDownload() {
  const link = document.createElement("a");
  link.href = "/SayanaJoy.pdf"; 
  link.download = "SayanaJoy_Resume.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
  const tech_stack = [
  { Technologies: ["JavaScript, ", "React.js, ","Redux, ","TypeScript, ","Jest, ", "HTML/CSS, ", "SCSS, ", "Tailwind CSS"],
    Backend  :[ "Node.js, ","PostgreSQL, ", "SQL, " ,"AWS, ", "CI/CD Pipeline "],
    Accessibility : [ "WCAG 2.1, ","JAWS, ", "NVDA, ","axe DevTools, ","Git, ","GitHub, ","Postman, ", "Jira "],

  }
 
];
  return (
    <div className='home-detail animated'>
      <div className="home-detail_scroll_area">
      <h1 className="name">Sayana Joy</h1>
      <h4>Software Developer</h4>
      <p>Software Engineer with 5 years of experience building scalable, user-focused web applications. Experienced in delivering performant, accessible, and full-stack solutions through cross-functional collaboration.</p>
      <div className="technical_expertise">
        <h4>Technical Expertise</h4>
        <div className="tech_section">
        <div className="tech_row">
          <MdComputer size={25} color="white" />
          <span className="tech_label">Technologies :</span>
            <div className="tech_items">
              {tech_stack.map((tech,i)=> <span className="chip" key={i}>{tech?.Technologies}</span>)}
            </div>
        </div>
      </div>
        <div className="tech_section">
        <div className="tech_row">
          <VscTools size={25} color="white" />
          <span className="tech_label">Backend & Cloud :</span>
            <div className="tech_items">
              {tech_stack.map((tech,i)=> <span className="chip" key={i}>{tech?.Backend}</span>)}
            </div>
        </div>
      </div>
        <div className="tech_section">
        <div className="tech_row">
          <IoAccessibilitySharp size={25} color="white" />
          <span className="tech_label">Accessibility & Tools :</span>
            <div className="tech_items">
              {tech_stack.map((tech,i)=> <span className="chip" key={i}>{tech?.Accessibility}</span>)}
            </div>
        </div>
      </div>
      </div>
      <div className="personal_info">
      <div className="social_links">
        <button className="download_btn" onClick={handleDownload}>Download CV
            <a
              // href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="download_icon"
            >
            <IoDownloadOutline size={25} color="black"/>
          </a>
        </button>
        <div className="social_icons">
          <a
              href="https://www.linkedin.com/in/sayanajoy"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin_icon"
            >
            <FaLinkedin size={30} color="white"/>
          </a>
            <a
              href="https://github.com/Sayanaj9"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin_icon"
            >
             <FaGithub size={30} color="white"/>
          </a>
        
          <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sayanaj9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gmail-icon"
            >
            <SiGmail size={30} color="white"/>
          </a>
        </div>

      </div>
      <div className="phone">
                <FaPhoneAlt />
                <span>+1 669 226 9199</span>
      </div>
    </div>
    </div>
    </div>
  )
}

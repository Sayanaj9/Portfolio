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
  { Technologies: ["JavaScript, ", "React.js, ","Redux, ","TypeScript, ","Python, ", "SQL, ", "HTML/CSS, ", "SCSS, " ,"AWS, ", "Jest "],
    Tools :["Git, " ,"PostgreSQL, ", "Visual Studio Code, ", "Eclipse, ", "Postman, ", "Jira, ", "Microsoft Office (Excel)  "],
    Accessibility : ["JAWS, ", "NVDA, ", "WCAG 2.1, ", "axe DevTools"],

  }
 
];
  return (
    <div className='home-detail animated'>
      <div className="home-detail_scroll_area">
      <h1 className="name">Sayana Joy</h1>
      <h4>Software Developer</h4>
      <p>Master’s student with 5 years of web development experience, delivering scalable solutions in collaboration with
          cross-functional teams across diverse organizational settings.</p>
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
          <span className="tech_label">Tools :</span>
            <div className="tech_items">
              {tech_stack.map((tech,i)=> <span className="chip" key={i}>{tech?.Tools}</span>)}
            </div>
        </div>
      </div>
        {/* <div className="tech_section">
        <div className="tech_row">
          <IoLibrary size={25} color="white" />
          <span className="tech_label">ML Libraries :</span>
            <div className="tech_items">
              {tech_stack.map((tech,i)=> <span className="chip" key={i}>{tech?.ML_Libraries}</span>)}
            </div>
        </div>
      </div> */}
        <div className="tech_section">
        <div className="tech_row">
          <IoAccessibilitySharp size={25} color="white" />
          <span className="tech_label">Accessibility :</span>
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

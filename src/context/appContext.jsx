import { createContext, useEffect, useState } from "react";
const prof_experiences =[
  {
    title: "Teaching Assistant",
    company: "University of Houston, TX",
    dates: "August 2025 - Current",
    bullets: ["Mentored and guided 40+ undergraduate students in applying project management principles and teamwork strategies to real-world software projects.",
       "Reviewed and graded 9+ project deliverables such as charters, SRS, sprint reports, and presentations, offering actionable feedback to improve clarity and structure.",
      "Conducted weekly 1-hour virtual review sessions to address project challenges, clarify requirements, and support effective communication across student teams.",
    "Collaborated with the course instructor to refine evaluation rubrics and ensure fairness and consistency in project assessments."],
  tech_stack: ["Trello,","GitHub,", "Microsoft Teams,", "Canvas,", "Project Coordination,", "Leadership,", "Communication"]
  },

  {
    title: "Systems Engineer",
    company: "Tata Consultancy Services, Kerala, India",
    dates: "November 2022 – July 2024",
    bullets: ["Developed a web application using React.js, SCSS and unit testing with Jest.",
       "Led the front-end development team of 3, improving code quality, user experience and performance.",
      "Resolved 20+ live production issues, reducing turnaround time for critical bugs by 40%.",
    "Conducted accessibility (a11y) testing with JAWS and NVDA to ensure WCAG 2.1 compliance and improve screen reader navigation experience."],
    tech_stack: ["React.js, HTML, SCSS, Jest, a11y Testing (JAWS, NVDA), Git, Visual Studio Code"]
  },
  {
    title: "Senior Software Engineer",
    company: "Vanilla Networks Pvt. Ltd, Kerala, India",
    dates: "December 2020 – November 2022",
    bullets: ["Led the frontend team, delivering React-based web applications with React Context, TypeScript, Emotion CSS, and libraries like D3, AG Grid, seamless RESTful API integration.",
      "Collaborated in an AGILE environment, contributing to bi-weekly sprints and ensuring timely, client-focused deliveries.", 
      "Participated in over 10 release cycles, consistently maintaining a 100% on-time delivery record.",
    "Improved app responsiveness through reusable components and reduced load times."],
    tech_stack: ["React.js, TypeScript, Emotion CSS, D3, AG Grid, Git"]

  },
  {
    title: "Software Engineer",
    company: "Attinad Software,Kerala, India",
    dates: "December 2019 – November 2020",
    bullets: ["Developed UI using React.js, SCSS, Bootstrap and used libraries like Redux, Stripe.js for payment processing",
      "Created graphical data representations with Apex Charts.", 
      "Presented weekly updates and conducted over 8 client demos, improving feedback cycles and alignment.",
    ],
    tech_stack: ["React.js, Redux, SCSS, Bootstrap, Stripe.js, Git "]
  }]
  const project_experiences = [
  {
    title: "Gender Classification from Text",
    company: "University of Houston, TX",
    dates: "May 2025",
    bullets: ["Built an ML pipeline using scikit-learn, pandas, NLTK, textstat and transformers with BERT embeddings, readability scores, and K-Means clustering for gender classification.",
       "Achieved 74.3% accuracy using an ensemble of SVM, Logistic Regression, Random Forest (based & tuned), and XGBoost models.",
      "Incorporated readability-based features (Flesch, Gunning Fog, ARI) to enhance interpretability, revealing linguistic complexity trends that contributed to clearer gender separation in clusters."],
    tech_stack: ["Python,Google Collab, scikit-learn," ,"xgboost,", "textstat,", "nltk,", "pandas,", "transformers"]
  },
  {
    title: "Serverless Web Application",
    company: "University of Houston, TX",
    dates: "November 2024",
    bullets: ["Developed a responsive, user-friendly  and interactive frontend using React.js and SCSS;",
      "Led full frontend development and API integration in a team of three.", 
      "Integrated AWS Cognito for secure authentication and deployed on AWS Amplify, reducing setup time by ~40%.",
    "Designed dynamic state management and interactive UI workflows that improved overall usability and reduced user task completion time by ~25% during testing."],
    tech_stack: ["React.js, SCSS, AWS Amplify, AWS Cognito, JavaScript, Git "]

  }
  
];
export const AppContext = createContext({

});

export const AppProvider = ({ children }) => {
    const [category, setCategory] = useState("professional");  
    const [experiences,setExperience] = useState(category==="professional"?prof_experiences:project_experiences);
    useEffect(()=>{
        if(category==="professional"){
            setExperience(prof_experiences)
        }
        if(category==="projects"){
            setExperience(project_experiences)
        }
    },[category])
  
  return (
    <AppContext.Provider value={{ experiences, category, setCategory}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

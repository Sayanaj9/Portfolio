import { createContext, useEffect, useState } from "react";
const prof_experiences =[

  {
    title: "Systems Engineer",
    company: "Tata Consultancy Services, Kerala, India",
    dates: "November 2022 – July 2024",
    bullets: ["Contributed to the development of an enterprise-scale React application built for a Fortune 500 U.S. financial services client, collaborating within a cross-functional frontend team of three.",
      "Implemented WCAG 2.1-compliant accessibility features (JAWS, NVDA) to meet mandatory compliance standards and pass recurring client audits, while maintaining 80%+ Jest test coverage to ensure build stability and production readiness.",
      "Reviewed frontend merge requests, mentored a junior engineer, and resolved 20+ post-release production issues, reducing critical bug turnaround time by 40%.",
      "Led performance optimization efforts by reducing unnecessary re-renders, implementing memoization strategies, ensuring cross-browser compatibility, and reducing API calls, resulting in faster load times and smoother interactions."
    ],
    tech_stack: ["React.js, HTML, SCSS, Jest, a11y Testing (JAWS, NVDA), WCAG 2.1, axe DevTools, Git, Visual Studio Code"]
  },
  {
    title: "Senior Software Engineer",
    company: "Vanilla Networks Pvt. Ltd, Kerala, India",
    dates: "December 2020 – November 2022",
    bullets: ["Led the introduction and implementation of D3.js for advanced data visualization, translating Figma designs into interactive dashboards and enhancing analytical capabilities within the application.",
      "Designed and implemented dynamic AG Grid-based data tables to support scalable, interactive data rendering.",
      "Designed and built scalable, reusable UI components and modular React applications using TypeScript, React Context for state management, and Emotion CSS, integrating REST APIs across 10+ Agile production releases."
    ],
    tech_stack: ["React.js, TypeScript, Emotion CSS, D3, AG Grid, Git"]

  },
  {
    title: "Software Engineer",
    company: "Attinad Software,Kerala, India",
    dates: "December 2019 – November 2020",
    bullets: ["Developed consumer-facing React UI components using SCSS, Bootstrap, and Redux, including WebSocket driven chat functionality and Stripe-integrated payment flows, improving checkout usability and overall user experience.",
      "Created interactive data visualizations using Apex Charts to enhance business reporting dashboards.",
      "Conducted 8+ client demos, collaborating with stakeholders to refine UI features based on feedback."

    ],
    tech_stack: ["React.js, Redux, SCSS, Bootstrap, Stripe.js, WebSocket, Git "]
  },
     {
    title: "Teaching Assistant",
    company: "University of Houston, TX",
    dates: "August 2025 - May 2026",
    bullets: ["Mentored 100+ undergraduate students by reviewing assignments, providing structured feedback, and guiding application of project management and teamwork principles in software project simulations.",
      "Led weekly office hours and independently conducted full class sessions in the professor’s absence, ensuring continuity of instruction and clear delivery of course material.",
   ],
  tech_stack: ["Trello,","GitHub,", "Microsoft Teams,", "Canvas,", "Project Coordination,", "Leadership,", "Communication"]
  }

]
  const project_experiences = [
    {
    title: "CodePractice - AI-Powered Full-Stack Interview Preparation Platform",
    dates: "May 2026",
    bullets: ["Architected and built an AI-powered coding interview platform using React, TypeScript, Redux Toolkit, Node.js, Express, PostgreSQL, and OpenRouter AI, enabling  real-time code execution and intelligent complexity analysis.",
       "Designed and implemented scalable backend APIs and PostgreSQL relational schemas supporting categorized coding challenges, hidden test case validation, dynamic execution workflows, and AI-driven complexity analysis across 5+ test  cases per problem.",
      "Engineered a responsive multi-panel coding workspace using Tailwind CSS, Monaco Editor, and Redux Toolkit, delivering interactive execution feedback and optimized rendering performance."],
    tech_stack: ["React.js, ", "Typescript, ", "Redux Toolkit, ", "Node.js, ", "Express, ", "PostgreSQL, ", "Tailwind CSS, ","OpenRouter AI, ","Monaco editor"]
  },
  {
    title: "Gender Classification from Text",
    company: "University of Houston, TX",
    dates: "May 2025",
    bullets: ["Built an ML pipeline using scikit-learn, pandas, NLTK, textstat and transformers with BERT embeddings, readability scores, and K-Means clustering for gender classification.",
       "Achieved 74.3% accuracy using an ensemble of SVM, Logistic Regression, Random Forest (based & tuned), and XGBoost models.",
      "Incorporated readability-based features (Flesch, Gunning Fog, ARI) to enhance interpretability, revealing linguistic complexity trends that contributed to clearer gender separation in clusters."],
    tech_stack: ["Python, Google Collab, scikit-learn," ,"xgboost,", "textstat,", "nltk,", "pandas,", "transformers"]
  },
  {
    title: "AWS-Integrated Full-Stack Ride-Sharing Application",
    company: "University of Houston, TX",
    dates: "November 2024",
    bullets: ["Led frontend development in a 3-member team, building a responsive full-stack web application using React.js, Node.js, SCSS, and REST APIs to deliver interactive and user-friendly workflows.",
      "Developed backend data retrieval routes and integrated RESTful APIs, contributing across both frontend and backend systems to support scalable application functionality.", 
      "Implemented secure JWT-based authentication using AWS Cognito and deployed the application through AWS Amplify, reducing environment setup and deployment time by ~40%.",
    "Designed dynamic state management and interactive UI workflows that improved usability and reduced user task completion time by ~25% during testing."],
    tech_stack: ["React.js, Node.js, SCSS, AWS Amplify, AWS Cognito, Git, GitHub "]

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

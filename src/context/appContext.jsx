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
    bullets: ["Developed production-ready React-based UI components using SCSS, Bootstrap, and Redux, including Stripe-integrated payment flows, improving checkout usability and overall user experience.",
      "Created interactive data visualizations using Apex Charts to enhance business reporting dashboards.",
      "Conducted 8+ client demos, collaborating with stakeholders to refine UI features based on feedback."

    ],
    tech_stack: ["React.js, Redux, SCSS, Bootstrap, Stripe.js, Git "]
  },
     {
    title: "Teaching Assistant",
    company: "University of Houston, TX",
    dates: "August 2025 - Present",
    bullets: ["Mentored 80+ undergraduate students by reviewing assignments, providing structured feedback, and guiding application of project management and teamwork principles in software project simulations.",
      "Led weekly office hours and independently conducted full class sessions in the professor’s absence, ensuring continuity of instruction and clear delivery of course material.",
   ],
  tech_stack: ["Trello,","GitHub,", "Microsoft Teams,", "Canvas,", "Project Coordination,", "Leadership,", "Communication"]
  }

]
  const project_experiences = [
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

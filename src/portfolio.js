/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Parth's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Parth Tripathi Portfolio",
    type: "website",
    url: "http://parthtripathi.com/",
  },
};

//Home Page
const greeting = {
  greet: "Namaste!",
  title: "Parth Tripathi",
  logo_name: "Parth Tripathi",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1C9Eqxsk8EciOC24NibUsUd9f3jqr9KOy/view?usp=sharing",
  atsresumeLink:
    "https://drive.google.com/file/d/1i189n8o3xBxMYWve76qo3sHYnFbDDFiB/view?usp=sharing",
  japaneseresumeLink:
    "https://drive.google.com/file/d/1sqsbrp1t-3PJPJKrzU6VlHUuHW1lHLL3/view?usp=sharing",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Extroverted-introvert",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/parthtripathi17",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:parth.tripathi17@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ParthTripathi17",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/parth.tripathi17",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/parth_tripathi17/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using Javascript",
        "⚡ Creating application backend in Django and Flask",
        "⚡ Building full stack applications with database integration",
      ],
      softwareSkills: [
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "jinja",
          fontAwesomeClassname: "simple-icons:jinja",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Cloud Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud ",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Watson",
          fontAwesomeClassname: "simple-icons:ibmwatson",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // Use for adding more techstacks
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};
const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Sr. Python - DevOps Engineer",
        subtitle: "HCL Japan Ltd.",
        date: "March 2024 - Present",
        content: [
          "Managed maintenance of Django-based Administrative and DevOps web application at Sony Japan, serving 1000 active users.",
          "Worked on DevOps pipeline  with Gerrit, Jenkins and Azure Devops facilitating end-to-end package delivery and automated testing for Sony TV modules.",
          "Worked on visualisation pipeline using Azure functions, Azure Data Lake and Microsoft Power BI to craft visualisations for monitoring pipeline and resource utilisation.",
          "Oversaw maintenance of physical in-house server farm used to perform testing and debugging of Sony TV firmware - Android software releases,",
        ],
      },
      {
        title: "Artificial Intelligence - Business Intelligence Team Leader",
        subtitle: "Vebuin Pvt. Ltd.",
        date: "December 2022 - February 2024",
        content: [
          "Led the development and implementation of a Machine Learning Operations (MLOps) proof of concept for Jera Energy, resulting in a versatile pipeline that supports various machine learning use cases. The updated pipeline significantly reduced experiment-to-deployment time by 500% and enhanced monitoring and evaluation processes.",
          "Led a team in the creation of a solution for text extraction from documents, utilising the Azure Document Intelligence API and OpenAI Large Language Models (LLM) with the Langchain framework. Implemented prompt engineering, improving performance by 200%.",
          "Orchestrated the development of a Custom Excel-to-PDF solution, leveraging Google Sheets and Drive APIs to update user Excel templates with custom data and export them to PDF.",
          "Oversaw the creation of a CSV export function in our in-house product, utilising AWS serverless Lambda, resulting in a 1000% improvement in performance.",
          "Took responsibility for Database sanitization and GitFlow management for a team of 15 developers, ensuring efficient collaboration and version control.",
          "Developed a Label Text comparison tool for BELC, a Mega retail chain, enabling the comparison of label designs for their products. This tool improved the evaluation process efficiency by 300%.",
          "Engineered an Allergy Detection Zero Shot Classification tool for BELC, powered by LLM embeddings. This tool detects allergies in food products based on ingredient information, enhancing product safety measures.",
          "Developed SQL scripts, Card Designs and Dashboards for Business Overview Dashboards and automated the creation process by serving the dashboard creation via an AWS Lambda Endpoint",
          "Implemented a custom Rotated Masked RCNN Model training pipeline that enables user Annotation on the invoice data which can be used to train updated models which enables 500% faster model development and deployment.",
        ],
      },
      {
        title: "Sr. Python / AI Developer",
        subtitle: "Vebuin Pvt. Ltd.",
        date: "May 2021 - November 2022",
        content: [
          "Optimised the Entity Extraction module in the in-house product “Smartflow” by updating the model used, setting up a proper data annotation and validation pipeline and finally migrating the model to AWS Sagemaker which lead to up to 200% faster predictions.",
          "Supervised Creation of a Contract Document Entity Extraction pipeline using Logistic Regression Models, Custom Named Entity Recognition and Google Vision OCR deployed on Django for leading consulting firm Prored Partners.",
          "Created an Invoice Classification and Entity Extraction pipeline using Rotated Masked RCNN Model and Google Vision served using a multi server asynchronous system of API and AI servers built in Django for Prored Partners.",
          "Created a Proof of concept pipeline to create a custom NER System with Spacy using data crawled using Selenium.",
          "Created Serverless module on AWS Lambda to ingest sensor data and use it perform regression operations on equipment metrics to quantify efficiency for Jera Energy.",
          "Created a Proof of Concept for Industrial Equipment Lifecycle Prediction using Full Rank Variational Inference in AWS Sagemaker for Jera Energy.",
        ],
      },
      {
        title: "Jr. Python / AI Developer",
        subtitle: "Vebuin Pvt. Ltd.",
        date: "May 2020 - April 2021",
        content: [
          "Deployed an Invoice Entity Extraction pipeline fine tuning open source implementation of RCNN model, Google Vision OCR api and Flask server to hasten invoice reimbursement process by 50% for the In-house product “Smartflow”",
          "Created Classification pipeline using Word Embeddings, Logistic Regression and Shallow Fast Forward Neural Network to improve f1 score by 30% on an extremely unbalanced dataset for the In-house product “Smartflow”",
          "Performed Data Analytics on warehouse dataset of the leading clothing manufacturer Right-On to identify and quantify the loss generated due to logistics mismanagement.",
        ],
      },
      {
        title: "Data Analyst Intern",
        subtitle: "DRM Office, Western Central Railway",
        date: "June 2019 - July 2019",
        content: [
          "Successfully Delivered a Maintenance Job Prediction model based on data from Track Management System, an Internal Internal platform used by Western Central Railway to track maintenance activities and monitor railway track conditions.",
          "Prepared posters and pamphlets to raise awareness regarding cleanliness for Annual Cleanliness Summit 2019",
        ],
        //         Worked on Data from in-house maintained Track Management System to generate clear visual insights on Data Statistics.
        // Developed a machine Learning model using above data to facilitate maintenance scheduling of railway tracks.
      },
      {
        title: "Data Science Intern",
        subtitle: "Intec Infotec",
        date: "June 2018 - July 2018",
        content: [
          "Learned various Software Lifecycles and Detailed Testing procedures of Software Development.",
          "Used the skills learned to create a DBMS for HelpDesk Management.",
        ],
        //         Learned various Software Lifecycles and Detailed Testing procedures of Software Development.
        // Used the skills learned to create a DBMS for HelpDesk Management.
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Engineering in Information Technology",
          subtitle: "Jabalpur Engineering College, Jabalpur",
          date: "2016 - 2020",
          content: [
            "Graduated with First Class Distinction",
            "CGPA: 7.49",
            "Trainer at induction process at Campus Artificial Intelligence Labs responsible for introducing incoming student body to various computer science clubs : ACM (CSE), JLUG (Linux)",
            "Alumni Point of Contact for the 50th Anniversary (MILAN) of our prestigious educational institute.",
          ],
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle: "New Digamber Public School, Indore",
          date: "2013 - 2015",
          content: [
            "Higher Secondary Certificate [HSC] : Precentage: 87.4%",
            "Secondary School Certificate [SSC] : CGPA: 9.4",
          ],
        },
      ],
    },
    {
      title: ["Achievements"],
      data: [
        {
          title: "Achievements",
          content: [
            "Winner - Twilio Integration  MLH Hackathon: Developed a simple app using Flask Framework with message alert integration for user actions and deployed on Heroku",
            "Winner IIT-Bombay 2020 Techfest - Dremio Business Insight: Implemented a solution utilising features of Dreamio Data Lake tool to ingest streaming data from various sources, perform pre-processing on the ingested data and render the insights generated to the end user using Tableau ",
            "Winner (Complex Problem) Smart India Hackathon-2019: Developed a Django Solution for Coal India Limited  that is used for assigning and tracking Unique Identifications to Coal Samples in a secure way to ensure Double Blinding of Coal Samples sent for quality testing and cost estimation",
          ],
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [],
};

const certifications = {
  certifications: [
    {
      title: "Microsoft Certified: Azure AI Engineer Associate",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/ParthTripathi-2692/B3F2A0308E5CB513?sharingId=CE577FEA91EAA44F",
      alt_name: "Microsoft",
      color_code: "#1f54cb99",
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/ParthTripathi-2692/CCC125F7A7A5F7FF?sharingId=CE577FEA91EAA44F",
      alt_name: "Microsoft",
      color_code: "#0C9D5899",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/ParthTripathi-2692/D927B99094E53920?sharingId=CE577FEA91EAA44F",
      alt_name: "Microsoft",
      color_code: "#1f54cb99",
    },
    {
      title: "Amazon Certified Cloud Practioner",
      subtitle: "- Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/1f1536f7-9d02-403c-83bd-a6a96bddb27f/public_url",
      alt_name: "Amazon Web Services",
      color_code: "#D83B0199",
    },
    {
      title: "Applied Data Science Lab",
      subtitle: "- WorldQunat University",
      logo_path: "WQU_logo_color.png",
      certificate_link:
        "https://www.credly.com/badges/3e1c7c45-b6b3-4b6b-a0ea-d768fd309790/public_url",
      alt_name: "World Quant University",
      color_code: "#1f54cb99",
    },
    {
      title: "Python For Everbody",
      subtitle: "- Charles Severance",
      logo_path: "University-of-Michigan-Logo.png",
      certificate_link:
        "https://coursera.org/share/b5ad328bff59b6ca2de460dc827155b6",
      alt_name: "University of Michigan",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/62a9a86bd315ff20e5cca1619049e62e",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "From Data to Insights with Google Cloud Platform",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/91e2c69184158064150e327ad178771b",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "AI for Medicine",
      subtitle: "- Pranav Rajpurkar",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/7e235691890e4701920470d87515267e",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Data Science",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm-logo.png",
      certificate_link:
        "https://coursera.org/share/a0a0a8e8f37533c917745e8ae03515e3",
      alt_name: "IBM",
      color_code: "#5c90c399",
    },
    {
      title: "AWS Fundamentals",
      subtitle: "- Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://coursera.org/share/badcd5b90e11747538ac89a6d247debd",
      alt_name: "Amazon Web Services",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm-logo.png",
      certificate_link:
        "https://coursera.org/share/8d1444a90fdddad4e3e5e7174e1e4fdd",
      alt_name: "IBM",
      color_code: "#5c90c399",
    },
    {
      title: "Japanese Language Profiency Test",
      subtitle: "- Japan Foundation",
      logo_path: "jlptlogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Z8eyARKT6rckpJztmCyCMbOVtDPGLFv1/view?usp=drive_link",
      alt_name: "Japan Foundation",
      color_code: "#0C9D5899",
    },
    {
      title: "Business English Communication Skills",
      subtitle: "- University of Washington",
      logo_path: "university-of-washington.png",
      certificate_link:
        "https://coursera.org/share/20677ff2a208b3e6fe2b73f4ed8afcab",
      alt_name: "University of Washington",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        // {
        //   title: "Associate AI Engineer",
        //   company: "Legato Health Technology",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - PRESENT",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_pic.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://just-a-blog.netlify.app/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Tsukuba, Ibaraki - 305-0061",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/oJXDBJfSFzg2uxw49",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+81-70-8450-8970, +91-99-8191-5424",
  },
};

export {
  settings,
  seo,
  greeting,
  resumeleft,
  resumeright,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};

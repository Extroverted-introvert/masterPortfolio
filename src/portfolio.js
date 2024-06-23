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
    "https://drive.google.com/file/d/1mIX13CVX5Ucebcvw6AH1IG24vpp7oh2z/view?usp=drive_link",
  atsresumeLink:
    "https://drive.google.com/file/d/1Q2pj4NNsHRw4cz34VRZG-SA27YGzKk8M/view?usp=drive_link",
  japaneseresumeLink:
    "https://drive.google.com/file/d/18Kdtjq-D4t3Nmp_4qmpAYvefzxU2FUH4/view?usp=drive_link",
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
        title: "Artificial Intelligence - Business Intelligence Team Leader",
        subtitle: "Vebuin Pvt. Ltd.",
        date: "December 2022 - Present",
        content: [
          "Leveraged the latest ChatGPT models to improve invoice and receipt entity extraction using prompt engineering and served the solution in serverless fashion to improve accessibility by 200%",
          "Developed SQL scripts, Card Designs and Dashboards for Business Overview Dashboards and automated the creation process by serving the dashboard creation via an AWS Lambda Endpoint",
          "Implemented a custom Rotated Masked RCNN Model training pipeline that enables user Annotation on the invoice data which can be used to train updated models which enables 500% faster model development and deployment",
        ],
      },
      {
        title: "Sr. Python / AI Developer",
        subtitle: "Vebuin Pvt. Ltd.",
        date: "May 2021 - November 2022",
        content: [
          "Optimised the Entity Extraction module in in-house product “Smartflow” by updating the model used, setting up a proper data annotation and validation pipeline and finally migrating the model to AWS Sagemaker which lead to up to 200% faster predictions.",
          "Supervised Creation of an Contract Document Entity Extraction pipeline using Logistic Regression Models, Custom Named Entity Recognition and Google Vision OCR deployed on Django for leading consulting firm Prored Partners.",
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
          "Deployed an Invoice Entity Extraction pipeline fine tuning open source implementation of RCNN model, Google Vision OCR api and Flask server to hasten invoice reimbursement process by 50% for In-house product /“Smartflow/”",
          "Created Classification pipeline using Word Embeddings, Logistic Regression and Shallow Fast Forward Neural Network to improve f1 score by 30% on an extremely unbalanced dataset for In-house product “Smartflow”",
          "Performed Data Analytics on warehouse dataset of leading clothing manufacturer Right-On to identify and quantify the loss generated due to logistics mismanagement.",
          "Developed a state-of-art software solution responsible for processing Electricity Invoice PDFs from leading Japanese Electricity, Publication and Tele-Communication organizations.",
          "Developed a Django based CRUD supported platform to demonstrate various Data Science methodologies.",
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
        // {
        //   title: "Ranks",
        //   content: [
        //     "#135/854 in Summer Analytics Kaggle Competition by IITG",
        //     "#113/5064 in CV-NLP Hackathon by HackerEarth",
        //   ],
        // },
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
    // {
    //   title: ["Freelance Work"],
    //   data: [
    //     {
    //       title: "Consultancy Website",
    //       subtitle: "kidsworldeducationconsultants.com",
    //       content: [
    //         "Created and hosted a website for consultancy providers in Kids Education Domain",
    //       ],
    //     },
    //     {
    //       title: "Portfolio Website",
    //       subtitle: "pranavphulware.netlify.app",
    //       content: [
    //         "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
    //       ],
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    // {
    //   title: "Indian Institute of Information Technology Kurnool",
    //   subtitle: "B.Tech. in Computer Engineering",
    //   logo_path: "iiitk_logo.png",
    //   alt_name: "IIITDM Kurnool",
    //   duration: "2016 - Present",
    //   descriptions: [
    //     "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
    //     "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
    //     "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
    //   ],
    //   website_link: "http://iiitk.ac.in",
    // },
  ],
};

const certifications = {
  certifications: [
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
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
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

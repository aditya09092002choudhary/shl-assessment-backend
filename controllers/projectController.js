const asyncHandler = require('express-async-handler');
const Project = require('../models/projectModel');

/**
 * @desc Get all the projects
 * @route GET /api/projects
 */

const getProjects = asyncHandler(async (req,res)=>{
    const projects = await Project.find({});
    res.status(200).json(projects);
});

/**
 * @desc Get project by project ID
 * @route GET /api/projects/:id
 */

const getProject = asyncHandler(async (req,res)=>{
    const project = await Project.findById(req.params.id);
    if (!project) {
        res.status(404);
        throw new Error("Contact not found");
      }
      res.status(200).json(project);
});

/**
 * @desc filter projects
 * @route POST /filter
 */

 const filterProject = asyncHandler((req,res)=>{
    const query = req.body.query;
    console.log(req.body);
    const OpenAI = require('openai');
    let data1 = "Project 1 Technologies: Python, HTML, CSS, Machine Learning, Deep Learning Frontend Technical Skills: HTML, CSS, JavaScript Backend Technical Skills: Python Project 2 Technologies: Java Spring Boot, Hibernate, MySQL Frontend Technical Skills: React JS Backend Technical Skills: Java, Spring Boot, Hibernate Databases: MySQL Infrastructure: Not specified Project 3 Technologies: Java, HTML, CSS, JavaScript Frontend Technical Skills: React, HTML, CSS Backend Technical Skills: Java, Python Django, Flask Databases: MySQL, MongoDB, Postgres Infrastructure: AWS, Azure OCR, Apache, Docker Project 4 Technologies: Websockets, Redis, Channel layers Frontend Technical Skills: React Backend Technical Skills: Python Django, Django Rest Databases: MySQL Infrastructure: Not Mentioned Project 5 Technologies: Python, Scrapy framework, MongoDB Frontend Technical Skills: React Native Backend Technical Skills: Python, Django Databases: MongoDB Infrastructure: Not Specified Project 6 Technologies: Postman, Docker, Jenkins, Java, Spring Boot Frontend Technical Skills: React, Angular Backend Technical Skills: Spring Boot, Java Infrastructure: Postman, Docker, Jenkins Project 7 Technologies: React JS, JWT Authentication, Local Storage Frontend Technical Skills: React JS, HTML, CSS, JavaScript Backend Technical Skills: Node JS Databases: MongoDB Infrastructure: Not Mentioned Project 8 Technologies: Python, Django, API Frontend Technical Skills: No experience Backend Technical Skills: Python Django, API Databases: Not mentioned Infrastructure: Not mentioned Project 9 Technologies: React, Node, Java Frontend Technical Skills: React, Java, Angular, Node, JavaScript Backend Technical Skills: Node Databases: SQL Project 10 Technologies: React JS, Redux, HTML, CSS, Bootstrap, Material UI, Socket.io, Python Django Frontend Technical Skills: React JS, HTML, CSS, Bootstrap, Material UI Backend Technical Skills: Python Django Project 11 Technologies: React JS, Node JS, TNT database Frontend Technical Skills: HTML, CSS, JavaScript, React JS Backend Technical Skills: Node JS Databases: SQL, TNT Infrastructure: Not mentioned Project 12 Technologies: React JS, Mongo DB, MVC architecture Frontend Technical Skills: React JS Backend Technical Skills: Mongo DB Databases: Mongo DB Infrastructure: Not mentioned Project 13 Technologies: Python, Java, Redis, caching, pagination, liquibase Frontend Technical Skills: React, Next js Backend Technical Skills: Python Django and Spring frameworks Databases: Not Specified Infrastructure: Not Specified Project 14 Technologies: Python, AWS, JavaScript, Node JS, Docker Frontend Technical Skills: Angular, JavaScript, TypeScript Backend Technical Skills: Python, Java, Node JS, AWS Lambda functions Databases: SQL Infrastructure: Docker, AWS Project 15 Technologies: Java, Spring Framework Frontend Technical Skills: React Backend Technical Skills: Python, Django, Java, Spring Framework Databases: Not Mentioned Infrastructure: Not Mentioned Project 16 Technologies: SQL, Cloud, Ecommerce, Haru, Spoke Frontend Technical Skills: React, Angular, Next.js Backend Technical Skills: SQL, MySQL, Oracle, Java, NoSQL Databases: SQL, MySQL, Oracle, NoSQL Infrastructure: Cloud platforms Project 17 Technologies: HTML, CSS, Node.js, SQL, MongoDB Frontend Technical Skills: HTML, CSS, React Backend Technical Skills: Node.js Databases: SQL, MongoDB Infrastructure: Not Mentioned Project 18 Technologies: Java, Spring Boot, Angular, HTML, CSS, JavaScript, SQL Frontend Technical Skills: Angular, React, Next js Backend Technical Skills: Python Django, Spring Databases: SQL Infrastructure: HTTPD Project 19 Technologies: Machine learning, Linear and Logistic Regression Frontend Technical Skills: React, Angular Backend Technical Skills: Python Django, Java Spring Project 20 Technologies: AWS, Node JS, Aurora DB, React, Python, TypeScript, JavaScript, CICD pipelines, ECS containers and topics Frontend Technical Skills: React Backend Technical Skills: Python, Node.js Databases: Aurora DB Infrastructure: AWS, ECS containers Project 21 Technologies: Django, Elasticview Frontend Technical Skills: React Backend Technical Skills: Django Project 22 Technologies: Third Party APIs, Encryption and Decryption Algorithms Frontend Technical Skills: Angular, React, Next.js Backend Technical Skills: Node.js, Express Project 23 Technologies: Java, React/TypeScript Frontend Technical Skills: React, Next JS, Google Auth Backend Technical Skills: Java Spring Framework Project 24 Technologies: Java, Python, SQL, MongoDB, Mongoose, Passport, React and Express Frontend Technical Skills: React JS (Beginner level, Self-rated 7/10) Backend Technical Skills: Java, Python, SQL (Self-rated 7/10) Databases: MongoDB, SQL Infrastructure: No information provided Project 25 Technologies: API, Event-based system Frontend Technical Skills: Reactjs Backend Technical Skills: Node JS, TypeScript, JavaScript Databases: Postgre SQL Infrastructure: Flutter Project 26 Technologies: React, React Native Frontend Technical Skills: React, React Native Backend Technical Skills: Not experienced, but a quick learner Project 27 Technologies: Fitbit API, Isolation Forest Algorithm, Email Service Frontend Technical Skills: React Backend Technical Skills: Express, JavaScript Project 28 Technologies: Node JS, Puppeteer Frontend Technical Skills: JavaScript, React, Angular Backend Technical Skills: Node JS, Express, Python, Django Infrastructure: AWS Project 29 Technologies: Java, PostgreSQL Frontend Technical Skills: React Backend Technical Skills: Java Databases: PostgreSQL Project 30 Technologies: React JS, Node JS, Express JS, MongoDB Frontend Technical Skills: HTML, CSS, JavaScript, jQuery Backend Technical Skills: PHP Codeigniter, Django Databases: MongoDB Infrastructure: Not specified Project 31 Technologies: Python Django, Flask, Spring Boot Frontend Technical Skills: ReactJS Backend Technical Skills: Python Django, Flask, Spring Boot Project 32 Technologies: Node JS, JavaScript Frontend Technical Skills: Angular, React, Next js Backend Technical Skills: Node.js, Python Django Databases: Postman Project 33 Technologies: Machine Learning, Random Forest, Extra Trees Regressor, Light Gradient Boosting Frontend Technical Skills: React JS Backend Technical Skills: Node JS, Express JS Databases: Not mentioned Infrastructure: Not mentioned Project 34 Technologies: CA framework, Python APIs, React Frontend Technical Skills: React Backend Technical Skills: Python, Node.js Databases: Not mentioned Infrastructure: Not mentioned Project 35 Technologies: Node JS, TypeScript, MongoDB Frontend Technical Skills: Not Specified Backend Technical Skills: Node JS Databases: MongoDB Infrastructure: Not Specified Project 36 Technologies: Java, Retrofit, MVC pattern Frontend Technical Skills: React Native Backend Technical Skills: Java Databases: Not mentioned Infrastructure: Not mentioned Project 37 Technologies: Multicast graded CNN model, Hybrid recommender system Frontend Technical Skills: Not mentioned Backend Technical Skills: Back-end frameworks and APIs Databases: Not mentioned Infrastructure: Not mentioned Project 38 Technologies: Java, JavaScript, Android app development, Firebase, Node.js, MongoDB, Postman Frontend Technical Skills: React, HTML, CSS Backend Technical Skills: Node.js Databases: MongoDB, Firebase Infrastructure: Firebase Project 39 Technologies: React JS, Node JS, HTML, CSS, JavaScript, EJS Frontend Technical Skills: React JS, HTML, CSS, JavaScript, EJS Backend Technical Skills: Node JS Databases: Not Mentioned Infrastructure: Not Mentioned Project 40 Technologies: Javascript, SQL, Report Labs, React, Python Django, Java, Spring Boot, MySQL Frontend Technical Skills: React, HTML, CSS, JavaScript Backend Technical Skills: Python Django, Java, Spring Boot Databases: MySQL, Sequel Lite Project 41 Technologies: DuckDuckGo API, React Native, TypeScript Frontend Technical Skills: React Native Backend Technical Skills: Prayat Databases: Not mentioned Infrastructure: Not mentioned Project 42 Technologies: HTML, CSS, JavaScript, Tableau, Power BI, SQL, C++ Frontend Technical Skills: HTML, CSS, JavaScript, React JS Backend Technical Skills: None mentioned Databases: SQL Infrastructure: None mentioned Project 43 Technologies: Decentralized anomaly detection system, machine learning, attention mechanism Frontend Technical Skills: Angular, React, Next js Backend Technical Skills: Java, Spring Boot, JavaScript API Databases: Not mentioned Infrastructure: Not mentioned Project 44 Technologies: Azure APIs and SAS fulfillment APIs Backend Technical Skills: Azure APIs and SAS fulfillment APIs Databases: SQL and NoSQL Project 45 Technologies: Java, AWS DynamoDB Frontend Technical Skills: Learning React.js Backend Technical Skills: Java Databases: AWS DynamoDB Infrastructure: AWS Project 46 Technologies: HTML, CSS, JavaScript, React JS, Python Django, Express Frontend Technical Skills: HTML, CSS, JavaScript, React JS Backend Technical Skills: Python Django, Express Databases: Not mentioned Infrastructure: Not mentioned Project 47 Technologies: PHP, JavaScript, jQuery, HTML, CSS, Bootstrap, MySQL, Node JS, Express JS, MongoDB Frontend Technical Skills: Bootstrap, JavaScript, jQuery Backend Technical Skills: PHP, Node.js, Express.js Databases: MySQL, MongoDB Infrastructure: Not Mentioned Project 48 Technologies: Python, Django, HTML, CSS, JavaScript Frontend Technical Skills: Angular, React, Next js Backend Technical Skills: Python Django, ASP.NET Project 49 Technologies: KN algorithm, Flutter, Dart, Firebase Frontend Technical Skills: React Backend Technical Skills: Node.js Project 50 Technologies: React, Node.js, API development Frontend Technical Skills: React Backend Technical Skills: Node.js Databases: MongoDB Infrastructure: Not mentioned ";
    let data2 = "Project 51 Technologies: Machine Learning, Smart Analysis Frontend Technical Skills: Not Specified Backend Technical Skills: Django Databases: Not Specified Infrastructure: Not Specified Project 52 Technologies: React, Django Frontend Technical Skills: React Backend Technical Skills: Django Databases: Not Mentioned Infrastructure: Not Mentioned Project 53 Technologies: Angular, React, Next.js, Python Django, Express JS Frontend Technical Skills: Angular, React, Next.js Backend Technical Skills: Python Django, Express JS Databases: Not Mentioned Infrastructure: Not Mentioned Project 54 Technologies: MongoDB, Express JS, Node JS, Java Frontend Technical Skills: Angular, React, Next.js Backend Technical Skills: Python Django, Node.js Databases: MongoDB Infrastructure: Not Mentioned Project 55 Technologies: Solidity Frontend Technical Skills: React.js Backend Technical Skills: Node.js Databases: MongoDB Infrastructure: Not Provided Project 56 Technologies: NLTK library, Text BLOB and SVC Frontend Technical Skills: Not Mentioned Backend Technical Skills: Python Databases: Not Mentioned Infrastructure: Not Mentioned Project 57 Technologies: React Jsonschema, Material React Table, Promises, Batch Functions Frontend Technical Skills: React, CJS, Redux, HTML, CSS Backend Technical Skills: Python Databases: Unknown Infrastructure: Messenger, Python, and machine learning Project 58 Technologies: TypeScript, Node.js Frontend Technical Skills: Angular Backend Technical Skills: Node.js Databases: Not Mentioned Infrastructure: Not Mentioned Project 59 Technologies: React, Angular, Next.js, Python, Django, Flask, MongoDB, MySQL Frontend Technical Skills: React, Angular, Next.js Backend Technical Skills: Python, Django, Flask Databases: MongoDB, MySQL Infrastructure: Not Provided Project 60 Technologies: React, Python, SQL, Java, C Frontend Technical Skills: React Backend Technical Skills: Python Flask Databases: SQL Project 61 Technologies: HTML, Form groups, S3 bucket Frontend Technical Skills: Angular, React, Next.js Backend Technical Skills: Spring Boot, Django Databases: MySQL Infrastructure: Engine X Project 62 Technologies: Python, Django, Django Rest Framework Frontend Technical Skills: No information provided Backend Technical Skills: Python, Django, Django Rest Framework Databases: No information provided Infrastructure: No information provided Project 63 Technologies: Lambda, AWS, API gateway, React Frontend Technical Skills: React, Redux Backend Technical Skills: Node.js, Python Django Databases: Not mentioned Infrastructure: AWS Project 64 Technologies: Django, React, Alpha Vantage API Frontend Technical Skills: React Backend Technical Skills: Python Django Databases: Not mentioned Infrastructure: Not mentioned Project 65 Technologies: JavaScript, HTML, CSS, Google Fonts, React Icon, Responsiveness Frontend Technical Skills: React, TypeScript Backend Technical Skills: Node, Express Databases: Not Mentioned Infrastructure: Not Mentioned Project 66 Technologies: Digital Marketing Frontend Technical Skills: React, Angular Backend Technical Skills: Node Databases: Not Mentioned Infrastructure: Not Mentioned Project 67 Technologies: React, Next JS, Node JS, Express, SQLite, MongoDB, Prisma Frontend Technical Skills: React, Next JS Backend Technical Skills: Node JS, Express Databases: SQLite, MongoDB, Prisma Infrastructure: Not Mentioned Project 68 Technologies: Micro service architecture, Spring MVC, Spring Cloud Frontend Technical Skills: Interest in learning Backend Technical Skills: Java, Spring and Spring boot framework, REST APIs, micro services architecture Databases: Hadoop ecosystem Infrastructure: Micro services architecture Project 69 Technologies: TypeScript, FCM token, Socket IO, Google Descriptive APIs, Natural Language Processing Frontend Technical Skills: Not specified Backend Technical Skills: Python Databases: Not specified Infrastructure: Not specified Project 70 Technologies: Python, AI, ML Frontend Technical Skills: React JS Backend Technical Skills: Django, Python Databases: Not specified Infrastructure: Not specified Project 71 Technologies: Node JS, Express JS, MySQL, AWS, GitLab, Sonar, Swagger APIs Frontend Technical Skills: React Backend Technical Skills: Node.js, Express.js Databases: MongoDB, MySQL Infrastructure: AWS Project 72 Technologies: React JS, Akka microservices, Postgres, MongoDB, Sequel Frontend Technical Skills: Angular JS, React Backend Technical Skills: Scala, Akka, Play framework Databases: Postgres, MongoDB Infrastructure: Not specified Project 73 Technologies: Amazon SQS, Kafka Frontend Technical Skills: Angular, React, Next js Backend Technical Skills: Python Django Databases: Unspecified Infrastructure: Docker Project 74 Technologies: Postman, JUnit, threads, Jenkins, Docker Frontend Technical Skills: Angular, React, Next js Backend Technical Skills: Python Django, Spring Boot Infrastructure: Docker, Jenkins Project 75 Technologies: Cron job Frontend Technical Skills: React Backend Technical Skills: Not specified Databases: Not specified Infrastructure: Not specified Project 76 Technologies: JavaScript Frontend Technical Skills: JavaScript, React Backend Technical Skills: JavaScript Databases: Not Discussed Infrastructure: Not Discussed Project 77 Technologies: Django, Front-end and Back-end development Frontend Technical Skills: Basic knowledge Backend Technical Skills: Basic knowledge Databases: Not mentioned Infrastructure: Not mentioned Project 78 Technologies: ASP.NET, CSS, HTML, SQL Server Frontend Technical Skills: CSS, HTML, JavaScript, Ajax, Bootstrap Backend Technical Skills: ASP.NET MVC Databases: SQL Server Infrastructure: Not Mentioned Project 79 Technologies: Java, WS, AWS, Lambda Functions, Cloud Watch, MongoDB, Express, React, Node JS Frontend Technical Skills: ReactJS Backend Technical Skills: NodeJS, ExpressJS Databases: MongoDB Infrastructure: AWS Project 80 Technologies: EF Core API, Angular, Azure Frontend Technical Skills: Angular JS Backend Technical Skills: .Net, SQL Databases: SQL Infrastructure: Azure Project 81 Technologies: Machine learning, Linear regression Frontend Technical Skills: Undetermined Backend Technical Skills: Python, FAST API Databases: Undetermined Infrastructure: PyCharm Project 82 Technologies: JavaScript, External Libraries Frontend Technical Skills: Angular, React, Next js Backend Technical Skills: Python Databases: Not Mentioned Infrastructure: Not Mentioned Project 83 Technologies: Machine Learning, Cosine Similarity Frontend Technical Skills: React, HTML, CSS, JavaScript Project 84 Technologies: React, Node, Express, MongoDB, PostgreSQL, Django, Python Frontend Technical Skills: React Backend Technical Skills: Node, Express, Django, Python Databases: MongoDB, PostgreSQL Project 85 Technologies: MongoDB, Angular, JavaScript, CSS, HTML, Python Frontend Technical Skills: Angular, React, Next.js Backend Technical Skills: Python Django, Fast APIs, Notes Databases: MongoDB Infrastructure: Not Mentioned Project 86 Technologies: C++, Java, AWS, Spring Framework, J Unit, Machine Learning, Linux, AOP Frontend Technical Skills: JavaScript, React JS, HTML, CSS Backend Technical Skills: Node JS, Java, AWS, Spring Framework Databases: Not mentioned Infrastructure: AWS Project 87 Technologies: Open AI, Machine Learning Models, Python Libraries for Audio Conversion and Prompt Engineering Frontend Technical Skills: 4-5/10 Backend Technical Skills: Python Django, 7-8/10 Databases: Not Mentioned Infrastructure: Not Mentioned Project 88 Technologies: Java, AWS Lambda Frontend Technical Skills: React Backend Technical Skills: Node.js, Express.js Databases: MongoDB Infrastructure: AWS Project 89 Technologies: MongoDB, Node JS, JavaScript, JWT, React Native Frontend Technical Skills: Reactjs, React Native Backend Technical Skills: Node.js, Express Databases: MongoDB, PostgreSQL Infrastructure: Knowledge not specified Project 90 Technologies: Pega, Python Node JS, Theme Cosmos Frontend Technical Skills: Python Node JS Backend Technical Skills: No prior experience with backend frameworks Databases: Not mentioned Infrastructure: Not mentioned Project 91 Technologies: React, Next.js, Python Django, Node.js, Express.js Frontend Technical Skills: React, Next.js Backend Technical Skills: Python Django, Node.js, Express.js Databases: Unknown Infrastructure: Unknown Project 92 Technologies: Machine Learning, Front-end and Backend Frameworks, AWS Frontend Technical Skills: Unknown Backend Technical Skills: Unknown Databases: Unknown Infrastructure: AWS Project 93 Technologies: JavaScript, HTML, CSS, Bootstrap, Express JS, Node JS Frontend Technical Skills: React, Redux, HTML, JavaScript, CSS, Bootstrap Backend Technical Skills: Express JS, Node JS Databases: MongoDB Infrastructure: Not provided Project 94 Technologies: CSS, HTML, CSS, JavaScript, Python, MySQL Frontend Technical Skills: Angular, React, Next js Backend Technical Skills: No Experience Databases: MySQL Infrastructure: No Experience Project 95 Technologies: React JS, Redux, React Hooks Frontend Technical Skills: HTML, CSS, JavaScript, React JS Backend Technical Skills: Node JS, C&C Databases: Not provided Infrastructure: Not provided Project 96 Technologies: React JS, Node.js Frontend Technical Skills: React JS Backend Technical Skills: Node.js (Learning) Databases: Not Mentioned Infrastructure: Not Mentioned Project 97 Technologies: Mongoose, React JS, Node JS Frontend Technical Skills: React JS Backend Technical Skills: Node JS Databases: Mongoose Infrastructure: Not Mentioned Project 98 Technologies: Open pose, MRCP CNN, Pandas, scikit learn, Python Frontend Technical Skills: HTML, JavaScript, jQuery, CSS Backend Technical Skills: Python, Django Databases: MySQL, MSSQL Infrastructure: Not Mentioned Project 99 Technologies: React.js, Redux, Schema UI, Config one UI, Live Swiggy API, Conflict one UI Frontend Technical Skills: React.js Backend Technical Skills: Willing to learn Databases: Good understanding of data structures and algorithms Infrastructure: Not Mentioned Project 100 Technologies: Front-end and Back-end frameworks Frontend Technical Skills: 7.5/10 Backend Technical Skills: 08-Oct Databases: Not Mentioned Infrastructure: Azure DevOps ";
    const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
    });

    async function main() {
        const completion1 = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{"role":"user","content": `give me an array of project name "(no there word)" which uses that has the following technologies\n ${query} ${data1} `}]
        });
        const completion2 = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{"role":"user","content": `give me an array of project name "(no there word)" which uses the following technologies\n${query} ${data2} `}]
        });
        let ans1 = completion1.choices[0].message.content;
        let ans2 =  completion2.choices[0].message.content;
        let ans = ans1.concat(ans2);
        const completion3 = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{"role":"user","content": `extract all the project name in the form of array  ${ans} `}]
        });
        let finalAns = completion3.choices[0].message.content;
        finalAns = finalAns.substring(finalAns.indexOf('['), finalAns.indexOf(']') + 1);
        let projects = await Project.find({});
        const comp = (a,b)=>{
            let n1 = Number.parseInt(a.projectTitle.split(' ')[1]);
            let n2 = Number.parseInt(b.projectTitle.split(' ')[1]);
            return n1 - n2;
        }
        projects.sort(comp);
        let result = projects.filter( ({projectTitle}) => finalAns.includes(projectTitle));
        console.log(result);
        console.log(finalAns);
        res.status(200).send(result);
    }
    main();
});

module.exports = {
    getProjects,
    getProject,
    filterProject
};
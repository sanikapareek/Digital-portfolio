const header={
    logo:"./assets/logo.png",
    logo_href:"#",
    nav:[
        {
            "title":"Profile",
            "href":"#profile"
        },
        {
            "title":"Education",
            "href":"#education"
        },
        {
            "title":"Achievements",
            "href":"#achievements"
        },
        {
            "title":"Projects",
            "href":"#project"
        },
        {
            "title":"Internship",
            "href":"#internship"
        }
    ]
}

const banner={
    name:"Sanika Pareek",
    position:"Student of MIT Academy of Engineering",
    bannerBackgroundImg:"./assets/painted-solid-concrete-wall-textured-backdrop.jpg"
}

const profileImage={
    profileImage:"./assets/sanika.jpeg"
}

const profile={
    profileHeading:"Profile",
    section:[
        {
            heading:"About Me",
            paragraph:"I'm Sanika Pareek, a 21 year graduate from MIT Academy of Engineering, Pune. I'm a tech fanatic and a certified Azure AI 900. I have an experience of working on Fusion 360 and Matlab. I have a keen fascination for the advancing fields of Artificial Intelligence and Machine Learning."
        },
        {
            heading:"Details",
            paragraph:[
                {
                    title:"Skills",
                    value:["Java","MySQL"]
        
                },
                {
                   title:"Hobbies",
                   value:["Painting"]
        
                },
                {
                    title:"Known Languages",
                    value:["English","Hindi","Marathi"]
        
                },
                {
                    title:"Contact Me",
                    value:[
                        {
                            logo_class:"fa fa-github",
                            logoLink:"https://github.com/sanikapareek"
                        },
                        {
                            logo_class:"fa fa-linkedin",
                            logoLink:"https://www.linkedin.com/mwlite/in/sanika-pareek-50548120a"
                        }
                    ]
        
                }
                
            ]
        }
       
    ],

    
}

const education={
    educationHeading:"Education",
    educationInfo:[{
        educationHeading:"B.Tech",
        institutionHeading:"Name of College",
        institutionName:"MIT Academy of Engineering",
        streamHeading:"Stream",
        streamType:"Computer Science",
        marksType:"CGPA",
        marks:"9.43",
        yearHeading:"Year of Passing",
        year:"2023"
    },
    {
        educationHeading:"CBSE- XII",
        institutionHeading:"Name of School",
        institutionName:"DAV Public School, Pune",
        streamHeading:"Stream",
        streamType:"Science",
        marksType:"Percentage",
        marks:"86.4%",
        yearHeading:"Year of Passing",
        year:"2019"
    },
    {
        educationHeading:"CBSE- X",
        institutionHeading:"Name of School",
        institutionName:"DAV Public School, Pune",
        streamHeading:"Stream",
        streamType:"All subjects",
        marksType:"CGPA",
        marks:"10",
        yearHeading:"Year of Passing",
        year:"2017"
    }]
}

const achievements={
    achievementHeading:"Achievements",
    achievements:["Bagged second prize in 'VirtualStorm: Hackathon 1.0' organized by 'IIM Sirmaur' in the year 2022.","Bagged third prize in 'Datathon' sponsored by 'Bajaj Finserv' held at MITAOE in the year 2022."]
}

const project={
    projectHeading:"Projects",
    projects:[
        {
            projectName:"YouTube Recommendation System",
            skillHeading:"Skills",
            skills:["Machine Learning", "Python"],
            description:"Analysing Youtube comments, likes, dislikes and no. of views and then concluding whether the video is watchable or not.",
        },
        {
            projectName:"Placement Preparation Portal",
            skillHeading:"Skills",
            skills:["Angular", "MySQL", "Node.js"],
            description:"Single platform for practicing both coding questions and aptitude questions."
        },
        {
            projectName:"Augmented Reality based App for Education",
            skillHeading:"Skills",
            skills:["Unity3D"],
            description:"AR based Marathi Alphabets App for pre-primary students in rural India to enhance teaching-learning process."
        },
        {
            projectName:"English Speech to Indian Sign Language",
            skillHeading:"Skills",
            skills:["NLP", "Deep Learning", "Python"],
            description:"English Speech to Indian Sign Language translator using NMT based architecture to generate pose estimated video."   
         },
         {
            projectName:"Food Delivery Website",
            skillHeading:"Skills",
            skills:["Angular", "MySQL", "Node.js"],
            description:"It is a website for selling and buying homemade food to help homemakers."   
         },
         {
            projectName:"Vehicle Lane Detection",
            skillHeading:"Skills",
            skills:["Computer Vision", "Python"],
            description:"To check if the lane is being followed and give suggestion on lane keeping."  
         },         
    ]
}

const internship={
    internshipHeading:"Internships",
    internships:[
        {
            companyName: "Contentstack",
            companyLogo:"./assets/contentstackLogo.jpeg",
            year: "2023",
            duration:"5 January 2023 - Present",
            Position: "Assosicate Software Developer Intern"

        },
        {
            companyName: "TechsWord Solution",
            companyLogo:"./assets/techswordLogo.jpeg",
            year: "2022",
            duration:"15 June 2022 - 15 August 2022",
            Position: "Web Development Intern"

        },
        {
            companyName: "MIT Academy of Engineering",
            companyLogo:"./assets/mitLogo.jpeg",
            year: "2021",
            duration:"1 June 2021 - 31 July 2021",
            Position: "Reserach Work"
        }
    ]
}
const footer={
    footer:"Copyright @Sanika Pareek 2023"
}

export {header,banner,profileImage,profile,education,achievements,project,internship,footer}
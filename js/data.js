const data = [
    // profiles start
    {
        id: 1,
        profile: [
            {
                img: "https://i.ibb.co/fnB0fr5/me.png",
                name: "Safikur Rahman",
                designation: 'Software Developer', 
                copyRight: "All right reserved",
                download: "Download CV",
                socialLinks: [
                    {
                        icon: "fa-brands fa-github",
                        social: "https://github.com/Safik-1475"
                    },
                    {
                        icon: "fa-brands fa-stack-overflow",
                        social: "https://stackoverflow.com/users/18388144/safi"
                    },
                    {
                        icon: "fa-brands fa-linkedin",
                        social: "https://www.linkedin.com/in/safikur-rahman-54a82b233/"
                    },
                    {
                        icon: "fa-brands fa-instagram",
                        social: "https://www.instagram.com/mohammadsafi1475/"
                    },
                    {
                        icon: "fa-brands fa-facebook",
                        social: "https://web.facebook.com/Mohammed.Safi1475"
                    },
                ]
            },
        ],
    },
    // profiles end
    // navigation
    {
        id: 2,
        bars: "fa-solid fa-bars",
        links: [
            {
                icon: "fa-solid fa-house-user",
                link: "Home",
                href: "home"
            },
            {
                icon: "fa-solid fa-user",
                link: "About",
                href: "about"
            },
            {
                icon: "fa-solid fa-code",
                link: "skills",
                href: "skills"
            },
            {
                icon: "fa-solid fa-graduation-cap",
                link: "Resume",
                href: "resume"
            },
            {
                icon: "fa-solid fa-diagram-project",
                link: "Projects",
                href: "projects"
            },
            {
                icon: "fa-solid fa-envelope",
                link: "Contact",
                href: "contact"
            },
        ],
        arrow_nav: [
            { icon: "fa-solid fa-angle-right" },
            { icon: "fa-solid fa-angle-left" }
        ]
    },
    // navigator end
    // home start
    {
        id: 3,
        home: [
            {
                bg: "bg.jpg",
                name: 'Safikur Rahman',
                id: 2,
                frontend: "Fronted Developer",
                backend: "Developer",
            }
        ],
    },
    // home end
    // about start
    {
        id: 4,
        pageTitle: "Who am I",
        ques: "(?)",
        about: [
            {
                aboutDesc: "I am currently a student at Programming Hero. focussing on large-scale distributed software architectures. Previously, I Have worked as a Software Developer. And I have done lot of E-commerce Projects. Outside work, I'm Self learner, when got free time, I try learn new something based on JavaScript  React Js Node Js MongoDB and Redux. because JavaScript is my Crash.",
                aboutInfo: [
                    {
                        title: "Age :",
                        value: 21
                    },
                    {
                        title: "Residence :",
                        value: " Bangladesh"
                    },
                    {
                        title: "Address :",
                        value: " Chittagong"
                    },
                    {
                        title: "Email :",
                        value: " safikurrahman7514@gmail.com"
                    },
                    {
                        title: "Phone :",
                        value: " +8801 71831 7514"
                    },
                ],
                subTitle: "Fun",
                fact: "Facts",
                funFact: [
                    {
                        icon: "fa-regular fa-heart",
                        title: "Happy Clients",
                        value: 523,
                    },
                    {
                        icon: "fa-regular fa-clock",
                        title: "Weekly Works Hours",
                        value: 74,
                    },
                    {
                        icon: "fa-regular fa-star",
                        title: "Awards Won",
                        value: 2,
                    },
                ],
            },
        ],
    },
    // about end
    // resume start
    { 
        id: 5,
        pageTitle: "Resum",
        e:"e",
        resume: [
            {
                subTitle: "Education",
                education: [
                    {
                        passingYear: 2020,
                        course: "Programming Hero",
                        title: "Fronted Development",
                        educationInfo: "HTML. CSS. JAVASCRIPT (REACT JS JAVASCRIPT LIBRARY). CSS FRAMEWORK (BOOTSTRAP TAILWIND-CSS) FIREBASE",
                    },
                    {
                        passingYear: 2021,
                        course: "Learn With Sumit",
                        title: "Backend development",
                        educationInfo: "NODE JS. EXPRESS JS. MONGODB",
                    },
                ]
            },
             {
                subTitle: "Experience",
                experience: [
                    {
                        year: 2020,
                        current: "Nasa",
                        title: "Fronted Engineer",
                        experienceInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        year: 2021,
                        current: "Amazon Web Services",
                        title: "Backend Engineer",
                        experienceInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
                    },
                ]
            },
            {
                subTitle: "Certificates",
                certificate: [
                    {
                        img: "certificate.jpg",
                        title: "undefined",
                        membershipId: "xxxxx",
                        date: "april 2021",
                    },
                    {
                        img: "certificate.jpg",
                        title: "undefined",
                        membershipId: "xxxxx",
                        date: "april 2021",
                    },
                ],
            },
        ]
    },
    // resume end
    // recent start
    {
        id: 6,
        pageTitle: "Recent Works",
        recent: [
            {
                title: "video gallery",
                img: "https://i.ibb.co/9GBv9BF/video-gallery.png",
                lineSide :"view live",
                source:"source code",
                screenshot:"project screenshot"
            },
            {
                title: "flight booking",
                img: "https://i.ibb.co/71RxJfD/travel.png",
                lineSide :"view live",
                source:"source code",
                screenshot:"project screenshot"
            },
            {
                title: "book store ",
                img: "https://i.ibb.co/JkYHbSM/book-store.png",
                lineSide :"view live",
                source:"source code",
                screenshot:"project screenshot"
            },
            {
                title: "blog application",
                img: "https://i.ibb.co/zxG991K/blog.jpg",
                lineSide :"view live",
                source:"source code",
                screenshot:"project screenshot"
            },
            {
                title: "Product Cart",
                img: "https://i.ibb.co/NVrQqj9/Screenshot-3.png",
                lineSide :"view live",
                source:"source code",
                screenshot:"project screenshot"
            },
            {
                title: "urban rides share",
                img: "https://i.ibb.co/XWKnqDM/urban-riders.png",
                lineSide :"view live",
                source:"source code",
                screenshot:"project screenshot"
            },
            {
                title: "volounter network",
                img: "https://i.ibb.co/vzbkzjB/volounter-network.png",
                lineSide :"view live",
                source:"source code",
                screenshot:"project screenshot"
            },
            {
                title: "air clone ",
                img: "https://i.ibb.co/qr7CM2p/air-clone.png",
                lineSide :"view live",
                source:"source code",
                screenshot:"project screenshot"
            },
            {
                title: "doctors portal",
                img: "https://i.ibb.co/T88mzkF/doctors-portal.png",
                lineSide :"view live",
                source:"source code",
                screenshot:"project screenshot"
            },
        ]
    },
    // recent end
    // Skills start
    {
        id: 7,
        pageTitle: "Skill",
        s: "s",
        skills: [
            {
                frontend: "Frontend Skills",
                frontendTech: ["html(5)", "css(3)", "bootstrap", "tailwind-css", "daisy UI", "javascript", "react js", "react router dom", "JSON", "ajax", "redux", "rest API","Sass"]
            },
            {
                backend: "Backend Skills",
                backendTech: ["mongoDB", "node js", "express js", "firebase", "typescript"]
            },
        ],
    },
    // Skills end
    // contact start
    {
        id: 8,
        pageTitle: "get in touc",
        h: "h",
        contact: [
            { id: 1, contactInfo: "Chittagong", icon: "fa-solid fa-location-dot" },
            { id: 2, contactInfo: "+8 80 17 18 31 75 14 ", icon: "fa-solid fa-phone" },
            { id: 3, contactInfo: "safikurrahman1475@gmail.com", icon: "fa-solid fa-envelope" },
            { id: 4, contactInfo: "freelance available ", icon: "fa-solid fa-check" }, ,
        ]
    },
    // contact end

];
export default data;
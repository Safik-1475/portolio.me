import data from './data.js'

/************** Selected All HTML Elements Here  **************/
// Preloader display block
const preloader = document.querySelector(".preloader");
preloader.style.display="block";
// Header 
const siteHeader = document.getElementById("site-header");
const headerPhoto = document.querySelector(".header-photo");
const headerTitles = document.querySelector(".header-titles");
const headerButton = document.querySelector(".header-btn");
const toggleBtn = document.querySelector(".toggle-menu");
// const toggleSpan = document.querySelector(".toggle-menu > span");
const arrowIcon = document.querySelector(".arrow-icon");
const titleBlock = document.querySelector(".title-block");
// About Element
const aboutPageTitle = document.querySelector(".page-title");
const personalInfo = document.querySelector(".ps-info");
const list = document.querySelector(".list");
const funRow  = document.querySelector(".fun-fact-row");
const funFactTitle = document.querySelector(".fun-fact-title");
// Skills Element 
const skillsPageTitle = document.querySelector(".skills-page>.page-title");
const skillsBlockTitle = document.querySelector(".skill-title");
const backendIcon = document.querySelector(".backend-icon");
const skillChartList = document.querySelector(".frontend-chart-list");
const skillChartListBackend = document.querySelector(".backend-chart-list");
// Resume Element 
const resumePageTitle = document.querySelector(".resume-page>.page-title");
const educationTitle = document.querySelector(".edu-title");
const experienceTitle = document.querySelector(".exp-title");
const certificatesTitle = document.querySelector(".cert-title");
const educationContent = document.querySelector(".education");
const timeLineItem1 =  document.querySelector(".time-line-1");
const timeLineItem2 =  document.querySelector(".time-line-2");
// Projects Elements 
const projectPageTitle = document.querySelector(".projects-page>.page-title");
const projectsRow = document.querySelector(".row-container");
// Contacts Elements
const contactPageTitle = document.querySelector(".contact-page>.page-title");
const contactItem = document.querySelector(".contact-info-container");

/************** Selected All HTML Elements Ends Here  **************/

/************** Header Content **************/
const headerContent = data[0].profile[0];
headerPhoto.innerHTML = `
    <img src="${headerContent.img}" alt="photo"/>
`;
headerTitles.innerHTML = `
    <h2>${headerContent.name}</h2>
    <h4>${headerContent.designation}</h4>
`;
headerButton.innerHTML = `
    <a href="../img/resume.pdf" target="_blank" class="btn-primary">${headerContent.download}</a>
`;
/************** Header Content End **************/

/************** Header Navigation **************/
const mainMenu = document.querySelector(".main-menu");
const menuLinks = data[1].links;
const link = menuLinks.map(link=>{
    return `
    <li>
        <a href="#${link.href}" class="link">
            <i class="${link.icon}"></i>
            <span>${link.link}</span>
        </a>
    </li>
    `
});
mainMenu.innerHTML = link.join('');

/************** Header Navigation End **************/

/************** Social Profiles **************/
const socialProfiles = document.querySelector(".social-links");
const socialLinks = data[0].profile[0].socialLinks;
const socialLink = socialLinks.map(link=>{
    return `
        <li>
            <a href="${link.social}" target="blank">
                <i class="${link.icon}"></i>
            </a>
        </li>
    `
});
const socialLinkSpace = socialLink.join('');
socialProfiles.innerHTML = socialLinkSpace;
/************** Social Profiles End **************/

/************** Footer Content and Dynamic Full Year **************/
const footer = document.querySelector(".footer");
const getYear = new Date().getFullYear();
footer.innerHTML = `
    <p>${headerContent.copyRight} <span> : ${getYear}</span> </p>
`;
/************** Footer Content and Dynamic Full Year end **************/

/************** Handle Toggle Menu **************/
toggleBtn.addEventListener("click",()=>{
    // if(siteHeader.classList.contains(`mobile-menu-hide`)){
    //     siteHeader.classList.remove('mobile-menu-hide');
    // }else{
    //     siteHeader.classList.add('mobile-menu-hide')
    // }
    siteHeader.classList.toggle("mobile-menu-hide");

})
/************** Handle Toggle Menu end **************/

/************** Arrow Navigation Button **************/
const arrowNavIcon = data[1].arrow_nav;
// console.log(arrowNavIcon);
const icon = arrowNavIcon.map(icon=>{
    return `
        <li>
            <i class="${icon.icon}" ></i>
        </li>
    `;
})
arrowIcon.innerHTML = icon.join('');
/************** Arrow Navigation Button end **************/


/************** Content Area **************/
// Home Title Content
const titleText = data[2].home[0];
titleBlock.innerHTML = `<h2>${titleText.name}</h2>`;
const aboutTitleText = data[3];
aboutPageTitle.innerHTML = `<h2>${aboutTitleText.pageTitle} <span>${aboutTitleText.ques}</span> </h2>`;
//Preloader None Here
preloader.style.display="none";
// About Description 
const psInfo = data[3].about[0];
personalInfo.innerHTML = `<p>${psInfo.aboutDesc}</p>`;
const aboutInfo = data[3].about[0].aboutInfo;
const info = aboutInfo.map(info=>{
    return `
    <li>
        <span class="title" >${info.title}</span>
        <span class="value" >${info.value}</span>
    </li>
    `;
});
const infoSpace = info.join("");
list.innerHTML = infoSpace;
// Fun Fact 
funFactTitle.innerHTML = `<h3>${psInfo.fact} <span>${psInfo.subTitle}</span></h3>`
const funContent = data[3].about[0].funFact;
 const funContentLoad = funContent.map(content=>{
    return `
    <div class="col-12 col-sm-4">
        <div class="fun-fact">
            <i class="${content.icon}"></i>
            <h4>${content.title}</h4>
            <span class="fun-fact-value">${content.value}</span>
        </div>
    </div>
    ` ;
});
const funSpace = funContentLoad.join('');
funRow.innerHTML = funSpace; 

// Resume Page Load Data 
const skillsTitle = data[6];
skillsPageTitle.innerHTML = `<h2>${skillsTitle.pageTitle}<span>${skillsTitle.s}</span></h2>`;
// Frontend Info Here 
const skillsContentBlockTitle = data[6].skills[0];
skillsBlockTitle.innerHTML = `<h4>${skillsContentBlockTitle.frontend}</h4>`;

const skillsContent = data[6].skills[0].frontendTech;
const skillsContentLoad = skillsContent.map(skill=>{
    return `
        <li>
            <span>${skill}</span>
        </li>
    `;
});
skillChartList.innerHTML = skillsContentLoad.join('');

// Backend Info Here 
const  skillsBackendIcon = data[6].skills[1];
backendIcon.innerHTML = `<h4>${skillsBackendIcon.backend}</h4>`;

const backendSkills = data[6].skills[1].backendTech;
const backendSkillsLoad = backendSkills.map(skill=>{
    return `
        <li>
            <span>${skill}</span>
        </li>
    `;
});
skillChartListBackend.innerHTML = backendSkillsLoad.join('');

// Resume Page Content Load 
const resumePageTitleText = data[4];
// Page Title 
resumePageTitle.innerHTML = `<h2>${resumePageTitleText.pageTitle}<span>${resumePageTitleText.e}</span></h2>`;
// Title Block 
const titleBlockTextEducation = data[4].resume[0].subTitle;
const titleBlockTextExperience = data[4].resume[1].subTitle;
const titleBlockTextCertificate = data[4].resume[2].subTitle;
educationTitle.innerHTML = `<h4>${titleBlockTextEducation}</h4>`;
experienceTitle.innerHTML = `<h4>${titleBlockTextExperience}</h4>`;
certificatesTitle.innerHTML = `<h4>${titleBlockTextCertificate}</h4>`;
// Education 
const education = (data[4].resume[0].education);
const educationInfo = education.map(info=>{
    return `
    <div class="time-line-item">
        <div class="left-part">
            <h6 class="item-period">${info.passingYear}</h6>
            <span>${info.course}</span>
        </div>
        <div class="divider"></div>
        <div class="right-part">
            <h5>${info.title}</h5>
            <p>${info.educationInfo}</p>
        </div>
    </div>
    `
});
timeLineItem1.innerHTML = educationInfo.join("");
const experience = data[4].resume[1].experience;
const experienceInfo = experience.map(info=>{
    return `
    <div class="time-line-item">
        <div class="left-part">
            <h6 class="item-period">${info.year}</h6>
            <span>${info.current}</span>
        </div>
        <div class="divider"></div>
        <div class="right-part">
            <h5>${info.title}</h5>
            <p>${info.experienceInfo}</p>
        </div>
    </div>
    `
});
timeLineItem2.innerHTML = experienceInfo.join("");

// Projects Pages Content Load
const projectTitle = data[5].pageTitle;
projectPageTitle.innerHTML = `<h2>${projectTitle}</2>`;
const projectsContent = data[5].recent;
const projectContentItem = projectsContent.map(content=>{
    return `
    <div class="col-12 col-sm-6 co-md-4">
        <figure>
            <div class="project-img-item">
                <img src="${content.img}" alt="">
                <span>${content.screenshot}</span>
            </div>
            <div class="project-info">
                <h6>${content.title}</h6>
                <a href="#">${content.lineSide}</a>
                <a href="#">${content.source}</a>
            </div>
        </figure>
    </div>
    `;
});
projectsRow.innerHTML = projectContentItem.join("");

// Contact Page Content Load
const contactTitle = data[7];
contactPageTitle.innerHTML = `<h2>${contactTitle.pageTitle}<span>${contactTitle.h}</span></h2>`;
const contactInfo = data[7].contact;
const contactInfoContent = contactInfo.map(content=>{
    return `
    <div class="contact-item">
        <i class="${content.icon}"></i>
        <h4>${content.contactInfo}</h4>
    </div>
    `
});
contactItem.innerHTML = contactInfoContent.join("");

/************** Content Area End **************/
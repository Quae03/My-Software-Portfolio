// Fade in when page loads
window.addEventListener('DOMContentLoaded', ()=>{
    document.body.classList.add('fade-in');
});

// Data to display personal projects
const personalProjectData = [
    {
        image: 'images/REST-Countries-API.png',
        title: 'REST Countries API',
        desc: 'API displaying country data, User search functionality, State control(light and dark themes), Result filtering',
        languages: 'HTML, CSS, React JSX',
        linkToSite: 'https://wrldcountries.netlify.app/',
        linkToRepo: 'https://github.com/Quae03/rest-countries-api'
    },
    {
        image: 'images/Contact-Form.png',
        title: 'Contact Form with Success Message',   
        desc: 'HTML & Javascript form validation',
        languages: 'HTML, CSS, Javascript',
        linkToSite: 'https://quae03.github.io/contact-form-with-success-message/',
        linkToRepo: 'https://github.com/Quae03/contact-form-with-success-message'
    },
    {
        image: 'images/Browser-Extensions-Manager.png',   
        title: 'Browser Extensions Manager', 
        desc: 'CSS Grid, Javascript dynamic insertion and state management',
        languages: 'HTML, CSS, Javascript',
        linkToSite: 'https://quae03.github.io/browser-extensions-manager/',
        linkToRepo: 'https://github.com/Quae03/browser-extensions-manager'
    },
    {
        image: 'images/Mortgage-Calculator.png',
        title: 'Mortgage Calculator',
        desc: 'CSS Grid, HTML + Javascript form validation, React.js state management',
        languages: 'HTML, CSS, Javascript',
        linkToSite: 'https://mortgage-calculator-page.netlify.app/',
        linkToRepo: 'https://github.com/Quae03/mortgage-form-calculator'
    }
];

// Data to display projects made for clients

const clientProjectData = [
    {
        image: 'images/Oriental-Printers.png',   
        title: 'Oriental Printers',
        desc: 'Google Maps embed, HTML + Javascript form validation & email functionality<br>Media queries for responsive design',
        languages: 'HTML, CSS, Javascript',
        linkToSite: 'https://oriental-printers.site/',
        linkToRepo: 'https://github.com/Quae03/oriental-printers-webpage'
    }
];

// Reference HTML containers

const personalProjectContainer = document.getElementById('personalProjects');
const clientProjectContainer = document.getElementById('clientProjects');

// Display data

displayData = (data, htmlContainer)=> {
    data.map((project) => {
        htmlContainer.innerHTML += `
        <div class="project hidden">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <p>${project.languages}</p>
            <a href="${project.linkToSite}">Link To Site</a>
            <a href="${project.linkToRepo}">Github Repository</a>
        </div>
        `;
    });
}

displayData(personalProjectData, personalProjectContainer);
displayData(clientProjectData, clientProjectContainer);


// Navigate to projects onClick

const personalNavBtn = document.getElementById('personalProjectsNavBtn');
const clientNavBtn = document.getElementById('clientProjectsNavBtn');

personalNavBtn.addEventListener('click', ()=>{
    document.getElementById('personalProjectsSect').scrollIntoView({behavior: 'smooth'});
});

clientNavBtn.addEventListener('click', ()=>{
    document.getElementById('clientProjectsSect').scrollIntoView({behavior: 'smooth'});
});


// Observer code for content to fade in as we scroll into view

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element)=> observer.observe(element));

document.getElementById('topBtn').addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior: 'smooth'});
});
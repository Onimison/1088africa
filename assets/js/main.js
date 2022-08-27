// Team Data

const Team = [

    {
        id: 1,
        title: "Momoh Mohammed Fayd",
        img: "assets/img/fayd.jpg",
        job: "Lead Graphics Designer and Brand Strategist",
    },
    {
        id: 2,
        title: "Bala Abdulfattah Emi",
        img: "assets/img/abdul.jpg",
        job: "Content Writer, Magazine Project Manager, and Marketing lead",
    },
    {
        id: 3,
        title: "Esinone Abraham Marhor",
        img: "assets/img/abee.jpg",
        job: "Content Writer, Events Project Manager, and Editor",
    },
    {
        id: 4,
        title: "Oladipupo Temilade Victoria",
        img: "assets/img/temmy.jpg",
        job: "Content Writer and Finance Manager",
    },
    {
        id: 5,
        title: "Zaka Lawrence Ahuche",
        img: "assets/img/.jpg",
        job: "Graphic Designer",
    },
    {
        id: 6,
        title: "Bitrus Judah Tanko",
        img: "assets/img/",
        job: "Lead Photographer",
    },
    {
        id: 7,
        title: "Toluwani Ologun",
        img: "assets/img/tolu.jpg",
        job: "Content Writer and Digital Marketer",
    },
    {
        id: 8,
        title: "Egbuniwe Uchenna",
        img: "assets/img/enai.jpg",
        job: "Content Writer",
    },
    {
        id: 9,
        title: "Elekwechi Blessing",
        img: "assets/img/ebere.jpg",
        job: "Content Writer",
    },
    {
        id: 10,
        title: "Tobi Lawal",
        img: "assets/img/",
        job: "Content Writer and Digital Marketer",
    },
    {
        id: 11,
        title: "Faith Onyemaechi",
        img: "assets/img/faith.jpeg",
        job: "Content Writer",
    },

    {
        id: 12,
        title: "Abdulmumin Alhassan Alhaji",
        img: "assets/img/alhaji.jpg",
        job: "Web Developer",
    },
    {
        id: 13,
        title: "Bashir Onimisi",
        img: "assets/img/IMG_7311.jpeg",
        job: "Content Writer, Brand Strategist and Web Developer",
    },

];

const skillsContainer = document.querySelector('.skills-container');

window.addEventListener('DOMContentLoaded', () => {
    theTeam(Team);
})
function theTeam(teamInfo) {
    let displayTeam = teamInfo.map((info) => {
        return `
        <div class="skills-content ">
            <div class="skills-header">
                <i class="uil uil-user-circle skills-icon"></i>
                <div>
                    <h1 class="skills-title">${info.title}</h1>
                    <p class="team-desc">${info.job}</p>
                </div>
                
                </div>
                
                <div class="skills-list grid">
                <div class="skills-data">
                            <image class="team-img"  src="${info.img}" />
                        </g>
                    </svg>
                    
                </div>
            </div>

    </div>
        `
    });

    displayTeam = displayTeam.join("");

    skillsContainer.innerHTML = displayTeam;


}


/*==================== MENU SHOW Y HIDDEN ====================*/
const showMenu = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (showMenu) {
    showMenu.addEventListener('click', function () {
        navMenu.classList.add('show-menu')
    })
}
/*= ==== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', function () {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== Team Section ====================*/

const arrows = document.querySelectorAll('.home-scroll-arrow');

// skillsContent.forEach(function (content) {
//     // console.log(content);
//     const skillsHeader = document.querySelectorAll('.skills-header');
//     content.addEventListener('click', function () {
//         skillsContent.forEach((item) => {
//             if (item !== content) {
//                 item.classList.remove('skills-open')
//             }
//         })


//         content.classList.toggle('skills-open')
//     })

// })

// skillsContent.forEach(function (content) {
//     // console.log(content);
//     const skillsHeader = document.querySelectorAll('.skills-header');
//     content.addEventListener('click', function () {
//         skillsContent.forEach((item) => {
//             if (item !== content) {  
//                 item.classList.remove('skills-open')
//             }
//         })


//         content.classList.toggle('skills-open')
//     })

// })







const skillsContent = document.querySelectorAll('.skills-content');
const skillsHeader = document.querySelectorAll('.skills-header');

// skillsHeader.forEach(function (arr) {
//     arr.addEventListener('click', function (e) {
//         const itemClass = e.parentNode
//         itemClass.classList.toggle('skills-content skills-open')
//     })
// })



function toggleSkills() {
    let itemClass = this.parentNode.ClassName
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close'
    }
    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open'
    }

}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification-active')
        })
        target.classList.add('qualification-active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification-active')

        })
        tab.classList.add('qualification-active')
    })
})

/*==================== SERVICES MODAL ====================*/
const serviceModal = document.querySelectorAll('.services-modal');
const modalButtons = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');

let theModal = function (modalClick) {
    serviceModal[modalClick].classList.add('active-modal')
}

modalButtons.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        theModal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        serviceModal.forEach((serviceView) => {
            serviceView.classList.remove('active-modal')
        })
    })
})
/*==================== MAGAZINE SWIPER  ====================*/
let swiperPortfolio = new Swiper('.magazine-container', {
    cssMode: true,
    loop: true,


    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});


/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
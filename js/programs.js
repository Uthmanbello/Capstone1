    // =======================================
    //             Programs
    // ========================================
const programArr = [
    {
        id: 0,
        icon: '<i class="fa-brands fa-python fa-3x ash"></i>',
        title: 'Python',
        description: 'Python is a high-level, general-purpose programming language. It is often described as a "batteries included" language.',
    },
    {
        id: 1,
        icon: '<i class="fa-brands fa-html5 fa-3x ash"></i>',
        title: 'HTML 5',
        description: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web.',
    },
    {
        id: 2,
        icon: '<i class="fa-brands fa-css3-alt fa-3x ash"></i>',
        title: 'CSS 3',
        description: 'Cascading Style Sheet level 3 is the advanced version of CSS. It is used for structuring, styling, and formatting web pages.',
    },
    {
        id: 3,
        icon: '<i class="fa-brands fa-square-js fa-3x ash"></i>',
        title: 'JavaScript',
        description: 'It is an object-oriented computer programming language commonly used to create interactive effects within web browsers.',
    },
    {
        id: 4,
        icon: '<i class="fa-brands fa-java fa-3x ash"></i>',
        title: 'Java',
        description: 'Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies.',
    }
]

const programsSection = document.querySelector('.progs');

let html = '';

programArr.forEach((program) => {
    html += `
        <section class="main-prog">
            <div class="icon">
                ${program.icon}
            </div>
            <div class="title">
                <p class="title-item">${program.title}</p>
            </div>
            <div class="desc">
                <p class="desc-item">${program.description}</p>
            </div>
        </section>`;
});

programsSection.innerHTML = html;

    // =======================================
    //             Speakers
    // ========================================
const speakerArr = [
    {
        id: 0,
        img: 'img/me.jpg',
        name: 'Uthman Bello',
        description: 'Web Developer and Software Engineer',
        message:'Uthman is a software developer who is also into Data Science. He has a wealth of experience in tutoring.',
    },
    {
        id: 1,
        img: 'img/ali.jpeg',
        name: 'Imoukhuede Ali',
        description: 'Web Developer and Network Engineer',
        message:'Imoukhuede is a network engineer with a CCNP title. He is also a computer engineer who delves into software engineering components.',
    }
]

const speakersSection = document.querySelector('.speaker-sec');

let html1 = '';

speakerArr.forEach((speaker) => {
    html1 += `
    <section class="speakers">
        <div class="speaker-wrap">
            <div class="speaker-back"></div>
            <div class="speaker-img">
                <img src="${speaker.img}" class="dp">
            </div>
        </div>
        <div class="speaker-info">
            <h5 class="speaker-name">${speaker.name}</h5>
            <p class="speaker-desc">${speaker.description}</p>
            <hr class="rule2">
            <p class="speaker-msg">${speaker.message}</p>
        </div>
    </section>`;
});

speakersSection.innerHTML = html1;

const addSpeakerArr = [
    {
        id: 0,
        img: 'img/sulaiman.jpeg',
        name: 'Sulaiman Adoga',
        description: 'Programmer and Audio-Visual Engineer',
        message:'Sulaiman is a programmer and a seasoned AV Engineer with a wealth of experience in real time media.',
    },
    {
        id: 1,
        img: 'img/serg.jpeg',
        name: 'Ataneh Muhammad',
        description: 'Mathematical Scientist and Statistician',
        message:'Ataneh is a mathematical consultant who specializes in AI and ML tools and components used for Data Science and Data Analytics.',
    }
]

const addSpeakerSection = document.querySelector('.add-speaker-sec');

let html2 = '';

addSpeakerArr.forEach((speaker) => {
    html2 += `
    <section class="speakers">
        <div class = "speaker-wrap">
            <div class="speaker-back"></div>
            <div class="speaker-img">
                <img src="${speaker.img}" class="dp">
            </div>
        </div>
        <div class="speaker-info">
            <h5 class="speaker-name">${speaker.name}</h5>
            <p class="speaker-desc">${speaker.description}</p>
            <hr class="rule2">
            <p class="speaker-msg">${speaker.message}</p>
        </div>
    </section>`
});

addSpeakerSection.innerHTML = html2;
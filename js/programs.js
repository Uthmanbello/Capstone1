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
                <p>${program.title}</p>
            </div>
            <div class="desc">
                <p>${program.description}</p>
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
        img: 'img/4375173_logo_python_icon.svg',
        name: 'Yochai Benkler',
        description: 'Berkman Professor of Entrepreneurial Legal Studies at Havard Law School',
        message:'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    },
    {
        id: 1,
        img: 'img/4375173_logo_python_icon.svg',
        name: 'SohYeong Noh',
        description: 'Director of Art Center Nabi and board member of CC Korea',
        message:'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science, technology, humanities, and the arts.',
    }
]

const speakersSection = document.querySelector('.speaker-sec');

let html1 = '';

speakerArr.forEach((speaker) => {
    html1 += `
    <section class="speakers">
        <div class="speaker-img">
            <img src="${speaker.img}">
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
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

let html = '';

speakerArr.forEach((speaker) => {
    html += `
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

speakersSection.innerHTML = html;
const programArr = [
    {
        id: 0,
        icon: 'img/4375173_logo_python_icon.svg',
        title: 'Lecture',
        description: 'Listen to the speakers from various countries about the messages of sharing and opening.',
    },
    {
        id: 1,
        icon: 'img/4375173_logo_python_icon.svg',
        title: 'CC Exhibition',
        description: 'Appreciate various creations applying CC license of artists, organized from Art Center Nabi.',
    },
    {
        id: 2,
        icon: 'img/4375173_logo_python_icon.svg',
        title: 'Forum',
        description: 'Have the time to share your thoughts and opinions with experts for each topic.',
    },
    {
        id: 3,
        icon: 'img/4375173_logo_python_icon.svg',
        title: 'Workshop',
        description: 'Try creating your own work using open source license rather than just watching.',
    },
    {
        id: 4,
        icon: 'img/4375173_logo_python_icon.svg',
        title: 'CC Ignite',
        description: 'Get opportunities to network with CC affiliates around the world, also after the summit.',
    }
]

const programsSection = document.querySelector('.progs');

let html = '';

programArr.forEach((program) => {
    html += `
        <section class="main-prog">
            <div class="icon">
                <object data="${program.icon}" alt=""></object>
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
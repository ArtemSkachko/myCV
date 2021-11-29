const data = {
    name: {
        firstName: 'artem',
        lastName: 'skachko'
    },
    gender: 'male',
    age: '33',
    photoPath: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    position: ['designer', 'front-end developer', 'manager',],
    phone: {
        mobile: '+380991153048'
    },
    skills: {
        photoshop: {
            name: 'Adobe Photoshop',
            experience: 7,
        },
        figma: {
            name: 'figma',
            experience: 3,
        },
        illustrator: {
            name: 'adobe illustrator',
            experience: 5,
        },
        uxui: {
            name: 'UX/UI',
            experience: 3,
        },
        html: {
            name: 'HTML',
            experience: 5,
        },
        css: {
            name: 'css',
            experience: 5,
        },
        javaScript: {
            name: 'javaScript',
            experience: 2,
        },
    },
    socials: {
        linkedin: {
            iconClass: 'fab fa-linkedin',
            href: 'https://linkedin.com',

        },
        behance: {
            iconClass: 'fab fa-behance-square',
            href: 'https://bechance.net',
        },
        facebook: {
            iconClass: 'fab fa-facebook',
            href: 'https://facebook.com',
        }
    },
    messengers: {
        telegram: {
            href: 'https://t.me/artemSkachko',
            iconClass: 'fab fa-telegram',
        },
        viber: {
            href: `viber://chat?number=%2B+380991153048`,
            iconClass: 'fab fa-viber',
        },
        whatsApp: {
            href: `https://wa.me/+380991153048`,
            iconClass: 'fab fa-whatsapp',
        },

    },

    makeSocialLinks: (socials) => {
        let linksHTML = '';
        for(let item in socials){
            linksHTML += `<a href="${socials[item].href}"><i class="${socials[item].iconClass}"></i></a>`
        }
        return linksHTML;
    },
    makeSkills: (skills) => {
        let skillsRow = '';
        for(let item in skills){
            skillsRow += `<span class="skill-item">${skills[item].name}<s>${skills[item].experience}</s></span>`
        }
        return skillsRow;
    },
    makeContacts: (messengers) => {
        let messageRow = '';
        for(let item in messengers){
            messageRow += `<a href="${messengers[item].href}"><i class="${messengers[item].iconClass}"></i></a>`;
        }
        return messageRow;
    },
}
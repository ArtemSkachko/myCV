const data = {
    name: {
        firstName: 'artem',
        lastName: 'skachko'
    },
    gender: 'male',
    age: '33',
    photoPath: 'img/myPhoto.png',
    position: ['designer', 'front-end developer'],
    phone: {
        mobile: '+380991153048'
    },
    skills: {
        photoshop: {
            name: 'Photoshop (Ps)',
            experience: 7,
        },
        illustrator: {
            name: 'Illustrator Ai',
            experience: 5,
        },
        indesign: {
            name: 'inDesign (Id)',
            experience: 2,
        },
        figma: {
            name: 'Figma',
            experience: 3,
        },
        uxui: {
            name: 'UX/UI',
            experience: 3,
        },
        googleMaterial: {
            name: 'Google material',
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
        sass_less: {
            name: 'SASS/LESS',
            experience: 3,
        },
        git: {
            name: 'Git',
            experience: 3,
        },
        javaScript: {
            name: 'javaScript',
            experience: 2,
        },
        agile: {
            name: 'Agile',
            experience: 2,
        },
        wordpress: {
            name: 'Wordpress',
            experience: 3,
        },
        tilda: {
            name: 'Tilda',
            experience: 2,
        },
        propertyEvaluation: {
            name: 'Property evaluation',
            experience: 8,
        },
    },
    interests:['DIY', 'design trends', 'management'],
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
            messageRow += `<a href="${messengers[item].href}"><i class="${messengers[item].iconClass}"></i></a>`
        }
        return messageRow;
    },
    makeInterests: (interests) => {
        let InterestsRow = '';
        interests.forEach( (item) => {
            InterestsRow += `<span class="hobby-item">${item}</span>`
        });
        return InterestsRow;

    },
}
const currentDate = new Date()
const data = {
    age: '33',
    photoPath: 'img/myPhoto.png',
    gender: 'male',
    name: {
        firstName: 'artem',
        lastName: 'skachko',
    },
    about: [
        `So, a little about me. <br>`,
        `First of all, I am a cheerful person who loves to learn something new every day.`,
        `I have over 10 years of experience in design (including DIY, printing, web design and interface development),`,
        `so I am ready to provide design services in almost any direction.`,
        `For the last 4 years my interests have shifted more to the field of web development,`,
        `so I can say that I am a professional master of html, css, JavaScript. But, everything is a little more complicated :)`,
        `To these technical skills, it is also worth adding that I am at the same time a certified expert in the assessment of property and property rights,`,
        `as well as a certified arbitration manager (liquidator, reorganization manager, property manager), respectively, having a higher financial education.`,
        `At the moment I am the head of the development and design department of a large outstaffing company,`,
        `the number of employees of which is about 300 people. In addition to managing the department,`,
        `today I perform many other functions, such as mentoring, interviewing new candidates, project management,`,
        `maintaining and administering the company's own server and much more.`,
    ],
    phone: [
        '+380991153048',
    ],
    skills: [
        {
            name: 'HTML',
            experience: 5,
        },
        {
            name: 'css',
            experience: 5,
        },
        {
            name: 'javaScript',
            experience: 2,
        },
        {
            name: 'SASS/LESS',
            experience: 3,
        },
        {
            name: 'Photoshop (Ps)',
            experience: 7,
        },
        {
            name: 'Illustrator (Ai)',
            experience: 5,
        },
        {
            name: 'inDesign (Id)',
            experience: 2,
        },
        {
            name: 'Figma',
            experience: 3,
        },
        {
            name: 'UX/UI',
            experience: 3,
        },
        {
            name: 'Google material',
            experience: 3,
        },
        {
            name: 'Git',
            experience: 3,
        },
        {
            name: 'Agile',
            experience: 2,
        },
        {
            name: 'Wordpress',
            experience: 3,
        },
        {
            name: 'Tilda',
            experience: 2,
        },
        {
            name: 'AJAX',
            experience: 1,
        },
        {
            name: 'Property evaluation',
            experience: 8,
        },
        {
            name: 'Team management',
            experience: 2,
        },
        {
            name: 'Planning',
            experience: 2,
        },
        {
            name: 'Risks management',
            experience: 8,
        },
        {
            name: 'Project management',
            experience: 2,
        },
        {
            name: 'Problem solving',
            experience: 8,
        },
    ],
    socials: [
        {
            iconClass: 'fab fa-linkedin',
            href: 'https://linkedin.com',
        },
        {
            iconClass: 'fab fa-behance-square',
            href: 'https://bechance.net',
        },
        {
            iconClass: 'fab fa-facebook',
            href: 'https://facebook.com',
        }
    ],
    position: [
        'designer',
        'front-end developer',
        'manager'
    ],
    education: {
        basic: [
            {
                name: `Mykhailo Tuhan-Baranovskyi Donetsk National University of Economics and Trade`,
                specialization: `Accounting and Auditing`,
                qualification: `Accounting and Auditing professional`,
                period: ['2006', '2009']
            },
            {
                name: `Donetsk Polytechnic College`,
                specialization: `Finance and credit`,
                qualification: `Junior Specialist`,
                period: ['2003', '2006']
            },
        ],
        additional: [
            {
                name: `Accredited Property Appraiser`,
                period: ['2012', '2012'],
                certification: 'State Property Fund of Ukraine, Ukrainian Society of Appraisers',
            },
            {
                name: `Arbitration Manager (property manager, managing of readjustment, liquidation).`,
                period: ['2014', '2017'],
                certification: 'Ministry of Justice of Ukraine (2017)',
            },
        ],
    },
    languages: [
        {
            name: 'English',
            level: 'B2',
        },
        {
            name: 'Ukrainian',
            level: '??2',
        },
        {
            name: 'Russian',
            level: '??2',
        },
    ],
    interests: [
        'DIY',
        'design trends',
        'management',
        'programming',
        'robots',
        'data analysis'
    ],
    messengers: [
        {
            href: 'https://t.me/artemSkachko',
            iconClass: 'fab fa-telegram',
        },
        {
            href: `viber://chat?number=%2B+380991153048`,
            iconClass: 'fab fa-viber',
        },
        {
            href: `https://wa.me/+380991153048`,
            iconClass: 'fab fa-whatsapp',
        },
    ],
    experience: [
        {
            period: ['2003', '2006'],
            workNow: false,
            companyName: `Commodity Exchange "Donetsk Universal Commodity Exchange"`,
            position: `computing center technician`,
            description: `Maintenance and technical support of servers and workstations of the exchange, network equipment and internal networks,
            Digitization, processing and updating of large data sets`,
        },
        {
            period: ['2008', '2009'],
            workNow: false,
            companyName: `'Privat Bank' OJSC`,
            position: `Expert of the direction "Car on credit"`,
            description: `Advice to clients regarding bank products, initial assessment of solvency for making a decision on granting a loan, 
            preparation, verification and signing of loan agreements, verification of collateral, work with problem debts.`,
        },
        {
            period: ['2010', '2011', new Date().toISOString()],
            workNow: false,
            companyName: `'Foxtrot' OJSC`,
            position: `Sales assistant (digital goods & computers)`,
            description: `Acceptance, registration of goods at the warehouse.
            Unpacking, initial setup and display of goods on showcases.
            Consulting on the product and its properties, product presentation, sales registration, post-sales customization.`,
        },
        {
            period: ['2011', '2012'],
            workNow: false,
            companyName: `'Delta Bank' OJSC`,
            position: `loan officer`,
            description: `Advising on the services provided by the bank, assessing the creditworthiness, drawing up loan agreements, working with problem debts.`,
        },
        {
            period: ['2012', '2021'],
            workNow: true,
            companyName: `'MIS' LLC`,
            position: `Expert in assessing the value of property and property rights`,
            description: `Practical activities in the field of independent appraisal of the value of property and property rights.
            Working with government agencies on the assessment of the value and sale of property that is in tax lien, as well as in judicial rehabilitation and liquidation procedures`,
        },
        {
            period: ['2017', '2021'],
            workNow: true,
            companyName: `Self-employment`,
            position: `Trustee in Bankruptcy`,
            description: `Practical activities in the field of independent appraisal of the value of property and property rights.
            Working with government agencies on the assessment of the value and sale of property that is in tax lien, as well as in judicial rehabilitation and liquidation procedures`,
        },
        {
            period: ['2019', '2021'],
            workNow: true,
            companyName: `Remote Helpers`,
            position: `fullstack Designer, frontend developer`,
            description: `Development of design projects of any complexity, including CNC projects, 
            design of printed materials, advertising, branding, development of corporate identity, 
            design development of both simple and complex web resources and applications.
            Adaptive layout, displaying dynamic content, working with databases, Development based on popular CMS, 
            creating themes, configuring servers, mentoring, training new employees, project management`,
        },
        {
            period: ['2020', '2021'],
            workNow: false,
            companyName: `Dino - tech solutions`,
            position: `Front-end developer`,
            description: `Development, support and maintenance of web resources.
            In particular, development using CMS Wordpress, both using ready-made templates / constructors, and creating themes from scratch.
            Maintenance and optimization of large client resources, including migrations, backup and data recovery`,
        },
    ],

    makeMyStory() {
        return this.about ? `<h2>My short story</h2> <p>${this.about.map(item => `${item} `).join(' ')}</p>` : '';
    },
    makeContacts() {
        return this.messengers.map
        (item => `<a href="${item.href}"><i class="${item.iconClass}"></i></a>`).join('');
    },
    makeSocialLinks() {
        return this.socials.map
        (item => `<a href="${item.href}"><i class="${item.iconClass}"></i></a>`).join('');
    },
    makeLanguages() {
        return this.languages.map
        (item => `<span class="lang-item">${item.name}<s>${item.level}</s></span>`).join('');
    },
    makeSkills() {
        return this.skills.map
        (item => `<span class="skill-item">${item.name}<s>${item.experience.toString()}</s></span>`).join('');
    },
    makeInterests() {
        return this.interests.map
        (item => `<span class="hobby-item">${item}</span>`).join('');
    },
    makeWorkExperience() {
        let experienceItems = '';
        let sortedItems = this.experience.sort(function (a, b) {
            if (a.period[1] < b.period[1]) {
                return 1;
            }
            if (a.period[1] > b.period[1]) {
                return -1;
            }
        });
        sortedItems.forEach(item => {
            experienceItems += `<h4>${item.companyName} <span>${item.period[0]} - ${item.workNow === true ? 'now' : item.period[1]}</span></h4>
                                <h5>${item.position}</h5>
                                <p>${item.description}</p>`
        })
        return experienceItems;

    },
    makeEducation() {
        let eduRow = `<h3>Basic</h3>`;
        let sortedItems = this.education.basic.sort(function (a, b) {
            if (a.period[1] < b.period[1]) {
                return 1;
            }
            if (a.period[1] > b.period[1]) {
                return -1;
            }
        });
        sortedItems.forEach(item => {
            eduRow +=
                `<div class="eduItem">
                    <h4>${item.name}<span>${item.period[0]} - ${item.period[1]}</span></h4>
                    <h5><span>Certification:</span> ${item.qualification}</h5>
                </div>`
        })

        let additional = `${this.education.additional
            ? `<h3>Additional</h3> ${this.education.additional.map(item =>
                `<div class="eduItem">
                    <h4>${item.name} <span>${item.period[0]} - ${item.period[1]}</span></h4>
                    <h5><span>Certification:</span> ${item.certification}</h5>
                </div>`).join('')}`
            : ``
        }`
        eduRow += additional;
        return eduRow;
    },
}
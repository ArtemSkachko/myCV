window.addEventListener('DOMContentLoaded', () => {


    /*catch general sections*/
    const d = document;
    const main = d.querySelector('main');
    const aside = d.querySelector('aside');
    const header = d.querySelector('header');
    const footer = d.querySelector('footer');

    /*make header padding*/
    aside.style.paddingTop = `${header.offsetHeight}px`;
    main.style.paddingTop = `${header.offsetHeight}px`;

    /*Aside*/

    aside.querySelector('.photo').insertAdjacentHTML
    ('afterbegin', `<img src="${data.photoPath}" alt="myPhoto">`);

    aside.querySelector('.g-info').insertAdjacentHTML
    ('afterbegin',`<h2>${data.name.firstName} ${data.name.lastName}</h2>`);

    aside.querySelector('.g-info').insertAdjacentHTML
    ('beforeend',`<h4>${data.position.join(', ')}</h4>`);

    aside.querySelector('.skill-tags').insertAdjacentHTML
    ('afterbegin', `${data.makeSkills(data.skills)}`);

    aside.querySelector('.hobby-tags').insertAdjacentHTML
    ('beforeend', `${data.makeInterests(data.interests)}`);

    aside.querySelector('.contact-items').insertAdjacentHTML
    ('afterbegin',`${data.makeContacts(data.messengers)}`);

    /*Main*/
    main.querySelector('.myStory').insertAdjacentHTML('beforeend',`${data.makeMyStory(data.about, data.name)}`);
    main.querySelector('.experience').insertAdjacentHTML('beforeend',`${data.makeWorkExperience(data.experience)}`);
    /*Footer*/

    footer.querySelector('.socials').insertAdjacentHTML
    ('afterbegin',`${data.makeSocialLinks(data.socials)}`);
});
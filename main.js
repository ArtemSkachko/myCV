window.addEventListener('DOMContentLoaded', () => {

    /*catch general sections*/
    const d = document;
    const header = d.querySelector('header');
    const aside = d.querySelector('aside');
    const main = d.querySelector('main');
    // const footer = d.querySelector('footer');


    aside.querySelector('.photo').innerHTML = `<img src="${data.photoPath}" alt="myPhoto">`;
    aside.querySelector('.g-info').innerHTML = `
<h2>${data.name.firstName} ${data.name.lastName}</h2> <h4>${data.position.join(', ')}</h4>`;

    aside.querySelector('.socials').innerHTML = `${data.makeSocialLinks(data.socials)}`;
    aside.querySelector('.skill-tags').innerHTML = `${data.makeSkills(data.skills)}`;
    aside.querySelector('.contact-items').innerHTML = `${data.makeContacts(data.messengers)}`;

    /*make header padding*/
    aside.style.paddingTop = `${header.offsetHeight}px`;
    main.style.paddingTop = `${header.offsetHeight}px`;
});
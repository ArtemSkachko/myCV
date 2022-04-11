window.addEventListener('DOMContentLoaded', () => {

    /*catch general sections*/
    const
        d = document,
        main = d.querySelector('main'),
        aside = d.querySelector('aside'),
        header = d.querySelector('header'),
        footer = d.querySelector('footer');

    /*make header padding*/
    aside.style.paddingTop = main.style.paddingTop =`${header.offsetHeight/16}rem`;

    header.querySelector('.head-name').insertAdjacentHTML("afterbegin", `${data.name.firstName} ${data.name.lastName}`)
    header.querySelector('.g-info').insertAdjacentHTML('beforeend', `<h4>${data.position.map(item =>`<span>${item}</span>`).join('•')}</h4>`);

    /*Aside*/
    aside.querySelector('.photo').insertAdjacentHTML('afterbegin', `<img src="${data.photoPath}" alt="myPhoto">`);
    // aside.querySelector('.g-info').insertAdjacentHTML('afterbegin', `<h2>${data.name.firstName} ${data.name.lastName}</h2>`);
    aside.querySelector('.skill-tags').insertAdjacentHTML('afterbegin', `${data.makeSkills(data.skills)}`);
    aside.querySelector('.hobby-tags').insertAdjacentHTML('beforeend', `${data.makeInterests(data.interests)}`);
    aside.querySelector('.contact-items').insertAdjacentHTML('afterbegin', `${data.makeContacts(data.messengers)}`);

    /*Main*/
    main.querySelector('.myStory').insertAdjacentHTML('beforeend', `${data.makeMyStory(data.about, data.name)}`);
    main.querySelector('.experience').insertAdjacentHTML('beforeend', `${data.makeWorkExperience(data.experience)}`);
    main.querySelector('.education').insertAdjacentHTML('beforeend', `${data.makeEducation(data.education)}`);
    /*Footer*/
    footer.querySelector('.socials').insertAdjacentHTML('afterbegin', `${data.makeSocialLinks(data.socials)}`);
});
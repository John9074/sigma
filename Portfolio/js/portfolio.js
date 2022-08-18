let items = [{
    imagePath:'image/Adam Sandoval.png',
    iconPath:'icons/gallery.png',
    name:'Adam Sandoval',
    filter:'Adam Sandoval'
},
{
    imagePath:'image/Bleak.png',
    iconPath:'icons/clip.png',
    name:'Bleak',
    filter:'Bleak'
},
{
    imagePath:'image/Samuel Scalzo.png',
    iconPath:'icons/note.png',
    name:'Samuel Scalzo',
    filter:'Samuel Scalzo'
},
{
    imagePath:'image/ukko.png',
    iconPath:'icons/sound.png',
    name:'ukko',
    filter:'ukko'
},
{
    imagePath:'image/neuebel_mark.png',
    iconPath:'icons/tvLogo.png',
    name:'neuebel_mark',
    filter:'neuebel_mark'
},
{
    imagePath:'image/blon.png',
    iconPath:'icons/clip.png',
    name:'blon',
    filter:'blon' 
},
]

function initPortfolio() {
    initFilter();
    initContent();
}

function initFilter(){
    let filters = items.map(item => item.filter);
    let filtersContainer = document.getElementById('portfolioFilters');
    for (let i=0; i < filters.length; i++) {
        let filterContainer = document.createElement("div");
        filterContainer.setAttribute('class', 'filter__btn');

        let circle = document.createElement("div");
        circle.setAttribute('class', 'filter__circle');

        let text = document.createTextNode(filters[i]);

        filterContainer.appendChild(circle);
        filterContainer.appendChild(text);
        filtersContainer.appendChild(filterContainer);
    }
}

function initContent(){
    // let imagePathes = items.map(item => item.imagePath);
    // let iconPathes = items.map(item => item.iconPath);
    // let names = items.map(item => item.name);

    let cardContainer = document.getElementById('portfolioProjects');
    for (let i=0; i < items.length; i++){
        let item = document.createElement("div");
        item.setAttribute('class', 'projects__item');

        let card = document.createElement("div");
        card.setAttribute('class', 'projects__screen');

        let photo = document.createElement("img");
        photo.setAttribute('class', 'projects__foto');
        photo.setAttribute('src', items[i].imagePath);

        let around = document.createElement("div");
        around.setAttribute('class', 'projects__circle');
        let logo = document.createElement("img");
        logo.setAttribute('class', 'projects__logo');
        logo.setAttribute('src', items[i].iconPath);

        //
        let nameCard 

        let descriptionCont = document.createElement("div");
        descriptionCont.classList.add('projects__name');
        let description = document.createTextNode(items[i].name);

        around.appendChild(logo);
        card.appendChild(photo);
        item.appendChild(card);
        item.appendChild(around);
        descriptionCont.appendChild(description);
        item.appendChild(descriptionCont);
        cardContainer.appendChild(item);
    }

    

}
import './home.css';


const container = document.createElement('div');
container.classList.add('container')
const containerMenu = document.createElement('div')
const containerPinterest = document.createElement('div')
containerMenu.classList.add('containerMenu')
containerPinterest.classList.add('containerPinterest')
const pinterestInfo = document.createElement('div') 
pinterestInfo.classList.add('pinterestInfo')
const pinterestPhoto = document.createElement('div')
pinterestPhoto.classList.add('pinterestPhoto')





const hrefOne = document.createElement('a');
hrefOne.textContent = "НА ГЛАВНУЮ"; 
hrefOne.classList.add('item')

const hrefTwo = document.createElement('a');
hrefTwo.textContent = "КАРТА ЛОЯЛЬНОСТИ";
hrefTwo.classList.add('item')


const hrefThree = document.createElement('a');
hrefThree.textContent = "МЕНЮ";
hrefThree.classList.add('item')


const hrefFour = document.createElement('a');
hrefFour.textContent = "ЗАБРОНИРОВАТЬ";
hrefFour.classList.add('item')


const hrefFive = document.createElement('a');
hrefFive.textContent = "ФРАНШИЗА";
hrefFive.classList.add('item')


const hrefSix = document.createElement('a');
hrefSix.textContent = "EVEREST BRAND";
hrefSix.classList.add('item')
hrefSix.classList.add('everest')
hrefSix.setAttribute('href', 'https://everestbrand.ru/' );
hrefSix.setAttribute('target', '_blank' )


const hrefSeven = document.createElement('a');
hrefSeven.textContent = "О НАС";
hrefSeven.classList.add('item')

document.body.appendChild(container);
container.appendChild(containerMenu)
container.appendChild(containerPinterest)
containerMenu.appendChild(hrefOne)
containerMenu.appendChild(hrefTwo)
containerMenu.appendChild(hrefThree)
containerMenu.appendChild(hrefFour)
containerMenu.appendChild(hrefFive)
containerMenu.appendChild(hrefSix)
containerMenu.appendChild(hrefSeven)
containerPinterest.appendChild(pinterestInfo)
containerPinterest.appendChild(pinterestPhoto)


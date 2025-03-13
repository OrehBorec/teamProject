import "./home.css";
import krest from "../../images/homeImages/animation/Vector.png";
import image1 from "../../images/homeImages/picture/restaurant-1.jpg";
import animation from '../../images/homeImages/animation/Animation - 1741390234585.gif'

import photo1 from '../../images/homeImages/picture/restaurant-1.jpg'
import photo2 from '../../images/homeImages/picture/restaurant-2.jpg'
import photo3 from '../../images/homeImages/picture/restaurant-3.jpg'
import photo4 from '../../images/homeImages/picture/restaurant-4.jpg'

import imgRoomPhoto from '../../images/homeImages/picture/restaurant-5.jpg'
import imgRoomTwoPhoto from '../../images/homeImages/picture/restaurant-22.jpg'

import eventVideoSrc from '../../images/homeImages/video/857151-hd_1920_746_30fps.mp4'

import imageMenuImgSrc from '../../images/homeImages/picture/meze.png'
import imageMenuTwoImgSrc from '../../images/homeImages/picture/menu1.png'

import gridItemPhoto1 from '../../images/homeImages/picture/restaurant-23.jpg'
import gridItemPhoto2 from '../../images/homeImages/picture/restaurant-16.jpg'
import gridItemPhoto3 from '../../images/homeImages/picture/restaurant-17.png'
import gridItemPhoto4 from '../../images/homeImages/picture/restaurant-18.png'
import gridItemPhoto5 from '../../images/homeImages/picture/restaurant-19.png'
import gridItemPhoto6 from '../../images/homeImages/picture/restaurant-22.jpg'


import logoImgPhoto from '../../images/homeImages/picture/logo.jpg'

const app = document.getElementById("app");

const backgroundBlock = document.createElement("div");
backgroundBlock.className = "background-block";

const navbar = document.createElement("div");
navbar.className = "navbar-main";

const navbarBrand = document.createElement("a");
navbarBrand.className = "navbar-brand";
navbarBrand.href = "#";


const animatedButton = document.createElement("img");
animatedButton.src =
  animation
animatedButton.alt = "button";
animatedButton.className = "animated-button";

navbarBrand.appendChild(animatedButton);
navbar.appendChild(navbarBrand);

const content = document.createElement("div");
content.className = "content-main";

const contentTitle = document.createElement("div");
contentTitle.className = "content-title";

const titleH1 = document.createElement("h1");
titleH1.textContent = "Continental";

const titleH2 = document.createElement("h2");
titleH2.textContent = "Palate";

contentTitle.appendChild(titleH1);
contentTitle.appendChild(titleH2);
content.appendChild(contentTitle);

const paragraph = document.createElement("p");
paragraph.textContent =
  "Continental Palate - это сеть заведений сферы гостеприимства, которая дарит вам незабываемые эмоции с 2017 года и вдохновляет вас возвращаться к нам снова и снова.";
content.appendChild(paragraph);

const navbarButton = document.createElement("div");
navbarButton.className = "navbar-button";

const buttonReserv = document.createElement("button");
buttonReserv.className = "button-reserv";
buttonReserv.textContent = "Забронировать";
buttonReserv.addEventListener("click", () => {
  window.location.href = "./reservation.html"; // Укажите нужный путь
});

const buttonCall = document.createElement("button");
buttonCall.className = "button-call";
buttonCall.textContent = "Сделать заказ";
buttonCall.addEventListener("click", () => {
  window.location.href = "./reservation.html"; // Укажите нужный путь
});

navbarButton.appendChild(buttonReserv);
navbarButton.appendChild(buttonCall);
content.appendChild(navbarButton);

backgroundBlock.appendChild(navbar);
backgroundBlock.appendChild(content);
app.appendChild(backgroundBlock);

// анимации

const animationBlock = document.createElement("div");
animationBlock.className = "animation-block";

const images = [
  {
    src: krest,
    alt: "animated rotate",
    className: "animated-button-two",
  },
  {
    src: krest,
    alt: "animated rotate",
    className: "animated-button-three",
  },
  {
    src: krest,
    alt: "animated rotate",
    className: "animated-button-four",
  },
  {
    src: krest,
    alt: "animated rotate",
    className: "animated-button-five",
  },
];

images.forEach((imageData) => {
  const img = document.createElement("img");
  img.src = imageData.src;
  img.alt = imageData.alt;
  img.className = imageData.className;
  animationBlock.appendChild(img);
});

document.body.appendChild(animationBlock);

// 2 блок
const main = document.createElement("div");
main.className = "main";

const contentBlock2 = document.createElement("div");
contentBlock2.className = "content-block";

contentBlock2.innerHTML = `
  <h1>Философия бренда - это эмоции наших гостей.</h1>
  <p>Мы верим, что каждый прием пищи — это не просто обед или ужин, а особое событие, которое должно быть наполнено эмоциями, наслаждением и яркими впечатлениями. Мы стремимся к тому, чтобы каждый наш гость чувствовал себя уютно, как дома, но с уровнем сервиса, который превышает все ожидания.</p>
`;

const button = document.createElement("button");
button.className = "button-history";
button.textContent = "История О нас";
button.addEventListener("click", () => {
  window.location.href = "./about.html"; // Укажите нужный путь
});
contentBlock2.appendChild(button);

const imageSlider = document.createElement("div");
imageSlider.className = "image-slider";
const img = document.createElement("img");
img.id = "slidingImage";
img.src = image1
img.alt = "Image Slider"
imageSlider.appendChild(img);

main.appendChild(contentBlock2);
main.appendChild(imageSlider);

app.appendChild(main);

const imagePaths = [
  photo1,
  photo2,
  photo3,
  photo4,
];

let currentSlideshowIndex = 0;
const carouselImages = document.querySelectorAll(".carousel-inner img");
carouselImages.forEach((img, index) => {
  img.src = imagePaths[index]
})

const changeSlideshowImage = () => {
  currentSlideshowIndex = (currentSlideshowIndex + 1) % imagePaths.length;
};

setInterval(changeSlideshowImage, 2000);

// 3 блок
const blockRoom = document.createElement("div");
blockRoom.className = "block-room";

const imageRoom = document.createElement("div");
imageRoom.className = "image-room";


const imgRoom = document.createElement("img");
imgRoom.id = "slidingImageRoom";
imgRoom.src = imgRoomPhoto;
imgRoom.alt = "Image Slider";
imageRoom.appendChild(imgRoom);
const imgRoomTwo = document.createElement("img");
imgRoomTwo.id = "slidingImageRoomTwo";
imgRoomTwo.src = imgRoomTwoPhoto
imgRoomTwo.alt = "Image Slider";

imageRoom.appendChild(imgRoomTwo);

const contentBlock3 = document.createElement("div");
contentBlock3.className = "content-block";

const titleH1_3 = document.createElement("h1");
titleH1_3.textContent = "Бронирование VIP-комнат";

const paragraph1 = document.createElement("p");
paragraph1.textContent =
  "В нашем ресторане есть возможность бронирования VIP-комнат для частных встреч, бизнес-ланчей или семейных ужинов. Эти комнаты оформлены с максимальным комфортом и уединением, что позволяет нашим клиентам насладиться личным моментом в обстановке высокой кухни.";

const paragraph2 = document.createElement("p");
paragraph2.textContent =
  "Для гостей VIP-залов мы предлагаем эксклюзивное меню и персонализированное обслуживание, что создает уникальный опыт.";

const blockRoomButton = document.createElement("div");
blockRoomButton.className = "block-room-button";

const buttonReservRoom = document.createElement("button");
buttonReservRoom.className = "button-reserv";
buttonReservRoom.textContent = "Забронировать";
buttonReservRoom.addEventListener("click", () => {
  window.location.href = "./reservation.html"; // Укажите нужный путь
});

contentBlock3.append(titleH1_3, paragraph1, paragraph2, blockRoomButton);
blockRoomButton.appendChild(buttonReservRoom);

blockRoom.append(imageRoom, contentBlock3);

app.appendChild(blockRoom);

// 4 блок

document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.querySelector(".carousel-inner");
  const prevButton = document.querySelector(".carousel-control.prev");
  const nextButton = document.querySelector(".carousel-control.next");
  const images = carouselInner.querySelectorAll("img");
  let currentIndex = 0;

  const updateCarousel = () => {

    images.forEach((img, index) => {
      img.classList.toggle("active", index === currentIndex);
    });
  };

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  // Автоматическая смена изображений каждые 3 секунды
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }, 3000);

  updateCarousel();
});

// 5 блок
const eventBlock = document.createElement("div");
eventBlock.className = "event-block";

const eventTitle = document.createElement("div");
eventTitle.className = "event-title";

const eventTitleH1 = document.createElement("h1");
eventTitleH1.textContent = "Мероприятия в ресторане";
eventTitle.appendChild(eventTitleH1);

const events = [
  {
    title: "Гастрономические вечера",
    description:
      "Мы организуем специальные вечера, на которых шеф-повар предлагает изысканные кулинарные сочетания, основанные на сезоне и только что собранных ингредиентах.",
  },
  {
    title: "Кулинарные мастер-классы",
    description:
      "Наши повара делятся секретами и техниками, позволяя гостям погрузиться в мир кулинарии и научиться готовить как профессионалы.",
  },
  {
    title: "Музыкальные вечера",
    description:
      "Живая музыка и атмосфера изысканности обеспечивают неповторимый вечер для всех желающих насладиться шикарной кухней и атмосферой.",
  },
];

events.forEach((event) => {
  const eventItem = document.createElement("div");
  eventItem.className = "event-item";

  const eventH2 = document.createElement("h2");
  eventH2.textContent = event.title;
  eventItem.appendChild(eventH2);

  const eventP = document.createElement("p");
  eventP.textContent = event.description;
  eventItem.appendChild(eventP);

  eventTitle.appendChild(eventItem);
});

eventBlock.appendChild(eventTitle);

const blockEventButton = document.createElement("div");
blockEventButton.className = "block-event-button";


const eventVideo = document.createElement("video");
eventVideo.id = "event-video";
eventVideo.autoplay = true;
eventVideo.muted = true;
eventVideo.loop = true;

const videoSource = document.createElement("source");
videoSource.src = eventVideoSrc;
videoSource.type = "video/mp4";
eventVideo.appendChild(videoSource);

const buttonReservEvent = document.createElement("button");
buttonReservEvent.className = "button-reserv-event";
buttonReservEvent.textContent = "Оставить заявку";
buttonReservEvent.addEventListener("click", () => {
  window.location.href = "./reservation.html"; // Укажите нужный путь
});

blockEventButton.appendChild(eventVideo);
blockEventButton.appendChild(buttonReservEvent);

eventBlock.appendChild(blockEventButton);

document.body.appendChild(eventBlock);

// Бегущая строка

// const infoBlock = document.createElement("div");
// infoBlock.className = "info-block";

// const infoBlockText = document.createElement("div");
// infoBlockText.className = "info-block-text";

// const infoText = document.createElement("p");
// infoText.textContent =
//   "Каждое блюдо — это не просто еда, это произведение искусства, созданное для вдохновения.";

// infoBlockText.appendChild(infoText);
// infoBlock.appendChild(infoBlockText);

// document.body.appendChild(infoBlock);

// 6 блок

const menuBlock = document.createElement("div");
menuBlock.className = "menu-block";

const contentMenu = document.createElement("div");
contentMenu.className = "content-menu";

const menuTitle = document.createElement("h1");
menuTitle.textContent = "Рецепты с инновационным подходом";
contentMenu.appendChild(menuTitle);

const menuDescription = document.createElement("p");
menuDescription.textContent =
  "Мы разработали уникальное и разнообразное меню, сочетающее традиционные блюда с элементами современной кухни. Наша цель – создать атмосферу уюта и домашнего тепла, даря гостям неповторимые вкусовые впечатления.";
contentMenu.appendChild(menuDescription);

const menuButtonDiv = document.createElement("div");
menuButtonDiv.className = "menu-button";

const menuButton = document.createElement("button");
menuButton.className = "button-menu";
menuButton.textContent = "Наше меню";
menuButton.addEventListener("click", () => {
  window.location.href = "./reservation.html"; // Укажите нужный путь
});
menuButtonDiv.appendChild(menuButton);

contentMenu.appendChild(menuButtonDiv);
menuBlock.appendChild(contentMenu);

const imageMenu = document.createElement("div");
imageMenu.className = "image-menu";


const imageMenuImg = document.createElement("img");
imageMenuImg.src = imageMenuImgSrc
imageMenuImg.alt = "Image Menu";
imageMenu.appendChild(imageMenuImg);

const imageMenuTwo = document.createElement("div");
imageMenuTwo.className = "image-menu-two";


const imageMenuTwoImg = document.createElement("img");
imageMenuTwoImg.src = imageMenuTwoImgSrc
imageMenuTwoImg.alt = "Image Menu";
imageMenuTwo.appendChild(imageMenuTwoImg);

menuBlock.appendChild(imageMenu);
menuBlock.appendChild(imageMenuTwo);
document.body.appendChild(menuBlock);

// 7 блок

const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

const gridItems = [
  {
    src: gridItemPhoto1,
    alt: "Restaurant Image 6",
    className: "grid-item grid-item-large",
  },
  {
    src: gridItemPhoto2,
    alt: "Restaurant Image 7",
    className: "grid-item",
  },
  {
    src: gridItemPhoto3,
    alt: "Restaurant Image 8",
    className: "grid-item grid-item-large",
  },
  {
    src: gridItemPhoto4,
    alt: "Restaurant Image 9",
    className: "grid-item",
  },
  {
    src: gridItemPhoto5,
    alt: "Restaurant Image 10",
    className: "grid-item",
  },
  {
    src: gridItemPhoto6,
    alt: "Restaurant Image 11",
    className: "grid-item",
  },
];

gridItems.forEach((item) => {
  const gridItem = document.createElement("div");
  gridItem.className = item.className;

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;

  gridItem.appendChild(img);
  gridContainer.appendChild(gridItem);
});

const gridButtonDiv = document.createElement("div");
gridButtonDiv.className = "grid-button";

const gridButton = document.createElement("button");
gridButton.className = "button-reserv-grid";
gridButton.textContent = "Забронировать столик";
gridButton.addEventListener("click", () => {
  window.location.href = "./reservation.html"; // Укажите нужный путь
});

gridButtonDiv.appendChild(gridButton);

document.body.appendChild(gridContainer);
document.body.appendChild(gridButtonDiv);

// 8 блок

const footerMain = document.createElement("footer");
footerMain.className = "footer-main";

const footerContainer = document.createElement("div");
footerContainer.className = "footer-container";

const footerLogo = document.createElement("div");
footerLogo.className = "footer-logo";


const logoImg = document.createElement("img");
logoImg.src = logoImgPhoto
logoImg.alt = "Логотип ресторана";
footerLogo.appendChild(logoImg);

const footerContact = document.createElement("div");
footerContact.className = "footer-contact";

const contactTitle = document.createElement("h4");
contactTitle.textContent = "Контакты";
footerContact.appendChild(contactTitle);

const contactAddress = document.createElement("p");
contactAddress.textContent = "Адрес: ул. Победная, д.9";
footerContact.appendChild(contactAddress);

const contactPhone = document.createElement("p");
contactPhone.textContent = "Телефон: +7(495)159-61-28";
footerContact.appendChild(contactPhone);

const contactHours = document.createElement("p");
contactHours.textContent = "Режим работы: с 10:00 до 23:00";
footerContact.appendChild(contactHours);

const footerNav = document.createElement("div");
footerNav.className = "footer-nav";

const navTitle = document.createElement("h4");
navTitle.textContent = "Навигация";
footerNav.appendChild(navTitle);

const navList = document.createElement("ul");

const navItems = [
  { href: "./menu", text: "Меню" },
  { href: "./events", text: "Мероприятия" },
  { href: "./about", text: "О нас" },
  { href: "./contacts", text: "Контакты" },
];

navItems.forEach((item) => {
  const navListItem = document.createElement("li");
  const navLink = document.createElement("a");
  navLink.href = item.href;
  navLink.textContent = item.text;
  navListItem.appendChild(navLink);
  navList.appendChild(navListItem);
});

footerNav.appendChild(navList);

const footerSocial = document.createElement("div");
footerSocial.className = "footer-social";

const socialTitle = document.createElement("h4");
socialTitle.textContent = "Мы в соцсетях";
footerSocial.appendChild(socialTitle);

const socialLinks = [
  { href: "https://vk.com/yourpage", text: "VK" },
  { href: "https://www.instagram.com/yourpage", text: "Instagram" },
  { href: "https://www.facebook.com/yourpage", text: "Facebook" },
];

socialLinks.forEach((link) => {
  const socialLink = document.createElement("a");
  socialLink.href = link.href;
  socialLink.target = "_blank";
  socialLink.textContent = link.text;
  footerSocial.appendChild(socialLink);
});

const footerLoyalty = document.createElement("div");
footerLoyalty.className = "footer-loyalty";

const loyaltyTitle = document.createElement("h4");
loyaltyTitle.textContent = "Программа лояльности";
footerLoyalty.appendChild(loyaltyTitle);

const loyaltyDescription = document.createElement("p");
loyaltyDescription.innerHTML =
  'Станьте участником нашей программы и получайте скидки и бонусы. <a href="./loyalty">Узнать больше</a>';
footerLoyalty.appendChild(loyaltyDescription);

footerContainer.appendChild(footerLogo);
footerContainer.appendChild(footerContact);
footerContainer.appendChild(footerNav);
footerContainer.appendChild(footerSocial);
footerContainer.appendChild(footerLoyalty);
footerMain.appendChild(footerContainer);

document.body.appendChild(footerMain);

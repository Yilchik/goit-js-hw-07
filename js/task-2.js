const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const makeElement = images.map(img => {
  const listImg = document.createElement('li');
  const imgElem = document.createElement('img');
  imgElem.src = img.url;
  imgElem.alt = img.alt;
  imgElem.style.maxWidth = '100%';
  imgElem.style.objectFit = 'contain';
  listImg.append(imgElem);
  return listImg;
});

galleryList.append(...makeElement);

console.log(galleryList);

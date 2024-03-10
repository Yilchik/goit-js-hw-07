const list = document.querySelector('#categories');
const elements = document.querySelectorAll('.item');

console.log(`Number of categories: ${elements.length}`);
elements.forEach(elem => {
  showElementsInfo(elem);
});
function showElementsInfo(category) {
  let categoryName = category.querySelector('h2').textContent;
  let categoryElem = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElem}`);
}

// elements.classList.add(list);
// elements.style.list.border = '1px solid #808080';
// elements.style.list.borderRadius = '4px';
// elements.style.list.width = '360px';
// elements.style.list.height = '40px';
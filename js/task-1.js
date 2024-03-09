const list = document.querySelector('#categories');
const elems = document.querySelectorAll('.item');
console.log(`Number of categories: ${elems.length}`);
elems.forEach(elem => {
  showElementsInfo(elem);
});
function showElementsInfo(category) {
  let categoryName = category.querySelector('h2').textContent;
  let categoryElem = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElem}`);
}

const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);
numberOfCategories.forEach((item) => {
  const category = item.firstElementChild;
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgPlace = document.querySelector(".gallery");

const markup = images
  .map(
    (item) => `<li><img src=${item.url} alt=${item.alt} width = "500px" /></li>`
  )
  .join("");
imgPlace.insertAdjacentHTML("afterbegin", markup);
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  img.style.margin = "20px";
  img.style.boxShadow = "5px 10px 10px hsl(339,45%,50%)";
  img.style.borderRadius = "35px";
});
imgPlace.style.display = "flex";
imgPlace.style.flexDirection = "column";
imgPlace.style.listStyle = "none";

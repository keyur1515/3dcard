//Movement Animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//elements
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Creating The Moving Animation
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) /10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = `all 0.1s ease`;
  //popout Animation
  //title
  title.style.transform = "translateZ(30px)";
  title.style.transition = `all 0.6s ease`;
  //sneaker
  sneaker.style.transform = "translateZ(80px) rotateZ(-20deg)";
  sneaker.style.transition = `all 0.8s ease`;
  //sizes
  sizes.style.transform = "translateZ(50px)";
  sizes.style.transition = `all 0.4s ease`;
  //description
  description.style.transform = "translateZ(20px)";
  description.style.transition = `all 0.2s ease`;
  //purchase
  purchase.style.transform = "translateZ(40px)";
  purchase.style.transition = `all 1s ease`;
});

//Animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = `all 0.5s ease`;
  //backIn place Animation
  //title
  title.style.transform = "translateZ(0px)";
  title.style.transition = `all 0.6s ease`;
  //sneaker
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  sneaker.style.transition = `all 0.5s ease`;
  //sizes
  sizes.style.transform = "translateZ(0px)";
  sizes.style.transition = `all 0.5s ease`;
  //description
  description.style.transform = "translateZ(0px)";
  description.style.transition = `all 0.8s ease`;
  //purchase
  purchase.style.transform = "translateZ(0px)";
  purchase.style.transition = `all 1s ease`;
});

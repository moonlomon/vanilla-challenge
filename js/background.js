const images = ["1.webp", "2.webp", "3.webp"];
const choseImg = images[Math.floor(Math.random() * images.length)];

const bai = document.createElement("img");

bai.src = `img/${choseImg}`;

document.body.appendChild(bai);

console.log(bai.src);

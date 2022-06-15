const Dday = document.querySelector("h2");

function DdayClock() {
  const nowDay = new Date();
  const christmas = new Date("2022-12-25");
  const clock = christmas - nowDay;
  const d = Math.floor(clock / (1000 * 60 * 60 * 24));
  const h = Math.floor((clock / (1000 * 60 * 60)) % 24);
  const m = Math.floor((clock / (1000 * 60)) % 60);
  const s = Math.floor((clock / 1000) % 60);

  Dday.innerText = `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(DdayClock, 1000);

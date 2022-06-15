const Dday = document.querySelector("h2");

function DdayClock() {
  const nowDay = new Date();
  const christmas = new Date("2022-12-25");
  const clock = christmas - nowDay;
  const d = String(Math.floor(clock / (1000 * 60 * 60 * 24))).padStart(3, "0");
  const h = String(Math.floor((clock / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const m = String(Math.floor((clock / (1000 * 60)) % 60)).padStart(2, "0");
  const s = String(Math.floor((clock / 1000) % 60)).padStart(2, "0");

  Dday.innerText = `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(DdayClock, 1000);

let time = 11 * 3600 + 28 * 60 + 5;

setInterval(() => {
  let h = Math.floor(time / 3600);
  let m = Math.floor((time % 3600) / 60);
  let s = time % 60;

  document.getElementById("countdown").innerText =
    `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;

  if (time > 0) time--;
}, 1000);

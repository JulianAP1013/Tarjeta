import { activarBtonNo, desactivarBtonNo, acttexto, dsttexto } from "./game.js";
import { lanzarCorazones } from "./effects.js";

document.addEventListener("DOMContentLoaded", () => {
  activarBtonNo();
  const botonSi = document.querySelector(".btn-si");
  const botonNo = document.querySelector(".btn-no");
  const mensaje = document.querySelector(".mensaje-si");
  const audio = new Audio("assets/audio/tin.m4a");

  botonNo.addEventListener("click", acttexto);

  botonSi.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
    mensaje.style.display = "block";
    mensaje.classList.add("fade-in");
    lanzarCorazones(27);
    desactivarBtonNo();
    dsttexto();
  });
});

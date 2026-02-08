import { activarBtonNo, desactivarBtonNo, acttexto, dsttexto } from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
  activarBtonNo();
  const botonSi = document.querySelector(".btn-si");
  const botonNo = document.querySelector(".btn-no");
  const mensaje = document.querySelector(".mensaje-si");

  botonNo.addEventListener("click", acttexto);

  botonSi.addEventListener("click", () => {
    mensaje.style.display = "block";
    mensaje.classList.add("fade-in");
    desactivarBtonNo();
    dsttexto();
  });
});

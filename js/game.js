const boton = document.querySelector(".btn-no");
const card = document.querySelector(".card");
const text = document.querySelector(".mensaje-no");

export function moverboton() {
  boton.style.position = "absolute";
  boton.classList.add("shake");

  setTimeout(() => {
    boton.classList.remove("shake");

    const rect = card.getBoundingClientRect();
    const maxX = rect.width - boton.offsetWidth;
    const maxY = rect.height - boton.offsetHeight;

    boton.style.left = `${Math.random() * maxX}px`;
    boton.style.top = `${Math.random() * maxY}px`;
  }, 150);
}

export function activarBtonNo() {
  boton.addEventListener("touchstart", moverboton);
  boton.addEventListener("click", moverboton);
}
export function desactivarBtonNo() {
  boton.style.position = "relative";
  boton.style.left = "auto";
  boton.style.top = "auto";
  boton.removeEventListener("touchstart", moverboton);
  boton.removeEventListener("click", moverboton);
  boton.style.pointerEvents = "none";
}

export function acttexto() {
  const mensajes = [
    "La re mala socia",
    "¿A lo bien?",
    "El mero menosprecio",
    "ushh sin palabras...",
  ];
  const r = Math.floor(Math.random() * 4);
  text.style.display = "block";
  text.textContent = mensajes[r];
}
export function dsttexto() {
  text.style.display = "none";
  text.textContent = "";
}

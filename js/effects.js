export function lanzarCorazones(cantidad = 15) {
  for (let i = 0; i < cantidad; i++) {
    const heart = document.createElement("span");
    const colores = ["var(--color3)", "var(--color4)", "var(--color5)"];

    heart.classList.add("heart");
    heart.textContent = ["❤", "💕"];

    // posición aleatoria horizontal
    heart.style.left = Math.random() * 100 + "vw";

    // tamaño aleatorio
    heart.style.fontSize = 16 + Math.random() * 20 + "px";
    // colores aleatoreos
    heart.style.color = colores[Math.floor(Math.random() * colores.length)];

    document.body.appendChild(heart);

    // eliminar después de la animación
    setTimeout(() => {
      heart.remove();
    }, 2500);
  }
}

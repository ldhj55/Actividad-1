// Cambia el color del fondo de la sección Inicio
document.getElementById("cambiar-color").addEventListener("click", () => {
    const colores = ["#f39c12", "#8e44ad", "#16a085", "#e74c3c", "#3498db"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById("inicio").style.backgroundColor = colorAleatorio;
});

// Manejo del formulario de contacto
document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío real del formulario
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
    document.getElementById("contact-form").reset();
});

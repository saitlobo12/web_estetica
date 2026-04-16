// Botón WhatsApp 
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    window.open("https://wa.me/573225709880", "_blank");
});


// 🔥 SLIDER ANTES / DESPUÉS
const slider = document.querySelector('.slider');
const before = document.querySelector('.img-before');

if (slider && before) {
    slider.addEventListener('input', function() {
        before.style.width = this.value + '%';
    });
}

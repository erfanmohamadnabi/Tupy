

// Update Map Script

const iframe = document.getElementById('mapFrame');
const cards = document.querySelectorAll('.map-card');
const popup = document.getElementById('popup');

let hasLoaded = false;

// popup helper
function showPopup(message) {
    if (!popup) return;

    popup.textContent = message;
    popup.classList.add('show');

    clearTimeout(popup._timer);

    popup._timer = setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

window.addEventListener('load', () => {
    if (cards.length) {
        iframe.src = cards[0].dataset.src;
        cards[0].classList.add('border-[#6ecff6]');
        hasLoaded = true;

        showPopup('نقشه اولیه با موفقیت بارگذاری شد');
    }
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        const src = card.dataset.src;
        if (!src) return;

        iframe.src = src;

        cards.forEach(c => c.classList.remove('border-[#6ecff6]'));
        card.classList.add('border-[#6ecff6]');

        showPopup('نقشه با موفقیت آپدیت شد');
    });
});

// Search Script

const input = document.querySelector('input[type="text"]');

input.addEventListener('input', (e) => {
    const value = e.target.value.trim().toLowerCase();

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (!value) {
            card.style.display = 'flex';
            return;
        }

        card.style.display = text.includes(value) ? 'flex' : 'none';
    });
});
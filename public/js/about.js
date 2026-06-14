// History Slider

const track   = document.getElementById('historyTrack');
const dots    = document.querySelectorAll('#historyDots div');
const total   = 6;
let current   = 0;

function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(${current * 100}%)`;
    dots.forEach((d, i) => {
        d.style.background = i === current ? '#6ecff6' : '#1e3a5f';
    });
}

document.getElementById('historyNext').addEventListener('click', () => goTo(current + 1));
document.getElementById('historyPrev').addEventListener('click', () => goTo(current - 1));

// swipe support
let startX = 0;
track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
track.addEventListener('touchend',   e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
});

// Projects Slider

(function () {
    const slider  = document.getElementById('projectsSlider');
    const track   = document.getElementById('projectsTrack');
    const cards   = document.querySelectorAll('.project-card');
    if (!slider || !track || !cards.length) return;

    let currentIndex = 0;

    function getVisible() {
        const w = window.innerWidth;
        if (w > 1600) return 6;
        if (w > 1280) return 5;
        if (w > 1024) return 4;
        if (w > 630)  return 3;
        if (w > 550)  return 2;
        return 1;
    }

    function setCardWidths() {
        const cardWidth = slider.offsetWidth / getVisible();
        cards.forEach(card => card.style.width = cardWidth + 'px');
    }

    function getMaxIndex() {
        return Math.max(0, cards.length - getVisible());
    }

    function goTo(index) {
        const cardWidth = slider.offsetWidth / getVisible();
        currentIndex = index > getMaxIndex() ? 0 : index;
        track.style.transform = `translateX(${currentIndex * cardWidth}px)`;
    }

    function autoPlay() {
        goTo(currentIndex + 1);
    }

    window.addEventListener('resize', () => {
        setCardWidths();
        goTo(Math.min(currentIndex, getMaxIndex()));
    });

    setCardWidths();
    goTo(0);
    setInterval(autoPlay, 3000);
})();
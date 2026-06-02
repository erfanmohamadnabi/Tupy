(function () {
    const track = document.getElementById('standardsTrack');
    if (!track) return;
    const total = track.children.length;
    let current = 0;

    setInterval(() => {
        current = current >= total - 1 ? 0 : current + 1;
        track.style.transform = `translateX(-${current * 100}%)`;
    }, 3000);
})();
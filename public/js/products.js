document.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.product-item');

    let current = 0;

    function isSliderMode() {
        return window.innerWidth <= 1280;
    }

    function animateVisibleImages() {

        document.querySelectorAll('.product-item img').forEach(img => {

            if (img.closest('.product-item').style.display === 'none') return;

            img.classList.remove('animate-productFadeDown');

            void img.offsetWidth;

            img.classList.add('animate-productFadeDown');
        });
    }

    function render() {

        if (!isSliderMode()) {

            items.forEach(item => {
                item.style.display = 'flex';
                item.style.opacity = '1';
            });

            return;
        }

        const visibleCount = window.innerWidth <= 550 ? 1 : 2;

        items.forEach((item, index) => {

            item.style.transition = 'opacity .5s ease';

            const show =
                index === current ||
                (
                    visibleCount === 2 &&
                    index === (current + 1) % items.length
                );

            item.style.display = show ? 'flex' : 'none';

            requestAnimationFrame(() => {
                item.style.opacity = show ? '1' : '0';
            });
        });

        animateVisibleImages();
    }

    render();

    setInterval(() => {

        if (!isSliderMode()) return;

        current = (current + 1) % items.length;

        render();

    }, 3000);

    window.addEventListener('resize', render);

});
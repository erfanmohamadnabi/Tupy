class DualSlider {

    constructor(container) {

        this.container = container;

        this.track =
            container.querySelector('.slider-track');

        this.slides =
            container.querySelectorAll('.slide-card');

        this.dotsContainer =
            container.querySelector('.slider-dots');

        // ناحیه واقعی قابل مشاهده
        this.viewport =
            this.track.parentElement;

        this.currentIndex = 0;

        this.slideCount =
            this.slides.length;

        this.isDragging = false;

        this.startX = 0;

        this.currentTranslate = 0;

        this.init();
    }

    init() {

        this.updateSlidesPerView();

        this.createDots();

        this.updateDots();

        this.updatePosition();

        this.addListeners();
    }

    getGap() {

        const styles =
            window.getComputedStyle(this.track);

        return (
            parseFloat(styles.columnGap) ||
            parseFloat(styles.gap) ||
            0
        );
    }

    getSlideWidth() {

        const slide = this.slides[0];

        const gap = this.getGap();

        return (
            slide.getBoundingClientRect().width +
            gap
        );
    }

    updateSlidesPerView() {

        const slideWidth =
            this.getSlideWidth();

        // عرض واقعی visible area
        const containerWidth =
            this.viewport.getBoundingClientRect().width;

        // تعداد واقعی اسلاید قابل مشاهده
        this.slidesPerView = Math.floor(
            containerWidth / slideWidth
        );

        // حداقل 1
        this.slidesPerView = Math.max(
            1,
            this.slidesPerView
        );

        // تعداد صفحات
        this.totalPages = Math.max(
            this.slideCount -
            this.slidesPerView +
            1,
            1
        );
    }

    createDots() {

        if (!this.dotsContainer) return;

        this.dotsContainer.innerHTML = '';

        for (
            let i = 0;
            i < this.totalPages;
            i++
        ) {

            const dot =
                document.createElement('button');

            dot.className =
                'w-2.5 h-2.5 rounded-full bg-gray-300 transition-all duration-300 mx-1';

            dot.dataset.index = i;

            dot.onclick = () =>
                this.goTo(i);

            this.dotsContainer.appendChild(dot);
        }
    }

    updateDots() {

        if (!this.dotsContainer) return;

        const dots =
            this.dotsContainer.querySelectorAll(
                'button'
            );

        dots.forEach((dot, i) => {

            if (i === this.currentIndex) {

                dot.className =
                    'w-7 h-2.5 rounded-md bg-blue-500 transition-all duration-300 mx-1';

            } else {

                dot.className =
                    'w-2.5 h-2.5 rounded-full bg-gray-300 transition-all duration-300 mx-1';
            }
        });
    }

    updatePosition() {

        const slideWidth =
            this.getSlideWidth();

        this.currentTranslate =
            -this.currentIndex *
            slideWidth;

        this.track.style.transition =
            'transform 0.5s ease';

        this.track.style.transform =
            `translateX(${this.currentTranslate}px)`;
    }

    goTo(index) {

        if (index < 0) {
            index = 0;
        }

        if (
            index >= this.totalPages
        ) {

            index =
                this.totalPages - 1;
        }

        this.currentIndex = index;

        this.updatePosition();

        this.updateDots();
    }

    addListeners() {

        this.track.addEventListener(
            'mousedown',
            (e) => this.dragStart(e)
        );

        window.addEventListener(
            'mousemove',
            (e) => this.drag(e)
        );

        window.addEventListener(
            'mouseup',
            () => this.dragEnd()
        );

        this.track.addEventListener(
            'touchstart',
            (e) => this.dragStart(e),
            { passive: true }
        );

        window.addEventListener(
            'touchmove',
            (e) => this.drag(e),
            { passive: true }
        );

        window.addEventListener(
            'touchend',
            () => this.dragEnd()
        );

        window.addEventListener(
            'resize',
            () => {

                const oldPages =
                    this.totalPages;

                this.updateSlidesPerView();

                if (
                    oldPages !==
                    this.totalPages
                ) {

                    this.createDots();
                }

                if (
                    this.currentIndex >=
                    this.totalPages
                ) {

                    this.currentIndex =
                        this.totalPages - 1;
                }

                this.updatePosition();

                this.updateDots();
            }
        );
    }

    dragStart(e) {

        this.isDragging = true;

        this.startX =
            e.type === 'touchstart'
                ? e.touches[0].clientX
                : e.clientX;

        this.track.style.transition =
            'none';
    }

    drag(e) {

        if (!this.isDragging) return;

        const currentX =
            e.type === 'touchmove'
                ? e.touches[0].clientX
                : e.clientX;

        const diff =
            currentX - this.startX;

        this.track.style.transform =
            `translateX(${this.currentTranslate + diff}px)`;
    }

    dragEnd() {

        if (!this.isDragging) return;

        this.isDragging = false;

        const slideWidth =
            this.getSlideWidth();

        const matrix =
            new DOMMatrix(
                window.getComputedStyle(
                    this.track
                ).transform
            );

        const movedBy =
            matrix.m41 -
            this.currentTranslate;

        if (
            movedBy <
            -slideWidth / 4
        ) {

            this.currentIndex =
                Math.min(
                    this.currentIndex + 1,
                    this.totalPages - 1
                );

        } else if (
            movedBy >
            slideWidth / 4
        ) {

            this.currentIndex =
                Math.max(
                    this.currentIndex - 1,
                    0
                );
        }

        this.updatePosition();

        this.updateDots();
    }
}

document.addEventListener(
    'DOMContentLoaded',
    () => {

        const containers =
            document.querySelectorAll(
                '.slider-container'
            );

        containers.forEach(
            (container) => {

                new DualSlider(
                    container
                );
            }
        );
    }
);
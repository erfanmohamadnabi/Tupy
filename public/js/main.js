// Mobile Menu Script


// * Open Menu

document.querySelector('.mobile-menu-btn').onclick = () => {
    document.querySelector('.mobile-menu').style.left = '0';
    document.querySelector('.overflow').style.display = 'flex';
}

// * Close Menu

document.querySelector('.overflow').onclick = function () {
    const video = document.querySelector(".overflow video");
    const videos = document.querySelector(".overflow .videos");

    if (video && videos) {

    video.pause();
    video.currentTime = 0;
    videos.style.display = 'none';
    }

    document.querySelector('.mobile-menu').style.left = '-100%';

    setTimeout(() => {
        this.style.display = 'none';
    }, 100);

}

document.querySelector('.mobile-menu-close').onclick = function () {

    document.querySelector('.mobile-menu').style.left = '-100%';

    setTimeout(() => {
        document.querySelector('.overflow').style.display = 'none';
    }, 100);

}

// Art Script

console.log(
`%c
████████╗██╗   ██╗██████╗ ██╗   ██╗
╚══██╔══╝██║   ██║██╔══██╗╚██╗ ██╔╝
   ██║   ██║   ██║██████╔╝ ╚████╔╝ 
   ██║   ██║   ██║██╔═══╝   ╚██╔╝  
   ██║   ╚██████╔╝██║        ██║   
   ╚═╝    ╚═════╝ ╚═╝        ╚═╝   
`,
'color:#347eff; font-family: monospace; font-size:12px;'
);
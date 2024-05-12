function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');

}

function changeBg(bg, title) {
    const banner = document.querySelector ('.banneer');
    const contents = document.querySelector ('.contentt');
    banner.style.background= `url("../img/moves/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(contentt => {
        contentt.classList.remove('active');
        if(contentt.classList.contains(title)) {
            contentt.classList.add('active');
        }   
    });
}
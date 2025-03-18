
function videoControls() {
    const video = document.querySelectorAll('.reviews__video-video');
    const play = document.querySelectorAll('.reviews__video-img');
    const pause = document.querySelectorAll('.reviews__video-img-pause');

    for (let i = 0; i < video.length; i++) {
        play[i].addEventListener('click', () => {
            video[i].play();
            play[i].style.display = 'none';
            pause[i].style.display = 'block';
        });

        pause[i].addEventListener('click', () => {
            video[i].pause();
            play[i].style.display = 'block';
            pause[i].style.display = 'none';
        });
    }
}

export default videoControls
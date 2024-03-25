document.addEventListener('click', function() {
    var audio = document.createElement('audio');
    audio.setAttribute('src', 'images/sound.mp3');
    audio.loop = true;

    audio.addEventListener('error', function(e) {
        console.error("Error occurred while playing audio:", e);
    });

    audio.play().then(function() {
        console.log('Audio playback started successfully.');
    }).catch(function(error) {
        console.error('Failed to start audio playback:', error);
    });
});
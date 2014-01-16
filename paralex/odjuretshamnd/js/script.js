$(function(){

  var videosupersex = $('.supersex').get(0);

  $('#playPause').on('click', function(){
    if (videosupersex.paused) {
        videosupersex.play();
        $(this).html('<img src="img/pauseBtn.png">');
    } 
    else {
        videosupersex.pause();
        $(this).html('<img src="img/playBtn.png">');
    }
  });
  $('#rew').on('click', function(){
    
    videosupersex.currentTime-=5;
  });
  $('#ff').on('click', function(){
    
    videosupersex.currentTime+=5;
  });
  $('#volumeDown').on('click', function(){
    
    videosupersex.volume-=0.1;
  });
  $('#volumeUp').on('click', function(){
    
    videosupersex.volume+=0.1;
  });

  $('#mute').on('click', function(){
    if (videosupersex.muted) {
        videosupersex.muted=false;
        $(this).html('<img src="img/muteBtn.png">');
    } 
    else {
        videosupersex.muted=true;
        $(this).html('<img src="img/muteactiveBtn.png">');
    }
  });
});

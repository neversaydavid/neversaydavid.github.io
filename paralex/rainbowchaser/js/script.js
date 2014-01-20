var down = function(block) {
  block.audio.play();
  block.div.addClass("active-note");
  $(".info").fadeOut('slow');
}

var up = function(block) {
  block.audio.currentTime = 0;
  block.audio.pause();
  block.div.removeClass("active-note");
}

$(document).ready(function(){

  // mouse events

  $('.note').on('touchstart', function() {
    down(notes[$(this).data('note')]);
  });

  $('.note').on('touchend', function() {
    up(notes[$(this).data('note')]);
  });

  // keyboard events

  notes = {
    "c": {
      "div": $('.c'),
      "audio": $('.c').find("audio")[0]
    },
    "d": {
      "div": $('.d'),
      "audio": $('.d').find("audio")[0]
    },
    "e": {
      "div": $('.e'),
      "audio": $('.e').find("audio")[0]
    },
    "f": {
      "div": $('.f'),
      "audio": $('.f').find("audio")[0]
    },
    "g": {
      "div": $('.g'),
      "audio": $('.g').find("audio")[0]
    },
    "a": {
      "div": $('.a'),
      "audio": $('.a').find("audio")[0]
    },
    "h": {
      "div": $('.h'),
      "audio": $('.h').find("audio")[0]
    },
    "c2": {
      "div": $('.c2'),
      "audio": $('.c2').find("audio")[0]
    },
    "cs": {
      "div": $('.cs'),
      "audio": $('.cs').find("audio")[0]
    },
    "ds": {
      "div": $('.ds'),
      "audio": $('.ds').find("audio")[0]
    },
    "fs": {
      "div": $('.fs'),
      "audio": $('.fs').find("audio")[0]
    },
    "gs": {
      "div": $('.gs'),
      "audio": $('.gs').find("audio")[0]
    },
    "as": {
      "div": $('.as'),
      "audio": $('.as').find("audio")[0]
    },
  }

  $(document).keydown(function(event){
    if(event.which == "65")
      down(notes.c);
    if(event.which == "83")
      down(notes.d);
    if(event.which == "68")
      down(notes.e);
    if(event.which == '70')
      down(notes.f);
    if(event.which == '71')
      down(notes.g);
    if(event.which == '72')
      down(notes.a);
    if(event.which == '74')
      down(notes.h);
    if(event.which == '75')
      down(notes.c2);
    if(event.which == '87')
      down(notes.cs);
    if(event.which == '69')
      down(notes.ds);
    if(event.which == '84')
      down(notes.fs);
    if(event.which == '89')
      down(notes.gs);
    if(event.which == '85')
      down(notes.as);
  });
  $(document).keyup(function(event){
    if(event.which == "65")
      up(notes.c);
    if(event.which == "83")
      up(notes.d);
    if(event.which == "68")
      up(notes.e);
    if(event.which == '70')
      up(notes.f);
    if(event.which == '71')
      up(notes.g);
    if(event.which == '72')
      up(notes.a);
    if(event.which == '74')
      up(notes.h);
    if(event.which == '75')
      up(notes.c2);
    if(event.which == '87')
      up(notes.cs);
    if(event.which == '69')
      up(notes.ds);
    if(event.which == '84')
      up(notes.fs);
    if(event.which == '89')
      up(notes.gs);
    if(event.which == '85')
      up(notes.as);
  });

});

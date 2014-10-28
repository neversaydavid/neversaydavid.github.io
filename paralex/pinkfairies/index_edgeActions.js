/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
sym.play();
// Begin copy here
// create a text object called vid;
// the text object, eveything between the quotes is nothing more than a basic snippet from w3schools for html5 video;

var audio = $("<audio id='blabber'>"+
   "<source src='media/sound2.mp3' type='audio/mpeg' />" +
   "<source src='media/sound2.ogg' type='audio/ogg' />" +
   "This browser is not compatible with HTML 5" +
"</audio>");

// stage symbol lookup, and append the above vid object to it;
// in other words, get the div called 'vcontainer' and attach the video control to it;
sym.$("body").append(audio);

// additional options for the video object
audio.attr('autoplay','autoplay');
audio.attr('preload','auto');

// End copy here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_phone}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("main");
         $("#teleljud").get(0).pause();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8709, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();
         // Begin copy here
         // create a text object called vid;
         // the text object, eveything between the quotes is nothing more than a basic snippet from w3schools for html5 video;
         
         var audio = $("<audio id='teleljud'>"+
            "<source src='media/sound1.mp3' type='audio/mpeg' />" +
            "<source src='media/sound1.ogg' type='audio/ogg' />" +
            "This browser is not compatible with HTML 5" +
         "</audio>");
         
         // stage symbol lookup, and append the above vid object to it;
         // in other words, get the div called 'vcontainer' and attach the video control to it;
         sym.$("body").append(audio);
         
         // additional options for the video object
         audio.attr('autoplay','autoplay');
         audio.attr('preload','auto');
         
         // End copy here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_finger}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("end");
         $("#blabber").get(0).pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_neverland}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://youtu.be/glczspezQac?t=1m6s", "_self");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_phone12}", "click", function(sym, e) {
         // insert code for mouse click here
         // play the timeline from the given position (ms or label)
         sym.play("main");

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(jQuery, AdobeEdge, "EDGE-6066747");
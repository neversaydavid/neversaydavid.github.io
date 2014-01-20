var data = {};
$(function(){
   //sidan laddas
   
   
   
   var rssUrl = 'http://instagr.am/tags/emilybronte/feed/recent.rss';
   var url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q='+rssUrl;
   
   
   $.getJSON(url, function(response){
      console.log(response);
       data = response.responseData.feed.entries;
       var posts = response.responseData.feed.entries;
       for(var i = 0; i < posts.length; i++){
            var post = posts[i];
            var listItem = $('<li></li>');          
            var linkElement = $('<a>' + post.content + '</a>');
            linkElement.attr("href", post.link);
        
            
            listItem.html(post.contentSnippet);
            listItem.append(linkElement);

           $('.instagramfeed').append(listItem);
           if (i == 3){
            i = posts.length;
           }
       }
   });
   

});



  
/* for demo only */
$(document).on("pagebeforecreate", "#home", function(e, ui) {
  var items = '';
  for (var i = 1; i < 100; i++) {
    items += "<li>" + i + "</li>";
  }
  $("#list").append(items);
});

/* check scroll function */
function checkScroll() {
  var activePage = $.mobile.pageContainer.pagecontainer("getActivePage"),
    screenHeight = $.mobile.getScreenHeight(),
    contentHeight = $(".ui-content", activePage).outerHeight(),
    header = $(".ui-header", activePage).outerHeight() - 1,
    scrolled = $(window).scrollTop(),
    footer = $(".ui-footer", activePage).outerHeight() - 1,
    scrollEnd = contentHeight - screenHeight + header + footer;
  $(".ui-btn-left", activePage).text("Scrolled: " + scrolled);
  $(".ui-btn-right", activePage).text("ScrollEnd: " + scrollEnd);
  if (activePage[0].id == "home" && scrolled >= scrollEnd) {
    console.log("adding...");
    addMore(activePage);
  }
}

/* add more function */
function addMore(page) {
  $(document).off("scrollstop");
  $.mobile.loading("show", {
    text: "loading more..",
    textVisible: true
  });
  setTimeout(function() {
    var items = '',
      last = $("li", page).length,
      cont = last + 5;
    for (var i = last; i < cont; i++) {
      items += "<li>" + i + "</li>";
    }
    $("#list", page).append(items).listview("refresh");
    $.mobile.loading("hide");
    $(document).on("scrollstop", checkScroll);
  }, 500);
}

/* attach if scrollstop for first time */
$(document).on("scrollstop", checkScroll);
 $(window).on("ready", function() {
  
  // go to top
  $("body").append('<a href="#top" class="go-top"><i class="fa fa-fw fa-angle-up"></i></a>');
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $(".go-top").addClass("show");
    } else {
      $(".go-top").removeClass("show");
    }
  });

  $('.go-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
});



  $.getJSON( "./trello.json", function( data ) {
    console.log(data);
    var items = [];
    
    var idList = null;
    // find the id list
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);

    $.each(data.lists, function( key, list ) {
      if (list.name == filename) {
        idList = list.id;
        return false
      }
    });

    if (!idList)
      return;

    var resolution = window.screen.width;
    if (resolution > 1140) 
      resolution = 1140;

    var $model = $(".trello");

    // cards
    $.each(data.cards, function( key, card ) {
      if (card.idList != idList)
        return;
      // we have a card
      // find attachment

      var $clone = $model.clone();
      var url = card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net");
      url = url + "?w=" + resolution;
      url = url + "&mark=https://raw.githubusercontent.com/ggali/Sito-Gali-7.0/master/assets/icone/galimberti_watermark_white.png";
      url = url + "&markscale=10&markpad=10";
      $clone.find("img").attr("src", url);
      $clone.find("img").attr("alt", card.name);
      $clone.appendTo($model.parent());

      // if two col
      if (card.attachments.length > 1) {

        var $col = $clone.find(".col-lg-12");
        $col.removeClass("col-lg-12").addClass("col-lg-6");
        var $secondCol = $col.clone();
        var url = card.attachments[1].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net");
        url = url + "?w=" + resolution;
        url = url + "&mark=https://raw.githubusercontent.com/ggali/Sito-Gali-7.0/master/assets/icone/galimberti_watermark_white.png";
        url = url + "&markscale=10&markpad=10";
        $secondCol.find("img").attr("src", url);

        // var firstUrl = $col.find("img").attr("src");
        // $col.find("img").attr("src", firstUrl);
        $secondCol.find("img").attr("alt", card.name);
        $col.after($secondCol);
      }
      // zoom
    });
    
    if (window.screen.width < 1140)
      return;


    var zoomImage = function(img) {
      // clone, fix width and append
      var index = $model.parent().find("img").index(img);
      document.location.hash = "#" + index;
      var $img = $("<img>");
      $img.attr("src", $(img).attr("src"));
      $img.addClass("full-screen");

      $img.one("click", function() {
        $(this).remove();
        document.location.hash = "";
      });

      $("body").append($img);
    }

    $model.parent().find("img").on("click", function() {
      zoomImage(this);
    });


    try {
      var index = Number(document.location.hash.replace("#", ""));
      zoomImage($model.parent().find("img")[index]);
    } catch(e) {
    }
   
   $model.hide();
    
  });

});

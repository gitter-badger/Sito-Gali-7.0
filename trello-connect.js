 $(window).on("ready", function() {

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
      url = url + "&mark=https://raw.githubusercontent.com/ggali/Sito-Gali-7.0/master/assets/icone/galimberti_watermark_white_small.png";
      url = url + "&markw=100&markpad=10";
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
        url = url + "&mark=https://raw.githubusercontent.com/ggali/Sito-Gali-7.0/master/assets/icone/galimberti_watermark_white_small.png";
        url = url + "&markw=200&markpad=20";
        $secondCol.find("img").attr("src", url);

        var firstUrl = $col.find("img").attr("src");
        $col.find("img").attr("src", firstUrl + "&markw=200&markpad=20");
        $secondCol.find("img").attr("alt", card.name);
        $col.after($secondCol);
      }
      // zoom
    });
    
    if (window.screen.width < 1140)
      return;
    
    $model.parent().find("img").on("click", function() {
      // clone, fix width and append
      var $img = $("<img>");
      var src = $(this).attr("src");
      $img.attr("src", src);
      $img.addClass("full-screen");

      $img.one("click", function() {
        $(this).remove();
      });

      $("body").append($img);
    }); 
   
   $model.remove();
    
  });

});

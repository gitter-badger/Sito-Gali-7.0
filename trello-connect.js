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

    $.each(data.cards, function( key, card ) {
      if (card.idList != idList)
        return;
      // we have a card
      // find attachment

      var $clone = $model.clone();
      var url = card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net");
      url = url + "?w=" + resolution;
      $clone.find("img").attr("src", url);
      $clone.find("img").attr("alt", card.name);
      $clone.appendTo($model.parent());


      if (card.attachments.length > 1) {

        var $col = $clone.find(".col-lg-12");
        $col.removeClass("col-lg-12").addClass("col-lg-6");
        var $secondCol = $col.clone();
        var url = card.attachments[1].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net");
        url = url + "?w=" + resolution;
        $secondCol.find("img").attr("src", url);
        $secondCol.find("img").attr("alt", card.name);
        $col.after($secondCol);
      }

    });
   
   $model.remove();
    
  });

});

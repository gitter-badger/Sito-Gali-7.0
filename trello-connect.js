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

    var $model = $(".trello");

    $.each(data.cards, function( key, card ) {
      if (card.idList != idList)
        return;
      // we have a card
      // find attachment
      var $clone = $model.clone();
      var url = card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net");
      url = url + "?w=1140";
      $clone.find("img").attr("src", url);
      $clone.appendTo($model.parent());

    });
   
   $model.remove();
    
  });

});


// Variabili di configurazione
var markscale = 10;   // percentuale larghezza watermark rispetto all'immagine
var markpad = 10;     // padding watermark
var markurl = "https://raw.githubusercontent.com/ggali/Sito-Gali-7.0/master/assets/icone/galimberti_watermark_white.png";


// jquery visible
// !function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);
(function($){

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
    var $w = $(window);
    $.fn.visible = function(partial,hidden,direction){

        if (this.length < 1)
            return;

        var $t        = this.length > 1 ? this.eq(0) : this,
            t         = $t.get(0),
            vpWidth   = $w.width(),
            vpHeight  = $w.height(),
            direction = (direction) ? direction : 'both',
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function2'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = rec.top    >= 0 && rec.top    <  vpHeight,
                bViz = rec.bottom >  0 && rec.bottom <= vpHeight,
                lViz = rec.left   >= 0 && rec.left   <  vpWidth,
                rViz = rec.right  >  0 && rec.right  <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop         = $w.scrollTop(),
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $w.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                offset          = $t.offset(),
                _top            = offset.top,
                _bottom         = _top + $t.height(),
                _left           = offset.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical') {
              console.log(compareTop ,viewTop);
              console.log(compareBottom ,viewBottom);
              return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            }
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})(jQuery);


// froogaloop
var Froogaloop=function(){function e(a){return new e.fn.init(a)}function g(a,c,b){if(!b.contentWindow.postMessage)return!1;a=JSON.stringify({method:a,value:c});b.contentWindow.postMessage(a,h)}function l(a){var c,b;try{c=JSON.parse(a.data),b=c.event||c.method}catch(e){}"ready"!=b||k||(k=!0);if(!/^https?:\/\/player.vimeo.com/.test(a.origin))return!1;"*"===h&&(h=a.origin);a=c.value;var m=c.data,f=""===f?null:c.player_id;c=f?d[f][b]:d[b];b=[];if(!c)return!1;void 0!==a&&b.push(a);m&&b.push(m);f&&b.push(f);
return 0<b.length?c.apply(null,b):c.call()}function n(a,c,b){b?(d[b]||(d[b]={}),d[b][a]=c):d[a]=c}var d={},k=!1,h="*";e.fn=e.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;return this},api:function(a,c){if(!this.element||!a)return!1;var b=this.element,d=""!==b.id?b.id:null,e=c&&c.constructor&&c.call&&c.apply?null:c,f=c&&c.constructor&&c.call&&c.apply?c:null;f&&n(a,f,d);g(a,e,b);return this},addEvent:function(a,c){if(!this.element)return!1;
var b=this.element,d=""!==b.id?b.id:null;n(a,c,d);"ready"!=a?g("addEventListener",a,b):"ready"==a&&k&&c.call(null,d);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,b=""!==c.id?c.id:null;a:{if(b&&d[b]){if(!d[b][a]){b=!1;break a}d[b][a]=null}else{if(!d[a]){b=!1;break a}d[a]=null}b=!0}"ready"!=a&&b&&g("removeEventListener",a,c)}};e.fn.init.prototype=e.fn;window.addEventListener?window.addEventListener("message",l,!1):window.attachEvent("onmessage",l);return window.Froogaloop=
window.$f=e}();



$(window).on("ready", function() {


  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function() {
    FB.init({
      appId: '532070683628144',
      version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
    });
    // $('#loginbutton,#feedbutton').removeAttr('disabled');
    // FB.getLoginStatus(updateStatusCallback);
  });
  
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



  // video autoplay autostop
  var timeout = null;
  $(window).scroll(function() {
    if (timeout) 
      clearTimeout(timeout);
    
    timeout = setTimeout(function() {
      $('.trello iframe').each(function() {

        var player = $f(this);

        var visible = $(this).visible(false, true,"vertical");
        console.log(visible);
        if(visible) {
          console.log("play");
          player.api("play");
        } else {
          console.log("puse");
          player.api("pause");
        }
      })
    }, 250);
  });


  // load from trello

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
      // check video
      if (card.desc.indexOf("player.vimeo.com") > 0) {
        var $clone = $model.clone();
        var $embed = $('<div class="embed-responsive embed-responsive-16by9"></div>');
        var $iframe = $('<iframe class="m-t-1"></iframe>');
        $iframe.attr("src", card.desc);
        $embed.append($iframe);

        $clone.find("img").replaceWith($embed);
        $clone.appendTo($model.parent());
        
        return;
      }

      // check img
      var $clone = $model.clone();
      var url = card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net");
      url = url + "?w=" + resolution;
      url = url + "&mark=" + markurl;
      url = url + "&markscale=" + markscale + "&markpad=" + markpad;
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
        url = url + "&mark=" + markurl;
        url = url + "&markscale=" + markscale + "&markpad=" + markpad;
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

      // create the wrapper and the full width image
      var $wrapper = $("<div class='full-screen'>\
                          <div class='btn-group m-t-1 m-x-1  pull-xs-right'>\
                            <a class='btn btn-info '>Immagine " + index + "</a>\
                            <div class='btn-group'>\
                              <button class='btn btn-info fa fa-chain' data-toggle='dropdown'></button>\
                              <div class='dropdown-menu dropdown-menu-right p-a-1'>\
                                <input type='text' size='50' value='"+ document.location +"'>\
                              </div>\
                            </div>\
                            <a class='btn btn-info fa fa-envelope' href='mailto:?body=" + document.location + "'></a>\
                            <a class='btn btn-info fa fa-facebook'></a>\
                          </div>\
                        </div>");
      
      var $img = $("<img>");
      $img.attr("src", $(img).attr("src"));
      $wrapper.append($img);
      
      $wrapper.find(".fa-facebook").on("click", function() {
        FB.ui(
        {
          method: 'feed',
          name: 'Galimberti - Legno e Bioedilizia',
          link: document.location.href,
          picture: $(img).attr("src"),
          caption: 'www.galimberti.eu',
          description: 'Progettiamo e fabbrichiamo costruzioni, coperture, facciate e pavimenti in legno e materiali naturali.',
          message: ''
        }
      );

        // var url = "http://www.facebook.com/sharer/sharer.php?p[summary]=Galimberti&p[url]=" + encodeURI($(img).attr("src")) ;
        // window.open(url, "", "height=500,width=500,top=100px,menubar=no");
      });

      $wrapper.find(".fa-chain").on("click", function() {
          var input = $wrapper.find("input")[0];
          input.setSelectionRange(0, input.value.length);
      })
      // block the body scroll
      $("body").addClass("noscroll");
      $("body").append($wrapper);

      $img.one("click", function() {
        // body back to scroll
        $("body").removeClass("noscroll");
        $wrapper.remove();
        window.history.pushState(null, "", "#");
      });
    }

    $model.parent().find("img").on("click", function() {
      zoomImage(this);
    });


    try {
      var index = Number(document.location.hash.replace("#", ""));
      if (index != 0)
        zoomImage($model.parent().find("img")[index]);
    } catch(e) {
    }
   
   $model.hide();
    
  });

});

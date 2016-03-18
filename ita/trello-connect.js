
// Variabili di configurazione
var markscale = 10;   // percentuale larghezza watermark rispetto all'immagine
var markpad = 10;     // padding watermark
var markurl = "https://raw.githubusercontent.com/ggali/Sito-Gali-7.0/master/assets/icone/galimberti_watermark_white.png";
var imagesLimit = 15;

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


/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-setclasses !*/
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-videoautoplay-setclasses !*/
!function(A,e,o){function n(A,e){return typeof A===e}function t(){var A,e,o,t,a,l,i;for(var h in s)if(s.hasOwnProperty(h)){if(A=[],e=s[h],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(o=0;o<e.options.aliases.length;o++)A.push(e.options.aliases[o].toLowerCase());for(t=n(e.fn,"function")?e.fn():e.fn,a=0;a<A.length;a++)l=A[a],i=l.split("."),1===i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),c.push((t?"":"no-")+i.join("-"))}}function a(A){var e=R.className,o=Modernizr._config.classPrefix||"";if(E&&(e=e.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");e=e.replace(n,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(e+=" "+o+A.join(" "+o),E?R.className.baseVal=e:R.className=e)}function l(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):E?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function i(A,e){if("object"==typeof A)for(var o in A)r(A,o)&&i(o,A[o]);else{A=A.toLowerCase();var n=A.split("."),t=Modernizr[n[0]];if(2==n.length&&(t=t[n[1]]),"undefined"!=typeof t)return Modernizr;e="function"==typeof e?e():e,1==n.length?Modernizr[n[0]]=e:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=e),a([(e&&0!=e?"":"no-")+n.join("-")]),Modernizr._trigger(A,e)}return Modernizr}var c=[],s=[],h={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var o=this;setTimeout(function(){e(o[A])},0)},addTest:function(A,e,o){s.push({name:A,fn:e,options:o})},addAsyncTest:function(A){s.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=h,Modernizr=new Modernizr;var r,R=e.documentElement,E="svg"===R.nodeName.toLowerCase();!function(){var A={}.hasOwnProperty;r=n(A,"undefined")||n(A.call,"undefined")?function(A,e){return e in A&&n(A.constructor.prototype[e],"undefined")}:function(e,o){return A.call(e,o)}}(),h._l={},h.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},h._trigger=function(A,e){if(this._l[A]){var o=this._l[A];setTimeout(function(){var A,n;for(A=0;A<o.length;A++)(n=o[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){h.addTest=i}),Modernizr.addTest("video",function(){var A=l("video"),e=!1;try{(e=!!A.canPlayType)&&(e=new Boolean(e),e.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),e.vp9=A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),e.hls=A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(o){}return e}),Modernizr.addAsyncTest(function(){function A(o){clearTimeout(e),n.removeEventListener("playing",A,!1),i("videoautoplay",o&&"playing"===o.type||0!==n.currentTime),n.parentNode.removeChild(n)}var e,o=300,n=l("video"),t=n.style;if(!(Modernizr.video&&"autoplay"in n))return void i("videoautoplay",!1);t.position="absolute",t.height=0,t.width=0;try{if(Modernizr.video.ogg)n.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void i("videoautoplay",!1);n.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(a){return void i("videoautoplay",!1)}n.setAttribute("autoplay",""),n.style.cssText="display:none",R.appendChild(n),setTimeout(function(){n.addEventListener("playing",A,!1),e=setTimeout(A,o)},0)}),t(),a(c),delete h.addTest,delete h.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();A.Modernizr=Modernizr}(window,document);
Modernizr.on('videoautoplay', function(result) {
  alert(result);
  if (result) {
    
  } else {
    // not-supported
  }
});

$(window).on("ready", function() {

  // highlight dell'attivo nella navbar
  $(".navbar [href]").each(function() {
    if (this.href == window.location.href)
      $(this).addClass("active");
  });

  // optimize background img in header
  var w = Math.max(window.screen.width, window.screen.height);

  // var s = $(".section-fill-height .background-image").attr("style");
  // $(".section-fill-height .background-image").attr("style", s.replace("')", "?w=" + w + "')") );

  // // optimize carousel img in header
  // var s = $(".section-fill-height .carousel-item img").each(function() {
  //   var src = $(this).attr("src");
  //   $(this).attr("src", src + "?w=" + w);
  // });

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


  var buildPersone = function(data) {
    var $section = $("#persone");
    if ($section.length < 1)
      return;

    var idList;
    $.each(data.lists, function( key, list ) {
      if (list.name == "PERSONE") {
        idList = list.id;
        return false
      }
    });

    if (!idList)
      return;

    var $model = $section.find(".trello");
    // $model.hide();
    
    var extractPhoneNumber = function(val) {
      var i = val.indexOf("+");
      if (i > -1)
        return val.substring(i).replace("-", "").replace(/ /g,'').replace("'0'", "");
      return val;
    }

    $.each(data.cards, function( key, card ) {
      try {
        if (card.idList != idList)
        return;
        console.log(card);
        var $copy = $model.clone();
        var parts = card.desc.split("\n");
        $copy.find("img").attr("src", card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net") + "?q=75");
        $copy.find(".nome_contatti").text(card.name);
        $copy.find(".ruolo_contatti").text(parts[0]);
        $copy.find(".card").attr("data-target" , "#" + card.id);
        $copy.show();
        $model.after($copy);

        // make a new modal
        var $modal = $("body").find($model.find(".card").attr("data-target"));
        var $modalCopy = $modal.clone();
        $modalCopy.find(".img-fluid").attr("src", card.attachments[0].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net") + "?q=75");
        console.log(card.attachments[1].url);
        $modalCopy.find(".settore").attr("src", card.attachments[1].url.replace("https://trello-attachments.s3.amazonaws.com", "http://galimberti.imgix.net") + "?w=25");
        $modalCopy.attr("id", card.id);
        $modalCopy.find(".nome_contatti").text(card.name);
        $modalCopy.find(".ruolo_contatti span").text(parts[0]);
        
        $modalCopy.find(".tel-it span").text(parts[1]);
        $modalCopy.find(".tel-it").attr("href", "tel:" + extractPhoneNumber(parts[1]));
        
        if (parts.length == 4) {
          $modalCopy.find(".tel-ch span").text(parts[2]);
          $modalCopy.find(".tel-ch").attr("href", "tel:" + extractPhoneNumber(parts[2]));
        } else {
          $modalCopy.find(".tel-ch").next().remove();
          $modalCopy.find(".tel-ch").remove();
        }
        $modalCopy.find(".email").attr("href", "mailto:" + parts[parts.length-1]);
        $modalCopy.find(".email span").text(parts[parts.length-1]);

        $modal.after($modalCopy);  
      } catch(e) {}
    });
  }

  // load from trello

  $.getJSON( "./trello.json", function( data ) {
    var items = [];
    buildPersone(data);
    
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

    var resolution = Math.max(window.screen.width, window.screen.height);
    if (resolution > 940) 
      resolution = 940;

    var $model = $(".trello");
    var $btnLoadMore = $("#trello-load-more");
    
    $btnLoadMore.on("click", function() {
      $btnLoadMore.hide();
      $(".trello").show();
    });


    var cardNumber = 0;
    // cards
    $.each(data.cards, function( key, card ) {
      if (card.idList != idList)
        return;
      
      cardNumber++;
      
      // we have a card
      // check video
      if (card.desc.indexOf("player.vimeo.com") > 0) {
        var $clone = $model.clone();
        var $embed = $('<div class="embed-responsive embed-responsive-16by9"></div>');
        var $iframe = $('<iframe class="m-t-1"></iframe>');
        $iframe.attr("src", card.desc);
        $embed.append($iframe);
        $clone.find("img").replaceWith($embed);

        if (cardNumber > imagesLimit)
          $clone.hide();

        $clone.insertBefore($btnLoadMore);
      
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

      if (cardNumber > imagesLimit)
          $clone.hide();

      $clone.insertBefore($btnLoadMore);

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

    if (cardNumber <= imagesLimit) 
      $btnLoadMore.hide();

    // show load more button if we have more the img/page limit
    // if (window.screen.width < 940)
    //   return;


    var zoomImage = function(img) {
      // clone, fix width and append
      var index = $model.parent().find("img").index(img);
      document.location.hash = "#" + index;

      // create the wrapper and the full width image
      var $wrapper = $("<div class='full-screen'>\
                          <div class='btn-group m-t-1 m-x-1  pull-xs-right'>\
                            <label class='btn btn-info' style='pointer-events:none'>Immagine " + index + "</label>\
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

      // block the body scroll
      $("body").addClass("noscroll");
      $("body").append($wrapper);
       $wrapper.find(".fa-chain").on("click", function(e) {
          e.preventDefault();
          var input = $wrapper.find("input")[0];
          input.setSelectionRange(0, input.value.length);
      },true)

      $wrapper.find("img").on("click", function() {
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

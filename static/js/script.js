$(document).ready(function () {
    $('.sidenav').sidenav({ edge: "right" });
     $('.modal').modal();
     $('#modal1').modal('open');
     $('#add-video-modal').modal('open');
     $('.tooltipped').tooltip();
    
     
    // https://stackoverflow.com/questions/35549780/play-vimeo-videos-on-mouse-hover
    $('.video-frame').mouseover(function () {
        var player = $("#" + this.id);
        froogaloop = $f(player[0].id);
        froogaloop.api('play');
        player.mouseout(function () {
        froogaloop.api('pause');
        });
    });

    $('.video').mouseenter(function () {
        $( this ).find(".video-controls").fadeIn();
    });

    $('.video').mouseleave(function () {
        $( this ).find(".video-controls").fadeOut();  
    });

    $('.video-label').mouseleave(function () {
        $(".video-description").slideUp("slow");
        $('.learn-more-link').css('color', '');
    });

    $(".learn-more-link").on("click", function () {
        $(this).next('.video-description').slideToggle( "slow" );
        $(this).css('color', '#ffeb3b');
        $(".video-controls").fadeToggle();
    });

    
    var hideCounter = 1;
    $(".video-controls").on("click", function () {
        var video = $('#player' + this.id);
        var currSrc = video.attr("src");
        if (hideCounter % 2 == 1) {
            var newSrc = currSrc.replace("&controls=0", "&controls=1");
            $(this).html("Hide video controls");

        } else {
            var newSrc = currSrc.replace("&controls=1", "&controls=0");
             $(this).html("Show video controls");
        }
        video.attr("src", newSrc);
        hideCounter++;
        return hideCounter;
    });
});




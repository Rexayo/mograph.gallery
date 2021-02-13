
$(document).ready(function () {
    // materialize jquery initializations start here
    $('.sidenav').sidenav({ edge: "right" });
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('#modal1').modal('open');
    $('#add-video-modal').modal('open');
    $('#add-category-modal').modal('open');
    $('#edit-category-modal').modal('open');
    $('select').formSelect();
    // materialize jquery initializations end here

    // scroll to top starts here
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("#scroll-to-top").fadeIn("slow");
        } else {
            $("#scroll-to-top").fadeOut("slow");
        }
    });
    $("#scroll-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500, "swing");
        return false;
    });
    // scroll to top ends here

    //Custom code from code institute to enable validation on materialize select fields starts here
    validateMaterializeSelect();
    function validateMaterializeSelect() {
        let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
        let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
        if ($("select.validate").prop("required")) {
            $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute", "visibility": "hidden" });
        }
        $(".select-wrapper input.select-dropdown").on("focusin", function () {
            $(this).parent(".select-wrapper").on("change", function () {
                if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                    $(this).children("input").css(classValid);
                }
            });
        }).on("click", function () {
            if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
                $(this).parent(".select-wrapper").children("input").css(classValid);
            } else {
                $(".select-wrapper input.select-dropdown").on("focusout", function () {
                    if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                        if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                            $(this).parent(".select-wrapper").children("input").css(classInvalid);
                            $("select.validate").css({ "visibility": "visible" });
                        }
                    }
                });
            }
        });
    }
    //Custom code from code institute to enable validation on materialize select fields ends here

    // autoplay vimeo videos on hover starts here
    // https://stackoverflow.com/questions/35549780/play-vimeo-videos-on-mouse-hover
    $('.video-frame').mouseover(function () {
        var player = $("#" + this.id);
        froogaloop = $f(player[0].id);
        froogaloop.api('play');
        player.mouseout(function () {
            froogaloop.api('pause');
        });
    });
    // autoplay vimeo videos on hover ends here

    // show video controls link on interaction with video label starts here
    $('.video').mouseenter(function () {
        $(this).find(".video-controls").fadeIn();
    });

    $('.video').mouseleave(function () {
        $(this).find(".video-controls").fadeOut();
    });
    // show video controls link on interaction with video label ends here

    // show video description info on hover over the info icon starts here
    $('.video-label').mouseleave(function () {
        $(".learn-more").slideUp("slow");
        $('.learn-more-link').css('color', '');
    });
    // show video description info on hover over the info icon ends here

    // media queries for layout adjustments including smooth scroll to active video description starts here
    function responsiveGallery(breakPt1) {
        if (breakPt1.matches) {
            //for screens smaller than 1200px
            $(".learn-more-link").click(function () {
                if ($(this).next('.learn-more').css('display') == 'none') {
                    $(this).next('.learn-more').slideDown("slow");
                    $(this).css('color', '#ffeb3b');

                    // smooth scroll to active video description
                    var padding = 200;
                    var panel = $(this).next('.learn-more');

                    $("html, body").animate(
                        {
                            scrollTop: panel.offset().top - padding,
                        },
                        1000,
                        "swing"
                    );

                } else {
                    $(this).next('.learn-more').slideUp("slow");
                    $(this).css('color', 'grey');

                    // smooth scroll to active video description
                    var padding = 200;
                    var panel = $(this);

                    $("html, body").animate(
                        {
                            scrollTop: panel.offset().top - padding,
                        },
                        1000,
                        "swing"
                    );
                }

            });

        } else {
            // for screens larger than 1200px
            $(".learn-more-link").mouseenter(function () {
                $(this).next('.learn-more').slideToggle("slow");
                $(this).css('color', '#ffeb3b');
                $(".video-controls").fadeToggle();
                if ($(this).next('.learn-more').css('color') == '#ffeb3b') {
                    $(this).next('.learn-more').slideUp("slow");
                    $(this).css('color', 'grey');
                }
            });
        }
    }
    var breakPt1 = window.matchMedia("(max-width: 1200px)")
    responsiveGallery(breakPt1);
    breakPt1.addListener(responsiveGallery)
    // media queries for layout adjustments including smooth scroll to active video description starts here


    // toggle video playback controls after "show video controls" link is clicked starts here
    var hideCounter = 1;
    $(".video-controls").on("click", function () {
        var video = $('#player' + this.id);
        var currSrc = video.attr("src");
        if (hideCounter % 2 == 1) {
            var newSrc = currSrc.replace("&controls=0", "&controls=1");
            $(this).html("Hide video controls");

            var padding = 200;
            var panel = $(this);

            $("html, body").animate(
                {
                    scrollTop: panel.offset().top - padding,
                },
                1000,
                "swing"
            );

        } else {
            var newSrc = currSrc.replace("&controls=1", "&controls=0");
            $(this).html("Show video controls");

            var padding = 200;
            var panel = $(this);

            $("html, body").animate(
                {
                    scrollTop: panel.offset().top - padding,
                },
                1000,
                "swing"
            );
        }
        video.attr("src", newSrc);
        hideCounter++;
        return hideCounter;
    });
    // toggle video playback controls after "show video controls" link is  clicked ends here

    // bug fix for materialize select validation on mobile phones
    $("#add-video-modal-footer").on("click", function () {
        $('#category_name').css('display', 'block');

        $('#add-video-modal-footer').mouseleave(function () {
            $('#category_name').css('display', 'none');
        });
    });
});




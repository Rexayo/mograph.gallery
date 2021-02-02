$(document).ready(function () {
    $('.sidenav').sidenav({ edge: "right" });
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('#modal1').modal('open');
    $('#add-video-modal').modal('open');
    $('#add-category-modal').modal('open');
    $('#edit-category-modal').modal('open');
    
    $('select').formSelect();

    validateMaterializeSelect();
    function validateMaterializeSelect() {
        let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
        let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
        if ($("select.validate").prop("required")) {
            $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
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
                        }
                    }
                });
            }
        });
    }
    
    $('#category_name').css('display', 'none');
    $("#add-video-modal-footer").on("click", function () {
        $('#category_name').css('display', 'block');

        $('#add-video-modal-footer').mouseleave(function () {
            $('#category_name').css('display', 'none');
        });

    });

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
        $(this).find(".video-controls").fadeIn();
    });

    $('.video').mouseleave(function () {
        $(this).find(".video-controls").fadeOut();
    });

    $('.video-label').mouseleave(function () {
        $(".learn-more").slideUp("slow");
        $('.learn-more-link').css('color', '');
    });

    $(".learn-more-link").on("click", function () {
        $(this).next('.learn-more').slideToggle("slow");
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




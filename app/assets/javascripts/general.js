jQuery(document).ready(function ($) {
    //$this_tipo_proyecto = $(".tipo_de_proyecto_index>div");
    //$this_tipo_proyecto.hover(function(){
    //});


    //$(function(){
        //var box = $('#box_pinterest');
        //for(var i=0;i<50;i++){
            //var card = $('<div>').addClass('card').css({
                //height: Math.floor((Math.random() * 100) + 100)+"px",
                //background: '#235E6F'
            //}); box.append(card);
        //}




        // useage: fallow below

        //$('#box_pinterest').waterfall();

        //eoiwefoiwef


    //});
    
    var sourceSwap = function () {
        var $this = $(this).children("img");
        var newSource = $this.data("alt-src");
        //var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    $(function() {
        $('.gridder-list').each(function() { 
            var loadImagen = $(this).children("img").data("alt-src");
            new Image().src = loadImagen;
            //new Image().src = $(this).data('alt-src'); 
        }).hover(sourceSwap, sourceSwap); 
    });

    $(".gridder-list").click(function(){
        $this = $(this);
        $(".gridder-list").addClass("activo");
        $this.removeClass("activo");
    });

    // Call Gridder
    $(".gridder").gridderExpander({
        scrollOffset: 60,
        scrollTo: "panel", // "panel" or "listitem"
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",            
        nextText: "",
        prevText: "",
        closeText: "<i class='fa fa-times fa-2x'></i>",
        onStart: function () {
            console.log("Gridder Inititialized");
        },
        onExpanded: function (object) {
            console.log("Gridder Expanded");
            $(".carousel").carousel();
        },
        onChanged: function (object) {
            console.log("Gridder Changed");
        },
        onClosed: function () {
            console.log("Gridder Closed");
        }
    });

    var imagen_para_blur = $(".separador_imagenes").children('img');

    imagen_para_blur.hover(function(){
        console.log("yep");
        imagen_para_blur.addClass("imagen_blur");
        $(this).removeClass("imagen_blur");
        }, function(){
            imagen_para_blur.removeClass("imagen_blur");
        }
    );

    $('#box_pinterest').waterfall();
});
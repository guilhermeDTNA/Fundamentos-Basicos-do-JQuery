$(function(){
    $("#slide img:eq(0)").addClass("ativo").show(); //eq é tipo o nth

    let texto = $(".ativo").attr("alt");
    $("#slide").prepend("<p>"+texto+"</p>");

    setInterval(slide, 3000);

    //altera as imagens
    function slide(){
        if($(".ativo").next().length){ //se existir alguma imagem depois
            $(".ativo")
            .fadeOut()
            .removeClass("ativo")
            .next()
            .fadeIn()
            .addClass("ativo");
        } else{
            $(".ativo")
            .fadeOut()
            .removeClass("ativo");
            $("#slide img:eq(0)")
            .fadeIn()
            .addClass("ativo");
        }

        //modifica cada legenda de acordo com o alt da img que tem a class ativo
        texto = $(".ativo").attr("alt");
        $("#slide p")
        .hide()
        .html(texto)
        .delay(500)
        .fadeIn();
    }
    
});
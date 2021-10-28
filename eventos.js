//Eventos de janela
$(function(){
    $("body").css({height: "5000px"});

    //Buscar opção para essa função, removida na versão 3
    $("img").on("error", function() {
        let src = $(this).attr("src"); //Pega o valor do atributo src
        $(this).attr("src", "https://upload.wikimedia.org/wikipedia/commons/f/f0/Error.svg");
        alert("Imagem "+src+" indisponível");
    });

    $("img.correct").width($(window).width()/2).height($(window).height() / 3);

    //Evento de alterar altura/largura da janela
    $(window).resize(() => {
        $("img.correct").width($(window).width()/2);
        $("img.correct").height($(window).height());
    });

    $(window).scroll(() => {
        var topo = $(window).scrollTop();
        console.log(topo);

        if(topo >= 400){
            $("img.correct").fadeOut("slow");
        } else{
            $("img.correct").fadeIn("slow");
        }
    });
});

//Eventos de mouse
$(function(){
    var ex = $(".ex1");

    $(".ev1").click(function(){
        $(this).css("background", "#ccc");
        ex.text("Você clicou!");
    });

    $(".ev2").dblclick(function(){
        $(this).css("background", "#ccc");
        ex.text("Você clicou duas vezes!");
    });

    $(".ev3").focusin(function(){
        $(this).css("background", "#ccc");
        ex.text("Você focou!");
    }).focusout(function(){
        $(this).css("background", "#000");
        ex.text("Você tirou o foco!");
    });

    $(".ev4").hover(function(){
        $(this).css("background", "#ccc");
        ex.text("Você passou o mouse!");
    });

    $(".ev5").mousedown(function(){
        $(this).css("background", "#ccc");
        ex.text("Você clicou segurando!");
    }).mouseup(function(){
        $(this).css("background", "#ccc");
        ex.text("Você soltou o botão!");
    });

    let a=0;
    $(".ev6").mouseenter(function(){ //mouseenter só funciona no elemento, não em seus filhos
        a+=1;
        ex.text("Número de entradas do mouse (mouseenter): "+a);
    }).mouseout(function(){
        ex.text("Saiu com o mouse (mouseout)");
    })

    let b=0;
    $(".ev7").mouseover(function(){ //mouseover funciona em todos os filhos do elemento
        b+=1;
        ex.text("Número de entradas do mouse (mouseover): "+b);
    }).mouseleave(function(){
        ex.text("Saiu com o mouse (mouseleave)");
    });

    $(".ev8").mousemove(function(event){
        let localx = event.pageX;
        let localy = event.pageY;

        ex.text("Movimento X: "+localx+" - Movimento Y: "+localy);
    });
    
});
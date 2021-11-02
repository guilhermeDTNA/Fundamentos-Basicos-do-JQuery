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

        if(topo >= 1000){
            $("img.correct").fadeOut("slow");
        } else{
            $("img.correct").fadeIn("slow");
        }
    });
});

//Eventos de mouse
$(function(){
    var ex = $(".eventos .ex1");

    $(".eventosMouse .ev1").click(function(){
        $(this).css("background", "#ccc");
        ex.text("Você clicou!");
    });

    $(".eventosMouse .ev2").dblclick(function(){
        $(this).css("background", "#ccc");
        ex.text("Você clicou duas vezes!");
    });

    $(".eventosMouse .ev3").focusin(function(){
        $(this).css("background", "#ccc");
        ex.text("Você focou!");
    }).focusout(function(){
        $(this).css("background", "#000");
        ex.text("Você tirou o foco!");
    });

    $(".eventosMouse .ev4").hover(function(){
        $(this).css("background", "#ccc");
        ex.text("Você passou o mouse!");
    });

    $(".eventosMouse .ev5").mousedown(function(){
        $(this).css("background", "#ccc");
        ex.text("Você clicou segurando!");
    }).mouseup(function(){
        $(this).css("background", "#ccc");
        ex.text("Você soltou o botão!");
    });

    let a=0;
    $(".eventosMouse .ev6").mouseenter(function(){ //mouseenter só funciona no elemento, não em seus filhos
        a+=1;
        ex.text("Número de entradas do mouse (mouseenter): "+a);
    }).mouseout(function(){
        ex.text("Saiu com o mouse (mouseout)");
    })

    let b=0;
    $(".eventosMouse .ev7").mouseover(function(){ //mouseover funciona em todos os filhos do elemento
        b+=1;
        ex.text("Número de entradas do mouse (mouseover): "+b);
    }).mouseleave(function(){
        ex.text("Saiu com o mouse (mouseleave)");
    });

    $(".eventosMouse .ev8").mousemove(function(event){
        let localx = event.pageX;
        let localy = event.pageY;

        ex.text("Movimento X: "+localx+" - Movimento Y: "+localy);
    });

    $(".eventosMouse .ev9").click(function(){
        ex.hide(500); //meio segundo (display: none)
    });

    $(".eventosMouse .ev10").click(function(){
        ex.show(500);
    });
    
    $(".eventosMouse .ev11").click(function(){
        ex.toggle(500); //alterna entre esconder e exibir;
    });

    $(".eventosMouse .ev12").keyup(function(){
        let texto = $(this).val();

        if(texto == "hide"){
            ex.hide('slow');
        } else if(texto == "show"){
            ex.show('slow');
        } else if(texto == "toggle"){
            ex.toggle('slow');
        }
    });
});

//Eventos de teclado
$(function(){
    $(".place").each(function(){
        var place = $(this).attr("title");
        var input = $(this);

        input
        .val(place)
        .css({color: '#ccc'})
        .focusin(function(){
            input.css({color: '#000'});
            if(input.val() == place){
                input.val('');
            }
        })
        .focusout(function(){
            if(input.val() == ""){
                input.val(place);
                input.css({color: '#ccc'});
            }
        })
    });

    let ex = $(".ex1");

    $(".key").keyup(function(){
        ex.text($(this).val());
    });
});

//Eventos de formulários
$(function(){
    let ex = $(".ex1");

    $(".eventosFormulario .ev1").focus(function(){
        ex.text($(this).attr("title"));
    }).keyup(function(){
        if($(this).val() == "pontocom"){
            $(".eventosFormulario .ev2").focus();
        }
    });

    //Saída do campo
    $(".eventosFormulario .ev1").blur(function(){
        ex.text("Saída do campo: "+$(this).attr("name"));
    });

    //Pega alteração ao sair do campo
    $(".eventosFormulario .ev2").change(function(){
        ex.text("Campo alterado: "+$(this).val());
    });

    $(".eventosFormulario .selecionar").click(function(){
        $(".eventosFormulario .ev3").select(); //Seleciona todo o texto de um elemento
        $("form").submit(() => { //Não deixa o form enviar informações
            return false;
        })
    });
});

//Eventos de desvaecimento
$(function(){
    let ex = $(".ex1");
    let button = $(":button"); //pega o atributo

    button.click(function(){
        ex.fadeOut(4000);
    }).dblclick(function(){
        ex.fadeIn(4000);
    });

    let fadeTo = $(".opacity").click(function(){
        ex.fadeTo(4000, 0.5); //tempo e opacidade
    }).dblclick(function(){
        ex.fadeTo(4000, 1);
    });

    let fadeToggle = $(".efeitosDesvanecer .toggle").click(function(){
        ex.fadeToggle(4000);
    });

    let callback = $(".efeitosDesvanecer .callback").click(function(){
        ex.fadeTo(4000, 0.3, function(){
            ex.fadeTo(4000, 1);
        });
    })
});
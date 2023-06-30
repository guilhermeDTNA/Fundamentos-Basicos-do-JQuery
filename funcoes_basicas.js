const items = $("#navbarSupportedContent .nav-item");

//Percorre item a item
$(items).each((index, item) => {

    //Exibe o textContent do item que iniciar com Hab
    if($(item).text().startsWith("Hab"))
        console.log($(item).text());
})

//Exibe o text do item da posição 1
items.eq(1).text()
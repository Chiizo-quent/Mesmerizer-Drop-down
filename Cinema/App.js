$('.poltronas>div').click(function (e) { 
    e.preventDefault();
    Clicado = $(this).find('.nome').html();
    if(Clicado == ""){
        Resposta =confirm("Deseja reservar o assento?");
        if(Resposta == true){
            Nome = prompt("Digite um nome para reservar");
            $(this).find('.nome').html(Nome);
            $(this).attr('class', 'ocupado');
        }
    }    else{
        Resposta =confirm("Deseja cancelar a reservar?");
        if(Resposta == true){
            $(this).find('.nome').html('');
            $(this).attr('class', '');
        }
    }
});
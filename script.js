function red(selectElement) {
    // Obtém o valor da opção selecionada
    var selectedOption = selectElement.value.toLowerCase(); // Convertendo para minúsculas
    
    // Verifica qual opção foi selecionada e redireciona para a página correspondente
    switch (selectedOption) {
        case '900':
            window.location.href = 'adaptogemwhey.html';
            break;
        case '450':
            window.location.href = 'adaptogem400g.html';
            break;
        case 'strap_vermelho':
            window.location.href = 'strapvermelho.html';
            break;
        case 'chocolate':
            window.location.href = 'pagina_do_chocolate.html';
            break;
        case 'doce_de_leite':
            window.location.href = 'pagina_do_doce_de_leite.html';
            break;
        default:
            // Opção inválida ou padrão
            break;
    }
}
function redirect(selectElement) {
     // Obtém o valor da opção selecionada
     var selectedOption = selectElement.value.toLowerCase(); // Convertendo para minúsculas
    
     // Verifica qual opção foi selecionada e redireciona para a página correspondente
     switch (selectedOption) {
         case 'strapred':
             window.location.href = 'strapvermelho.html';
             break;
         case 'strap_preto':
             window.location.href = 'strapgrowth.html';
             break;
    }
}
function redirect2(selectElement) {
    // Obtém o valor da opção selecionada
    var selectedOption = selectElement.value.toLowerCase(); // Convertendo para minúsculas
   
    // Verifica qual opção foi selecionada e redireciona para a página correspondente
    switch (selectedOption) {
        case 'azul':
            window.location.href = 'faixadejoelhoazul.html';
            break;
        case 'vermelho':
            window.location.href = 'faixadejoelho.html';
            break;
   }
}

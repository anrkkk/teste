function redirectToPage(selectElement) {
    // Obtém o valor da opção selecionada
    var selectedOption = selectElement.value;
    
    // Verifica qual opção foi selecionada e redireciona para a página correspondente
    switch (selectedOption) {
        case 'baunilha':
            window.location.href = 'adaptogem400g.html';
            break;
        case 'morango':
            window.location.href = '.html';
            break;
        case 'avela':
            window.location.href = 'pagina_da_avela.html';
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

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const productList = document.querySelector('.product-list');
    
    let scrollAmount = 0;
    const scrollAmountStep = 300; // Ajuste conforme necessário

    // Atualiza a visibilidade dos botões
    function updateButtons() {
        const maxScroll = productList.scrollWidth - productList.clientWidth;
        prevButton.style.display = scrollAmount > 0 ? 'block' : 'none';
        nextButton.style.display = scrollAmount < maxScroll ? 'block' : 'none';
    }

    // Adiciona evento de clique no botão "anterior"
    prevButton.addEventListener('click', () => {
        scrollAmount = Math.max(scrollAmount - scrollAmountStep, 0);
        productList.style.transform = `translateX(-${scrollAmount}px)`;
        updateButtons();
    });

    // Adiciona evento de clique no botão "próximo"
    nextButton.addEventListener('click', () => {
        const maxScroll = productList.scrollWidth - productList.clientWidth;
        scrollAmount = Math.min(scrollAmount + scrollAmountStep, maxScroll);
        productList.style.transform = `translateX(-${scrollAmount}px)`;
        updateButtons();
    });

    // Inicializa o estado dos botões
    updateButtons();
});

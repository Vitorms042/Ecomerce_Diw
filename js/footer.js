const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/logo33..png" width="400" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Homem</li>
                <li><a href="#" class="footer-link">Camisetas</a></li>
                <li><a href="#" class="footer-link">Camisolas</a></li>
                <li><a href="#" class="footer-link">Camisas</a></li>
                <li><a href="#" class="footer-link">Jeans</a></li>
                <li><a href="#" class="footer-link">Calças</a></li>
                <li><a href="#" class="footer-link">Sapatos</a></li>
                <li><a href="#" class="footer-link">Formal</a></li>
                <li><a href="#" class="footer-link">Casual</a></li>
                <li><a href="#" class="footer-link">Esportes</a></li>
                <li><a href="#" class="footer-link">Assistir</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Mulher</li>
                <li><a href="#" class="footer-link">Saias</a></li>
                <li><a href="#" class="footer-link">Vestidos</a></li>
                <li><a href="#" class="footer-link">Shorts</a></li>
                <li><a href="#" class="footer-link">Jeans</a></li>
                <li><a href="#" class="footer-link">Sapatos</a></li>
                <li><a href="#" class="footer-link">Casuais</a></li>
                <li><a href="#" class="footer-link">Esportes</a></li>
                <li><a href="#" class="footer-link">Acessórios</a></li>
                <li><a href="#" class="footer-link">Topps</a></li>
                <li><a href="#" class="footer-link">Assistir</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">Sobre a companhia</p>
    <p class="info">Somo uma loja E-ecomerce que fornece roupas e acessórios em geral para todo país. Somos a número #1 em buscas e avaliação, temos espaço do cliente e tudo mais.</p>
    <p class="info">Email para suporte - supSmartStore@gmail.com, SmartStore@gmail.com</p>
    <p class="info">Telefone para contato - 3236-4000 Whatsapp - 31 98421-0099 </p>
    <p class="info">Aceitamos todas as bandeiras de cartões como Elo, MasterCard, Visa, etc...</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">termos & serviços</a>
            <a href="#" class="social-link">Página de privacidade</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">SmartStore,a melhor e mais rápida loja de roupas da internet</p>
    `;
}

createFooter();
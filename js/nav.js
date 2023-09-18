const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
          <img src="img/logo33._compressed.png" width="170" class="brand-logo" alt="">
                <div class="nav-itens">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="Pesquisar Marca,produto...">
                            <button class="search-btn">Procurar</button>
                        </div>
                    <a>
                      <img src="img/user.png" id="user-img" alt="">
                      <div class="login-logout-popup hide">
                        <p class="account-info">Log in as, name</p>
                        <button class="btn" id="user-btn">Log out</button>
                     </div>
                    </a> 
                    <a href="#"><img src="img/cart.png" alt=""></a>
                 </div>
              </div>
                <ul class="links-container">
                    <li class="link-item"><a href="#" class="link">Inicio</a></li>
                    <li class="link-item"><a href="#" class="link">Feminino</a></li>
                    <li class="link-item"><a href="#" class="link">Masculino</a></li>
                    <li class="link-item"><a href="#" class="link">Infantil</a></li>
                    <li class="link-item"><a href="#" class="link">Acessórios</a></li>
                </ul>
            `;
}
    createNav();

const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        popuptext.innerHTML = 'log in as, ${user.name}';
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () =>{
            sessionStorage.clear();
            location.reload();
        })
        } else{
            popuptext.innerHTML = 'log to place order';
            actionBtn.innerHTML = 'log in';
            actionBtn.addEventListener('click', () => {
                location.href = '/login';
            })
        }
}
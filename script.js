var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

//esta dizendo que ao clicar na classe hamburguer, vai executar uma função\\
// esse função acrescenta a classe para .sidebar.show-menu, que coloca retira a margem do menu, fazendo ele aparecer na tela\\
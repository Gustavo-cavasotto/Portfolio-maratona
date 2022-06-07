var hamburguer = document.querySelector(".hamburguer");
var content = document.getElementById('container');
var menuitem = document.querySelector(".menu-item");


hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});



function onScroll(){
    if (scrollY < 700){
        seta.classList.add('scroll')
    }

    else{
        seta.classList.remove('scroll')
    }

}






//esta dizendo que ao clicar na classe hamburguer, vai executar uma função\\
// esse função acrescenta a classe para .sidebar.show-menu, que coloca retira a margem do menu, fazendo ele aparecer na tela\\
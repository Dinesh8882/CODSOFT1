const menu = document.querySelector('#toggle');
const toggle = document.querySelector('nav ul')
let bool = false
menu.addEventListener('click',function(){
        if(bool === true){
                toggle.style.height ='180px';
                bool = false
        }
        else{
                toggle.style.height ='0px';
                bool = true
        }
})
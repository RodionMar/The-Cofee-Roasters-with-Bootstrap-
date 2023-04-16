const body = document.querySelector('.body');
const header = document.querySelector('.header');

document.addEventListener("DOMContentLoaded", function(){
   document.getElementById('hamburger').addEventListener("click", () => {
      body.classList.toggle('opened');
      header.classList.toggle('opened')
   })
});

function closeMenu(){
    if(header.classList.contains("opened")){
       body.classList.remove('opened');
       header.classList.remove('opened');
    }
};


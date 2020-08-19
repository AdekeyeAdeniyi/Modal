// app.js

const close = document.querySelector(".icon-close");
const open = document.querySelector(".btn");
const modal = document.querySelector(".modal");

close.addEventListener("click", function(){
    modal.classList.remove("showModal");

    modal.firstElementChild.classList.remove("showOverlay");
});

open.addEventListener("click", function(){
    modal.classList.add("showModal");

    modal.firstElementChild.classList.add("showOverlay");

})
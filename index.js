let toDoForm = document.querySelector(".to-do-form")
let TodoInp = document.querySelector("#to-do")
let list = document.querySelector(".todos")

toDoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
   list.innerHTML+=`<li class="list-group-item">
   <span>${TodoInp.value}</span>
   <div>
   <button class="btn btn-warning done"><i class="fa-solid fa-check"></i></button>
   <button class="btn  btn-danger remove"><i class="fa-solid fa-trash"></i></button>
   </div>
   </li>`
   TodoInp.value=""

   
   let dones =document.querySelector(".done");
   dones.forEach(item => {
    item.addEventListener("click",function(){
    this.parentElement.previousElementSibling.style.textDecoration="line-through"
    })
      });
});
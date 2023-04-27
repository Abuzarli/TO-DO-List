let toDoForm = document.querySelector(".to-do-form")
let TodoInp = document.querySelector("#to-do")
let list = document.querySelector(".todos")

toDoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (TodoInp.value===''){
        alert("You must write something!");
    }
    else{
   list.innerHTML+=`<li class="list-group-item">
   <span>${TodoInp.value}</span>
   <div>
   <button class="btn btn-warning done"><i class="fa-solid fa-check"></i></button>
   <button class="btn  btn-danger remove"><i class="fa-solid fa-trash"></i></button>
   </div>
   </li>`
   TodoInp.value=""
    }
   
   let dones =document.querySelectorAll(".done");
   dones.forEach(item => {
    item.addEventListener("click",function(){
    this.parentElement.previousElementSibling.style.textDecoration="line-through"
    })
      });
});
let removes= document.querySelectorAll(".remove");
removes.forEach(item => {
    item,addEventListener("click",function(){
        this.parentElement.style.display="none"
    })
});


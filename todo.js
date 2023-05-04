let input=document.getElementById('input');
//let name=document.getElementById('name');
let res=document.querySelector('.response');
//let save=document.querySelector('#save');




let form=document.querySelector('#form');

form.addEventListener("submit",function(e){
    e.preventDefault();

    let task=input.value;
    input.value="";
    addTask(task);
 
})

if(task==""){
    form.style.pointerEvents='none';
}


function addTask(task){
    const list=document.createElement('li');
    list.innerHTML=task;
   // list.textContent=task;
    res.append(list);

    res.style.display='inherit';

}
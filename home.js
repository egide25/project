let search=document.getElementById('search-icon');
let menu=document.getElementById('menu');
let get=document.getElementById('get');
let container=document.querySelector('.product-container');
let closeChat=document.querySelector('.closeChat');
let chatContainer=document.querySelector('.chat-container');
let getChat=document.getElementById('getChat');
let close=document.getElementById('close');
let removeSize=document.getElementById('removeSize');
let addSize=document.getElementById('addSize');
let guide=document.querySelector('.guide');
let paying=document.getElementById('paying');
let closePay=document.getElementById('close-paying');
let payingCont=document.querySelector('.paying');






get.onclick =()=>{
    container.style.display='inherit';
}

close.onclick =()=>{
    container.style.display='none';
}

closeChat.onclick=()=>{
    chatContainer.style.display='none';
}
getChat.onclick =()=>{
    chatContainer.style.display='block';
}

 removeSize.onclick =()=>{
    for(i=1; 1<1000; i++){
        guide.innerHTML= i;
    }
    
       
 
 }

closePay.onclick =()=>{
    payingCont.style.display='none';
}
paying.onclick=()=>{
    payingCont.style.display='inherit';
}
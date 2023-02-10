const items =document.querySelector('.items');
const add = document.querySelector('.footer_btn');
const list = document.querySelector("ul");
const input = document.querySelector(".footer_input");

let cnt=1;
let id=0;
add.addEventListener('click',()=>{
    if(input.value==""){
        alert('아이템을 입력하세요');
    }else{
    addItem();
    cnt++;
    }
})

items.addEventListener('click',(event)=>{
    deleteItem(event.target.getAttribute('data-id'));
})

function addItem(){
    const name = input.value;
    const div = document.createElement('div');
    div.classList.add('item');
    id++;
    div.setAttribute('data-id',String(id));
    div.innerHTML=`<span class="item_name">${name}</span>
    <button class="item_delete" data-id='${id}'><i class="fa-solid fa-trash-can" data-id='${id}'></i></button>`
    list.appendChild(div);
    input.value="";
    console.log(id);
    return name;
}

function deleteItem(id){
    if(id!==null){
        const delItem=document.querySelector(`.item[data-id='${id}']`);
        delItem.remove();
    }
}

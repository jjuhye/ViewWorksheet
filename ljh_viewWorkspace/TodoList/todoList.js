const list=document.querySelector('section div');
const addBtn=document.querySelector('button');
const del=document.querySelector('#garbage');
let items=[...document.querySelectorAll('.item')];
let cnt=0;

addBtn.addEventListener('click',e=>{
    addTodoList();
})

function addTodoList(){
    const input=document.querySelector('input');
    const textarea=document.querySelector('textarea');
    let title=input.value;
    let content=textarea.value;
    if(title=="" || content==""){
        alert('제목과 내용을 입력해주세요!')
    }else{
        cnt++;
        const div=document.createElement('div');
        div.classList.add('item');
        div.setAttribute('data-id',cnt);
        div.setAttribute('draggable','true');
        div.innerHTML=`<h4 class="title">${title}</h4>
        <span class="msg">${content}</span>`
        
        div.addEventListener('dragstart',e=>{
            e.dataTransfer.setData('id',div.getAttribute('data-id'));
        })
        list.appendChild(div);
        items.push(div);
        input.value="";
        textarea.value="";
    }
}

del.addEventListener('dragover',e=> e.preventDefault());

del.addEventListener('drop',e=>{
    let id=e.dataTransfer.getData('id');
    removeItem(id);
})

function removeItem(id){
    let delItem=items.find(item=>item.getAttribute('data-id')==id);
    list.removeChild(delItem);
}

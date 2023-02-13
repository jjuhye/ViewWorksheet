const total = 10;
        const data = [
            {name:"강민기", count:3},
            {name:"김범진", count:6},
            {name:"김성윤", count:2},
            {name:"김영균", count:3.3},
            {name:"노상권", count:5.2},
            {name:"박병준", count:1.5},
            {name:"박일권", count:5},
            {name:"양재혁", count:6.5},
            {name:"윤준영", count:7},
            {name:"이주혜", count:8},
            {name:"이지원", count:5.8},
            {name:"정태현", count:4},
            {name:"조양흠", count:9},
            {name:"조영곤", count:3.1},
        ];

const list = document.querySelector(".list");
const input = document.querySelector(".footer_input");

        function drawBar(){
            data.sort((a,b)=>b.count-a.count).forEach(item=>{
                list.appendChild(makeData(item));
            });
        }
        
        function makeData(item){
            const div = document.createElement('div');
            div.classList.add('item');
            div.innerHTML=`<div class="inner" style="width:${item.count*10}%;background-color:${changeCol(item.count*10)};">
            <div class="name">${item.name}</div>
            <div class="percent">${item.count*10}%</div>
            </div>`
            return div;
        }
        
        function changeCol(percent){
            if(percent<=20){
                return 'red';
            }else{
                return '#673ab7';
            }
        }

        window.onload=function(){
            drawBar();
        }
        // function makeData(){
        //     data.sort((a,b)=>b.count-a.count);
        //     for(let i=0; i<data.length; i++){
        //         let name=data[i].name;
        //         let cnt=data[i].count;
        //         let percent=calPct(cnt);
        //         const div = document.createElement('div');
        //         div.classList.add('item');
        //         div.innerHTML=`<div class="inner" style="width:${percent}%;background-color:${changeCol(percent)};">
        //         <div class="name">${name}%</div>
        //         <div class="percent">${percent}%</div>
        //         </div>`
        //         list.appendChild(div);
        //     }
        // }
let textBox = document.getElementById('text-box');  // 할 일 입력창
let saveButton = document.getElementById('save-button');      // 버튼
let toDoList = document.getElementById('toDoList'); 
   // 할 일 리스트창
textBox.addEventListener("focus",function(){textBox.value=""});


saveButton.addEventListener('click',save);

function save()
{
    if(!textBox.value)
    {
        alert("일기를 입력해주세요");
    }
}
save();
'use strict';

let itemList = [];
let inputButton = document.querySelector(".input__button");
inputButton.addEventListener("click", addItem);


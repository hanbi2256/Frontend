let textBox = document.getElementById('text-box');  // 할 일 입력창
let saveButton = document.getElementById('save-button');      // 버튼
let toDoList = document.getElementById('toDoList'); 
   // 할 일 리스트창
textBox.addEventListener("focus",function(){textBox.value=""});



saveButton.addEventListener('click', function(){    // 버튼에 클릭 이벤트가 발생하면
    var list = document.createElement('div');  // html 'li' 태그 만들기
   
    if (!textBox.value)            // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
        alert('내용을 입력해 주세요!');
    else
    {
        list.innerText = textBox.value;  // <li>입력된 할 일</li>
        toDoList.appendChild(list);       // 할 일 리스트창에 자식으로 붙이기
        textBox.value= "";  
        alert("저장 성공!")   ;          // 할 일 입력창 초기화
    }

    list.addEventListener('click', function(){      // 만들어진 list에 클릭 이벤트가 발생하면 줄 긋기
        list.style.textDecoration = "line-through";
    })
    list.addEventListener('dblclick', function(){   // list에 더블클릭 이벤트가 발생하면 할 일 리스트창에서 지우기
        toDoList.removeChild(list);
    })
})

//내일만들거
//삭제, 수정 버튼 만들기
//다른 페이지에 저장하기
//글 저장할때마다 박스 새로만들기


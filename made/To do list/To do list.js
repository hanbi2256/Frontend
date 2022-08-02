//유저가 값을 입력한다
//+버튼을 클릭하면 , 할일이 추가된다
//delete 버튼을 누르면 할일이 삭제된다
//Check 버튼을 누르면 할일이 끝나면서 밑줄이 간다
//진행중 끝남 탭을 누르면, 언더바가 이동한다
//끝난탭은, 끝난 아이템만, 진행중탭은 진행중인 아이텝만
//전체탭을 누르면 다시 전체아이템으로 돌아옴

let taskInput=document.getElementById("task-input");
let addButton=document.getElementById("add-button");
let taskBoard=document.getElementById("task-board");
let taskList=[]
addButton.addEventListener("click", addTASK);

function addTASK()
{
   
    let task={
        id:randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete:false,
    }
    taskList.push(task);
    console.log(taskList);
    render();
    
}
function render()
{
    let resultHTML='';
    for(let i=0;i<taskList.length;i++)
    {
        resultHTML+=` <div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
            <button onclick="toogleComplete()">Check</button>
            <button>Dleate</button>
        </div>
    </div>`;
    }

    document.getElementById("task-board").innerHTML=resultHTML;
}
function toogleComplete()
{
    
}
function randomIDGenerate()
{
    Math.random().toString(36).substr(2, 9);
}
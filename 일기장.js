const date1 = document.querySelector('#date');
let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜

date1.innerHTML = '오늘의 날짜 : ' + year + '년 ' + month + '월 ' + date + '일';


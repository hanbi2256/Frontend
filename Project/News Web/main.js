
let news = [];
let menus=document.querySelectorAll(".menus button");

menus.forEach(menu=>menu.addEventListener("click", (event)=>getNewsByTopic(event)));

const getLatestNews = async () => {
    let url = new URL(` https://api.newscatcherapi.com/v2/latest_headlines?countries=kr&topic=business&page_size=10`);
    let header = new Headers({ 'x-api-key': 'kM52f3-AO9LEbk9bwl6T1ztr6DSM19qnxZzZcCwJXoM' });
    let respones = await fetch(url, { headers: header });
    let data = await respones.json();
    news = data.articles;
    

    render();

};
const getNewsByTopic=async (event)=>
{
    let topic=event.target.textContent.toLowerCase();
    let url=new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?countries=krpage_size=10&topic=${topic}`
        );
    let header = new Headers({ 
        "x-api-key": "kM52f3-AO9LEbk9bwl6T1ztr6DSM19qnxZzZcCwJXoM",
     });
    let respones = await fetch(url, { headers: header });
    let data = await respones.json();
    console.log("토픽뉴스 데이터", data);
};

const render = () => {
    let newsHTML = "";
   newsHTML= news.map(item=>{

        return `<div class="row news">
        <div class="col-lg-4">
            <img  class="news-img-size"src="${item.media}">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>
                ${item.summary}
            </p>
            <div>
              ${item.rights} * ${item.publised_date}
            </div>
        </div>

    </div>`
    }).join("");

    document.getElementById("news-board").innerHTML=newsHTML
}
getLatestNews();

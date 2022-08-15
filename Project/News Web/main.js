
let news = [];
let menus = document.querySelectorAll(".menus button");


menus.forEach(menu => menu.addEventListener("click", (event) => getNewsByTopic(event)));

let searchButton = document.getElementById("search-button");
let url;

const  getNews=async()=>
{
    try{
        let header = new Headers({ 'x-api-key': 'kM52f3-AO9LEbk9bwl6T1ztr6DSM19qnxZzZcCwJXoM' });
        let respones = await fetch(url, { headers: header });
        let data = await respones.json();
        news = data.articles
        render();
    }
    catch(error)
    {
        console.log("잡힌 에러는",error.messege);
    }
}

const getLatestNews = async () => {
    url = new URL(` https://api.newscatcherapi.com/v2/latest_headlines?countries=kr&topic=business&page_size=10`);
    getNews();

};



const getNewsByTopic = async (event) => {
    let topic = event.target.textContent.toLowerCase()
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10topic=${topic}`);
    getNews();
};

const getNewsByKeyword = async () => {
    let keyword = document.getElementById("search-input").value;
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`);
    getNews();
}

const render = () => {
    let newsHTML = "";
    newsHTML = news.map(item => {

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

    document.getElementById("news-board").innerHTML = newsHTML
}
searchButton.addEventListener("click", getNewsByKeyword);
getLatestNews();

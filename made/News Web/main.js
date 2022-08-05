
let news = [];

const getLatestNews = async () => {
    let url = new URL(` https://api.newscatcherapi.com/v2/latest_headlines?countries=kr&topic=business&page_size=10`);
    let header = new Headers({ 'x-api-key': 'kM52f3-AO9LEbk9bwl6T1ztr6DSM19qnxZzZcCwJXoM' });
    let respones = await fetch(url, { headers: header });//ajx
    let data = await respones.json();
    news = data.articles;
    console.log(news);

    render()

};
getLatestNews();

const render = () => {
    let newsHTML = ''

    document.getElementById("").innerHTML=newsHTML
}

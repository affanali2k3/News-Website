let newsContainer = document.getElementById("newsContainer");

let country = prompt("Which country news do you want to see?");

// let country = "us";
let apiKey = "46ef3eb494ee4e1bb885c71649ab0a95";
const xhr = new XMLHttpRequest();
let newsHtml = '';
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);
xhr.onload = function(){
    let json = JSON.parse(this.responseText);
    json.articles.forEach(function(element){
        let newsDescription = element.description;
        let newsContent = element.content;
        let news = 
                `<div class="card mt-3">
                    <div class="card-body">
                        <h4>${newsDescription}</h4>
                        <p>${newsContent}</p>
                        <a href=${element.url} target = _blank style="border: 2px solid black;background-color: black;color:white;padding:5px;border-radius:10px;;text-decoration: none">Read More </a>
                    </div>
                </div>`;
        newsHtml += news;
        
    });

    newsContainer.innerHTML = newsHtml;
}
xhr.send();

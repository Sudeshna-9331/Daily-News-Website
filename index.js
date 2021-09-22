//00933d7f621c42b98c6cd40b7c4df431
//http://newsapi.org/v2/top-headlines


//Date
let date=document.getElementById("date");
let today=new Date();
date.innerHTML=today;
//console.log(today);
let source = 'bbc-news';
let apiKey = '00933d7f621c42b98c6cd40b7c4df431';

//Grab news container
let newsAccordion = document.getElementById("newsAccordion");

//Create ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

//what to do when response is ready 
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(json);
        //console.log(articles);
        let newsHtml = "";
        
        articles.forEach(function (element,index) {

           let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><b> Breaking news ${index}:  </b>
                                          ${element[`title`]}
                                            </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse " aria-labelledby="headingOne" data-parent="#newsAccordion ">
                            <div class="card-body">${element[`content`]}.<a href="${element['url']}" target="_blank"> Read more here </a>
                            </div>
                            </div>
                        </div>`
            newsHtml += news;

        });

        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("some error occured");
    }
}
xhr.send();



function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

var mainTweetDiv = document.getElementById("tweets");
//function that generates a tweet given the text and the user
function generateTweet(text, user, name) {

    var tweet = document.createElement("div");
    var tweetdiv = document.createElement("div");
    var figure = document.createElement("figure");
    var userIcon = document.createElement("img");
    tweetdiv.className = "tweetdiv";
    //Linea de Usuario
    var firstline = document.createElement("div");
    var mediaContent = document.createElement("div");
    userIcon.className = "is-rounded";
    userIcon.src = "../img/sadmew.png";
    figure.classList.add("image","is-48x48");
    figure.appendChild(userIcon);
    mediaContent.innerHTML = "<p class ='title is-4' style='color: rgb(247, 249, 249);'>" + user + "</p>" + "<p class ='subtitle is-6' style='color: rgb(247, 249, 249);'>" +"@"+ name + "</p>";
    firstline.appendChild(figure);
    firstline.appendChild(mediaContent);
    mediaContent.style = "padding-left:12px;";
    firstline.style = "display:flex;flex-direction:row;padding-top:5%;padding-left:5%;";
    //Linea de Contenido
    var content = document.createElement("div");
    content.className = "content";
    content.innerHTML = text;
    //Linea de Botones
    var lastLine = document.createElement("div");
    lastLine.style = "padding-top:5%;padding-left:5%;";
    var firstnumber, secondnumber, thirdnumber;
    for (let index = 0; index <= 3; index++) {
        if(index == 0){
            firstnumber=randomNumber();
        }else if(index == 1){
            secondnumber=randomNumber();
        }else{
            thirdnumber=randomNumber();
        }
    }
    
    var reply = document.createElement("button");
    reply.className = "button is-info-custom";
    reply.innerHTML = "<span class=\"icon is-small\"><i class=\"fa-solid fa-comment\"></i></span><span>"+firstnumber+"</span>";
    var retweet = document.createElement("button");
    retweet.className = "button is-info-custom";
    retweet.innerHTML = "<span class=\"icon is-small\"><i class=\"fa-solid fa-retweet\"></i></span><span>"+secondnumber+"</span>";
    var like = document.createElement("button");
    like.className = "button is-info-custom";
    like.innerHTML = "<span class=\"icon is-small\"><i class=\"fa-solid fa-heart\"></i></span><span>"+thirdnumber+"</span>";
    var share = document.createElement("button");
    share.className = "button is-info-custom";
    share.innerHTML = "<span class=\"icon is-small\"><i class=\"fa-solid fa-share\"></i></span>";
    lastLine.appendChild(reply);
    lastLine.appendChild(retweet);
    lastLine.appendChild(like);
    lastLine.appendChild(share);
    tweetdiv.appendChild(firstline);
    tweetdiv.appendChild(content);
    tweetdiv.appendChild(lastLine);
    tweet.className = "tweet";
    tweet.appendChild(tweetdiv);
    mainTweetDiv.appendChild(tweet);
}

//function that generates random names with numbers
function randomName() {
    return get_name();
}

//function that generates random users
function randomUser(preUser) {
    var user = "";

    user += preUser;
    user += '_';
    user += randomNumber();
    user += randomNumber();
    return user;
}

//function that generates random text
async function randomText() {
    return fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(data => {
        text = data.quote;
    });
}

//function that generates random tweets in a loop of 8 first deleting the ones that were generated before
async function generateRandomTweets() {
    var tweets = document.getElementsByClassName("tweet");
    var textPromised;
    for (var i = 0; i < tweets.length; i++) {
        tweetDiv.removeChild(tweets[i]);
    }
    for (var i = 0; i < 8; i++) {
        var user = randomName();
        var name = randomUser(user);
        await randomText().then(text =>{
            textPromised = text;
        });
        generateTweet(textPromised, user, name);
    }
}


    
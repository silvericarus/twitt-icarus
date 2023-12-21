
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
    reply.style = "fill:rgb(255, 122, 0);";
    reply.innerHTML = "<span class=\"icon is-small\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"16\" viewBox=\"0 0 512 512\"><path d=\"M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z\"/></svg></span><span>"+firstnumber+"</span>";
    var retweet = document.createElement("button");
    retweet.className = "button is-info-custom";
    retweet.style = "fill:rgb(255, 122, 0);";
    retweet.innerHTML = "<span class=\"icon is-small\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"16\" viewBox=\"0 0 576 512\"><path d=\"M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z\"/></svg></span><span>"+secondnumber+"</span>";
    var like = document.createElement("button");
    like.className = "button is-info-custom";
    like.style = "fill:rgb(255, 122, 0);";
    like.innerHTML = "<span class=\"icon is-small\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"16\" viewBox=\"0 0 512 512\"><path d=\"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z\"/></svg></span><span>"+thirdnumber+"</span>";
    var share = document.createElement("button");
    share.className = "button is-info-custom";
    share.style = "fill:rgb(255, 122, 0);";
    share.innerHTML = "<span class=\"icon is-small\"><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16\" width=\"16\" viewBox=\"0 0 512 512\"><path d=\"M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z\"/></svg></span>";
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
    const number = randomNumber() + randomNumber();
    const currentUrl = window.location.href;
    const apiUrl = `${currentUrl}xkcd/${number}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
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
            var tmpText = text.transcript.replace(/\[\[([^[\]]*)\]\]/g, '$1');
            tmpText = tmpText.replace(/\{\{([^{}]*)\}\}/g, '<span style="font-style: italic;">$1</span>');
            textPromised = tmpText;
        });
        generateTweet(textPromised, user, name);
    }
}


    
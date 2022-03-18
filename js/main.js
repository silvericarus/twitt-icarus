function randomNumber() {
    var number = Math.floor(Math.random() * 10) + 1;
    return number;
}

var mainTweetDiv = document.getElementById("tweets");
//function that generates a tweet given the text and the user
function generateTweet(text, user, name) {

    var tweet = document.createElement("div");
    var tweetdiv = document.createElement("div");
    tweetdiv.className = "tweetdiv";
    //Linea de Usuario
    var firstline = document.createElement("div");
    var mediaContent = document.createElement("div");
    mediaContent.innerHTML = "<p class ='title is-4'>" + user + "</p>" + "<p class ='subtitle is-6'>" +"@"+ name + "</p>";
    firstline.appendChild(mediaContent);
    //Linea de Contenido
    var content = document.createElement("div");
    content.className = "content";
    content.innerHTML = text;
    //Linea de Botones
    var lastLine = document.createElement("div");

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
    reply.innerHTML = "<span class=\"icon is-small\"><i class=\"fas fa-comment\"></i></span><span>"+firstnumber+"</span>";
    var retweet = document.createElement("button");
    retweet.className = "button is-info-custom";
    retweet.innerHTML = "<span class=\"icon is-small\"><i class=\"fas fa-retweet\"></i></span><span>"+secondnumber+"</span>";
    var like = document.createElement("button");
    like.className = "button is-info-custom";
    like.innerHTML = "<span class=\"icon is-small\"><i class=\"fas fa-heart\"></i></span><span>"+thirdnumber+"</span>";
    var share = document.createElement("button");
    share.className = "button is-info-custom";
    share.innerHTML = "<span class=\"icon is-small\"><i class=\"fas fa-share-alt\"></i></span>";
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
    var name = "";
    var nameLength = 15;
    for (var i = 0; i <= nameLength; i++) {
        var randomNumber = Math.floor(Math.random() * 26) + 97;
        name += String.fromCharCode(randomNumber);
    }
    return name;
}

//function that generates random users
function randomUser() {
    var user = "";
    var userLength = 10;
    for (var i = 0; i <= userLength; i++) {
        var randomNumber = Math.floor(Math.random() * 26) + 97;
        user += String.fromCharCode(randomNumber);
    }
    return user;
}

//function that generates random text
function randomText() {
    var text = "";
    var textLength = 256;
    for (var i = 0; i <= textLength; i++) {
        var randomNumber = Math.floor(Math.random() * 26) + 97;
        text += String.fromCharCode(randomNumber);
    }
    return text;
}

//function that generates random tweets in a loop of 8 first deleting the ones that were generated before
function generateRandomTweets() {
    var tweets = document.getElementsByClassName("tweet");
    for (var i = 0; i < tweets.length; i++) {
        tweetDiv.removeChild(tweets[i]);
    }
    for (var i = 0; i < 8; i++) {
        var name = randomName();
        var user = randomUser();
        var text = randomText();
        generateTweet(text, user, name);
    }
}


    
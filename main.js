function identify()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jj1nZ9h79/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
console.log(results);
r = Math.floor(Math.random()*255) + 1;
g = Math.floor(Math.random()*255) + 1;
b = Math.floor(Math.random()*255) + 1;

document.getElementById("numbers").innerHTML = "I can hear - " + results[0].confidence;
document.getElementById("numbers").style.color = "rgb(" + r + ", " + g + "," + r + ")";
img1 = document.getElementById("dog");
img2 = document.getElementById("cat");
img3 = document.getElementById("lion");
img4 = document.getElementById("moo");
    }

    if(results[0].label == "Dog Barking")
    {
        img2.hide();
        img3.hide();
        img4.hide();
        document.getElementById("audio_played").innerHTML = "Dog is barking";
    }

    if(results[0].label == "Cat Meowing")
    {
        img1.hide();
        img3.hide();
        img4.hide();
        document.getElementById("audio_played").innerHTML = "Cat is meowing";
    }

    if(results[0].label == "Lion Roaring")
    {
        img2.hide();
        img1.hide();
        img4.hide();
        document.getElementById("audio_played").innerHTML = "Lion is roaring";
    }

    if(results[0].label == "Cow Mooing")
    {
        img2.hide();
        img1.hide();
        img3.hide();
        document.getElementById("audio_played").innerHTML = "Cow is mooing";
    }



}
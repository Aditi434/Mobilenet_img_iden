Webcam.set({
    width: 350,
    height: 300,
    img_format: 'png',
    png_quality: 90,

    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML = '<img id="picture" src="' +data_uri+'"/>';
    })
}
console.log('ml5.verion', ml5.version);

classifier = ml5.imageClassifier ('mobileNet', modelLoaded);

function modelLoaded()
{
    console.log("ml5 Loaded!");
}

function check()
{
    img = document.getElementById('picture');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        
    }
}


        Webcam.set({
        width:350,
        height:300,
        image_format : 'png',
        png_quality:90
    });

    
webcam.attach( '#camera' );
camera = document.getElementById("camera");


function take_snapshot(){
    console.log("hello")
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
  

function check()
{
  img = document.getElementById('selfie_image');
  classifier.classify(img, gotResult);
}


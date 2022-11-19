          
webcam.attach( '#camera' );
camera = document.getElementById("camera");
       
       Webcam.set({
        width:350,
        height:300,
        image_format : 'png',
        png_quality:90
    });

 

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


function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy".innerHTML = results[0].confidence.tofixed(3)
    }
}
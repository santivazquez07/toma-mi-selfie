var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML = content;
    if (content == "Toma mi selfie"){
        console.log("Tomando selfie en 5 segundos---");
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speak_info = "Tomando selfie en 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_info);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
    },5000);
}
Webcam.set({
    width: 350,
    height: 250,
    image_format: 'png',
    png_quality: 90
 });
 camera = document.getElementById("camara");
 function take_snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '">';
     })
 }
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
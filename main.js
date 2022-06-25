function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kGgop5R7n/model.json', modelReady);
   
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = ' Accuracy - '+ (results[0].confidence*100).toFixed(2)+" % ";
        document.getElementById("result_label").style.color = "rgb(" +random_number_r+"," 
+random_number_g+","+ random_number_b+ ")"   ;
document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+ ","
+random_number_g+","+ random_number_b+ ")"   ;

img= document.getElementById('alien1');
img1= document.getElementById('alien2');
img2= document.getElementById('alien3');
img3= document.getElementById('alien4');

if(results[0].label == "Clap") {
    img.src = 'https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.gif';
    img1.src = 'https://toppng.com/uploads/preview/cat-11521380838sq5q7tscgh.png';
    img2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GGbIs05Y04-_q0isPGba0oxcQFXUPVxJZA&usqp=CAU';
    img3.src = 'https://toppng.com/uploads/preview/frog-png-image-with-transparent-background-frog-11563630155rwscrdnt2v.png';
}else if (results[0].label == "Bell") {
    img.src = 'https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png';
    img1.src = 'https://toppng.com/uploads/preview/cat-11521380838sq5q7tscgh.gif';
    img2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GGbIs05Y04-_q0isPGba0oxcQFXUPVxJZA&usqp=CAU';
    img3.src = 'https://toppng.com/uploads/preview/frog-png-image-with-transparent-background-frog-11563630155rwscrdnt2v.png';
}else if (results[0].label == "snapping") {
    img.src = 'https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png';
    img1.src = 'https://toppng.com/uploads/preview/cat-11521380838sq5q7tscgh.png';
    img2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GGbIs05Y04-_q0isPGba0oxcQFXUPVxJZA&usqp=CAU.gif';
    img3.src = 'https://toppng.com/uploads/preview/frog-png-image-with-transparent-background-frog-11563630155rwscrdnt2v.png';
}else  {
    img.src = 'https://www.freepnglogos.com/uploads/dog-png/bow-wow-gourmet-dog-treats-are-healthy-natural-low-4.png';
    img1.src = 'https://toppng.com/uploads/preview/cat-11521380838sq5q7tscgh.png';
    img2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GGbIs05Y04-_q0isPGba0oxcQFXUPVxJZA&usqp=CAU';
    img3.src = 'https://toppng.com/uploads/preview/frog-png-image-with-transparent-background-frog-11563630155rwscrdnt2v.gif';
}
}
}
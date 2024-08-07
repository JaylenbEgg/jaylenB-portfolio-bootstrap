  // console.log('Hello world!') 

  // var prompt = prompt('what is your name?') 

  // console.log(prompt)

  function verifyAge (age) { var age = prompt('what is your age?');
    console.log(age) 
var age = prompt('what is your age?');
console.log(age) 

if(age < 18) {alert ('you are a minor!') 
} else if (age >= 18 && age <=60)  {alert('you are an adult!')
 } else {alert('you are a senior citizen!')
 } 

    
    }


   function uploadAndIdentifyPlants() { 
    // get the photo from the frontend
    var photoInput = document.getElementById('photoInput');
    console.log(photoInput)
     console.log(photoInput.files[0])
    
    // if no photo selected and user click submit let them know they  need to upload photo    
    if (photoInput.files.length ==0 ) { 
      alert('please select a photo to upload'); 
      return;
     }
     var selectedfile = photoInput.files[0];
}


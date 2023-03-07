const hamburger = document.querySelector('.hamburger i');
const navbar = document.querySelector('ul');

hamburger.addEventListener('click', ()=>{
      hamburger.classList.toggle('fa-xmark');
      navbar.classList.toggle('slide');
});


var carousel=document.querySelector('.slider img');
var images=["images/slide1.png","images/slide2.png","images/slide3.png"];
var num=3;

function next(){
    num++;
       if(num>=images.length){
        num=0;
        carousel.src=images[num]
        
    }
    else{
       carousel.src=images[num]
       
    }
                    
};

function prev(){
    num--;
    if(num<0){
        num=images.length-1;
        carousel.src=images[num]
      }
      
    else{
        carousel.src=images[num]
      }

};


var box = document.querySelector('.products-preview');
var box2 = document.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        box.style.display = 'flex';
        var name = product.getAttribute('data-name');
        box2.forEach(preview => {
            var target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }

        });
    };
});

box2.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        box.style.display = 'none';
    }
});


const form = document.getElementById("form");
var usernameL = document.getElementById("u-namelabel");
var usernameI = document.getElementById("userinput");
var usererror = document.getElementById("error-user");
var password1L= document.getElementById("passl-1");
var password1I= document.getElementById("passi-1");
var password1error = document.getElementById("pass-error");
var conpassword2L = document.getElementById("conpassl-2");
var conpassword2I =document.getElementById("conpassi-2");
var conpassword2error = document.getElementById("confirm-error");

function validateuname(){
    if(usernameI.value === ""){
        usererror.innerHTML = "username cannot be blank"
        usernameI.style.borderColor= "red";
        return false;
    }

    else if(usernameI.value.length < 4 || usernameI.value.length > 15){
        usererror.innerHTML = "min 4 characters and max 15 characters";
        usernameI.style.borderColor= "red";
        return false;
    }

    else{
        usererror.innerHTML = "";
        usernameI.style.borderColor= "green"; 
        return true;
    }
}

function validatepassword1(){
    if(password1I.value === ""){
        password1error.innerHTML = "please create the password";
        password1I.style.borderColor = "red";
        return false;
    }

    else if(password1I.value.length < 5 || password1I.value.length > 15){
        password1error.innerHTML = "min 5 characters and maximum 15 characters";
        password1I.style.borderColor = "red";
        return false;
    }

    else{
        password1error.innerHTML = "";
        password1I.style.borderColor = "green";
        return true;
    }
}

function validatepassword2(){
    if(conpassword2I.value === ""){
        conpassword2error.innerHTML = "password cannot be empty";
        conpassword2I.style.borderColor = "red"
        return false;
    }

    else if( password1I.value !== conpassword2I.value){
        conpassword2error.innerHTML = "password cannot be match";
        conpassword2I.style.borderColor = "red";
        return false;
    }

   else{
      conpassword2error.innerHTML = "";
      conpassword2I.style.borderColor = "green"
      return true;
   }
}

form.addEventListener('submit',e=>{
     e.preventDefault();
     checkinput();
});


function checkinput(){
    const username = usernameI.value.trim();
    const password = password1I.value.trim();
    const confirmpassword = conpassword2I.value.trim();
    
    document.write("username:" + username + "<br>");
    document.write("password:" + password +"<br>");
    document.write("confirmpassword:" + confirmpassword + "<br>")
}





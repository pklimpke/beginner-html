const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world';

document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/KDE.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let checker = false;

function setUserName(){
  let myName;
  if(checker=true)
  {
    myName = prompt('You need to enter a name!');
  } else {
    myName = prompt('Please enter your Name!');
  }
  if(!myName) {
    checker = true;
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, ' + myName;
  }
}

myButton.onclick = function(){setUserName()};


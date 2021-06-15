const eventCode = document.getElementById('eventcode');
const eventLocation = document.getElementById('eventlocation');
const eventWhich = document.getElementById('eventwhich');
const eventKey = document.getElementById('eventkey');
const userValue = document.getElementById('keycode-display');
const heading = document.getElementById('value');
const cardItem = document.querySelector('.wrapper');
const userValues = document.getElementById('user-value');
console.log(cardItem)

document.body.addEventListener('keydown', function(event){
    var keyCode = event.keyCode;
    eventCode.innerHTML = keyCode;
    userValue.innerHTML = keyCode;

    var keyLocation = event.location;
    eventLocation.innerHTML = keyLocation;

    var key = event.key;
    eventKey.innerHTML = key;

    var keyWhich = event.code;
    eventWhich.innerHTML = keyWhich;

    heading.classList.add('hide');
    cardItem.classList.add('show');

    
})

document.body.addEventListener('touchstart',function(){
    if (mediaQuery.matches) {
        // Then trigger an alert
        console.log('Media Query Matched!');
        userValues.classList.add('userValue');
      }
})

const mediaQuery = window.matchMedia('(max-width: 500px)')
// Check if the media query is true

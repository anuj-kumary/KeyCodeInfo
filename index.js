const eventCode = document.getElementById('eventcode');
const eventLocation = document.getElementById('eventlocation');
const eventWhich = document.getElementById('eventwhich');
const eventKey = document.getElementById('eventkey');
const userValue = document.getElementById('keycode-display');
const heading = document.getElementById('value');

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
})




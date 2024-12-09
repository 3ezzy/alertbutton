const ShowAlertBtn =  document.getElementById('showalert');
const customAlert =  document.getElementById('Costumalert');
const confirmBtn =  document.getElementById('confirmBtn');


ShowAlertBtn.addEventListener('click', function(){
    customAlert.style.display = 'flex';
});


confirmBtn.addEventListener('click', function(){
    customAlert.style.display = 'none';
});
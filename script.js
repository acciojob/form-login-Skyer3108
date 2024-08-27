function getFormvalue(event) {
   
    event.preventDefault();

    
    const firstName = document.querySelector('input[name="fname"]').value;
    const lastName = document.querySelector('input[name="lname"]').value;

   
    alert(`${firstName} ${lastName}`);
}


window.onload = function() {
    document.getElementById('form1').onsubmit = getFormvalue;
};
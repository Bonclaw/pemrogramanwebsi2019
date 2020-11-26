function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="user"){
        alert("Login Succesfully");
        return false;
    }
    else
{
    alert("Login Failed")
}
function Dollar(){
    let input = document.getElementById('amount').value;
    let kurs_result = amount*9.915
    document.getElementById('result').innerHTML = kurs_result;
}
}
function openForm() {
    document.getElementById("room-chat").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("room-chat").style.display = "none";
  }
let userNameInput=document.getElementById('username');
let emailInput=document.getElementById('email');
let passwordInput=document.getElementById('password');
let signUpBtn=document.getElementById('signUpBtn');
let alertMessage=document.getElementById('alertMessage');
let loginBtn=document.getElementById('LoginBtn');
let welcomeMessage=document.getElementById('welcomeMessage');
let LogoutBtn=document.getElementById('LogoutBtn')
let usersArr=[];
if(localStorage.getItem('Users')!=null)
{
    usersArr=JSON.parse(localStorage.getItem('Users'));
}
if(welcomeMessage != null)
{
    let user=JSON.parse(localStorage.getItem('userName'))
    welcomeMessage.innerHTML ='Welcome '+user;
}
function Signup(){
    let user={
        Name:userNameInput.value,
        Email:emailInput.value,
        Password:passwordInput.value,
    }
    if(userNameInput.value=='' ||emailInput.value==''||passwordInput.value=='' )
    {
        alertMessage.innerHTML="All inputs are required"
        alertMessage.classList.replace('d-none','d-block')
        alertMessage.style.color='red'  
    }
    else if( CheckEmail()!=-1){
        alertMessage.innerHTML="Email already exists"
        alertMessage.classList.replace('d-none','d-block')
        alertMessage.style.color='red'
    }
    else{
      
        usersArr.push(user);
        localStorage.setItem('Users',JSON.stringify(usersArr))
        alertMessage.innerHTML="Success"
        alertMessage.classList.replace('d-none','d-block')
        alertMessage.style.color='green'
    }

}
function CheckEmail()
{
   let res=  usersArr.findIndex(ele=>ele.Email==emailInput.value);
   return res;
}
function Login()
{
    if(emailInput.value=='' || passwordInput.value=='')
    {
        alertMessage.innerHTML="All inputs are required"
        alertMessage.classList.replace('d-none','d-block')
        alertMessage.style.color='red' 
    }
    else
    {
        let res= usersArr.find(ele=> ele.Email==emailInput.value && ele.Password==passwordInput.value);
        if(res == undefined)
        {   alertMessage.innerHTML=" Incorrect Email or Password "
        alertMessage.classList.replace('d-none','d-block')
        alertMessage.style.color='red' 
        }
        else
        {
          localStorage.setItem('userName',JSON.stringify(res.Name));
          window.location.href='homepage.html'
      
        }
    }
}
function Logout()
{ 
    window.location.href='index.html'
}
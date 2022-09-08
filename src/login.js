import './login.css';
import img from './PICK.PNG'


function consolecheck(){
    console.log("check");
    return(
        <div>
            hello
        </div>
    )
}

function printName(){
    var email=document.getElementById('email').value;
    var pw=document.getElementById('pw').value;
    console.log("이메일 "+email)
    console.log("비번 "+pw)
}

function login() {
    return (
        <div>
        <img src={img} alt="img" id='im'></img>
        <div className="Login">
       <h1 className="logo">Login</h1>
        <div className="id">
           <input type="text" placeholder="ID" id="email"></input>
       </div>
       <div className='pw'>
        <input type="password" placeholder="password" id="pw"></input>
        </div>
        <button className='button' onClick={(e)=>{printName()}}>로그인</button>
        {consolecheck()}
        </div>
        </div>
    );
  }

  export default login;
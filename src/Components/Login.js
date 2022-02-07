import React, { useState } from 'react';
import '../stylesheets/Login.css';

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");

    function adduser(){
        console.warn=(name,email,pswd);
    }
  return (
    <div className="body">
    <div className="body">
        <div class="main" id="main">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div class="signup">
                <form>
                    <label id="Login_level" for="chk" aria-hidden="true">Sign up</label>
                    <input id="login_input" type="text" value={name} onChange={(event) => { setName(event.target.value) }} name="name" placeholder="User name" required="" />
                    <input id="login_input" type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} name="email" placeholder="Email" required="" />
                    <input id="login_input" type="password" value={pswd} onChange={(event) => { setPswd(event.target.value) }} name="pswd" placeholder="Password" required="" />
                    <button class="btn"id="button" type="button" onClick={adduser}>Sign up</button>
                </form>
            </div>
            <div class="login">
                <form>
                    <label id="Login_level_login" for="chk" aria-hidden="true">Login</label>
                    <input id="login_input" type="email" name="email" placeholder="Email" required="" />
                    <input id="login_input" type="password" name="pswd" placeholder="Password" required="" />
                    <button id="button" type="button">Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login;

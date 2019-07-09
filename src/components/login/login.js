import React from "react";
import "./login.css"
import logo from "../logo/logo_2016.png"

export default class Login extends React.Component {


    render() {
        return <div style={{textAlign:"center"}}>

            <img style={{height:"100px", display:"block", margin:"auto"}} src={logo}
                 alt="stratos logo"/>
            <h3>Zutritt nur für befugtes Personal.</h3>
            <p>Bitte einloggen um fortzufahren.</p>
            <form>

                <input className="loginInput" type="email" name="email"  placeholder="Email" required/>
                <input className="loginInput" type="password" name="password"  placeholder="Password" required/>
                <button className="loginButton" type="submit">Login</button>


            </form>

        </div>

    }

}


import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './login.css';
import { useState } from 'react';


const login:React.FC = () => {
    const[action,setAction]= useState("Sign Up");
    return (
        <div className='container'>
            <div className="header">
                <div className = "text">Sign Up</div>
                <div className ="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src="icon.png" alt=""/>
                    <input type="text" placeholder="Name" />
                </div>
                <div className="input">
                    <img src="" alt=""/>
                    <input type="email" placeholder="Email-Id"/>
                </div>
                <div className="input">
                    <img src="" alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>

            <div className="forgot-password">Lost Password? <span> Click Here!</span> </div>
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}>Login</div>

            </div>

        </div>
    );
}


export default login




















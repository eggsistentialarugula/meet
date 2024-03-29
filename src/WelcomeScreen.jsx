import React from "react";
import './WelcomeScreen.css';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
        (
            <div className="WelcomeScreen">
                <div className="bg"></div>
                <h1>Welcome to the <span className="meet">Meet</span> App<img src="https://www.shareicon.net/data/256x256/2016/06/02/774716_international_512x512.png" alt="logo"></img></h1>
                <h4>
                    Log in to see upcoming events around the world for full-stack developers
                </h4>
                <div className="button_cont" align="center">
                    <div class="google-btn">
                        <div class="google-icon-wrapper">
                            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google sign-in" />
                        </div>
                        <button onClick={() => { props.getAccessToken() }} rel="nofollow noopener" class="btn-text">
                            <b>Sign in with google</b>
                        </button>
                    </div>
                </div>
                <a href="https://eggsistentialarugula.github.io/meet/privacy.html" target="_blank" rel="nofollow noreferrer noopener" class="policy">Privacy Policy</a>
            </div>

        )
        : null
}
export default WelcomeScreen;
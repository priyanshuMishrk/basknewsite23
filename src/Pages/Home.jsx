import React, { useEffect, useState } from "react";
import baskLogo from '../Images/bask.png'
function Home() {


    return (
        <div>
            <div className="headForHome">
                <img src={baskLogo} className='baskLogo' alt="" />
            </div>

            <div className="textOnHomePage">
                <div>

                </div>
                <div className="head xb">
                    Welcome Home
                </div>

                <div className="bodt bl">
                    Whether you are a client, someone looking to work with us, visiting us
                    out of curiosity, or just somehow landed up here, consider this home.
                </div>
            </div>

            <div className="nextPageTaker">
                <div className="head xb">
                    Leave a story behind.
                </div>

                <div className="body ln">
                    You will notice we don’t have a menu on this page.
                    That’s because we know you’ll eventually find your way around here (if you want to).
                    Write something (anything) in the space below and click the submit button to see some exciting work.
                </div>

                <textarea rows={2} type="text" className="" />

                <div className="buttonAtHome xb">
                    <div class="bottom-left"></div>
                    <div class="bottom-right"></div>
                    Submit
                </div>
            </div>
        </div>
    );
}

export default Home;

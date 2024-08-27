import React, { useEffect, useState } from "react";
import baskLogo from '../Images/bask.png'
import arrow from '../Icons/arrow.svg'

function Csend() {


    return (
        <div className="c180">
            <img src={baskLogo} alt="" />

            <div className="textt xb">
            Wanna
            share
            your
            contact
            details?
            </div>

            <div className="formToContact ln">
                <input type="text" className="ln" placeholder="Full Name" />
                <input type="text" className="ln" placeholder="Email" />
                <input type="number" className="ln" placeholder="Mobile Number" />
                <textarea placeholder="Message" className="ln" rows={3}></textarea>
                <div className="buttonAtHome xb">
                    <div class="bottom-left"></div>
                    <div class="bottom-right"></div>
                    Submit
                </div>
            </div>
        </div>
    );
}

export default Csend;

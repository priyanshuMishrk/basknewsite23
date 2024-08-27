import React, { useEffect, useState } from "react";
import baskLogo from '../Images/bask.png'
import arrow from '../Icons/arrow.svg'

function Vision() {


    return (
        <div className="g2">
            <div className="g33 xb">
                vision
            </div>
            <div className="bl g55">
                To be the most
                creative agency
                in advertising,
                design, digital
                and all other
                forms of brand
                communication.
            </div>

            <img src={baskLogo} alt="" />

            <div className="arrowonright">
                <img src={arrow} alt="" />
            </div>
        </div>
    );
}

export default Vision;

import React, { useEffect, useState } from "react";
import baskLogo from '../Images/bask.png'
import arrow from '../Icons/arrow.svg'

function Mission() {


    return (
        <div className="g20">
            <img src={baskLogo} alt="" />
            <div className="g330 xb">
                <span>
                    mis
                </span>
                <span>
                sion
                </span>
            </div>
            <div className="bl g55 g55550">
            To create and produce inspiring print,
            film, digital, tech and photography work.
            </div>


            <div className="arrowonright">
                <img src={arrow} alt="" />
            </div>
        </div>
    );
}

export default Mission;

import React, { useEffect, useState } from "react";
import baskLogo from '../Images/bask.png'
import arrow from '../Icons/arrow.svg'

function Belief() {


    return (
        <div className="g20">
            <img src={baskLogo} alt="" />
            <div className="g330 xb ooajdias">
            belief
            </div>
            <div className="bl g55 kkkooo23">
            Good ideas
work when
you make
them work.
            </div>


            <div className="arrowonright">
                <img src={arrow} alt="" />
            </div>
        </div>
    );
}

export default Belief;

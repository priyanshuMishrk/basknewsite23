import React, { useEffect, useState } from "react";
import baskLogo from '../Images/bask.png'
import arrow from '../Icons/arrow.svg'
import { useNavigate } from "react-router-dom";

function Vision() {
    const [current1, setCurrent1] = useState('')
    const [current2, setCurrent2] = useState('')
    const [current3, setCurrent3] = useState('')
    const [current4, setCurrent4] = useState('')
    const nava = useNavigate()
    function nextPage(){
        if (current1 != '' && current2 != '' && current3 != '' && current4 != '' ){
                nava('/contactUs')
        } else {
            alert('Please give your details')
        }
    }

    return (

        <>
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

            {/* <img src={baskLogo} alt="" /> */}

            {/* <div className="arrowonright">
                <img src={arrow} alt="" />
            </div> */}
        </div>
        
        <div className="g20">
            {/* <img src={baskLogo} alt="" /> */}
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


            {/* <div className="arrowonright">
                <img src={arrow} alt="" />
            </div> */}
        </div>

        <div className="g20">
            {/* <img src={baskLogo} alt="" /> */}
            <div className="g330 xb ooajdias">
            belief
            </div>
            <div className="bl g55 kkkooo23">
            Good ideas
work when
you make
them work.
            </div>


            {/* <div className="arrowonright">
                <img src={arrow} alt="" />
            </div> */}
        </div>


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
                <input type="text" className="ln" onChange={(e) => setCurrent1(e.target.value)} placeholder="Full Name" />
                <input type="text" className="ln" onChange={(e) => setCurrent2(e.target.value)} placeholder="Email" />
                <input type="number" className="ln" onChange={(e) => setCurrent3(e.target.value)} placeholder="Mobile Number" />
                <textarea placeholder="Message" className="ln" onChange={(e) => setCurrent4(e.value)} rows={3}></textarea>
                <div className="buttonAtHome xb" onClick={() => nextPage()}>
                    <div class="bottom-left"></div>
                    <div class="bottom-right"></div>
                    Submit
                </div>
            </div>
        </div>
        </>
    );
}

export default Vision;

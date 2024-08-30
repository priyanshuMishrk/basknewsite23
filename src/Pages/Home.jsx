import React, { useContext, useEffect, useState } from "react";
import baskLogo from '../Images/bask.png'
import { useNavigate } from "react-router-dom";
import { useInput } from "../Context/formContext";
function Home() {
    const { updateInput, inputValues } = useInput();
    const [current, setCurrent] = useState(inputValues['firstPageInput'])
    
    const handleChange = (e) => {
        setCurrent(e.target.value)
        console.log(inputValues['firstPageInput'])
        updateInput('firstPageInput', e.target.value);
      };
    
    
    
    const nava = useNavigate()
    
    
    function nextPage(){
        if (current != ''){
                nava('work')
        } else {
            alert('Please give your inputs')
        }
    }

    const [on, setOn] = useState(false)

    useEffect(() => {
        // Set a timeout to toggle the state after 0.5 seconds
        const timeout = setTimeout(() => {
          setOn(prevState => !prevState);
        }, 500); // 0.5 seconds
    
        // Clean up the timeout on component unmount
        return () => clearTimeout(timeout);
      }, []); 


    return (
        <div>
            <div className="headForHome">
                <img src={baskLogo} className={`${on && 'forLogo'} basklogo`} alt="" />
                <div className={`${on && 'firstSite'}`}></div>
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

                <textarea rows={2} onChange={handleChange} value={current} type="text" className="ln" />

                <div className="buttonAtHome xb" onClick={nextPage}>
                    <div class="bottom-left"></div>
                    <div class="bottom-right"></div>
                    Submit
                </div>
            </div>
        </div>
    );
}

export default Home;

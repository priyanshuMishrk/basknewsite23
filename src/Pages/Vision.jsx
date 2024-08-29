import React, { useEffect, useState } from "react";
import baskLogo from '../Images/bask.png'
import arrow from '../Icons/arrow.svg'
import { useNavigate } from "react-router-dom";
import { useInput } from "../Context/formContext";

function Vision() {

    const { updateInput, inputValues } = useInput();

    const handleFileChange = (e) => {
      const file = e.target.value;
      if (file) {
        setCurrent1(file)
        updateInput('fullName', file);
      }
    };

    const handleFileChange1 = (e) => {
        const file = e.target.value;
        if (file) {
          setCurrent2(file)
          updateInput('email', file);
        }
      };

      const handleFileChange2 = (e) => {
        const file = e.target.value;
        if (file) {
          setCurrent3(file)
          updateInput('mobileNumber', file);
        }
      };

      const handleFileChange3 = (e) => {
        const file = e.target.value;
        if (file) {
          setCurrent4(file)
          updateInput('message', file);
        }
      };

    const [current1, setCurrent1] = useState(inputValues['fullName'])
    const [current2, setCurrent2] = useState(inputValues['email'])
    const [current3, setCurrent3] = useState(inputValues['mobileNumber'])
    const [current4, setCurrent4] = useState(inputValues['message'])
    const nava = useNavigate()
    function nextPage(){
        if (current1 != '' && current2 != '' && current3 != '' && current4 != '' ){
                nava('/contactUs')
        } else {
            alert('Please give your details')
        }
    }

    const handleSubmit = async () => {
        const formData = new FormData();
    
        // Append all inputs
        Object.keys(inputValues).forEach((key) => {
          if (inputValues[key] instanceof File) {
            formData.append(key, inputValues[key]);
          } else {
            formData.append(key, inputValues[key]);
          }
        });
    
        try {
          const response = await fetch('https://submit-form.com/GUStvTfFf', {
            method: 'POST',
            body: formData,
          });
    
          if (response.ok) {
            console.log('Form submitted successfully!');
            nextPage()
            // Handle successful submission
          } else {
            console.error('Form submission failed');
            // Handle error
          }
        } catch (error) {
          console.error('Error:', error);
          // Handle network error
        }
      };


      const handleSubmitOriginal = (e) => {
        e.preventDefault();
    
        const form = document.createElement('form');
        form.action = 'https://submit-form.com/GUStvTfFf';
        form.method = 'POST';
        form.enctype = 'multipart/form-data';
    
        Object.keys(inputValues).forEach((key) => {
          const input = document.createElement(
            inputValues[key] instanceof File ? 'input' : 'textarea'
          );
          input.type = inputValues[key] instanceof File ? 'file' : 'hidden';
          input.name = key;
          input.value = inputValues[key];
          form.appendChild(input);
        });
    
        document.body.appendChild(form);
        form.submit();
        nextPage()
      };
    

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
                <input type="text" className="ln" value={current1} onChange={handleFileChange} placeholder="Full Name" />
                <input type="text" className="ln" value={current2} onChange={handleFileChange1} placeholder="Email" />
                <input type="number" className="ln" value={current3} onChange={handleFileChange2} placeholder="Mobile Number" />
                <textarea placeholder="Message" value={current4} className="ln" onChange={handleFileChange3} rows={3}></textarea>
                <div className="buttonAtHome xb"  onClick={() => handleSubmitOriginal()}>
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

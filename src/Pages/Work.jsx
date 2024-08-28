import React, { useEffect, useState } from "react";
import baskLogo from '../Images/bask.png'
import levi1 from '../Images/Levi1.png'
import leviLogo from '../Images/levi.png'
import skyeLogo from '../Images/skye.png'
import sky1 from '../Images/skye1.png'
import sky2 from '../Images/skye2.png'
import sky3 from '../Images/skye3.png'
import weberlogo from '../Images/weber.png'
import weberlogo1 from '../Images/weber1.png'
import weberlogo2 from '../Images/weber2.png'
import weberlogo3 from '../Images/weber3.png'
import weberlogo4 from '../Images/weber4.png'
import weberlogo5 from '../Images/weber5.png'
import zlateLogo from '../Images/zlateLogo.png'
import zlate1 from '../Images/zlate1.png'
import zlate2 from '../Images/zlate2.png'
import zlate3 from '../Images/zlate3.png'
import zlate4 from '../Images/zlate4.png'
import peps1 from '../Images/peps1.png'
import peps2 from '../Images/peps2.png'
import peps3 from '../Images/peps3.png'
import peps4 from '../Images/peps4.png'
import peps5 from '../Images/peps5.png'
import pepsLogo from '../Images/pepsLogo.png'
import sheafferLogo from '../Images/sheafferLogo.png'
import sheaffer1 from '../Images/sheaffer1.png'
import sheaffer2 from '../Images/sheaffer2.png'
import { useNavigate } from "react-router-dom";


function Work() {
  const [currentImg, setCurrentImg] = useState('no')

  const [current, setCurrent] = useState('')
    const nava = useNavigate()
    function nextPage(){
        if (current != ''){
                nava('/team')
        } else {
            alert('Please give your inputs')
        }
    }

  function close() {
    setCurrentImg('no')
  }

  if (currentImg !== 'no') {
    return (<div className="lighthouse">
      <span className="closeIconInLightHous cp gb" onClick={close}>X</span>
      <img src={currentImg} alt="" />
    </div>)
  }

  return (
    <div>
      <div className="CaseStudy1">
        <img src={baskLogo} className="baskLogoC1" alt="" />

        <div className="Studies">
          <div className="textt bl">
            It was the pandemic. <br />
            Less said the better.
          </div>

          <div className="c1img">
            <img src={levi1} onClick={() => setCurrentImg(levi1)} alt="" className="leviImaggge cp" />
            <img src={leviLogo} className="leviLogo" alt="" />
          </div>
        </div>


      </div>

      <div className="CaseStudy2">
        <img src={baskLogo} className="baskLogoC1" alt="" />
        <img src={skyeLogo} className="skyeelogoC1" alt="" />

        <div className="Studies">
          <div className="textt bl">
            When it came to delivering a
            great night out experience ,
            the Skyye stands above
            (literally, too)every other bar in
            town. We found the words to
            communicate this. Garnishing
            it with a bit of sophistication
            the place deserves.
          </div>

          <div className="c2img">
            <img src={sky1} onClick={() => setCurrentImg(sky1)} alt="" className="cp" />
            <img src={sky2} onClick={() => setCurrentImg(sky2)} alt="" className="cp" />
            <img src={sky3} onClick={() => setCurrentImg(sky3)} alt="" className="cp" />
          </div>
        </div>


      </div>

      <div className="CaseStudy3">
        <div className="row1">
          <img src={baskLogo} alt="" />

          <img src={weberlogo1} onClick={() => setCurrentImg(weberlogo1)} className="cp" alt="" />
          <img src={weberlogo2} onClick={() => setCurrentImg(weberlogo2)} className="cp" alt="" />
          <img src={weberlogo3} onClick={() => setCurrentImg(weberlogo3)} className="cp" alt="" />
          <img src={weberlogo} alt="" />
        </div>

        <div className="row2">
          <div className="text234kk bl">
            When it came to delivering a great night
            out experience , the Skyye stands above
            (literally, too)every other bar in town. We
            found the words to communicate this.
            Garnishing it with a bit of sophistication
            the place deserves.
          </div>

          <img src={weberlogo4} onClick={() => setCurrentImg(weberlogo4)} className="cp" alt="" />
          <img src={weberlogo5} onClick={() => setCurrentImg(weberlogo5)} className="cp" alt="" />
          {/* <img src={weberlogo3} onClick={()=> setCurrentImg(weberlogo3)} className="cp" alt="" /> */}
        </div>
      </div>

      <div className="CaseStudy4">
        <div className="column1">
          <div className="row1">

            <div className="textt bl">
              Zlate is an online
              negotiating platform.
              We thought, here’s one
              client who would be
              willing to ‘settle for less.’
              We were right.
            </div>

            <img src={zlate1} onClick={() => setCurrentImg(zlate1)} className='cp' alt="" />

          </div>
          <div className="row2">
            <img src={baskLogo} alt="" />
            <img src={zlate2} onClick={() => setCurrentImg(zlate2)} className='cp' alt="" />
            <img src={zlate3} onClick={() => setCurrentImg(zlate3)} className='cp' alt="" />
            <div></div>
          </div>
        </div>

        <div className="column2">
          <img src={zlate4} onClick={() => setCurrentImg(zlate4)} className='cp' alt="" />
          <img src={zlateLogo} alt="" />
        </div>
      </div>

      <div className="CaseStudy5">
        <div className="column1">
          <div>
            <img src={baskLogo} alt="" />
          </div>

          <div className="texttty bl">
            We wanted to use the headline ‘Back
            Again?’ for Peps brand of Mattresses.
            Until we discovered some obscure
            agency in Minneapolis had come up
            with it a few decades ago for their
            Chiropractor client. The fact is they
            also won a few One Show Golds for it.
            Rewrite your back story, didn’t win
            any awards. But the client thought it
            worked. That’s the one award we
            were looking for.
          </div>
        </div>

        <div className="column2">
          <img src={peps1} onClick={() => setCurrentImg(peps1)} className='cp' alt="" />
          <div className="row">
            <img src={peps2} onClick={() => setCurrentImg(peps2)} className='cp' alt="" />
            <img src={peps5} onClick={() => setCurrentImg(peps5)} className='cp' alt="" />
          </div>
        </div>

        <div className="column3">
          <img src={peps3} onClick={() => setCurrentImg(peps3)} className='cp' alt="" />
          <img src={peps4} onClick={() => setCurrentImg(peps4)} className='cp' alt="" />
        </div>

        <div className="column4">
          <img src={pepsLogo} alt="" />
        </div>

      </div>

      <div className="CaseStudy6">
        <div className="column1">
            <img src={sheaffer1} onClick={() => setCurrentImg(sheaffer1)} className='cp' alt="" />
        </div>

        <div className="column2">
          <div className="row1">
                <img src={baskLogo} alt="" />
          </div>

          <div className="row2">
              <img src={sheaffer2} onClick={() => setCurrentImg(sheaffer2)} className='cp' alt="" />
              <img src={sheafferLogo} alt="" />
              <div className="textt bl">
              The Write stuff.<br/>
              We agree.
              </div>
          </div>
        </div>
      </div>


      <div className="nextPageTakerrr">
            <img src={baskLogo} className="backLogoooo" alt="" />
        {/* <div className="lllsassd">
            <div></div>
        </div> */}


            <div className="body ln">
                Now that you have seen our work,<br/>
                leave some love (Or hate).
            </div>

            <textarea rows={2} type="text" onChange={(e) => setCurrent(e.value)}></textarea>

            <div className="buttonAtHome xb" onClick={nextPage}>
                    <div class="bottom-left"></div>
                    <div class="bottom-right"></div>
                    Submit
                </div>
      </div>
    </div>
  );
}

export default Work;

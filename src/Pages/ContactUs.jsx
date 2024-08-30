import React, { useEffect, useState } from "react";
import baskLogo from '../Images/bask.png'
import arrow from '../Icons/arrow.svg'
import medium from '../Icons/Medium.svg.png'
import linkin from '../Icons/LinkedIn-Logos/In/Digital/Blue/2x/In-Blue-14-â¬Â«@2x.png'
import inst from '../Icons/01 Static Glyph/03 Black Glyph/Instagram_Glyph_Black.svg'
import { useNavigate } from "react-router-dom";

function Cget() {
    function goToLink(link){
        window.open(link, "_blank" )
      }

      useEffect(() => {
        const handleVisibilityChange = () => {
          if (document.visibilityState === 'visible') {
            window.location.reload();
          }
        };
    
        document.addEventListener('visibilitychange', handleVisibilityChange);
    
        return () => {
          document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
      }, []);

    return (
        <div className="c280">
            <img src={baskLogo} alt="" />
            <div className="teeeeeeeeeeeeeeeeeeeeeexttttttt xb">
            We
are
Here
            </div>
            

            <div className="addressNameE">
                <div className="noT">
                    <div className="name xb">
                    Bask Creative Ventures Pvt. Ltd.
                    </div>

                    <div className="address gl">
                    No. 3-B, 3rd Floor, Platinum Square, NNo. 86,
                    Cloes Road, Frazer Town, Bangalore 560 005
                    </div>

                    <div className="contacter gl">
                        <div className="m">
                        <b className="gm">
                        m:
                            </b> {' '}
                         99000 27097 <br/>
                        99809 12312
                        </div>
                        <div className="e">
                            <b className="gm">
                            e:
                            </b>
                            { ' '}
                         sampath@blackis.in <br/>
                        prabhakar@blackis.in
                        </div>
                    </div>

                    <div className="linksssForing">
                        <img src={medium} onClick={() => goToLink('https://medium.com/@digital_19576')} alt="" />
                        <img src={linkin} onClick={() => goToLink('https://www.linkedin.com/company/baskworldwide-creative/')} alt="" />
                        <img src={inst} onClick={() => goToLink('https://www.instagram.com/weare_bask/')} alt="" />
                    </div>
                </div>

                <div className="tt xb">
                Thank You
                </div>
            </div>
        </div>
    );
}

export default Cget;

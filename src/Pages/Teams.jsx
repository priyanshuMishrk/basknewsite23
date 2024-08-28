import React, { useEffect, useState } from "react";
import baskLogo from '../Images/bask.png'
import sampath from '../Images/sampath.png'
import cp from '../Images/prabhakar.png'
import suresh from '../Images/suresh.png'
import sonicaa from '../Images/sonica.png'
import gowri from '../Images/gouri.png'
import { useNavigate } from "react-router-dom";



function Teams() {

    const naa = useNavigate()

    return (
        <div>
            <div className="firstPageInTeams xb">
                    <img src={baskLogo} alt="" />
                {/* <div className="aksdjiad">
                    <div></div>
                </div> */}

                <div>
                    We make <br />
                    the work.
                </div>
            </div>

            <div className="theTeam">
                <img src={baskLogo} className="bkloogo" alt="" />

                <div className="member1">
                    <img src={sampath} alt="" />
                    <div className="descr">
                        <div className="namemme xb">
                            Sampath <br />
                            Kumar
                        </div>
                        <div className="position gm">
                            Founder
                        </div>
                    </div>
                </div>


                <div className="member2">
                    <img src={cp} alt="" />
                    <div className="descr">
                        <div className="namemme xb">
                            C P <br />
                            Prabhakaran
                        </div>
                        <div className="position gm">
                            Director-business
                        </div>
                    </div>
                </div>

                <div className="member1">
                    <img src={suresh} alt="" />
                    <div className="descr">
                        <div className="namemme xb">
                            Suresh <br />
                            Manian
                        </div>
                        <div className="position gm">
                            Executive creative director
                        </div>
                    </div>
                </div>

                <div className="member2">
                    <img src={sonicaa} alt="" />
                    <div className="descr">
                        <div className="namemme xb">
                            Sonica<br />
                            Singh
                        </div>
                        <div className="position gm">
                            Head-digital
                        </div>
                    </div>
                </div>

                <div className="member1">
                    <img src={gowri} alt="" />
                    <div className="descr">
                        <div className="namemme xb">
                            Gowri <br />
                            Subramonian

                        </div>
                        <div className="position gm">
                            Head-digital content
                        </div>
                    </div>
                </div>
            </div>

            <div className="uploadeer">
                <img src={baskLogo} alt="" />

                <div className="desccr xb">

                    <div className="head">
                        Join <br />
                        the team
                    </div>

                    <div className="linker">
                        Upload Resume
                    </div>

                </div>

                <div className="whatsssssnext xb" onClick={() => {naa('/vision')}}>
                What’s next?
                </div>

            </div>


        </div>
    );
}

export default Teams;

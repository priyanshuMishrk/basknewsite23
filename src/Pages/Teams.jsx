import React, { useEffect, useState } from "react";
import baskLogo from '../Images/bask.png'
import sampath from '../Images/sampath.png'
import cp from '../Images/prabhakar.png'
import suresh from '../Images/suresh.png'
import sonicaa from '../Images/sonica.png'
import gowri from '../Images/gouri.png'
import { useNavigate } from "react-router-dom";
import { useInput } from "../Context/formContext";
import Vision from "./Vision";


function Teams() {

    const { updateInput, inputValues } = useInput();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCurrent(file)
    if (file) {
      updateInput('resume', file);
    }
  };

  const [current , setCurrent] = useState(inputValues['resume'])

    const naa = useNavigate()

    const [currentMember , setCurrentMember] = useState(10)



    const teamData = [
        {
            title : "Sampath Kumar",
            content : "Sampath has varied experience in working with some of the finest creative agencies in India including Enterprise Advertising, Ambience, JWT and Contract. Over a caree spanning 30 years, he has worked on many multi-national as well as leading Indian Brands. For the last 15 years, he has been creating and helming his own ventures including start-ups in the charity and food & beverages space. With Bask creative, his latest venture, he is intent on creating the agency of his dreams. Where the finest creative minds working in an agency environment unlike any other, produce work that creates successful brands of today.",
            img : sampath
          },
          {
            title : "C.P. Prabhakaran",
            content : "Prabhakaran is the consummate advertising and marketing professional. With 3 decades of experience both on the agency side as well as the brand side he has worked with some of the leading advertising agencies in Bangalore including Saatchi &Saatchi, Maa Bozzel, and Everest having later moved on to work on the brand side with RMZ Corp, Bangalore's leading Corporate and Residential developer, where he spent 10 years as head of marketing communication for both, RMZ Homes and Commercial spaces.",
            img : cp
          },
          {
            title : "Suresh Manian",
            content : "Suresh Manian is a seasoned copywriter and creative director. His 40 year journey in the industry has seen him work in multiple agencies, Ogilvy, Lintas, Rediffusion, Enterprise, Contract to name a few. He also cofounded Fisheye Creative Solutions, a Bangalore based agency, way back in 1999. While advertising has always been his profession, Suresh has written Tamil dialogues for a film (Quick Gun Murugan), and dabbled in text analytics and insight mining. Suresh is married to Malini, and has two daughters and two dogs, and lives in Bangalore.",
            img : suresh
          },
          {
            title : "Sonica Singh",
            content : "Sonica brings a strategic vision to everything digital. Campaigns, Performance Marketing, Content Strategy, Social Media Strategy, SEO Strategy, Marketing Automation Strategy Analytics. Her experiences include working with micro, small, and mid-sized clients to large corporations through her agency engagements. Before she dived into digital communication she had various sales and marketing roles with Taj Hotels, ITC Hotels, The Ritz-Carlton Hotel Company, and Accor Hotels.",
            img : sonicaa
          },
          {
            title : "Gowri Subramoniam",
            content : "Gowri Subramoniam is a Multidisciplinary Designer with a background in Architecture and a career spanning Digital Design, Strategy, Art Direction, Photography, and Videography. Over the past seven years, she has worked with over 40 brands, predominantly in the F&B space. She is currently “bask”ing as the Head of Digital Content.",
            img : gowri
          },
    ]


    // if (currentMember  != 10){
    //     return <div className="teamCardPerPlayer">
    //             <div className="closeButton" onClick={() => setCurrentMember(10)}>
    //                 X
    //             </div>
    //             <div className="text xb">
    //                 {teamData[currentMember].content}
    //             </div>

    //             <div className="member1">
    //                 <img src={teamData[currentMember].img} alt="" />
    //                 <div className="descr">
    //                     <div className="namemme xb">
    //                         {teamData[currentMember].title.split(' ')[0]}
    //                         <br/>
    //                         {teamData[currentMember].title.split(' ')[1]}
    //                     </div>
    //                     <div className="position gm">
    //                         Executive creative director
    //                     </div>
    //                 </div>
    //             </div>
    //     </div>
    // }

    return (
        <div>

            {
                currentMember != 10 && 
                <div className="teamCardPerPlayer">
                <div className="closeButton" onClick={() => setCurrentMember(10)}>
                    X
                </div>
                <div className="text xb">
                    {teamData[currentMember].content}
                </div>

                <div className="member1">
                    <img src={teamData[currentMember].img} alt="" />
                    <div className="descr">
                        <div className="namemme xb">
                            {teamData[currentMember].title.split(' ')[0]}
                            <br/>
                            {teamData[currentMember].title.split(' ')[1]}
                        </div>
                        <div className="position gm">
                            Executive creative director
                        </div>
                    </div>
                </div>
        </div>
            }

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

                <div className="member1" onClick={() => setCurrentMember(0)}>
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


                <div className="member2" onClick={() => setCurrentMember(1)}>
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

                <div className="member1" onClick={() => setCurrentMember(2)}>
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

                <div className="member2" onClick={() => setCurrentMember(3)}>
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

                <div className="member1" onClick={() => setCurrentMember(4)}>
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
                    <input type="file" onChange={handleFileChange} accept=".pdf" />
                    </div>

                </div>

            </div>

            <Vision/>
        </div>
    );
}

export default Teams;

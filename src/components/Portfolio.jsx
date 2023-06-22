import React, {useState} from "react"
import Texts from "../Text"



function Portfolio()
{
    return(
        <div className="Portfolio" id="Portfolio">
            <div className="Desc">
            <h1>My Portfolios</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aliquam.</p>
            </div>
            <div className="Main-card">
                {Texts.map(t=>{
                    return (
                        <div className="Cards">
                            <div className="middle">
                             <h1 >  {t.Heading}</h1>
                             <p >{t.Paragraph}</p>
                             </div>
                            <img src={t.imageurl} alt="" />
                        </div>
                    )
                 
                })}
                </div>
            </div>
    )
}


export default Portfolio
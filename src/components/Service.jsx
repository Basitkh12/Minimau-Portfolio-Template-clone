import Bkimg from "../Images/servicebackground.png"
import Texts from "../Text"

function Service()
{
    return (
        <div style={{backgroundImage: `url(${Bkimg})`}} className="Services" id="Services">
            <div className="Description">
                <h1>My Services</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aliquam.</p>
            </div>
            <div className="Cardss">
                    {Texts.map(t=>{
                        return(
                            <div className= "Service-Text">
                                <h1>{t.Heading2}</h1>
                                <p>{t.Paragraph2}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}


export default Service
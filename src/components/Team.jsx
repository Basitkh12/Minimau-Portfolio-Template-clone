import Texts  from "../Text"
import { Team } from "../Text"


function Teams()
{
    return(
        <div className="Team" id="Team">
            <div className="Team-Desc">
                <h1>Create Team</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aliquam.</p>
            </div>
            <div className="Team-cards">
                {Team.map(t=>
                    {
                        return(
                            <div className="Data">
                                <div className=" content">
                                    <h1>{t.Headings}</h1>
                                    <p>{t.Des}</p>
                                    <div className="social">
                                    <i class="fa-brands fa-facebook-f"></i> 
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-dribbble"></i>
                                    </div>
                                    </div>
                                <img src={t.imageurl2} alt="" />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Teams
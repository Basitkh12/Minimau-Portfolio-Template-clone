import BKIMAGE from "../Images/intro-background.jpg"

function Intro()
{

    return(<div style={{backgroundImage : `url(${BKIMAGE})`}} className="Main-div">
            <div className="Description" id="Home">
                <h3>Hello , I’m</h3>
                <h1>Ahammad</h1>
                <h2>Web Developer</h2>
                <a href="">Download Resume</a>
            </div>
        </div>
    )
}

export default Intro
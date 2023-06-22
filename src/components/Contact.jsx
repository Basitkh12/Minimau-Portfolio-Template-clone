

function Contact()
{
return (
    <div className="Contact" id="Contact">
        <div className="Form">
            <h1>CONTACT FORM</h1>
            <div className="Fields">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Message" />
                <button>Send</button>
            </div>
            <div className="contact">
                <h1>QUICK CONTACT</h1>
                <ul>
               <li> <span>Phone : </span>  +012456879 </li>
               <li> <span>Email: </span> hello@example.com  </li>
               <li> <span>Location: </span> 2020 Willshire Glen, Alpharetta, GA-30009  </li>
               </ul>
            </div>
        </div>

        <div className="Location"> 
            <div className="Anytime">
                <h1>24/7 ANYTIME</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour lebmid</p>
                <iframe src="https://maps.google.com/maps?q=40.6971494,-74.2598661&amp;hl=es&amp;z=10&amp;output=embed" title="Contact Map" style={{width: 100 +"%", height: 100, border: 0+"px"}}></iframe>
            </div>
        </div>
    </div>
)
}

export default Contact
import { NavLink } from "react-router-dom";
import l from './Landin.module.css'

const LandinPage = ()=>{
    return(
        <div className={l.landing}>

            <div className={l.landing1}>
                <div className={l.landingA}>
                    <h1 className={l.h1}>PI-Food´s</h1>
                    <h2 className={l.h2}>Recipes For The Palate</h2>
                   
                    <h3 className={l.h3}>Detailed Summary</h3>
                    <h3 className={l.h3}>Elaboration Process</h3>
                    <h3 className={l.h3}>Different Types Of Diet</h3>
                    <br />
                <div className={l.landingF} >
                    <h2><NavLink to="/home" className={l.enter}>Enter</NavLink></h2>
                </div>
                    
                </div>
                {/* <div className={l.landingB}></div> */}
            </div>

           
       
        </div>
    )
};

export default LandinPage;
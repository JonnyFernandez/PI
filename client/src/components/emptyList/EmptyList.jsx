import { NavLink } from "react-router-dom";
import e from './EmptyList.module.css'

const EmptyList =()=>{

    return(
        <div className={e.container} >

            <div className={e.navContainer}>
              
                <h1 className={e.title} >Empty Favorite List</h1>
              
                <h4 className={e.h4}>
                    You have not added any favorite yet.
                </h4>
                  
                  <NavLink to="/home" className={e.back}>Add some favorites!</NavLink><br/><br/>
                
            </div>
            <div className={e.image}></div>

        </div>
    )

}

export default EmptyList;
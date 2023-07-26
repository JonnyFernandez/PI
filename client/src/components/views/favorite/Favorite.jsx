import { useSelector } from "react-redux";
import CardFav from "../../cardFav/CardFav";

import Nav from "../../nav/Nav";
import f from './Favorite.module.css'
import { NavLink } from "react-router-dom";
import EmptyList from "../../emptyList/EmptyList";



const Favorite = () => {

    const fav = useSelector((state) => state.favList)




    return (




        fav.length >= 1 ?

            <div className={f.favContainer}>

                <div className={f.navContainer}>
                   
                      {/* <Nav /> */}
                </div>

                <div className={f.subDiv} >
               
                <NavLink className={f.back}  to={'/home'}> Home </NavLink>

                    <h1 className={f.title} >Favorites</h1>
                    
                </div>





                <div className={f.containerA}>

                    <div className={f.cardContainer}>
                        {
                            fav.map(item => {
                                return (
                                    <CardFav id={item.id} name={item.name} image={item.image} diets={item.diets} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            : <EmptyList/>
    )

};


export default Favorite;
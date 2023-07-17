import { Link } from "react-router-dom";
import c from './Card.module.css'
import { useState, useEffect } from "react";

import { addFav, removeFav } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Card = ({ id, name, image, diets }) => {

    const dispatch = useDispatch()
    const myFavorites = useSelector((state) => state.favList)

    //favorite
    const [isFav, setIsFav] = useState(false)

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false)
            dispatch(removeFav(id))
        } else {
            setIsFav(true)
            dispatch(addFav({ id, name, image, diets }))
        }
    }

    useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id === id) {
                setIsFav(true);
            }
        });
    }, [myFavorites]);


    return (
        <div className={c.container} >




            <div className={c.headerCard} >
            <Link to={`/home/${id}`} >
                <img className={c.img} src={image} alt="" />
            </Link>
            </div>




            <div className={c.bodyCard}>

            <div className={c.nameCard}> <b> {name}</b> </div>

            <div className={c.dietContainer} >
                {id.length > 12 ? diets.map(item => item.name) : diets.map(item => item)}
            </div>

            </div>



                
                <div className={c.footerRight}>
                    {isFav
                        ? (<button className={c.classFavorite} onClick={handleFavorite}> ❤️ </button>)
                        : (<button className={c.classFavorite} onClick={handleFavorite}>🤍</button>)}
                </div>
              
          



        </div>
    )
}


export default Card;
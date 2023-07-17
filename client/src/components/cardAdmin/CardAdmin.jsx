

import style from './CardAdmin.module.css'



const CardAdmin = ({ name, image, diets, id }) => {

  


  
    return (
        <div className={style.ContailerAll}>


            <h3 className={style.title} >{name}</h3>

            <img className={style.imageC} src={image} alt={name} width='150px' height='150px' />

            <div>
                Diet: {id.length > 12 ? diets?.map(item => item.name) : diets?.map(item => item)}
            </div>




        </div>
    )

}

export default CardAdmin;
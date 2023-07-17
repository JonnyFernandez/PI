import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDetail, getAll,} from "../../../redux/actions";
import d from './Detail.module.css'
import Paginado from "../../paginate/Paginate";
import Card from "../../card/Card";
import Nav from "../../nav/Nav";



const Detail = () => {
    const { id } = useParams()

    const dispatch = useDispatch()
    
    const foodDetail = useSelector((state) => state.detail)
    const foods = useSelector((state) => state.foods)
 
    
  

    useEffect(() => {
        dispatch(getDetail(id))
        dispatch(getAll())
       
    }, [id])
    
      
      
   //paginate
   const [currentPage, setCurrentPage] = useState(1)
   const [recipePerPage, setRecipePerPage] = useState(8)

   let indexOfLastRecipe = currentPage * recipePerPage; //6
   let indexOfFirstRecipe = indexOfLastRecipe - recipePerPage; //0

   const currentRecipe = foods.slice(indexOfFirstRecipe, indexOfLastRecipe)

   const paginado = (pageNumber) => {
       setCurrentPage(pageNumber)
   };





    return (
        <div className={d.detailContainer} >
            <div className={d.navContainer}>
                <Nav/>
            </div>

            <div className={d.header}>
                <div className={d.headerleft}>
                    <h1 className={d.h1} >Details</h1>
                </div>
                <div className={d.headerRight}>
                    <div className={d.subRight1} >
                    <h4 className={d.name} >{foodDetail.name}</h4>
                    </div>
                    <div className={d.subRight2} >
                    <h5 className={d.code} >Code: <br /> {foodDetail.id}</h5>
                    </div>
                </div>
            </div>
           
           
            <div className={d.body} >
               <div className={d.left}>
               
               <div className={d.imageContainer}>
                        <img  src={foodDetail.image} alt="" width='250px' />
                    </div>
                   
                    <div className={d.divFooter} >
                        <b>
                    <p className={d.p1} >HealthScore: {foodDetail.healthScore}</p>
                 
                  <p className={d.p1}>
                   {foodDetail.id?.length > 12 ? foodDetail.diets?.map(item => item.name) : foodDetail.diets?.map(item => item)}
                  </p>
                        </b>
                    </div>
               </div>
          
          
                    
              
              
               <div className={d.right}>
                    
                    <div className={d.summry}>
                    <p className={d.p}>Summary: <br />  {foodDetail.summary}</p>
                    </div>
                    <br />
                    <div className={d.steps}>
                    <p className={d.p}>  Steps: <br /> {foodDetail.steps}</p>
                    </div>

               </div>
            </div>
       
          
           <div className={d.title2}>
            <h1 className={d.w}>More Recipes</h1>
           </div>
            
           <div className={d.paginate}>
                    <Paginado recipePerPage={recipePerPage} foods={foods.length} paginado={paginado} />
           </div>
           <div className={d.more}>
           <article className={d.moreC}>
                    {
                        currentRecipe && currentRecipe?.map(item => {
                            return (
                                <div key={item.id}  >
                                    <Card
                                        id={item.id}
                                        name={item.name}
                                        image={item.image}
                                        diets={item.diets}
                                    />
                                </div>
                            )
                        })
                    }
                </article>
           </div>

 

                              

           

      
       
        {/* <div className={d.lastDiv} > 
            <h2>More Recipes</h2>
        </div> */}
             
             
             
             
              {/* <div className={d.conteinerPaginate}>

                <div className={d.paginate}>
                    <Paginado recipePerPage={recipePerPage} foods={foods.length} paginado={paginado} />
                </div>
              </div> */}





        {/* <div className={d.paginateDetail} >

            
            <article className={d.cardContainer}>
                    {
                        currentRecipe && currentRecipe?.map(item => {
                            return (
                                <div key={item.id}  >
                                    <Card
                                        id={item.id}
                                        name={item.name}
                                        image={item.image}
                                        diets={item.diets}
                                    />
                                </div>
                            )
                        })
                    }
                </article>
        </div> */}

     </div>
            
        
)

};

export default Detail;
import Nav from '../../nav/Nav'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { getAll, getDiets, filterDiet, orderBy, orderBy_db_api, filterScore } from "../../../redux/actions";
import Paginate from '../../paginate/Paginate';
import Card from '../../card/Card';




const Home = () => {

    const dispatch = useDispatch()
    const foods = useSelector((state) => state.foods)
    // const allDiets = useSelector((state) => state.diets)

    useEffect(() => {
        dispatch(getAll())
        // dispatch(getDiets())
    }, [dispatch])

    //paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [recipePerPage, setRecipePerPage] = useState(9)

    let indexOfLastRecipe = currentPage * recipePerPage; //6
    let indexOfFirstRecipe = indexOfLastRecipe - recipePerPage; //0

    const currentRecipe = foods.slice(indexOfFirstRecipe, indexOfLastRecipe)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    //filt
    const [dietaS, setDietS] = useState('')
    console.log(dietaS);

    const handlerchange = (e) => {
        dispatch(filterDiet(e.target.value))
        setCurrentPage(1)
    };

    const handlerOrder = (event) => {
        dispatch(orderBy(event.target.value))
        setCurrentPage(1)
    }

    const handle_api_db = (event) => {
        dispatch(orderBy_db_api(event.target.value))
        setCurrentPage(1)
    };

    const handleScore = (event) => {
        dispatch(filterScore(event.target.value))
        setCurrentPage(1)
    };

    const handleRefresh = () => {
        dispatch(getAll())
        setCurrentPage(1)
    }

    const current=()=>{
        setCurrentPage(1)
    }


    return (
        <div className='home'>

            <div className='navContainer'>
                <Nav handleRefresh={handleRefresh} current={current} />
            </div>

            <div className='body' >



                <div>
                    <div className='paginate'>
                        <Paginate recipePerPage={recipePerPage} foods={foods.length} paginado={paginado} />
                    </div>

                </div>

                <div className='cardContainer'>
                    {/* introduccion de los filtros */}
                    <div className='filtros' >

                        <div className='filtersDiv'>

                            <select className='filter1' onChange={handlerOrder} >
                                <option value='all' >Ordenar</option>
                                <option value="asc">A-Z</option>
                                <option value="des">Z-A</option>
                            </select>

                            <select className='filter1' onChange={handlerchange} >
                                <option value="all" >Diets</option>
                                <option value="gluten free">Gluten free</option>
                                <option value="paleolithic">Paleolithic</option>
                                <option value="pescatarian">Pescatarian</option>
                                <option value="dairy free">Dairy free</option>
                                <option value="whole 30">Whole 30</option>
                                <option value="fodmap friendly">Fodmap friendly</option>
                                <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
                                <option value="primal">Primal</option>
                                <option value="vegan">Vegan</option>
                                <option value="ketogenic">Ketogenic</option>

                            </select>

                            <select className='filter1' onChange={handle_api_db} >
                                <option value="all">Db/Api</option>
                                <option value="db">Db</option>
                                <option value="api">Api</option>
                            </select>

                            <select className='filter1' onChange={handleScore} >
                                <option value="all">health score</option>
                                <option value="max">max</option>
                                <option value="min">min</option>
                            </select>

                        </div>

                    <div className='divRT' >
                       
                        <div className='divRT2' >

                        </div>
                    
                    
                    </div>


                    </div>

                    


                    <article className='box'>
                        {
                            currentRecipe && currentRecipe?.map(item => {
                                return (
                                    <div key={item.id}  >
                                        <Card
                                            id={item.id}
                                            name={item.name}
                                            image={item.image ? item.image : <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />}
                                            diets={item.diets}
                                        />

                                    </div>
                                )
                            })
                        }
                    </article>
                </div>







            </div>

        </div>
    )
};

export default Home;
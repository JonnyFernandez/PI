import { useDispatch } from "react-redux"
import { useState } from "react"
import { getRecipeByName } from '../../redux/actions'
// import { useNavigate } from "react-router-dom"


const SearchBar = ({current}) => {

    // const navigate = useNavigate()   

    const dispatch = useDispatch()

    const [name, setName] = useState('')

    const handleChange = (e) => {
        setName(e.target.value)
        console.log(name);
    }

    const handleSubmit = (e) => {
        // e.preventDefault()
        dispatch(getRecipeByName(name))
        setName('')
        current()

    }


    return (


        <div className="container">
            <span class="icon"><i class="fa fa-search"></i></span>
            <input type="text" placeholder="Search..." onChange={handleChange} />

            <button type="submit" onClick={handleSubmit}>Search</button>


        </div>


    )
}

export default SearchBar;
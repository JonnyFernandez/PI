import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, createRecipe } from "../../../redux/actions";
import validate from "../../../utils/validate";
import f from './CreateForm.module.css'
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";






const CreateForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Diets = useSelector((state) => state.diets)

    useEffect(() => {
        dispatch(getDiets())
    }, [])

    const [input, setInput] = useState({
        name: '',
        image: '',
        summary: '',
        healthScore: '',
        steps: '',
        diets: [],

    });

    const [errors, setErrors] = useState({})
    console.log(input);
    console.log(errors);

    const handleSelect = (e) => {
        
        
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        });


    };

    const handleChange = (e) => {
        let property = e.target.name;
        let value = e.target.value;

        setInput({ ...input, [property]: value });
        setErrors(validate({ ...input, [property]: value }))


    };


    const handleDelete = (el) => {
        setInput({
            ...input,
            diets: input.diets.filter(item => item !== el)
        })
    };


    const handleSubmit = (event) => {
        if (input.name && input.image && input.summary && input.healthScore && input.steps && input.diets.length > 0) {
            event.preventDefault()
            dispatch(createRecipe(input))
            setInput({
                name: '',
                image: '',
                summary: '',
                healthScore: '',
                steps: '',
                diets: [],
            });

            alert('Recipe Created🔥')
            navigate('/home')

        } else {
            return alert("Please fill all required fields")
        }



    }

    return (
        <div className={f.formContainer} >

            <div className={f.navForm} >
                <NavLink className={f.back} to={'/home'} >Home</NavLink>
            </div>

            <div className={f.subDiv}>

                <div className={f.divTitle}>Create Recipe</div>
            </div>




            <div className={f.conteiner} >

                <form onSubmit={handleSubmit} className={f.form} >

                    {/* <label htmlFor="name">Name: </label> */}
                    <input className={f.inputs} type="text" placeholder="Nombre..." name="name" value={input.name} onChange={handleChange} />

                    <br />

                    {/* <label htmlFor="image">Image: </label> */}
                    <textarea className={f.inputs} type="text" placeholder="image..." name="image" value={input.image}
                        onChange={handleChange}
                    />

                    <br />

                    {/* <label htmlFor="summary">Summary: </label> */}
                    <textarea className={f.inputs} type="text" placeholder="summary..." name="summary" value={input.summary}
                        onChange={handleChange}
                    />

                    <br />

                    {/* <label htmlFor="healthScore">healthScore: </label> */}
                    <input className={f.inputsR} type="range" name="healthScore" placeholder="1" value={input.healthScore} onChange={handleChange} />
                    {/* { <p> {input.healthScore} </p> } */}

                    {/* <br /> */}

                    {/* <label htmlFor="steps">steps: </label> */}
                    <textarea className={f.inputs} type="text" placeholder="steps..." name="steps" value={input.steps}
                        onChange={handleChange}
                    />

                    <br />


                    {/* <label htmlFor="diets">Diets: </label> */}
                    <select className={f.inputs} onChange={handleSelect} >
                        {
                            Diets.map((item, index) => (
                                <option key={index} value={item.name} > {item.name} </option>
                            ))
                        }
                    </select>


                    <div className={f.outputDiet} >

                        {
                            input.diets.map((el, index) =>
                                <div >
                                    <p className={f.text} key={index} >{el} <button className={f.botonX} onClick={() => { handleDelete(el) }} > x </button> </p>
                                </div>
                            )
                        }
                    </div>

                    <br />
                    <button className={f.boton} type="submit">Create</button>

                </form>

                <div className={f.form1} >
                  {
                        errors?
                      <div className="errorContainer" >
                        <h2 className={f.text}><b>Instructions:</b></h2>
                        {errors.name && <p className={f.text} >{errors.name}</p>}
                        {errors.image && <p className={f.text}>{errors.image}</p>}
                        {errors.summary && <p className={f.text}>{errors.summary}</p>}
                        {errors.healthScore && <p className={f.text}>{errors.healthScore}</p>}
                        {errors.steps && <p className={f.text}>{errors.steps}</p>}
                        {errors.diets && <p className={f.text}>{errors.diets}</p>}
                    </div>
                    : ''

                }
                </div>

            </div>

        </div>
    )
}

export default CreateForm;
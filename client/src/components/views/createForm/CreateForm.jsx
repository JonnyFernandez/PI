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
        const newDiet = e.target.value;
        if (input.diets.includes(newDiet)) {
          alert("Ya has seleccionado esta dieta");
          return;
        }
        if(input.diets.length===3){
            alert('solo puedes agregar 3 dietas')
            return
        }
        
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        });
        e.target.value = "";

    };


    /*
    const handleSelect = (e) => {
        const newTemp = e.target.value;
        if (input.temperaments.includes(newTemp)) {
          alert("Ya has seleccionado este temperamento");
          return;
        }
        setInput({
          ...input,
          temperaments: [...input.temperaments, newTemp],
        });
        e.target.value = "";
      };
    */ 

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
            // navigate('/home')

        } else {
            return alert("Please fill all required fields")
        }



    }

    return (
        <div className={f.formContainer} >

            <div className={f.navForm} >
                <NavLink className={f.back} to={'/admin'} >Back</NavLink>
                <div className={f.divTitle}>Create Recipe</div>
            </div>

            <div className={f.subDiv}>

                
            </div>




            <div className={f.conteiner} >

                <form onSubmit={handleSubmit} className={f.form} >
                  
                    <label htmlFor="name" className={f.labels}>Name: </label>
                    <input className={f.inputs} type="text" placeholder="Nombre..." name="name" value={input.name} onChange={handleChange} />

                    <br />

                    <label htmlFor="image" className={f.labels}>Image: </label>
                    <textarea className={f.inputs} type="text" placeholder="image..." name="image" value={input.image}
                        onChange={handleChange}
                    />

                    <br />

                    <label htmlFor="summary" className={f.labels}>Summary: </label>
                    <textarea className={f.inputs} type="text" placeholder="summary..." name="summary" value={input.summary}
                        onChange={handleChange}
                    />

                    <br />

                    <label htmlFor="healthScore" className={f.labels}>healthScore: </label>
                    <input className={f.inputsR} type="number" min={1} name="healthScore" placeholder="1" value={input.healthScore} onChange={handleChange} />
                    {/* { <p className={f.text} > {input.healthScore}% Saludable </p> } */}

                    {/* <br /> */}

                    <label htmlFor="steps" className={f.labels}>steps: </label>
                    <textarea className={f.inputs} type="text" placeholder="steps..." name="steps" value={input.steps}
                        onChange={handleChange}
                    />

                    <br />


                    <label htmlFor="diets" className={f.labels}>Diets: </label>
                    <select className={f.inputs} onChange={handleSelect} >
                        {
                            Diets.map((item, index) => (
                                <option key={index} value={item.name} > {item.name} </option>
                            ))
                        }
                    </select>


                    <div className={f.outputDiet} >

                       
                    </div>

                    <div className={f.buttonContainer} >
                    <button className={f.boton} type="submit">Create</button>
                    </div>



                </form>

                <div className={f.form1} >
                    <div className={f.instructions}>
                  {
                        errors?
                      <div className="errorContainer" >
                        <h2 className={f.text}><b>Instructions:</b></h2>
                        {/* {!input.name && <p className={f.text} >nombre</p>} */}
                        {errors.name && <p className={f.text} >{errors.name}</p>}
                        {errors.image && <p className={f.text}>{errors.image}</p>}
                        {/* {!input.image && <p className={f.text}>agregar imagen</p>} */}
                        {errors.summary && <p className={f.text}>{errors.summary}</p>}
                        {/* {!input.summary && <p className={f.text}>resumen</p>} */}
                        {errors.healthScore && <p className={f.text}>{errors.healthScore}</p>}
                        {/* {!input.healthScore && <p className={f.text}>procentaje salidable</p>} */}
                        {errors.steps && <p className={f.text}>{errors.steps}</p>}
                        {/* {!input.steps && <p className={f.text}>paso a paso</p>} */}
                        {/* {!input.diets.length && <p className={f.text}>Add one or more diets</p>} */}
                    </div>
                    : 'hola'

                }
                </div>
                <div className={f.dietDivs}>
                    <h4 className={f.text}>Added allowances</h4>
                {
                            input.diets.map((el, index) =>
                                <div >
                                    <p className={f.textD} key={index} >{el+" "} <button className={f.botonX} onClick={() => { handleDelete(el) }} > x </button> </p>
                                </div>
                            )
                        }
                </div>
               

                    
                </div>

            </div>

        </div>
    )
}

export default CreateForm;
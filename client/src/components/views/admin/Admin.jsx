// import { NavLinkLink } from "react-router-dom";
import c from './Admin.module.css'
import {getAll} from '../../../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import {  useEffect } from "react";
import CardAdmin from "../../cardAdmin/CardAdmin";
import Nav from '../../nav/Nav'
import { NavLink } from 'react-router-dom';
import Card from '../../card/Card'



const Admin = () => {

 const dispatch = useDispatch()
 const foods = useSelector((state)=> state.foods)
 
 useEffect(()=>{
  dispatch(getAll())
 },[])
 
 



    return (
        <div className={c.admin}>
             
              <div className={c.navContainer}>
                <Nav />
              </div>



            
           <div className={c.header}>

           <div className={c.createA}>Admin</div>

          <div className={c.divCrud} >

          </div >
            
            
            
            <NavLink className={c.create} to="/admin/add">Create Recipe</NavLink>
       

           </div>
           

          {/* { id, name, image, diets } */}
          <div className={c.adminContainer} >

          {
                foods.map((item) => {
                    return (
                        <div key={item.id} >
                            <Card name={item.name} image={item.image} diets={item.diets} id={item.id}/>
                        </div>
                    )
                })
            }      
               
          </div>

        </div>
    )
}

export default Admin;



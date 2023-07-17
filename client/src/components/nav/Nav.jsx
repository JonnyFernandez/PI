import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import n from './Nav.module.css'




const Nav = ({handleRefresh}) => {

    return (
        <div className={n.navConteiner}>

            <div className={n.nav} >


                <NavLink onClick={handleRefresh} className={n.title} to={'/home'}>  Henry´s Foods  </NavLink>

                <NavLink className={n.admin} to={'/admin'}> Admin </NavLink>

                <NavLink className={n.fav} to={'/favorite'} >Favorites</NavLink>

                <NavLink className={n.log} to={'/'}> LogOut </NavLink>

                <div className={n.search} >
                    
                    <SearchBar />

                </div>

            </div>

        </div>

    )
};

export default Nav;

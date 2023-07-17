import p from './Paginate.module.css'




const Paginate = ({ recipePerPage, foods, paginado }) => {
   const pageNumber = [];
   for (let i = 0; i <= Math.ceil(foods / recipePerPage); i++) {
      pageNumber.push(i + 1) //i+1 para que no empiece en 0 el paginado
   }

    
   return (
      <nav className={p.navPaginate} >
        
         <div className={p.paginate} > 
            {
               pageNumber &&
               pageNumber.map((number, index) => (
                  <div className='number' key={index} >
                     <div className={p.numbers} onClick={()=>paginado(number)}>{number}</div>
                  </div>
                     
               ) )
            }
         </div>
      </nav>
   )
}

export default Paginate

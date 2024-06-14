
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifItem";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategory = ( onNewCategory ) => {
   
    //Para validar que no se repita el valor digitado
    if( categories.includes(onNewCategory)) {
      return alert('Nombre ya existe');
    }
   
    setCategories( cat => [ onNewCategory, ...categories] );
    console.log(categories);

  }

  return (
    <>

      <h1>GifExpertApp</h1>
  
        <AddCategory
          onNewCategory={ (value) => onAddCategory (value) }/>
        {

          categories.map( (category) =>(
            <GifGrid
             key={category}
             category={category}/> 
          ))
        }  
    </>
          )
        }


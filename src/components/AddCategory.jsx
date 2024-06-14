import { useState } from "react";

export const AddCategory = ( {onNewCategory} ) => {

   const [ inputValue, setInputValue ] = useState( '' );

   const onInputChange = ( {target} ) => {
        //console.log(target.value);
        setInputValue( target.value );
   } 

   const onsubmit = (event )=> {
    event.preventDefault();
    //console.log(inputValue);
    if( inputValue.trim().length <= 1 )
         return (
            alert('Debe ingresar un nombre...')

        );
    //setCategories( setCategories => [ inputValue, ...setCategories ] )
        onNewCategory(inputValue.trim());
        setInputValue('');
   }

   
  return (

    <form onSubmit={ onsubmit } >

        <input
    
    type="text"
    placeholder="Buscar Gifs"
    value={inputValue}
    onChange={ onInputChange }
    
    
    />

   

    </form>

    
  )
}


import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import {GifGridItems} from "./GifGridItems";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ( {category} ) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
       <h3> { category } </h3>
       <div className="card-grid" >

       {
        isLoading && (<h2>Cargando...</h2> )
       }
          {
             images.map((image) => ( 

                  <GifGridItems  
                    key={image.id }
                    {... image}

                    />

             ))
           }
          
       </div>
       
     </>  
  )
}





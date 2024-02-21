'use client';

import { useEffect } from "react";

export default function Error({
     error,
     reset,
}:{
     error:Error;
     reset:()=>void;
}){
     useEffect(()=>{
          console.log(error);
     },[error])
     return(
          <div>
               <h2>Somthing went wrong</h2>
               <button onClick={()=>reset()}>Try again</button>

          </div>
     );
}
import {useState , useEffect} from "react"; 

function useDebounce = (value , dealy) => {
    const [debounced , setDebounced] = useState(value); 

    useEffect(() => {
     const handler = setTimeout(() => {
        setDebounced(value); 
     },dealy); 

     return () => {
        clearTimeout(handler);
     }
    },[value,dealy])

    return debounced;
}


Array.prototype.myFn = function(callback , ...arg){
 for(let i = 0; i < this.length ; i++){
   return callback(i , this , this[i]);
 }
}
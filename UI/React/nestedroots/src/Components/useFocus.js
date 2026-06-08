import React , {useRef , useCallback} from 'react'

const useFocus = () => {
  const ref = useRef();  

  const focus = useCallback(()=>{
    requestAnimationFrame(() => {
        ref.current?.focus();
    })
  },[])
  return [ref , focus];
}

export default useFocus
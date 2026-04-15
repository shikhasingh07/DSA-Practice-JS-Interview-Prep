const useTimeOut = (callback , time) => {
    const ref = useRef()
    useEffect(()=>{
        ref.current = callback; 
    },[callback])
    useEffect(() => {
       const timeId = setTimeout(ref.current(),time)
       return() => clearTimeout(timeId)
    },[time])

}

export const useTimeOut
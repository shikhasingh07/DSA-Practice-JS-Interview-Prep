const useRenderFirst = () => {
     const ref = useRef(true);

     useEffect(()=>{
        ref.current = false;
     },[])

    return ref.current
}

export const useRenderFirst;
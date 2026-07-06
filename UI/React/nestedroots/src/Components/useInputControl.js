import { useState, useRef, useCallback } from 'react'
const defaultDirty = false;
const defaultTouched = false;
const useInputControl = (initialValue) => {
    const initialValueRef = useRef(initialValue);
    const [value, setValue] = useState(initialValue);
    const [dirty, setDirty] = useState(defaultDirty);
    const [touched, setTouched] = useState(defaultTouched);

    const handleChange = useCallback((event) => {
        setValue(event.currentTarget.value);
        setDirty(true);
    }, []);

    const handleBlur = useCallback(() => {
        setTouched(true)
    },[])

    const reset = useCallback(() => {
        setValue(initialValueRef.current);
        setDirty(defaultDirty);
        setTouched(defaultTouched);
    },[])

    const different = initialValueRef.current !== value;
    return {
        value,
        dirty,
        touched,
        different,
        handleChange,
        handleBlur,
        reset,
    };
}

export default useInputControl
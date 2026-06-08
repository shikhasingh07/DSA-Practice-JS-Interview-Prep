import { useEffect, useRef } from "react";

function useEffectOnce(effect) {
    const hasRun = useRef(false);
    useEffect(() => {
        if (hasRun.current) {
            return;
        }
        hasRun.current = true;
        return effect();
    }, []);
}

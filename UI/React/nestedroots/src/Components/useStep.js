import React, { useState, useCallback } from "react";

const useStep = (maxStep) => {
    const [step, setStateStep] = useState(1);

    const setStep = useCallback(
        (value) => {
            if (typeof value === "function") {
                setStateStep((prev) => {
                    const next = value(prev);
                    return (next >= 1 && next <= maxStep) ? next : prev;
                });
            } else {
                if (value >= 1 && value <= maxStep) {
                    setStateStep(value);
                }
            }
        },
        [maxStep],
    );

const next = useCallback(() => {
    setStateStep((prev) => Math.min(prev + 1, maxStep));
}, []);

const previous = useCallback(() => {
    setStateStep((prev) => Math.max(prev - 1, 1));
}, []);

const reset = useCallback(() => {
    setStateStep(1);
}, []);
const hasNext = step < maxStep;
const hasPrevious = step > 1;
return {
    step,
    setStep,
    next,
    previous,
    reset,
    hasPrevious,
    hasNext,
};
};

export default useStep;

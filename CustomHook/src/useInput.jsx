import React from 'react'
import { useState } from 'react'

function useInput(initalValue) {
    const [value, setValue] = useState(initalValue)

    const reset = () => {
        setValue('');
    };

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        },
    };

    return [value, bind, reset]

}

export default useInput;

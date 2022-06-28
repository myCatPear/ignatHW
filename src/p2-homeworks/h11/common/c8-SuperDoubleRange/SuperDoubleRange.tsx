import Slider from '@mui/material/Slider/Slider'
import React from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    // const handleChange = (event: Event, newValue: number | number[]) => {
    //     if (onChangeRange) {
    //         onChangeRange(newValue as number[]);
    //     }
    // };

    const minDistance = 1;

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            onChangeRange([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            onChangeRange([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    return (
        <>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange1}
                valueLabelDisplay="auto"
            />
        </>
    )
}

export default SuperDoubleRange

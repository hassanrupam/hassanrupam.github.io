import React, { useEffect, useState } from 'react';
import ReactSlider from 'react-slider';

const Slider = (props) => {
    const [value, setValue] = useState(props.initialValue ? props.initialValue : 100); 
    const [overWriteColor, setOverWriteColor] = useState(props.overWriteColor ? props.overWriteColor : null); 

    const handleSliderChange = (newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
        setOverWriteColor(props.overWriteColor)
    },[props.overWriteColor])

    return (
        <div className='w-full flex flex-row items-center justify-center space-x-2'>
            {props.showValue && <h1>{value}</h1>}
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                value={value}
                onChange={handleSliderChange}
                renderTrack={(props, state) => {
                    return (
                    <div
                        {...props}
                        className={`example-track`}
                        style={{ ...props.style, backgroundColor: `${state.index === 0 ? (overWriteColor ? overWriteColor  : '#E95420') : ''}` }}
                    />
                )}}
                min={props.minValue ? props.minValue : 0}
                max={props.maxValue ? props.maxValue : 100}
                disabled={props.disabled}
            />
        </div>
    );
};

export default Slider;

import { useState } from "react";
import { APP_CONSTANTS } from "../../apps.config";

const ImportantButton = (props) => {
    const [effect, setEffect] =  useState(APP_CONSTANTS.BOOLEAN.FALSE);

    const handleOnClick = () => {
        setEffect(APP_CONSTANTS.BOOLEAN.TRUE);

        if(props.onClickHandler){
            props.onClickHandler();
        }
    }

    return (
        <button className={`${props.className} duration-500  bg-ub-red w-32 p-2 rounded border border-2 ${effect ? 'bg-ub-red-darker animate-wiggle  border-white' : 'border-transparent'}`} 
            onClick={() => { handleOnClick() }}
            onAnimationEnd={() => setEffect(APP_CONSTANTS.BOOLEAN.FALSE)}> 
            {props.label}
        </button>
    )
}

export default ImportantButton;
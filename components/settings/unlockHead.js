import { useEffect, useRef, useState } from "react";

const UnlockHeader = (props) => {

    const unlockRef = useRef();
    const [triggerHighlight, setTriggerHighlight] = useState(false);

    const handleClick = () => {
        unlockRef.current.focus();
    };

    useEffect(()=>{
        if(triggerHighlight){
            handleClick();
            setTriggerHighlight(false);
        }
    },[triggerHighlight])

    useEffect(()=>{
        if(props.triggerActive){
            setTriggerHighlight(true);
        }
    },[props.triggerActive])

    return(
        <>
         <div className={"w-full flex-col flex-grow z-20 max-h-14 overflow-y-auto windowMainScreen select-none bg-ub-cool"}>
                <div className="w-4/4 flex items-center justify-between p-2">
                    <div className="w-4/4 flex items-center justify-start">
                        <div className="w-8">
                            <img width="20px" height="20px" src="./themes/Yaru/status/lock-small-symbolic.svg" alt="ubuntu wifi" />
                        </div>
                        <div className="w-4/4 text-sm">

                            <span className="w-4/4 font-bold">Unlock to Change Settings</span>
                            <p className="p-0 m-0">Some settings must be unlocked before they can be changed</p>
                        </div>
                    </div>
                    <button ref={unlockRef} className="w-32 bg-ub-cool-grey-light flex items-center justify-center p-1 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500">
                        Unlock...
                    </button>
                </div>
            </div>
        </>
    )
}

export default UnlockHeader;
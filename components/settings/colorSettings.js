import { useEffect, useState } from "react";
import ToggleSwitch from "../util components/ToggleSwitch";
import UnlockHeader from "./unlockHead";

const Color = (props) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
    }

    useEffect(() => {
        if (visible) {
            setVisible(false)
        }
    }, [visible])

    return (
        <>
            <UnlockHeader triggerActive={visible} />
            <div className={"w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} onClick={() => { handleClick() }}>
                <div className={`w-full flex flex-col items-center justify-between pt-4 opacity-80`}>
                    <span>Each Device needs an up to date color profile to be color managed.</span>
                </div>
                <div className=" md:w-2/3 w-2/3 m-auto my-4 bg-ub-cool-grey p-4 opacity-80">
                    <span className='w-4/4 flex items-center justify-between font-bold '>Laptop Screen
                        <ToggleSwitch
                            description={""}
                            checked={true}
                            activeLabel={""}
                            deactiveLabel={""}
                            size={'default'}
                            disabled={true}
                            onChange={() => { }}
                            offstyle="switch-off"
                            onstyle="switch-on"
                        />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Color;
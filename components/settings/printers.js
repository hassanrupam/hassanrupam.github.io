import { useEffect, useState } from "react";
import UnlockHeader from "./unlockHead";

const Printers = (props) => {

    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(true);
    }

    useEffect(()=>{
        if(visible){
            setVisible(false)
        }
    },[visible])

    return (
        <>
           <UnlockHeader triggerActive = {visible}/>
            <div className={"w-full  flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light"} onClick={handleClick}>
                <div className="m-auto opacity-40 h-full flex flex-grow flex-col justify-center items-center">
                    <img className="w-32 " src="./themes/Yaru/status/printer-symbolic.svg" alt="Ubuntu Airplane Mode" />
                    <span className="font-bold mt-4 text-lg px-1">No Printers</span>
                    <div className="w-32 text-gray-400 bg-ub-cool-grey p-2 flex justify-center items-center mt-2 border-solid border-2 border-black">
                        <button onClick={handleClick}>Add a printer...</button>
                    </div>

                    <div className="w-64 text-gray-400 bg-ub-cool-grey p-2 flex justify-center items-center mt-8 border-solid border-2 border-black">
                        <button onClick={handleClick}>Additional Printer Setting</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Printers;

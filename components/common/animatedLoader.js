import { useState } from 'react'

import { useTimeout } from 'usehooks-ts'
import { getRandomInt } from '../../functions/utils'

const AnimatedLoader = (props) => {
    const [visible, setVisible] = useState(true)

    const hide = () => setVisible(false)
    const timeOut = getRandomInt(1000,5000);
    useTimeout(hide, timeOut);

    return (
        <>

            <div className="md:w-3/4 w-2/3 m-auto flex items-center justify-between py-1.5 ">
                <span className='w-2/3 flex items-center justify-start'>{props.label}
                    {
                        visible ?
                            <img className={"w-4 animate-spin ml-4"} src="./themes/Yaru/status/process-working-symbolic.svg" alt="Ubuntu Process Symbol" />
                            :
                            <></>
                    }
                </span>
            </div>
        </>

    )
}

export default AnimatedLoader;
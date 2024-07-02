import { useState } from "react";
import { BLUETOOTH_AVAILABLE_LIST } from './constants';
import AnimatedLoader from "../common/animatedLoader";
import ToggleSwitch from '../util components/ToggleSwitch';

const Bluetooth = (props) => {
    const [bluetooth, setBluetooth] = useState(true);
    const [bluetoothAvailableListState, setBluetoothAvailableListState] = useState(BLUETOOTH_AVAILABLE_LIST);
    const toggleBluetoothActive = () => {
        const prevState = bluetooth;
        if (!prevState) {
            setBluetooth(!bluetooth);
            setBluetoothAvailableListState(BLUETOOTH_AVAILABLE_LIST);
        } else {
            setBluetooth(!bluetooth);
            setBluetoothAvailableListState([]);
        }
    }

    return (
        <div className={"text-sm w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"}>
            <div className=" md:w-3/4 w-2/3 m-auto my-4 bg-ub-cool-grey p-4">
                <span className='w-4/4 flex items-center justify-between font-bold '>Bluetooth
                    <ToggleSwitch
                        description={""}
                        checked={bluetooth}
                        activeLabel={"On"}
                        deactiveLabel={"Off"}
                        size={'default'}
                        disabled={false}
                        onChange={() => toggleBluetoothActive()}
                        offstyle="switch-off"
                        onstyle="switch-on"
                    />
                </span>
                {/* <p className='w-2/3 flex items-center justify-between text-xs text-gray-400'>Disables Wi-Fi, Bluetooth and mobile broadband</p> */}
            </div>
            {bluetooth &&
                <>
                    <AnimatedLoader label="Devices" />
                    {
                        bluetoothAvailableListState.sort((a, b) => a.status > b.status ? 1 : -1)
                            .map((bluetoothDevice) => {
                                return (
                                    <div className="md:w-3/4 w-2/3 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5">
                                        <div className="w-2/3 flex items-center justify-start px-4">
                                            <span>{bluetoothDevice.name}</span>
                                        </div>
                                        <div className="w-32">
                                            <span>{bluetoothDevice.status}</span>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </>
            }
            {!bluetooth &&
                <div className="m-auto flex flex-grow flex-col justify-center items-center">
                    <img className="w-64" src="./themes/Yaru/status/bluetooth-symbolic.svg" alt="Ubuntu Bluetooth" />
                    <span className="font-bold mt-4 text-lg px-1">Bluetooth Turned Off</span>
                    <p className="text-md px-1 text-gray-400">Turn on to connect devices and receive files transfers</p>
                </div>
            }
        </div>
    )
}

export default Bluetooth;

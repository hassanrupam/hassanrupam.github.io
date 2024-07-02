import { useEffect, useState } from "react";
import { APP_CONSTANTS, UBUNTU_ICONS } from "../../apps.config";
import UnlockHeader from "./unlockHead";
import ToggleSwitch from "../util components/ToggleSwitch";
import Slider from "../common/slider";
import SmallArrow from "../util components/small_arrow";
import ReactSlider from "react-slider";

const Sound = (props) => {
    const audIcon = UBUNTU_ICONS.STATUS.AUDIO.VOLUME_HIGH;
    const systemIcon = UBUNTU_ICONS.STATUS.SETTING;
    const headPhoneIcon = UBUNTU_ICONS.STATUS.HEADPHONES;
    const microPhoneIcon = UBUNTU_ICONS.STATUS.MICROPHONE;
    const [visible, setVisible] = useState(APP_CONSTANTS.BOOLEAN.FALSE);
    const [volume, setVolume] = useState(50);
    const [volumeOutput, setVolumeOutput] = useState(50);

    const handleClick = () => {
        setVisible(APP_CONSTANTS.BOOLEAN.TRUE);
    }

    useEffect(() => {
        if (visible) {
            setVisible(APP_CONSTANTS.BOOLEAN.FALSE)
        }
    }, [visible])

    const repeatAction = () => {
        setVolume(getRandomNumber(getRandomNumber(10,20), getRandomNumber(30,60)));
        setVolumeOutput(getRandomNumber(getRandomNumber(20,40), getRandomNumber(50,70)));
    }
    // const intervalId = setInterval(repeatAction, 1000);
    
    useEffect(() => {
        const intervalId = setInterval(repeatAction, 100);
        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this runs only once

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const VolumeRocker = ({ volume, isOutput }) => {
        const totalDots = 26; // Number of total dots in the indicator
        const activeDots = Math.round((volume / 100) * totalDots); // Number of active (filled) dots

        return (
            <div className="input-volume-container">
                <div className="input-volume-indicator">
                    {Array.from({ length: totalDots }, (_, index) => (
                        <div
                            key={index}
                            className={`dot ${index < activeDots ? (isOutput ? 'active-output' : 'active') : ''}`}
                        />
                    ))}
                </div>
            </div>
        );
    };

    const BalanceSlider = () => {
        return (
            <div className="balance-slider-container">
                <ReactSlider
                    className="balance-slider"
                    thumbClassName="balance-thumb"
                    trackClassName="balance-track"
                    min={-50}
                    max={50}
                    defaultValue={0}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                />
                <div className="balance-labels">
                    <span className="balance-left">Left</span>
                    <span className="balance-right">Right</span>
                </div>
            </div>
        );
    };
      
    return (
        <>
            <UnlockHeader triggerActive={visible} />
            <div className={"w-full h-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} style={{ paddingBottom: "3rem" }} onClick={handleClick}>
                <div className="md:w-3/4 w-2/3 m-auto">
                    <span className='w-4/4 flex items-center justify-between font-bold'>System Volume</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex flex-grow items-center opacity-80 justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-full flex flex-col justify-start px-2">
                        <Slider initialValue={80} minValue={0} maxValue={150} disabled={APP_CONSTANTS.BOOLEAN.TRUE} overWriteColor="#3CB371" marks={[100]} marksSuffix={"%"} />
                    </div>
                    <div className="w-12 flex justify-end">
                        <img width="25px" height="25px" src={audIcon.SRC} alt={`ubuntu system version ${audIcon.ALT}`} />
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-3/4 flex flex-col justify-start px-2">
                        <span>Over-Amplification</span>
                        <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>Allows raising the volume above 100%. This can result in a loss of audio quality; it is better to increase application volume settings, if possible.</p>
                    </div>
                    <div className="w-32 flex justify-end">
                        <span className="w-32  flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={APP_CONSTANTS.BOOLEAN.TRUE}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={APP_CONSTANTS.BOOLEAN.TRUE}
                                onChange={() => { }}
                                offstyle="switch-off"
                                onstyle="switch-on"
                            />
                        </span>
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-4">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Volume Levels</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex flex-grow items-center opacity-80 justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-full flex flex-row justify-start px-2 space-x-4">
                        <img width="35px" height="35px" src={systemIcon.SRC} alt={`ubuntu system version ${systemIcon.ALT}`} />
                        <span className="w-32">System Sounds</span>
                        <Slider initialValue={1} minValue={0} maxValue={150} disabled={APP_CONSTANTS.BOOLEAN.TRUE} overWriteColor="#3CB371" />
                    </div>
                    <div className="w-12 flex justify-end">
                        <img width="25px" height="25px" src={audIcon.SRC} alt={`ubuntu system version ${audIcon.ALT}`} />
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-4">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Output</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto px-2 py-4 flex flex-grow items-center opacity-80 justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-full flex flex-row justify-start items-center px-2 space-x-4">
                        <span className="w-64">Output Device</span>
                        <div className='flex flex-col space-y-2'>
                            <div className="w-full flex flex-row space-x-2 justify-between">
                                <div className="w-2/3 px-2 py-1 flex flex-row bg-ub-cool-grey-lighter justify-between">
                                    <img width="18px" height="12px" src={headPhoneIcon.SRC} alt={`ubuntu system version ${headPhoneIcon.ALT}`} />
                                    <span>Headset - Zamkol ZK706 Pro</span>
                                    <span className='w-8 flex items-center justify-center rounded'>
                                        <SmallArrow angle={APP_CONSTANTS.ANGLES.DOWN} />
                                    </span>
                                </div>
                                <div className="w-32 px-2 py-1 flex flex-row bg-ub-cool-grey-lighter justify-center space-x-2">
                                    <span>Test</span>
                                </div>
                            </div>
                            <VolumeRocker volume={volumeOutput} isOutput={APP_CONSTANTS.BOOLEAN.TRUE}/>
                        </div>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex flex-grow items-center opacity-80 justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-full flex flex-row justify-start items-center px-2 space-x-4">
                        <span className="w-64">Configuration</span>
                        <div className="w-full px-2 py-1 flex flex-row bg-ub-cool-grey-lighter justify-between">
                            <span>High Fidelity Playback (A2DP Sink)</span>
                            <span className='w-8 flex items-center justify-center rounded'>
                                <SmallArrow angle={APP_CONSTANTS.ANGLES.DOWN} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex flex-grow items-center opacity-80 justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-full flex flex-row justify-start px-2 space-x-2">
                        <span className="w-64">Balance</span>
                        <div className="w-full py-1 flex flex-row justify-between">
                            <BalanceSlider/>
                        </div>
                    </div>
                </div>
                
                <div className="md:w-3/4 w-2/3 m-auto mt-4">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Input</span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex flex-grow items-center opacity-80 justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-full flex flex-row justify-start items-center px-2 space-x-4">
                        <span className="w-64">Input Device</span>
                        <div className='flex flex-col space-y-2'>
                            <div className="w-full flex flex-row space-x-2 justify-between">
                                <div className="w-full px-2 py-1 flex flex-row bg-ub-cool-grey-lighter justify-between">
                                    <img width="18px" height="12px" src={microPhoneIcon.SRC} alt={`ubuntu system version ${microPhoneIcon.ALT}`} />
                                    <span>Digital Microphone - Comet Lake PCH-LP cAvs </span>
                                    <span className='w-8 flex items-center justify-center rounded'>
                                        <SmallArrow angle={APP_CONSTANTS.ANGLES.DOWN} />
                                    </span>
                                </div>
                            </div>
                            <VolumeRocker volume={volume} isOutput={APP_CONSTANTS.BOOLEAN.FALSE}/>
                        </div>
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex flex-grow items-center opacity-80 justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-full flex flex-row justify-start px-2 space-x-4">
                        <span className="w-64">Volume</span>
                        <Slider initialValue={80} minValue={0} maxValue={100} disabled={APP_CONSTANTS.BOOLEAN.TRUE} overWriteColor="#3CB371" />
                    </div>
                    <div className="w-12 flex justify-end">
                        <img width="25px" height="25px" src={audIcon.SRC} alt={`ubuntu system version ${audIcon.ALT}`} />
                    </div>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto mt-4">
                    <span className='w-4/4 flex items-center justify-between font-bold'>Alert Sound</span>
                </div>
                <div className="md:w-3/4 w-2/3 m-auto flex justify-end">
                    <span className="w-48 p-2 flex items-center justify-center rounded bg-ub-grey">
                        Default
                    </span>
                    <span className='w-48 p-2 flex items-center justify-center rounded bg-ub-cool-grey hover:bg-ub-cool-grey-lighter outline outline-black'>
                        Bark
                    </span>
                    <span className="w-48 p-2 flex items-center justify-center rounded bg-ub-cool-grey hover:bg-ub-cool-grey-lighter outline outline-black">
                        Drip
                    </span>
                    <span className='w-48 p-2 flex items-center justify-center rounded bg-ub-cool-grey hover:bg-ub-cool-grey-lighter outline outline-black'>
                        Glass
                    </span>
                    <span className="w-48 p-2 flex items-center justify-center rounded bg-ub-cool-grey hover:bg-ub-cool-grey-lighter outline outline-black">
                        Sonar
                    </span>
                </div>
            </div>
        </>
    )
}

export default Sound;
import { useEffect, useState } from "react";
import { APP_CONSTANTS, APPLICATION_STYLE_MODE } from "../../apps.config";
import SmallArrow from "../util components/small_arrow";
import ToggleSwitch from "../util components/ToggleSwitch";
import UnlockHeader from "./unlockHead";
import AppSelect from "../common/AppSelect";

const Displays = (props) => {
    const [visible, setVisible] = useState(APP_CONSTANTS.BOOLEAN.FALSE);
    const [orientation, setOrientation] = useState('l');
    const [resolution, setResolution] = useState('1920_1080');
    const [refreshRate, setRefreshRate] = useState('120');
    const [scale, setScale] = useState('100');

    const orientationOptions = [
        {
            value: 'l',
            label: 'Landscape'
        },
        {
            value: 'pr',
            label: 'Portrait Right'
        },
        {
            value: 'pl',
            label: 'Portrait Left'
        },
        {
            value: 'lf',
            label: 'Landscape (flipped)'
        },
    ];

    const resolutionOptions = [
        {
            value: '1920_1080',
            label: '1920 x 1080 (16:9)'
        },
        {
            value: '1680_1050',
            label: '1680 x 1050 (16:10)'
        },
        {
            value: '1600_900',
            label: '1600 x 900 (16:9)'
        },
        {
            value: '1440_810',
            label: '1440 x 810 (16:9)'
        },
        {
            value: '1400_1050',
            label: '1400 x 1050 (4:3)'
        },
        {
            value: '1400_900',
            label: '1400 x 900 (3:2)'
        },
        {
            value: '1368_768',
            label: '1368 x 768 (16:9)'
        },
        {
            value: '1280_1024',
            label: '1280 x 1024 (5:4)'
        },
        {
            value: '1280_960',
            label: '1280 x 960 (4:3)'
        },
        {
            value: '1280_800',
            label: '1280 x 800 (16:10)'
        },
        {
            value: '1280_720',
            label: '1280 x 720 (16:9)'
        },
        {
            value: '1024_768',
            label: '1024 x 768 (4:3)'
        },
        {
            value: '1024_576',
            label: '1024 x 576 (16:9)'
        },
        {
            value: '960_720',
            label: '960 x 720 (4:3)'
        },
        {
            value: '960_600',
            label: '960 x 600 (16:10)'
        },
        {
            value: '960_540',
            label: '960 x 540 (16:9)'
        },
        {
            value: '928_696',
            label: '928 x 696 (4:3)'
        },
        {
            value: '896_672',
            label: '896 x 672 (4:3)'
        },
        {
            value: '864_486',
            label: '864 x 486 (16:9)'
        },
        {
            value: '840_525',
            label: '840 x 525 (16:10)'
        },
        {
            value: '800_600',
            label: '800 x 600 (4:3)'
        },
    ];

    const refreshRateOptions = [
        {
            value: '120',
            label: '120.00 Hz'
        },
        {
            value: '90',
            label: '90.00 Hz'
        },
        {
            value: '60',
            label: '60.01 Hz'
        },
        {
            value: '40',
            label: '40.00 Hz'
        }
    ];

    const scaleOptions = [
        {
            value: '100',
            label: '100 %'
        },
        {
            value: '125',
            label: '125 %'
        },
        {
            value: '150',
            label: '150 %'
        },
        {
            value: '175',
            label: '175 %'
        },
        {
            value: '200',
            label: '200 %'
        },
        {
            value: '225',
            label: '225 %'
        },
    ];

    const handleClick = () => {
        setVisible(APP_CONSTANTS.BOOLEAN.TRUE);
    }

    useEffect(() => {
        if (visible) {
            setVisible(APP_CONSTANTS.BOOLEAN.FALSE)
        }
    }, [visible])
    return (
        <>
            <UnlockHeader triggerActive={visible} />
            <div className={"w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"} onClick={() => { handleClick() }}>
                <div className="md:w-3/4 w-2/3 m-auto flex items-center justify-between py-1.5 mt-8">
                    <span className='w-2/3 flex items-center justify-start font-bold'>Built-in Display</span>
                    <span className='w-8 flex items-center justify-end p-2 m-2 transition ease-in-out delay-300 border border-black border-0 hover:border-x hover:border-y hover:bg-ub-cool-grey-lighter rounded'>
                    </span>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Orientation</span>
                    </div>
                    <div className="w-42 flex justify-end">
                         <AppSelect
                            disabled={APP_CONSTANTS.BOOLEAN.TRUE}
                            mode={APPLICATION_STYLE_MODE.DARK}
                            value={orientation}
                            options={orientationOptions}
                            onChange={setOrientation} />
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Resolution</span>
                    </div>
                    <div className="w-48 flex justify-end">
                        <AppSelect
                            disabled={APP_CONSTANTS.BOOLEAN.TRUE}
                            mode={APPLICATION_STYLE_MODE.DARK}
                            value={resolution}
                            options={resolutionOptions}
                            onChange={setResolution} />
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Refresh Rate</span>
                    </div>
                    <div className="w-32 flex justify-end">
                        <AppSelect
                            disabled={APP_CONSTANTS.BOOLEAN.TRUE}
                            mode={APPLICATION_STYLE_MODE.DARK}
                            value={refreshRate}
                            options={refreshRateOptions}
                            onChange={setRefreshRate} />
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-2 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex items-center justify-start px-2">
                        <span>Scale</span>
                    </div>
                    <div className="w-24 flex justify-end">
                        <AppSelect
                            disabled={APP_CONSTANTS.BOOLEAN.TRUE}
                            mode={APPLICATION_STYLE_MODE.DARK}
                            value={scale}
                            options={scaleOptions}
                            onChange={setScale} />
                    </div>
                </div>
                <div className="text-sm md:w-3/4 w-2/3 m-auto py-4 px-2 flex items-center opacity-80 justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none duration-100 flex justify-start pl-2 md:pl-2.5" >
                    <div className="w-2/3 flex flex-col justify-start px-2">
                        <span>Fractional Scaling</span>
                        <p className='w-3/3 flex items-center justify-between text-xs text-gray-400'>May increase power usage, lower speed or reduce display sharpness</p>
                    </div>
                    <div className="w-64 flex justify-end">
                        <span className="w-64  flex items-center justify-end">
                            <ToggleSwitch
                                description={""}
                                checked={false}
                                activeLabel={""}
                                deactiveLabel={""}
                                size={'default'}
                                disabled={true}
                                onChange={() => {}}
                                offstyle="switch-off"
                                onstyle="switch-on"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Displays;
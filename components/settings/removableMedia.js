import { useEffect, useState } from "react";
import { APP_CONSTANTS, REMOVABLE_MEDIA_OPTIONS, UBUNTU_ICONS } from "../../apps.config";
import Checkbox from "../common/checkbox";
import SmallArrow from "../util components/small_arrow";
import UnlockHeader from "./unlockHead";
import AppSelect from "../common/AppSelect";


const RemovableMedia = (props) => {

    const [restricted, setRestricted] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleAllowedChange = () => {
        const prevRestricted = restricted;
        setRestricted(!prevRestricted);
    }

    const handleClick = () => {
        setVisible(true);
    }

    useEffect(() => {
        if (visible) {
            setVisible(false)
        }
    }, [visible])

    let mediaListItems = [
        {
            mediaType: "CD Audio",
            value: 'ask',
            options: [
                {
                    icon: UBUNTU_ICONS.APPS.AUDIO_APP,
                    value: 'rythm',
                    label: 'Rhythmbox'
                },
                {
                    value: 'other',
                    label: 'Other application...'
                },
                {
                    value: 'ask',
                    label: 'Ask what to do'
                },
                {
                    value: 'do',
                    label: 'Do nothing'
                },
                {
                    value: 'open',
                    label: 'Open folder'
                }
            ],
            disabled: restricted,
        },
        {
            mediaType: "DVD Video",
            value: 'ask',
            options: [
                {
                    icon: UBUNTU_ICONS.APPS.VIDEOS,
                    value: 'videos',
                    label: 'Videos'
                },
                {
                    value: 'other',
                    label: 'Other application...'
                },
                {
                    value: 'ask',
                    label: 'Ask what to do'
                },
                {
                    value: 'do',
                    label: 'Do nothing'
                },
                {
                    value: 'open',
                    label: 'Open folder'
                }
            ],
            disabled: restricted,
        },
        {
            mediaType: "Music Player",
            value: 'ask',
            options: [
                {
                    icon: UBUNTU_ICONS.APPS.AUDIO_APP,
                    value: 'rythm',
                    label: 'Rhythmbox'
                },
                {
                    value: 'other',
                    label: 'Other application...'
                },
                {
                    value: 'ask',
                    label: 'Ask what to do'
                },
                {
                    value: 'do',
                    label: 'Do nothing'
                },
                {
                    value: 'open',
                    label: 'Open folder'
                }
            ],
            disabled: restricted,
        },
        {
            mediaType: "Photos",
            value: 'ask',
            options: [
                {
                    icon: UBUNTU_ICONS.APPS.SHOTWELL,
                    value: 'shotwell',
                    label: 'Shotwell'
                },
                {
                    value: 'other',
                    label: 'Other application...'
                },
                {
                    value: 'ask',
                    label: 'Ask what to do'
                },
                {
                    value: 'do',
                    label: 'Do nothing'
                },
                {
                    value: 'open',
                    label: 'Open folder'
                }
            ],
            disabled: restricted,
        },
        {
            mediaType: "Software",
            value: 'ask',
            options: [
                {
                    icon: UBUNTU_ICONS.SYSTEM.SYSTEM_APP,
                    value: 'run',
                    label: 'Run Software'
                },
                {
                    value: 'other',
                    label: 'Other application...'
                },
                {
                    value: 'ask',
                    label: 'Ask what to do'
                },
                {
                    value: 'do',
                    label: 'Do nothing'
                },
                {
                    value: 'open',
                    label: 'Open folder'
                }
            ],
            disabled: restricted,
        },
    ];
    const [mediaList, setMediaList] = useState(mediaListItems);

    const updateMediaList = (value, mediaInfo) => {
        const updatedMediaList = mediaList.map(item => {
            if (item.mediaType === mediaInfo) {
                return {
                    ...item,
                    value: value
                };
            }
            return item;
        });

        setMediaList(updatedMediaList);
    };

    useEffect(() => {
        const updatedMediaList = mediaList.map(item => {
            return {
                ...item,
                disabled: restricted
            };
        });

        setMediaList(updatedMediaList);
    }, [restricted])

    return (
        <>
            <div className={"w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80"}>
                <div className={`w-full flex flex-col items-center justify-between pt-8 ${restricted ? 'opacity-30' : 'opacity-70'}`}>
                    <span>Select how media should be handled</span>
                </div>
                <div className="w-full flex flex-col items-center justify-between pt-8">
                    {
                        mediaList.map((appInfo) => {
                            return (
                                <div className="w-96 flex flex-grow items-center justify-end mx-4 p-2 ">
                                    <span className={`text-right ${restricted ? 'opacity-30' : 'opacity-70'} w-32`}>{appInfo.mediaType}</span>
                                    <span className={`w-64 flex justify-between items-center bg-ub-cool-grey-light ${restricted ? 'opacity-50' : 'opacity-100'} mx-3 border-2 border-black cursor-pointer`} onClick={() => { handleClick() }} >
                                        <AppSelect value={appInfo.value} options={appInfo.options} onChange={(value) => { updateMediaList(value, appInfo.mediaType) }} disabled={appInfo.disabled} />
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-full flex flex-col items-center justify-between pt-4">
                    <div className="w-96 m-auto flex items-center justify-end pt-4 mx-4">
                        <div className={`w-48 ${restricted && 'text-gray-400'} bg-ub-cool-grey bg-opacity-70 p-2 flex justify-center items-center mx-4`}>
                            <button onClick={() => { handleClick() }} >other Media...</button>
                        </div>
                    </div>
                </div>
                <div className={`w-full flex flex-col items-center justify-between pt-8 opacity-80`}>
                    {
                        <Checkbox
                            label={"Never prompt or start program on media insertion"}
                            check={restricted}
                            onCheck={() => { handleAllowedChange() }}
                        />
                    }
                </div>
            </div>
        </>
    )
}

export default RemovableMedia;
import { useEffect, useState } from "react";
import UnlockHeader from "./unlockHead";
import { APP_CONSTANTS, SEARCH_SETTING_ITEM_LIST, UBUNTU_ICONS } from "../../apps.config";
import ToggleSwitch from "../util components/ToggleSwitch";

const Search = (props) => {


    const dragIcon = UBUNTU_ICONS.EMBLEMS.EMBLEM_LIST_DRAG_ICON;
    const viewMoreIcon = UBUNTU_ICONS.EMBLEMS.VIEW_MORE;


    const [visible, setVisible] = useState(APP_CONSTANTS.BOOLEAN.FALSE);

    const handleClick = () => {
        setVisible(APP_CONSTANTS.BOOLEAN.TRUE);
    }

    useEffect(() => {
        if (visible) {
            setVisible(APP_CONSTANTS.BOOLEAN.FALSE)
        }
    }, [visible])

    return(
        <>
        <UnlockHeader triggerActive={visible} />
            <div className={"w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light"} style={{ paddingBottom: "3rem" }} onClick={handleClick}>
                <div className={`md:w-3/4 w-2/3 m-auto  pb-4 flex flex-col items-center justify-between pt-8 ${visible ? 'opacity-30' : 'opacity-50'}`}>
                    <span>Control which search results are shown in the Activities Overview. The order of search results can also be changed by moving rows in the list.</span>
                </div>
                {
                    SEARCH_SETTING_ITEM_LIST
                        .sort((a, b) => a.SERIAL > b.SERIAL ? 1 : -1)
                        .map((appItem) => {
                            return (
                                <div className="md:w-3/4 w-2/3 m-auto p-4 flex items-center justify-between bg-ub-cool-grey md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100  justify-start pl-2 md:pl-2.5">
                                    <span className="flex flex-end space-x-2 pl-4">
                                        <img width="16px" height="16px" src={dragIcon.SRC} alt={`ubuntu system version ${dragIcon.ALT}`} />
                                        <span className="flex items-center px-2">
                                            <img width="24px" height="24px" src={appItem.appIcon.SRC} alt={`ubuntu notification ${appItem.appIcon.ALT}`} />
                                        </span>
                                        {appItem.appName}
                                    </span>
                                    <span className="flex flex-end pl-6 pr-6 space-x-4">
                                        <ToggleSwitch
                                            description={""}
                                            checked={appItem.appOption}
                                            activeLabel={""}
                                            deactiveLabel={""}
                                            size={'default'}
                                            disabled={APP_CONSTANTS.BOOLEAN.TRUE}
                                            onChange={() => { }}
                                            offstyle="switch-off"
                                            onstyle="switch-on"
                                        />
                                        <img width="16px" height="16px" src={viewMoreIcon.SRC} alt={`ubuntu system version ${viewMoreIcon.ALT}`} />
                                    </span>
                                </div>
                            )
                        })
                }
            </div>
        </>
    )

}

export default Search; 
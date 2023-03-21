import { useEffect, useState } from "react";
import { APP_CONSTANTS } from "../../apps.config";
import ToggleSwitch from "../util components/ToggleSwitch";
import { USERS_LIST } from "./constants";
import UnlockHeader from "./unlockHead";
import UserAvatar from "./userAvatar";
import UserTile from "./userTile";

const Users = (props) => {
    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(true);
    }

    useEffect(() => {
        if (visible) {
            setVisible(false)
        }
    }, [visible])

    const [selectedUserInitial, setSelectedUserInitial] = useState("G");
    const [selectedUser, setSelectedUser] = useState(USERS_LIST.filter(x => x.initials === "G")[0]);

    useEffect(() => {
        const foundList = USERS_LIST.filter(x => x.initials === selectedUserInitial);

        if (foundList && foundList.length > 0) {
            setSelectedUser(foundList[0])
        }
    }, [selectedUserInitial])

    return (
        <>
            <UnlockHeader triggerActive={visible} />
            <div className={"w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light"} onClick={() => { handleClick() }}>
                <div className="w-full h-40 bg-ub-cool-grey opacity-80 flex  justify-between items-center">
                    {
                        USERS_LIST.map((user) => {
                            return (
                                <div className="w-full h-full flex flex-col items-center justify-center" onClick={() => { setSelectedUserInitial(user.initials) }}>
                                    <UserTile user={user} selectedUser={selectedUserInitial} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-full h-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light opacity-80">
                    <div className="w-full  flex flex-col items-center justify-center pt-4">

                        <div className="w-2/4 py-2 px-4 flex items-center justify-between hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5">
                            <div className="w-full flex items-center justify-start px-4">
                                <UserAvatar user={selectedUser} size={APP_CONSTANTS.SIZE.MEDIUM} />
                                <span className="pl-4 text-xl font-bold">{selectedUser.name}</span>
                            </div>
                            {
                                <div className="opacity-60 w-8 bg-ub-cool-grey p-2 flex flex-col items-center justify-center rounded-full border border-white cursor-pointer">
                                    <img src="./themes/Yaru/status/document-edit-symbolic.svg" alt="ubuntu edit" />
                                </div>
                            }
                        </div>
                        <div className="w-2/4 m-auto flex items-center justify-between py-1.5 p-2 pt-4">
                            <span className='w-2/3 flex items-center justify-start'>Account Settings</span>
                        </div>
                        <div className="w-2/4 m-auto bg-ub-cool-grey p-8 py-1.5">
                            <span className='w-4/4 flex items-center justify-between font-bold text-gray-400 opacity-50'>Administrator
                                <ToggleSwitch
                                    description={""}
                                    checked={selectedUser.isAdmin}
                                    activeLabel={""}
                                    deactiveLabel={""}
                                    size={'default'}
                                    disabled={true}
                                    onChange={(e) => { () => { } }}
                                    offstyle="switch-off"
                                    onstyle="switch-on"
                                />
                            </span>
                            <p className="text-xs text-gray-400 opacity-50 w-64">Administrator can add and remove other users, and can change settings for all users.</p>
                        </div>
                        {!selectedUser.isLoggedIn &&
                            <div className="text-sm md:w-2/4 w-2/4 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5">
                                <div className="w-2/3 flex items-center justify-start px-4 text-gray-400">
                                    <span>Language</span>
                                </div>
                                <div className="w-64 text-xs text-gray-400 flex justify-end">
                                    <span>English (United States)</span>
                                    <div className="w-4 opacity-50">
                                        <img width="16px" height="16px" src="./themes/Yaru/emblems/pan-end-symbolic.svg" alt="ubuntu password" />
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="w-2/4 m-auto flex items-center justify-between py-1.5 p-2 pt-8">
                            <span className='w-2/3 flex items-center justify-start'>Authentication & Login</span>
                        </div>
                        <div className="text-sm md:w-2/4 w-2/4 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5">
                            <div className="w-2/3 flex items-center justify-start px-4">
                                <span>Password</span>
                            </div>
                            <div className="w-64 text-xs text-gray-400 flex justify-end">
                                <span>*************</span>
                                <div className="w-4 opacity-50">
                                    <img width="16px" height="16px" src="./themes/Yaru/emblems/pan-end-symbolic.svg" alt="ubuntu password" />
                                </div>
                            </div>
                        </div>

                        {selectedUser.isLoggedIn ?
                            <div className="text-sm md:w-2/4 w-2/4 m-auto py-2 px-4 flex items-center justify-between bg-ub-cool-grey hover:bg-opacity-50 md:rounded-none rounded-sm cursor-pointer outline-none focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5">
                                <div className="w-2/3 flex items-center justify-start px-4">
                                    <span>Account Activity</span>
                                </div>
                                <div className="w-64 text-xs text-gray-400 flex justify-end">
                                    <span>Logged In</span>
                                    <div className="w-4 opacity-50">
                                        <img width="16px" height="16px" src="./themes/Yaru/emblems/pan-end-symbolic.svg" alt="ubuntu logged in" />
                                    </div>
                                </div>
                            </div> :
                            <div className="text-sm w-2/4 m-auto bg-ub-cool-grey px-4 py-2 hover:bg-opacity-50 md:rounded-none rounded-sm cursor-default outline-none focus:outline-none duration-100 my-0.5">
                                <span className='w-4/4 flex items-center justify-between px-2'>Automatic Login
                                    <ToggleSwitch
                                        description={""}
                                        checked={false}
                                        activeLabel={""}
                                        deactiveLabel={""}
                                        size={'default'}
                                        disabled={true}
                                        onChange={(e) => { () => { } }}
                                        offstyle="switch-off"
                                        onstyle="switch-on"
                                    />
                                </span>
                            </div>
                        }
                        <div className="w-2/4 m-auto flex items-center justify-end pt-4">
                            <div className="w-32 text-gray-400 bg-ub-cool-grey p-2 flex justify-center items-center">
                                <button>Remove User...</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Users;
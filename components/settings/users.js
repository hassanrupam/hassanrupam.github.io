import { useEffect, useState } from "react";
import { USERS_LIST } from "./constants";
import UnlockHeader from "./unlockHead";
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

    const [selectedUser, setSelectedUser] =  useState("G");

    return (
        <>
            <UnlockHeader triggerActive={visible} />
            <div className={"w-full flex-col flex-grow z-20 max-h-full overflow-y-auto windowMainScreen select-none bg-ub-cool-grey-light"} onClick={handleClick}>
                <div className="w-full h-40 bg-ub-cool-grey opacity-80 flex  justify-between items-center">
                    {
                        USERS_LIST.map((user)=> {
                            return (
                                <UserTile user = {user} selectedUser={selectedUser} onClick={setSelectedUser(user.initials)}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Users;
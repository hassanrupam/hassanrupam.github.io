import UserAvatar from "./userAvatar";

const UserTile = (props) => {

    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="pt-8">
                <UserAvatar user={props.user} />
                </div>
                
                <div className="w-full flex flex-col items-center justify-center" >
                    <span className="font-bold text-sm">{props.user.name}</span>
                    <div className={`w-16 overflow-hidden bottom-0 relative`}>
                        <div className={`h-11 w-11 rotate-45 transform origin-bottom-left ${props.selectedUser === props.user.initials ? 'bg-ub-cool-grey-light': 'bg-ub-cool-grey'}`}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserTile;
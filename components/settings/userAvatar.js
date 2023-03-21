import { APP_CONSTANTS } from "../../apps.config";

const UserAvatar = (props) => {
    return (
        <>
            
            <div className={`${props.size === APP_CONSTANTS.SIZE.SMALL ? 'w-16 h-16': props.size === APP_CONSTANTS.SIZE.MEDIUM ? 'w-32 h-32' : 'w-16 h-16'} flex flex-col items-center justify-center rounded-full`} style={{ backgroundColor: `${props.user.avatarColor}` }}>
                <span className={`${props.size === APP_CONSTANTS.SIZE.SMALL ? 'text-4xl' : props.size === APP_CONSTANTS.SIZE.MEDIUM ? 'text-7xl' : 'text-4xl'} font-thin`}>{props.user.initials}</span>
            </div>
        </>
    )
}

export default UserAvatar;
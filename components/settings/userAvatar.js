const UserAvatar = (props) => {
    return (
        <>
            <div className="w-16 h-16 flex flex-col items-center justify-center rounded-full" style={{ backgroundColor: `${props.user.avatarColor}` }}>
                <span className="text-4xl font-thin">{props.user.initials}</span>
            </div>
        </>
    )
}

export default UserAvatar;
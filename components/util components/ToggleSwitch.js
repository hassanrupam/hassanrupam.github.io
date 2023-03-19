import React from "react";

function ToggleSwitch(props) {
    const {
        description,
        activeLabel,
        deactiveLabel,
        size = "default",
        checked,
        disabled,
        onChange,
        offstyle = "btn-danger",
        onstyle = "btn-success"
    } = props;

    let displayStyle = checked ? onstyle : offstyle;
    return (
        <>

            <label className={`center ${disabled && 'disabled-switch'}`}>
                {description && <label className="switch-description" >{description}</label>}
                {deactiveLabel && <span className={`${!checked && "active"} switch-label denied`}>
                    {deactiveLabel}
                </span>}
                <span className={`${size} switch-wrapper`}>
                    <input
                        type="checkbox"
                        checked={checked}
                        disabled={disabled}
                        onChange={(e) => onChange(e)}
                    />
                    <span className={`${displayStyle} switch`}>
                        <span className="switch-handle" />
                    </span>
                </span>
                {activeLabel && <span className={`${checked && "active"} switch-label granted`}>
                    {activeLabel}
                </span>
                }

            </label>
        </>
    );
}

export default ToggleSwitch;

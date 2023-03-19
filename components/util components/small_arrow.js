import React from 'react'
import { APP_CONSTANTS } from '../../apps.config';

export default function SmallArrow(props) {
    let angle = props.angle ? props.angle : APP_CONSTANTS.ANGLES.UP; // default value is up
    return (
        <div className={" arrow-custom-" + angle}></div>
    )
}

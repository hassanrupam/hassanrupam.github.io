import React, { Component } from "react";
import { APP_CONSTANTS } from "../../apps.config";

export class SideBarApp extends Component {
    constructor() {
        super();
        this.id = null;
        this.state = {
            showTitle: APP_CONSTANTS.BOOLEAN.FALSE,
            scaleImage: APP_CONSTANTS.BOOLEAN.FALSE,
        };
    }

    componentDidMount() {
        this.id = this.props.id;
    }

    scaleImage = () => {
        setTimeout(() => {
            this.setState({ scaleImage: APP_CONSTANTS.BOOLEAN.FALSE });
        }, APP_CONSTANTS.TIME_OUTS.SECONDS_1);
        this.setState({ scaleImage: APP_CONSTANTS.BOOLEAN.TRUE });
    }

    openApp = () => {
        if (!this.props.isMinimized[this.id] && this.props.isClose[this.id]) {
            this.scaleImage();
        }
        this.props.openApp(this.id);
        this.setState({ showTitle: APP_CONSTANTS.BOOLEAN.FALSE });
    };

    render() {
        return (
            <div
                tabIndex="0"
                onClick={this.openApp}
                onMouseEnter={() => {
                    this.setState({ showTitle: APP_CONSTANTS.BOOLEAN.TRUE });
                }}
                onMouseLeave={() => {
                    this.setState({ showTitle: APP_CONSTANTS.BOOLEAN.FALSE });
                }}
                className={(this.props.isClose[this.id] === APP_CONSTANTS.BOOLEAN.FALSE && this.props.isFocus[this.id] ? "bg-white bg-opacity-10 " : "") + " w-auto p-2 outline-none relative transition hover:bg-white hover:bg-opacity-10 rounded m-1"}
                id={"sidebar-" + this.props.id}
            >
                <img width="28px" height="28px" className="w-7" src={this.props.icon} alt="Ubuntu App Icon" />
                <img className={(this.state.scaleImage ? " scale " : "") + " scalable-app-icon w-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"} src={this.props.icon} alt="" />
                {
                    (
                        this.props.isClose[this.id] === APP_CONSTANTS.BOOLEAN.FALSE
                            ? <div className=" w-1 h-1 absolute left-0 top-1/2 bg-ub-orange rounded-sm"></div>
                            : null
                    )
                }
                <div
                    className={
                        (this.state.showTitle ? " visible " : " invisible ") +
                        " w-max py-0.5 px-1.5 absolute top-1.5 left-full ml-3 m-1 text-ubt-grey text-opacity-90 text-sm bg-ub-grey bg-opacity-70 border-gray-400 border border-opacity-40 rounded-md"
                    }
                >
                    {this.props.title}
                </div>
            </div>
        );
    }
}

export default SideBarApp;

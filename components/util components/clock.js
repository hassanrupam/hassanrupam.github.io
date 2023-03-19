import { Component } from 'react'
import { APP_CONSTANTS, APP_SEPERATORS, MONTH_LIST, TIME_MERIDIEM, WEEK_DAYS_LIST } from '../../apps.config';

export default class Clock extends Component {
    constructor() {
        super();
        this.month_list = MONTH_LIST;
        this.day_list = WEEK_DAYS_LIST;
        this.state = {
            hour_12: true,
            current_time: APP_CONSTANTS.TODAY
        };
    }

    componentDidMount() {
        this.update_time = setInterval(() => {
            this.setState({ current_time: APP_CONSTANTS.TODAY });
        }, 10 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.update_time);
    }

    render() {
        const { current_time } = this.state;

        let day = this.day_list[current_time.getDay()];
        let hour = current_time.getHours();
        let minute = current_time.getMinutes();
        let month = this.month_list[current_time.getMonth()];
        let date = current_time.getDate().toLocaleString();
        let meridiem = (hour < 12 ? TIME_MERIDIEM.AM : TIME_MERIDIEM.PM);

        if (minute.toLocaleString().length === 1) {
            minute = APP_CONSTANTS.PAD_WITH_ZERO + minute
        }

        if (this.state.hour_12 && hour > 12) hour -= 12;

        let display_time;
        if (this.props.onlyTime) {
            display_time = hour + APP_SEPERATORS.TIME_SEPERATOR + minute + APP_SEPERATORS.BLACK_SEPERATOR + meridiem;
        }
        else if (this.props.onlyDay) {
            display_time = day + APP_SEPERATORS.BLACK_SEPERATOR + month + APP_SEPERATORS.BLACK_SEPERATOR + date;
        }
        else display_time = day + APP_SEPERATORS.BLACK_SEPERATOR + month + APP_SEPERATORS.BLACK_SEPERATOR + date + APP_SEPERATORS.BLACK_SEPERATOR + hour + APP_SEPERATORS.TIME_SEPERATOR + minute + APP_SEPERATORS.BLACK_SEPERATOR + meridiem;
        return <span>{display_time}</span>;
    }
}

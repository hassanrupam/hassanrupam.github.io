import { Select } from "antd";
import { APPLICATION_STYLE_MODE } from "../../apps.config";
const { Option } = Select;

const AppSelect = (props) => {

    const selectClassName = props.mode && props.mode === APPLICATION_STYLE_MODE.DARK ? 'app-dropdown-dark' : 'app-dropdown';
    const popupClassName = props.mode && props.mode === APPLICATION_STYLE_MODE.DARK ? 'custom-dropdown-dark' : 'custom-dropdown';
    const optionClassName = props.mode && props.mode === APPLICATION_STYLE_MODE.DARK ? 'custom-option-dark' : 'custom-option';


    return (
        <div className="w-full max-h-8">
            <Select
                value={props.value || props.options[0].value}
                showSearch
                variant="outlined"
                size='middle'
                className={`w-full ${selectClassName}`}
                placeholder="Select an option"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                }
                popupClassName={`${popupClassName} bg-ub-cool-grey-dark`}
                onChange={props.onChange}
                disabled={props.disabled}
            >
                {props.options.map((option) => (
                    <Option key={option.value} value={option.value} className={optionClassName}>
                        {option.icon && <img className='option-icon' width="24px" src={option.icon.SRC} alt={option.icon.ALT} />}
                        {option.label}
                    </Option>
                ))}
            </Select>
        </div>
    )
}

export default AppSelect;
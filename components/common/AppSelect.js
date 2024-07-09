import { Select } from "antd";
const { Option } = Select;

const AppSelect = (props) => {
    return (
        <div className="w-full">
            <Select
                value={props.value || props.options[0].value}
                showSearch
                variant="outlined"
                size='middle'
                className="w-full app-dropdown"
                placeholder="Select an option"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                }
                popupClassName="custom-dropdown bg-ub-cool-grey-dark"
                onChange={props.onChange}
            >
                {props.options.map((option) => (
                    <Option key={option.value} value={option.value} className="custom-option">
                        {option.label}
                    </Option>
                ))}
            </Select>
        </div>
    )
}

export default AppSelect;
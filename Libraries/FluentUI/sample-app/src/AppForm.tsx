import * as React from 'react';
import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';
import { Text } from "@fluentui/react/lib/Text";
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 400 },
};

const options: IDropdownOption[] = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
];

const stackTokens: IStackTokens = { childrenGap: 20 };

const Intro = () => {
    const IntroStr = "Azure AD Domain Services is available in multiple service tiers, known as SKUs. These SKUs " +
        "provide predictable pricing, varying performance levels, and selectable enterprise and premium features.";

    return (
        <Text data-testid="helloworld-text-testid">
            {IntroStr}
        </Text>
    );
};

export const AppForm: React.FunctionComponent = () => {
    return (
        <Stack tokens={stackTokens}>
            <Dropdown
                placeholder="Select an option"
                label="Basic uncontrolled example"
                options={options}
                styles={dropdownStyles}
            />

            <Dropdown
                label="Disabled example with defaultSelectedKey"
                defaultSelectedKey="broccoli"
                options={options}
                disabled={true}
                styles={dropdownStyles}
            />

            <Dropdown
                placeholder="Select options"
                label="Multi-select uncontrolled example"
                defaultSelectedKeys={['apple', 'banana', 'grape']}
                multiSelect
                options={options}
                styles={dropdownStyles}
            />

            <Intro />
        </Stack>
    );
};

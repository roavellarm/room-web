import React from 'react';
import { Select, MenuItem } from '@material-ui/core'

export default ({ options, optionText, optionValue, ...props }) => (
    <Select {...props}>
        {options.map(o => <MenuItem value={o[optionValue]}>{o[optionText]}</MenuItem>)}
    </Select>
)
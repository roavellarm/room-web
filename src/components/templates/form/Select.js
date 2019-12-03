import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import { Select, MenuItem } from '@material-ui/core'

// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }))

export default ({ options, optionText, optionValue, ...props }) => {
  //   const [state, setState] = React.useState({
  //     mood: '',
  //     name: 'hai',
  //   })
  // const [labelWidth, setLabelWidth] = React.useState(0)
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth)
  // }, [])

  // const inputLabel = React.useRef(null)

  // const classes = useStyles()
  // //   const [mood, setMood] = React.useState('')
  // const handleChange = () => {
  //   console.log()
  // }

  return (
    <>
      {/* <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-mood-native-simple">
          Mood
        </InputLabel>
        <Select
          native
          // value={state.mood}
          onChange={handleChange()}
          labelWidth={labelWidth}
          inputProps={{
            name: 'mood',
            id: 'outlined-mood-native-simple',
          }}
        >
          <option value=""></option>
          {options.map(o =>
            // console.log(o[optionText]),
            // <option value={o[optionValue]}>{o[optionText]}</option>
          )}
        </Select>
      </FormControl> */}

      <Select {...props}>
        {options.map(o => (
          <MenuItem value={o[optionValue]}>{o[optionText]}</MenuItem>
        ))}
      </Select>
    </>
  )
}

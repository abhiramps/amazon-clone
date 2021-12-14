import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Data from '../../Apis/Data';
import './Header.scss';
// import { AmazonContext } from '../../contexts/Context';

export default function ComboBox() {

    // const { dispatch } = useContext(AmazonContext)
    const [state, setState] = useState();
    console.log(state)


    return (
        <Autocomplete
            sx={{
                display: 'inline-block',
                '& input': {
                    borderRadius: "5px 0 0 5px",
                    width: 300,
                    height: 30,
                    bgcolor: 'background.paper',
                    color: (theme) =>
                        theme.palette.getContrastText(theme.palette.background.paper),
                },
            }}

            onChange={(ev, value) => setState(value)}
            id="custom-input-demo"
            options={Data.map(itm => itm.title)}
            // getOptionLabel={(option) => option.title}
            renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                    <input type="text" {...params.inputProps} />
                </div>
            )}
        />

    )
}


// getOptionLabel={(option) => option.title}
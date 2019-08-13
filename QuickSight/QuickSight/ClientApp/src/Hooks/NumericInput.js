import React, { useState } from 'react';

const NumericInput = props => {

    const [value, setvalue] = useState(props.value);

    const handleNumberChange = event => {
        const re = /[0-9]+/g;
        if (!re.test(event.key)) {
            event.preventDefault();
        }
    }

    const consthandleNumberBlue = event => {
        setvalue(event.target.value);
    }

    let loked = false;

    if (props.isLoked) {
        loked = true;
    }

    return (
        <input className="numeric" type="text" defaultValue={value} name={props.name} onKeyDown={handleNumberChange} disabled={loked} onBlur={consthandleNumberBlue} />
    );
};
export default React.memo(NumericInput);
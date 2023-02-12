import React from 'react';
import './Checkbox.scss'
import RadioElement from './RadioElement';

const Checkbox = () => {
    return (
        <div className='radioWrapper'>
            <p>Select your position</p>
            <RadioElement identifier={1} position="Frontend developer"></RadioElement>
            <RadioElement identifier={2} position="Backend developer"></RadioElement>
            <RadioElement identifier={3} position="Designer"></RadioElement>
            <RadioElement identifier={4} position="QA"></RadioElement>
        </div>
    )
}

export default Checkbox
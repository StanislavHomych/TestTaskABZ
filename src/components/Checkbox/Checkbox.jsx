import './Checkbox.scss'
import RadioElement from './RadioElement';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPositions } from '../../redux/slices/usersSlice';
import { useEffect } from 'react';
import PreLoader from '../PreLoader/PreLoader';

const Checkbox = () => {
    const dispatch = useDispatch();
    const positionsList = useSelector((state) => { return state.usersSlice.positionsList.positions })

    useEffect(() => {
        dispatch(fetchPositions());
    }, [])

    return (
        <div className='radioWrapper'>
            <p className='radioWrapper-heading'>Select your position</p>
            {positionsList ? (
                positionsList.map((position) => {
                    return (
                        <RadioElement
                            key={position.id}
                            identifier={position.id}
                            position={position.name}>
                        </RadioElement>
                    )
                })) : (<PreLoader />)
            }

        </div>
    )
}

export default Checkbox
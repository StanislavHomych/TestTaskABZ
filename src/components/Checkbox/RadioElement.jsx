import { addUserPositionId } from '../../redux/slices/usersSlice';
import { useDispatch } from 'react-redux';

const RadioElement = ({ identifier, position }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        className='radioInput'
        type='radio'
        id={`positionChoice1${identifier}`}
        name='position'
        value={identifier}
        onClick={() => {
          dispatch(addUserPositionId(identifier));
        }}
      ></input>
      <label className='radioLabel' htmlFor={`positionChoice1${identifier}`}>
        {position}
      </label>
    </div>
  );
};

export default RadioElement;

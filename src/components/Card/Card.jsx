import './Card.scss';
import { Tooltip, Whisper, Button } from 'rsuite';



const Card = ({ name, email, phone, position, photo }) => {
  return (
    <div className='wrapperCard'>
      <img className='userPic' src={photo} alt="user pic" />
      <div className='infoWrap'>
        <Whisper
          placement={'bottom'}
          followCursor
          speaker={<Tooltip arrow={false}>
            {name}
          </Tooltip>}>
          <p className='userName'>{name}</p>
        </Whisper>
      </div>

      <div className='infoWrap'>
        <Whisper
          placement={'bottom'}
          followCursor
          speaker={<Tooltip arrow={false}>
            {position}
          </Tooltip>}>
          <p className='userPosition'>{position} </p>
        </Whisper>
      </div>

      <div className='infoWrap'>
        <Whisper
          placement={'bottom'}
          followCursor
          speaker={<Tooltip arrow={false}>
            {email}
          </Tooltip>}>
          <p className='userMail'>{email}</p>
        </Whisper>
      </div>

      <div className='infoWrap'>
        <Whisper placement={'bottom'}
          followCursor
          speaker={<Tooltip arrow={false}>
            {phone}
          </Tooltip>}>
          <p className='userPhoneNum'>{phone}</p>
        </Whisper>
      </div>
    </div>
  )
}

export default Card
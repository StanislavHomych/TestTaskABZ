import './Registration.scss';
import { useState } from 'react'
import InputField from '../../components/InputField/InputField'
import PhotoUpload from '../../components/PhotoUpload/PhotoUpload'
import Button from '../../components/Btn/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import {
    addUserEmail,
    addUserName,
    addUserPhone,
    setUserRegisteredSuccess,
    setUserPostLoading
} from '../../redux/slices/usersSlice';
import { useSelector, useDispatch } from 'react-redux';
import RegistrationSuccessImg from "../../assets/success-image.svg";
import PreLoader from '../../components/PreLoader/PreLoader';


const Registration = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => { return state.usersSlice });
    const [userPic, setUserPic] = useState({});


    const adduserPic = (file) => {
        setUserPic(file);
    }

    let sendData = () => {
        dispatch(setUserPostLoading(true))
        const formData = new FormData()
        formData.append('email', user.userProfile.email);
        formData.append('name', user.userProfile.name);
        formData.append('phone', user.userProfile.phone);
        formData.append('photo', userPic);
        formData.append('position_id', user.userProfile.positionId);

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
            {
                method: 'POST',
                body: formData,
                headers: { 'Token': user.token }
            }).then((response) => {
                dispatch(setUserRegisteredSuccess(response.status));
                dispatch(setUserPostLoading(false))
            })

    }

    if (user.isUserRegisteredSucces == 201) {
        return (<div className='registrationSuccess'>
            <h1>User successfuly registered</h1>
            <img src={RegistrationSuccessImg}></img>
        </div>)
    } else {
        return (
            <div className='registrationWrapper' id="signup">
                <h1 className='registrationWrapper-heading'>
                    Working with POST request
                </h1>
                {
                    user.postUserLoading ? (<PreLoader />) : (
                        <div className='registrationWrapper-fields' id="mainForm">
                            <div className='registrationWrapper-fields_inputs'>
                                <InputField
                                    setValue={addUserName}
                                    inputValue={user.userProfile.name}
                                    typeOfInput="text"
                                    indentifier="name"
                                    showDefaultHint={false}
                                    regExpression="\w{2,60}">
                                    Your name
                                </InputField>
                                <InputField
                                    setValue={addUserEmail}
                                    inputValue={user.userProfile.email}
                                    typeOfInput="email"
                                    indentifier="email"
                                    showDefaultHint={false}
                                    regExpression="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?">
                                    Email
                                </InputField>
                                <InputField
                                    setValue={addUserPhone}
                                    inputValue={user.userProfile.phone}
                                    typeOfInput="tel"
                                    indentifier="phone"
                                    showDefaultHint={true}
                                    regExpression="^[\+]{0,1}380([0-9]{9})$">
                                    Phone
                                </InputField>
                            </div>
                            <div className='registrationWrapper-fields_inputs'>
                                <Checkbox></Checkbox>
                                <PhotoUpload adduserPic={adduserPic}></PhotoUpload>
                                <Button
                                    disableBtn={true}
                                    handleClick={sendData}
                                    identifier="mainForm">
                                    Sign up
                                </Button>
                            </div>
                        </div>
                    )
                }

            </div>
        )
    }
}

export default Registration
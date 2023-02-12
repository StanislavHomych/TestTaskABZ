import React, { useState } from 'react';
import './PhotoUpload.scss';
import { useDispatch } from 'react-redux';
import { validateFileField } from '../../redux/slices/usersSlice';

const PhotoUpload = ({ adduserPic }) => {

    const dispatch = useDispatch();
    const [image, setImage] = useState("")
    const [bigFileError, setBigFileError] = useState(false);
    const [smallImgError, setSmallImgError] = useState(false);

    function handleImage(e) {
        let img = new Image();
        img.src = window.URL.createObjectURL(e.target.files[0]);

        img.onload = () => {
            if (e.target.files[0].size > 5242880) {
                setImage("")
                setSmallImgError(false);
                setBigFileError(true);
            } else if (img.width < 70 || img.height < 70) {
                setImage("")
                setBigFileError(false);
                setSmallImgError(true);
            }
            else {
                setBigFileError(false);
                setSmallImgError(false);
                setImage(e.target.files[0])
                const formElement = e.target;
                const isValid = formElement.checkValidity();
                adduserPic(e.target.files[0])

                if (isValid) {
                    dispatch(validateFileField(true));
                }
            }
        }
    }

    return (
        <div>
            <div className='wrapper'>
                <label className='uploadBtn' htmlFor="file">Upload</label>
                <div className='fileNameField'>
                    {
                        image ? (<h1 className='loaded'>{image.name}</h1>) : !bigFileError && !smallImgError && (<p className='notLoaded'>Upload your photo</p>)
                    }
                    {
                        bigFileError ? (<h1 className='loadingError'>Image to large (max 5MB)</h1>) : null
                    }
                    {
                        smallImgError ? (<h1 className='loadingError'>Image to small</h1>) : null
                    }
                </div>
            </div>
            <input required className='profilePicField' type='file' name='file' id='file' accept="image/jpeg" onChange={(e) => { handleImage(e) }}></input>
        </div>
    )
}

export default PhotoUpload
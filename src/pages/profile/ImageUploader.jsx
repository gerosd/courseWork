import React, {useState, useEffect} from "react";
import defaultUser from '../../assets/images/default-user.png';

function ImageUploader() {
    const [imageSrc, setImageSrc] = useState(defaultUser);

    useEffect(() => {
        const savedPhoto = sessionStorage.getItem('image');
        if (savedPhoto) {
            setImageSrc(savedPhoto);
        }
    }, []);

    const updateImage = (url) => {
        setImageSrc(url);
    }

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (file.type.match(/image.*/)) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target.result;
                sessionStorage.setItem('image', result);
                updateImage(result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Пожалуйста, выберите изображение');
        }
    }

    return (
        <div className="img-input">
            <div className="img-container">
                {imageSrc && <img src={imageSrc} alt="profile-image"/>}
            </div>
            <input type="file" name="image" onChange={handleFileSelect} accept="image/*"/>
        </div>
    )
}

export default ImageUploader;
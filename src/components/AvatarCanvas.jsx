import { useState } from 'react';
import avatarImage from '../assets/Avatar-nobg.png'
import GeneratorButton from './common/GeneratorButton';
import TypeButton from './common/TypeButton';

const AvatarCanvas = () => {

    const [type, setType] = useState(null);

    const handleTypeChange = (urlType) => {
        setType(urlType);
    }

    const handleGenClick = (isGenCLicked) => {
        if (isGenCLicked) {
            setType(null);
        }
        
    }
    return (
            <div className="avatar-container">
                <div className='button-container'>
                    <TypeButton onUrlChange={handleTypeChange} text="Social"/>
                    <TypeButton onUrlChange={handleTypeChange} text="Educació"/>
                    <TypeButton onUrlChange={handleTypeChange} text="Cuinar"/>
                    <TypeButton onUrlChange={handleTypeChange} text="Caritat"/>
                    <TypeButton onUrlChange={handleTypeChange} text="Relaxació"/>
                    <TypeButton onUrlChange={handleTypeChange} text="Treball Intens"/>
                </div>
                <div className='cartoon-container'>
                    <img src={avatarImage} alt="" className='avatar-image'/>
                    <div className='trapecio-container'>
                        <svg className='svg' width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                        <path d="
                            M 10 0 
                            Q 0 0, 0 10 
                            L 15 135 
                            Q 20 150, 40 150 
                            L 160 150 
                            Q 180 150, 185 135 
                            L 200 10 
                            Q 200 0, 190 0 
                            Z" 
                            fill="gray"/>
                        </svg>
                        <h3 className='generator-text'>TROBA ALGUNA COSA A FER</h3>
                        <GeneratorButton onGenClicked={handleGenClick} type={type} className='generator-button'/>
                    </div>

                </div>
            </div>
    );
}
export default AvatarCanvas;
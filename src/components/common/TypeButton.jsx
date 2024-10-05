/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";


const TypeButton = ({text, onTypeChange}) => {
    const [typeButton, setTypeButton] = useState(null)
    
    const [urlType, setUrlType] = useState(null)
    useEffect(() => {
        setTypeButton(text)
        switch (text) {
            case "Social":
                setUrlType("social");
                break;
            case "Educació":
                setUrlType("education");
                break;
            case "Caritat":
                setUrlType("charity");
                break;
            case "Cuinar":
                setUrlType("cooking");
                break;
            case "Relaxació":
                setUrlType("relaxation");
                break;
            case "Treball Intens":
                setUrlType("busywork");
                break;
            default:
                break;
        }
    }, [text])
    const handleClick = () => {
        onTypeChange(urlType);
    }

    

    return(
        <button className="type-button" onClick={handleClick}>{typeButton}</button>
    );

}
export default TypeButton;
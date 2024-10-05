import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const GeneratorButton = ({className, type}) => {

    const [url, setUrl] = useState(null)

    useEffect(() => {
        if (!type) {
            setUrl("https://bored-api.appbrewery.com/random");
        }else{
            setUrl("https://bored-api.appbrewery.com/filter?type=education" + type);
        }
    }, [type])

    const handleClick = () => {
        console.log(url);
    }

    return(
        <button className={className} onClick={handleClick}>Generar</button>
    );

}
export default GeneratorButton;
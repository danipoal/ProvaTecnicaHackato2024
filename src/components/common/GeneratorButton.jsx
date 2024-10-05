import { useContext } from "react";
import { UrlContext } from "../../utils/UrlContext";

/* eslint-disable react/prop-types */
const GeneratorButton = ({className, type}) => {

    const {url, setUrl} = useContext(UrlContext)

    const handleClick = () => {
        if (!type) {
            setUrl("/api/random");
        }else{
            setUrl("/api/filter?type=" + type);
        }
        //console.log(url);
    }

    return(
        <button className={className} onClick={handleClick}>Generar</button>
    );

}
export default GeneratorButton;
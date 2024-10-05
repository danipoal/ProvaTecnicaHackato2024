import { useContext, useEffect} from "react";
import { UrlContext } from "../../utils/UrlContext";

/* eslint-disable react/prop-types */
const GeneratorButton = ({className, type, onGenClicked}) => {

    const {url, setUrl} = useContext(UrlContext);


    const handleClick = () => {
         if (!type/* || isType === false*/) {
            setUrl("/api/random");
        }else{
            setUrl("/api/filter?type=" + type);
        }
        onGenClicked(true);
    }

    useEffect(() => {
    }, [type])

    return(
        <button className={className} onClick={handleClick}>Generar</button>
    );

}
export default GeneratorButton;
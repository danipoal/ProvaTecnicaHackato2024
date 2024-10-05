import { UrlContext } from "../utils/UrlContext";
import { useContext, useEffect, useState } from "react";

const ActivityCanvas = () => {

    const { url } = useContext(UrlContext);
    const [activityText, setActivityText] = useState("Text a friend who did that...");

    useEffect(() => {
        if(url){
              console.log(url);
        const requestOptions = {
            method: "GET",
            redirect: "follow",
            headers : {'Content-Type': 'application/json',}
          };
          
          fetch(url, requestOptions)
            .then((response) => response.text())
            .then((result) =>{ 
                if (url === "/api/random") {
                    console.log(result);
                    setActivityText(result.activity);
                }else{
                    
                    console.log(result[1].activity);
                    setActivityText(result[1].activity);
                }
                

            })
            .catch((error) => {
                console.error(error);
                setActivityText(`Error: ${error.message || 'Error de servidor'}`);
            });
        }
      
    }, [url])



    return (
        <div className="activity-container">
            <h2>Activitat:</h2>
            <p>{activityText}</p>            
        </div>
    );
}
export default ActivityCanvas;
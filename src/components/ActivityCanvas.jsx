/* eslint-disable react-hooks/exhaustive-deps */
import { UrlContext } from "../utils/UrlContext";
import { useContext, useEffect, useState } from "react";

const ActivityCanvas = () => {
    const { url, setUrl } = useContext(UrlContext);
    const [activityText, setActivityText] = useState("Text a friend who did that...");
    const [contador, setContador] = useState(0);

    useEffect(() => {
        if (url) {
            console.log(url);

            const requestOptions = {
                method: "GET",
                redirect: "follow",
                headers: { 'Content-Type': 'application/json' }
            };

            fetch(url, requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Error ${response.status}: ${response.statusText}`);
                    }
                    return response.json(); 
                })
                .then((result) => {
                    if (url === "/api/random" || contador > 0) {
                        if (result && result.activity) {
                            setActivityText(result.activity);
                        }
                    } else {
                        if (result && result[0] && result[0].activity) {
                            const indice = Math.floor(Math.random() * result.length)
                            setActivityText(result[indice].activity);
                            setContador(1);
                        }
                    }
                })
                .catch((error) => {
                    console.error(error);
                    setActivityText(`Error: ${error.message}`);
                });
        }
    }, [url]);
    useEffect(()=> {
        setUrl("");
    }, [activityText])

    return (
        <div className="activity-container">
            <h2>Activitat:</h2>
            <p>{activityText}</p>            
        </div>
    );
};
export default ActivityCanvas;
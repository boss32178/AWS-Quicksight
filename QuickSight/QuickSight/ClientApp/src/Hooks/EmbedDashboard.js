import {useState, useEffect } from 'react';

export const useEmbedDashboard = (url, containerDiv) => {

    const[isLoading, setIsLoading] = useState(true);
    const[isError, setError] = useState(false);
  
    useEffect(() => {
        setIsLoading(true);
        if (containerDiv && url) {
        var QuickSightEmbedding = require("amazon-quicksight-embedding-sdk");
        let options = {
            url: url,
            container: containerDiv
        }
        let dashboard = QuickSightEmbedding.embedDashboard(options);
        dashboard.on('error', setError(true));
        dashboard.on('load', setIsLoading(false));
        };
    }, [url, containerDiv]);
    return[isLoading, isError];
};
import { useState, useEffect } from 'react';

export const getData = (url, dependencies) => {

    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(url, { headers: { "Content-Type": "application/json" } })
            .then(res => res.jason)
            .then(data => {
                console.log(data);
                setIsLoading(false);
                setFetchedData(data);
            })
            .catch(err => {
                console.log(err);
                setError(err);
                setIsLoading(false);
            })
    }, dependencies)
    return [isLoading, fetchedData, error];
};
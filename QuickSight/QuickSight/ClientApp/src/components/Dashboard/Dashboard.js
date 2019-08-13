import React, {useEffect, useState} from 'react';
import './Dashboard.css';
import { useEmbedDashboard } from '../../Hooks/EmbedDashboard.js';
import { useHttp } from '../../Hooks/http.js';

const Dashboard = props => {
    const [isLoading, setIsloading] = useState(true);
    const [containerDiv, setContainerDiv] = useState(null);
    const [isLoading1, url] = useHttp('api/GetDashboardURL', [])
    const [isLoading2, isError] = useEmbedDashboard(url, containerDiv);

    useEffect(() => {
        setContainerDiv(document.getElementById("Dashboard"))
        if (!isLoading1 && !isLoading2) {
            setIsloading(isLoading2);
        }
    return () => {
        console.log(" Cleaning Up..");
    }
    }, [])

    var content = (<div></div>)
    if (isError){
        content = (<div></div>)
    } else if (isLoading){
        content = (
            <div className="cssload-cssload-wrap2">
                <div className="cssload-wrap">
                    <div className="cssload-overlay"></div>

                    <div className="cssload-cogWheel cssload-one">
                        <div className="cssload-cog cssload-one"></div>
                        <div className="cssload-cog cssload-two"></div>
                        <div className="cssload-cog cssload-three"></div>
                        <div className="cssload-cog cssload-four"></div>
                        <div className="cssload-cog cssload-five"></div>
                        <div className="cssload-center"></div>
                    </div>

                    <div className="cssload-cogWheel cssload-two">
                        <div className="cssload-cog cssload-one"></div>
                        <div className="cssload-cog cssload-two"></div>
                        <div className="cssload-cog cssload-three"></div>
                        <div className="cssload-cog cssload-four"></div>
                        <div className="cssload-cog cssload-five"></div>
                        <div className="cssload-center"></div>
                    </div>
                </div>
            </div>
        )
    } else {
        content = (<div></div>)
    }

    return (
        <section id="Dashboard">
            {content}
        </section>
    );
}

export default React.memo(Dashboard);
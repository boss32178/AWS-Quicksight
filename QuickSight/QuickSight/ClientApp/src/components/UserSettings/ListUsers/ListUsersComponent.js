import React, { useEffect, useState } from 'react';
import { getData } from '../../../Hooks/GetData.js';


const ListUsersComponent = props => {
    const [isLoading, setIsloading] = useState(true);
    const [isError, setError] = useState(false);
    const [isLoading1, users, error1] = getData('api/GetQuickSightUsers', []);
    const [isLoading2, groups, error2] = getData('api/GetQuickSightGroups', [])

    useEffect(() => {
        if (!isLoading1 && !isLoading2) {
            setIsloading(false);
        }
        if (error1) {
            setError(error1);
        } else if (error2) {
            setError(error2);
        }
        return () => {
            console.log(" Cleaning Up..");
        }
    }, [])

    var usersContent, groupsContent;

    if (users) {
        usersContent = Object.keys(users).map((user, i) => (
                          <div key={i}>{user}</div>
                       ))
    }

    if (groups) {
        usersContent = Object.keys(groups).map((group, i) => (
            <div key={i}>{group}</div>
        ))
    }

    var content = (<div></div>)
    if (isError) {
        content = (<div></div>)
    } else if (isLoading) {
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
        content = (
            <div>
                {usersContent}
                {groupsContent}
            </div>
        )
    }

    return (
        <section id="UserList">
            {content}
        </section>
    );
}

export default React.memo(ListUsersComponent);
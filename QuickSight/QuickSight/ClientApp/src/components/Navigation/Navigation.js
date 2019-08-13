import React, {useState} from 'react';
import Dashboard from '../Dashboard/Dashboard.js';
import UserSettings from '../UserSettings/UserSettings.js';
import NavBar from './NavBar.js';
import './Navigation.css';

const Navigation = props => {
    const[ groupID, setGroupID] = useState("1");
    const[ userName, setUserName] = useState("Chris");
    const[ email, setEmail] = useState("chris.bosshardt@coxauto.com");
    const[ selectedMenu, setMenu] = useState("dashboard");

    const setGroupIDState = groupID  => {
        setGroupID(groupID);
    }
    const setUserNameState = userName => {
        setUserName(userName);
    }
    const setEmailState = email => {
        setEmail(email);
    }
    const setMenuState = menu => {
        setMenu(menu);
    }

    let body;
    switch(selectedMenu){
        case "userSetting":
            body = <UserSettings updateGroupId={setGroupIDState} updateEmailState={setEmailState} 
                                 updateName={setUserNameState} groupID={groupID} userName={userName}
                                 email={email}/>
            break;
        default:
            body = <Dashboard groupID={groupID} userName={userName} email={email}/>
            break;
    }

    return (
      <section id="Navigation">
            <NavBar selectedMenu={selectedMenu} updateMenu={setMenuState}/>
            {body}
      </section>
    );
}

export default React.memo(Navigation);
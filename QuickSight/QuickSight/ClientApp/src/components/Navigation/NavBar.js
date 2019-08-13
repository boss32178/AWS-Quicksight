import React from 'react';
import './Navigation.css';

const NavBar = props => {

  let dashboardClass, settingsCLass;

  const updateMenu = event => {
    let value = event.target.getAttribute('data-value');
    props.updateMenu(value);
  }

  switch(props.selectedMenu){
      case "userSetting":
        settingsCLass = "selected";
        break;
      default:
        dashboardClass = "selected";
        break;
  }

  return (
    <section id="NavBar">
          <ul>
            <li className={dashboardClass} data-value="dashboard" onClick={updateMenu}>Dashboard</li>
            <li className={settingsCLass} data-value="userSetting" onClick={updateMenu}>User Settings</li>
          </ul>
    </section>
  );
}

export default React.memo(NavBar);
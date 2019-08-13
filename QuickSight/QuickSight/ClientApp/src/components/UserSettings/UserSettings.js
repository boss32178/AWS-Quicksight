import React, { useState } from 'react';
import ListUsers from './ListUsers/ListUsersComponent.js';
import './UserSettings.css';
import NumericInput from '../../Hooks/NumericInput.js';

const UserSettings = props => {
    const[ name, setName] = useState(props.userName);
    const[ email, setEmail] = useState(props.email);
    const [groupID, setGroupIDValue] = useState(props.groupID);

    const handleNameChange = event => {
        setName(event.target.value);
    }

    const handleEmailChange = event => {
    setEmail(event.target.value);
  }

  const handleGroupIDChange = event => {
    setGroupIDValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateName(name);
    props.updateEmailState(email);
    props.updateGroupId(groupID);
  }

    return (
      <section id="UserSettings">
         <form>
           <label>
             Name:
             <input type="text" defaultValue={name} name="name" onChange={handleNameChange}/>
           </label>
           <label>
             Email:
             <input className="email" type="text" defaultValue={email} name="email" onChange={handleEmailChange}/>
           </label>
            <label>
                    number:
               <NumericInput isLoked={false} name={"numberTest"} value={"125"}/>
            </label>
           <label>
            Pick your Dashboard Group:
            <select value={groupID} onChange={handleGroupIDChange}>
              <option value="1">Grapefruit</option>
              <option value="2">Lime</option>
            </select>
          </label>
           <div className="button" type="submit" value="Submit" size="145" onClick={handleSubmit}>Save</div>
            </form>
            <ListUsers></ListUsers>
      </section>
    );
}

export default React.memo(UserSettings);
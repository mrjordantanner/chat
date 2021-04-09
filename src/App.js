import './css/App.css'
import React, { useState, useEffect } from 'react';
import Users from './components/Users';

export default function App() {

	const [users, setUsers] = useState([]);
	const [activeUser, setActiveUser] = useState(null);  

  return (
    <div>
      {/* <Navbar activeUser={activeUser} setActiveUser={setActiveUser}/>
      <Switch>
        <Route exact path='/albums/:id' render={(routerProps) => <AlbumDetails match={routerProps.match} />} />;
        <Route exact path='/post' render={() => <PostAlbum />} />
      </Switch> */}
    </div>
  );
}

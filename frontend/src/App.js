import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';

import Navigation from './components/Navigation';
import Home from './components/Home';
import SingleBathroom from './components/Bathroom/SingleBathroom';
import BathroomCreateModal from './components/BathroomCreateModal/BathroomCreateModal';

function App() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Home />
            {/* {sessionUser && <h1>Home Logged In</h1>}
            {!sessionUser && <h1>Home Not Logged In</h1>} */}
          </Route>
          <Route path={`/bathrooms/:bathroomId(\\d+)`}>
            <SingleBathroom />
          </Route>
          <Route path='/bathrooms/new'>
            <BathroomCreateModal />
          </Route>
          <Route>Page Not Found</Route>
        </Switch>
      )}
    </>
  );
}

export default App;

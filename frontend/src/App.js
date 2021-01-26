import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';

import bathroomOceanLng from './pictures/Bathroom-ocean-lng.png';

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* <div> */}
        <img
          className='home__background'
          src={bathroomOceanLng}
          alt='Ocean view from bathroom window'
        ></img>
      {/* </div> */}
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            {sessionUser && <h1>Home Logged In</h1>}
            {!sessionUser && <h1>Home Not Logged In</h1>}
          </Route>
          <Route>Page Not Found</Route>
        </Switch>
      )}
    </>
  );
}

export default App;

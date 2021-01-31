import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

// import store items
import * as sessionActions from './store/session';
import { getBathrooms } from './store/bathroom';
import { getUsers } from './store/user';
import { getBookings } from './store/booking';

import Navigation from './components/Navigation';
import Home from './components/Home';
import SingleBathroom from './components/Bathroom/SingleBathroom';
import BathroomCreateModal from './components/BathroomCreateModal/BathroomCreateModal';
import PageNotFound from './components/PageNotFound';

function App() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getBathrooms());
    dispatch(getUsers());
    dispatch(getBookings());
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/out-of-order'>
            <PageNotFound />
          </Route>
          <Route
            render={() => {
              return <Redirect to='/' />;
            }}
          />
        </Switch>
      )}
    </>
  );
}

export default App;

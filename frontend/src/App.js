import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';

import Navigation from './components/Navigation';
import Bathroom from './components/Bathroom';
import BathroomSmallViewContainer from './components/Bathroom/BathroomSmallViewContainer';
import BathroomCreateModal from './components/BathroomCreateModal/BathroomCreateModal'

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [isLoaded, setIsLoaded] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  document.addEventListener('scroll', () => {
    setShowDownArrow(window.scrollY < 100);
    console.log(showDownArrow);
  });

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <div>
              <img
                className='home__background'
                src='./pictures/Bathroom-ocean-lng.png'
                alt='Ocean view from bathroom window'
              ></img>
              {showDownArrow && (
                <span style={{ color: 'rgba(61, 92, 104, 0.8)' }}>
                  <i className='fas fa-chevron-down fa-3x'></i>
                </span>
              )}
            </div>
            <BathroomSmallViewContainer />
            {sessionUser && <h1>Home Logged In</h1>}
            {!sessionUser && <h1>Home Not Logged In</h1>}
          </Route>
          <Route path={`/bathrooms/:bathroomId(\\d+)`}>
            <Bathroom />
          </Route>
          <Route path='/bathrooms/new'>
            <BathroomCreateModal/>
          </Route>
          <Route>Page Not Found</Route>
        </Switch>
      )}
    </>
  );
}

export default App;

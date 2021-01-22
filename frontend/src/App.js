import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// import LoginFormPage from './components/LoginFormPage';
// import SignUpFormPage from './components/SignUpFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // edit below, pick one or the other. Top one for reagular login, bottom for modular
  // also make sure the same (top or bottom) is commented in in /components/navigation/index.js
    // if use modular, delete src/components/LoginFormPage & src/components/SignUpFormPage
    // if use non-modular, delete src/components/LoginFormModal, src/components/SignUpFormModal, & Modal src/context/Modal.js + .../Modal.css

  // return (
  //   <>
  //     <Navigation isLoaded={isLoaded} />
  //     {isLoaded && (
  //       <Switch>
  //         <Route path='/login'>
  //           <LoginFormPage />
  //         </Route>
  //         <Route path='/sign-up'>
  //           <SignUpFormPage />
  //         </Route>
  //       </Switch>
  //     )}
  //   </>
  // );

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            Home
          </Route>
          <Route>Page Not Found</Route>
        </Switch>
      )}
    </>
  );
}

export default App;

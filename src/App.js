import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import FilmDetail from './components/filmDetailPage';
import MainPage from './components/mainPage';

class App extends React.Component {
  render() {
    //console.log(this.props);

    return (
      <Switch>
        <Route path="/firstReactApp/series/:filmId" component={FilmDetail} />
        <Route path="/firstReactApp/films/:filmId" component={FilmDetail} />
        <Route
          path="/firstReactApp/collection/:filmId"
          component={FilmDetail}
        />
        <Route path="/firstReactApp/">
          <MainPage />
        </Route>
      </Switch>
    );
  }
}

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

import React from 'react'
import './App.css';
import {

  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import List from './pages/list/List';
import Login from './pages/login/Login';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MovieList from './pages/movieList/MovieList';
import Movie from './pages/movie/Movie';
import NewMovie from './pages/newMovie/NewMovie';
import NewList from './pages/newList/NewList';
import ListList from './pages/listList/ListList';


function App() {

  const isAuth = useSelector(state => state.auth.isAuth)
  const user = useSelector(state => state.auth.user)
  const history = useHistory()

 

  React.useEffect(() => {
    if (!user) {
      history.push('/login')
    } else {
      history.push('/')
    }
  }, [isAuth])
  return (
    <>
      <Switch>
        <Route path="/login">{isAuth ? <Redirect to="/" /> : <Login />}</Route>
        {isAuth &&
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/users'>
                <UserList />
              </Route>
              <Route path='/user/:id' >
                <User />
              </Route>
              <Route path='/newUser' >
                <NewUser />
              </Route>
              <Route path='/movies' >
                <MovieList />
              </Route>
              <Route path='/movie/:id' >
                <Movie />
              </Route>
              <Route path='/newMovie' >
                <NewMovie />
              </Route>
              <Route path='/newList' >
                <NewList />
              </Route>
              <Route path='/lists' >
                <ListList />
              </Route>
              <Route path='/list/:id' >
                <List />
              </Route>
            </div>
          </>
        }

      </Switch>
    </>
  );
}

export default App;

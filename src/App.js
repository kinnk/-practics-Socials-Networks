// Style
import style from "./App.module.scss";
// Library
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
// Components
import Header from "./components/header/header.jsx";
import Nav from "./components/nav/nav.jsx";
// pages
import Profile from "./pages/profile/profile";
import Dialogs from "./pages/dialogs/dialogs";
import News from './pages/news/news';
import Musics from './pages/musics/musics';
import Settings from './pages/settings/settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <header className={style.header}>
          <Header />
        </header>
        <div className={style.app__container}>
          <nav className={style.nav}>
            <Nav />
          </nav>
          <main className={style.mc}>
            <Routes>
              <Route path = '/profile' element={<Profile userProfile = {props.userProfile} posts = {props.posts}/>}/>
              <Route path = '/dialogs/*' element={<Dialogs dialogs  = {props.dialogs} messages = {props.messages}/>}/>
              <Route path = '/' element={<News />}/>
              <Route path = '/musics' element={<Musics />} />
              <Route path = '/settings' element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import './styles/reset.scss';
import './styles/style.scss';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import Homelayout from 'pages/MainPage/components/Homelayout';

function App() {

  return (
    <>
      <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<Homelayout />} />
          {/* <Route path='catalog' element={<Catalog />} />
          <Route path='about' element={<About />} />
          <Route path='delivery' element={<Delivery />} />
          <Route path='search' element={<Search />} /> */}
        </Route>
      </Routes>
      </HashRouter>
    </>
  )
}

export default App;

import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/pages/Home/Home'
import AllGames from './components/pages/AllGames/AllGames'
import RecentlyAdded from './components/pages/RecentlyAdded/RecentlyAdded'
import Details from './components/pages/Details/Details'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/allgames' element={<AllGames/>}/>
      <Route path='/recentlyadded' element={<RecentlyAdded/>}/>
      <Route path='/game/:id' element={<Details/>}/>
    </Routes>

    </>
  )
}

export default App

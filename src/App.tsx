import './App.css'
import HomePage from './Components/HomePage/Index'
import DashBoardPage from './Components/DashBoardPage/Index';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ErrorFallback from './Components/ErrorBoundaries/Error';

function App() {
return (
  
     <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage/>}></Route>
        <Route path='/dashboard' element = {<DashBoardPage/>}></Route>
        <Route path='/dashboard/:ProjectName' element = {<DashBoardPage/>}></Route>
        <Route path='*' element={<ErrorFallback/>}></Route>
       </Routes>   
    </BrowserRouter>
   
  )
}

export default App

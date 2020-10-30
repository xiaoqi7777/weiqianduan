import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter basename='/react'>
      <Link to='/'>首页</Link>|
      <Link to='/about'>关于首页</Link>
      <Route path='/' exact render={()=>(<div>12321321</div>)}></Route>
      <Route path='/about' exact render={()=>(<div>about</div>)}></Route>

    </BrowserRouter>
  );
}

export default App;

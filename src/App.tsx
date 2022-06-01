
import './App.css';
import LoginPage from './pages/LoginPage';
import RecoverPassword from './pages/RecoverPassword';
import RegisterPage from './pages/RegisterPage';
import SplashScreen from './pages/SplashScreen';
import { AppRoutes } from './routes/AppRoutes';


function App() {
  return (
    <div className="App">
     {/* <RecoverPassword/> */}
<AppRoutes/>
    </div>
  );
}

export default App;

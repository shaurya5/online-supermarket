import LoginCard from './components/login-cards/LoginCard';
import NavigationBar from './components/navs/NavigationBar'
import AllRoutes from './AllRoutes'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <ToastContainer/>
    </div>
  );
}

export default App;

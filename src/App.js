import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AddList from "./pages/MainPage/index"
import PublicRoute from "./components/common/PublicRoute/component";
function App() {
  return (
    <Router>
          
                <PublicRoute exact path={`/`} component={AddList} />
        </Router>
  );
}

export default App;

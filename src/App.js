
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PublicRouter from './Pages/Public/PublicRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/*' element={<PublicRouter/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

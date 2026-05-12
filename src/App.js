
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PublicRouter from './Pages/Public/PublicRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicRouter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

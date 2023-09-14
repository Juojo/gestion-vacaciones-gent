import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './html/Home'
import Login from './html/Login';

function App() {
  return (
    <>
      <Router>      
        <Routes>
          <Route path='/'>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              {/* <Route path="/login" component={Login} /> */}
            </ Route>
            <Route path='/*' element={<p>404</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import ReactApp from './ReactApp';

// class App extends Component {
//   state = {
//       data: null
//     };
  
//     componentDidMount() {
//       this.callBackendAPI()
//         .then(res => this.setState({ data: res.express }))
//         .catch(err => console.log(err));
//     }
//       // fetching the GET route from the Express server which matches the GET route from server.js
//     callBackendAPI = async () => {
//       const response = await fetch('/express_backend');
//       const body = await response.json();
  
//       if (response.status !== 200) {
//         throw Error(body.message) 
//       }
//       return body;
//     };
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactApp />
  </React.StrictMode>
);
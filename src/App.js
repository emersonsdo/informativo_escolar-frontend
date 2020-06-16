import React from 'react';
import Header from './components/Header';
import Main from './pages/main';
import Routes from './components/routes';
import './styles.css'

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

// function App() {
//   return (
//     <div className="App">
//       <h1>CEEB Informativo</h1>
//     </div>
//   );
// }

export default App;

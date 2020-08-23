import React from 'react';
import Header from './components/Header';
import Routes from './components/routes';
import Footer from './components/Footer';
import './styles.css'

const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <Footer />
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

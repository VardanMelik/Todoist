import './App.css';
import Content from './components/layout/Content';
import Header from './components/layout/Header';


function App() {
  return (
    // BEM
    <div className="app">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;

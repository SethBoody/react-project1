import './App.css';
import Form from './components/form/form';
import Header from './components/header/header';
import SideBar from './components/sideBar/sideBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <SideBar/>
        <Form/>
      </div>
    </div>
  );
}

export default App;

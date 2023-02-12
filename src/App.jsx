import './App.scss'
import 'rsuite/dist/rsuite.min.css';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Users from './pages/Users/Users';
import Registration from './pages/Registration/Registration';
function App() {

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Users></Users>
      <Registration></Registration>
    </div>
  )
}

export default App

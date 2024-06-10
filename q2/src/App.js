import SignUp from './component/Signup';
import './App.css';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!


    </h1>
    <SignUp></SignUp>
    <Login className="mt-30"></Login>

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import PropsExample from './components/PropsExample1'
import PropsExample2 from './components/PropsExample2';

function App() {
  return (
    <div className="App">
      <PropsExample imgurl="a.jpg" name="Chandan" mobile="9831125111" email="a@gmail.com" />
      <br /><br />
      <PropsExample imgurl="b.jpg" name="Sanjay" mobile="9658743210" email="a@yahoo.com" />
      <br /><br />
      <PropsExample2 info="LOGIN FORM">
        <form>
          <input type="email" placeholder="Email" />
          <br /><br />
          <input type="password" placeholder="Password" />
          <br /><br />
          <input type="submit" value="Login" />
        </form>
      </PropsExample2>

    </div>
  );
}
export default App;

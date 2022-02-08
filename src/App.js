import './App.css';
import {useState, useEffect} from 'react'
import Axios from 'axios'
import UserList from './Components/UserList';

function App() {

  // const [userList, setUserList] = useState()
  

  const getUserList=() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response =>  {
        console.log(response.data.email)
      }).catch(err =>{
        console.log(err)
      })
  }

  // useEffect(() => {
  //   getUserList()
  // }, []);
  

  return (
    <div className="App">
      <UserList  />
      <button type='button' onClick={getUserList}></button>
    </div>
  );
}

export default App;

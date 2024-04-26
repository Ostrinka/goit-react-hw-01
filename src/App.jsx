import Profile from './components/Profile/Profile';
import userData from './userData.json';

export default function App() { 
  return (
    <>
    <Profile userData = {userData}/>
    </>  
  )
}

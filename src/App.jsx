import Profile from './components/Profile/Profile';
import userData from './userData.json';

import FriendList from './components/FriendList/FriendList';
import friends from './friends.json'

export default function App() { 
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends}/>
    </>  
  )
}

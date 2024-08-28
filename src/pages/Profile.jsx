import { useEffect, useState } from 'react'
// firebase/firestore func
import { getAuth, onAuthStateChanged } from 'firebase/auth'


const Profile = () => {
  const auth = getAuth()

  // user details
  const [userData, setUserData] = useState({
    userID: '',
    userName: '',
  })

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user);
      if (user) {
        setUserData({
          userID: user.uid,
          userName: user.displayName,
        })
      }
    })
  }, [])

  // console.log(userData);
  


  return (
    <div>Profile</div>
  )
}

export default Profile
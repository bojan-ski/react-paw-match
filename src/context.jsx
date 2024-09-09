import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// firebase/firestore funcs
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"


const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const navigate = useNavigate()

    // user profile details
    const auth = getAuth()

    const [userProfileDetails, setUserProfileDetails] = useState({
        userID: '',
        userName: '',
    })

    useEffect(() => {
        console.log('context - user profile details');
        

        onAuthStateChanged(auth, (user) => {
            // console.log(user);
            if (user) {
                setUserProfileDetails({
                    userID: user.uid,
                    userName: user.displayName,
                })
            }
        })
    }, [])

    // log out user
    const logOutUser = async () => {
        if (window.confirm('Da li ste sigurni da želite da se odjavite')) {
            try {
                await signOut(auth)

                setUserProfileDetails({
                    userID: '',
                    userName: '',
                })

                // success message
                console.log('you have successfully logged out');

                // after the user has logged out, the user is redirected to the Dashboard page
                navigate('/')
            } catch (error) {
                //error message
                // console.log('Greška prilikom odjave, molimo Vas probajte ponovo')
                console.error(error);
            }
        }
    }

    return <AppContext.Provider value={{
        userProfileDetails, // Onboarding, Profile, SelectedPetListing, SendMessageForumForm, Forum
        logOutUser, // Onboarding
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)
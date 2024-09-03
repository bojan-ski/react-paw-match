import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import SignUp from "./pages/SignUp.jsx"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"
import SignIn from "./pages/SignIn.jsx"
import ForgotPassword from "./pages/ForgotPassword.jsx"
import PetListings from "./pages/PetListings.jsx"
import SelectedPetListing from "./pages/SelectedPetListing.jsx"
import Profile from "./pages/Profile.jsx"
import Blog from "./pages/Blog.jsx"
import Contact from "./pages/Contact.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

// LOADERS
import { loader as selectedPetListingLoader } from "./pages/SelectedPetListing.jsx"


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/registracija',
        element: <SignUp />,
      },
      {
        path: '/pravila-koriscenja',
        element: <TermsAndConditions />,
      },
      {
        path: '/pravila-privatnosti',
        element: <PrivacyPolicy />,
      },
      {
        path: '/prijava',
        element: <SignIn />,
      },
      {
        path: '/nova-sifra',
        element: <ForgotPassword />,
      },
      {
        path: '/oglasi',
        element: <PetListings />,
      },
      {
        path: '/oglasi/:id',
        element: <SelectedPetListing />,
        loader: selectedPetListingLoader
      },
      {
        path: '/nalog',
        element: <Profile />,
      },
      {
        path: '/nalog/:id',
        element: <SelectedPetListing />,
        loader: selectedPetListingLoader
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/kontakt',
        element: <Contact />
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
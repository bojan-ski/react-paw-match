import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import SignUp from "./pages/SignUp.jsx"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"
import SignIn from "./pages/SignIn.jsx"
import ForgotPassword from "./pages/ForgotPassword.jsx"
import SelectedPetListing from "./pages/SelectedPetListing.jsx"
import Profile from "./pages/Profile.jsx"
import Blog from "./pages/Blog.jsx"
import Contact from "./pages/Contact.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

// LOADERS
import { loader as selectedPetListingLoader } from "./pages/SelectedPetListing.jsx"
import { loader as userPostedListingsLoader } from "./pages/Profile.jsx"


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
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: '/terms-and-conditions',
        element: <TermsAndConditions />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/nalog',
        element: <Profile />,
        loader: userPostedListingsLoader
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
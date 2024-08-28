import { Outlet, useNavigation } from "react-router-dom"
// context
import { AppProvider } from "../context.jsx"
// pages
import Loading from "./Loading"
// components
import Header from "../components/appLayout/header/Header"
import Footer from "../components/appLayout/footer/Footer"


const AppLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'

    return (
        <AppProvider>
            <>
                <Header />

                <main className="my-5">
                    {isPageLoading ? <Loading /> : <Outlet />}
                </main>

                <Footer />
            </>
        </AppProvider>
    )
}

export default AppLayout
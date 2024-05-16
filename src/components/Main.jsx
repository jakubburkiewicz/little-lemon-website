import { Route, Routes } from "react-router"
import HomePage from "../pages/HomePage"
import ReservationsPage from "../pages/ReservationsPage"

const Main = props => (
    <main { ...props }>
        <Routes>
            <Route
                path="/"
                element={ <HomePage /> }
            />

            <Route
                path="/reservations"
                element={ <ReservationsPage /> }
            />
        </Routes>
    </main>
)

export default Main
import { Route, Routes } from "react-router"
import HomePage from "../pages/HomePage"
import ReservationsPage from "../pages/ReservationsPage"
import { useState } from "react"

const Main = props => {
    const [ availableTimes ] = useState( [
        '17:00', '18:00', '19:00', '20:00', '21:00'
    ] )

    return (
        <main { ...props }>
            <Routes>
                <Route
                    path="/"
                    element={ <HomePage /> }
                />

                <Route
                    path="/reservations"
                    element={
                        <ReservationsPage
                            availableTimes={ availableTimes }
                        />
                    }
                />
            </Routes>
        </main>
    )
}

export default Main
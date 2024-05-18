import { Route, Routes } from "react-router"
import HomePage from "../pages/HomePage"
import ReservationsPage from "../pages/ReservationsPage"
import { useReducer } from "react"

const Main = props => {
    const initializeTimes = () => {
        return [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00'
        ]
    }

    const fetchTimes = () => {
        // TODO: Fetch available times from the server
        return [
            '19:00',
            '20:00',
            '21:00'
        ]
    }

    const updateTimes = ( times, action ) => {
        switch ( action.type ) {
            case 'update':
                return fetchTimes()
            default:
                return times
        }
    }

    const [ availableTimes, availableTimesDispatch ] = useReducer( updateTimes, [], initializeTimes )

    const handleDateChange = event => {
        availableTimesDispatch( {
            date: event.target.value,
            type: 'update'
        } )
    }

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
                            onDateChange={ handleDateChange }
                        />
                    }
                />
            </Routes>
        </main>
    )
}

export default Main
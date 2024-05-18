import { Route, Routes } from "react-router"
import HomePage from "../pages/HomePage"
import ReservationsPage from "../pages/ReservationsPage"
import { useEffect, useReducer, useState } from "react"
import { fetchAPI } from "../utils/fakeAPI"

export const initializeTimes = () => {
    return [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00'
    ]
}

export const updateTimes = ( times, action ) => {
    switch ( action.type ) {
        case 'update':
            return action.payload
        default:
            return times
    }
}

const Main = props => {
    const [ date, setDate ] = useState( new Date() )
    const [ availableTimes, availableTimesDispatch ] = useReducer( updateTimes, [], initializeTimes )

    const handleDateChange = event => {
        setDate( new Date( event.target.value ) )
    }

    useEffect( () => {
        fetchAPI( date )
            .then( times => {
                availableTimesDispatch( {
                    type: 'update',
                    payload: times
                } )
            } )
    }, [ date ] )

    return (
        <main
            aria-label="Main content"
            { ...props }
        >
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
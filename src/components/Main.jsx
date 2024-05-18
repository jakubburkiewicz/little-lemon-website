import { Route, Routes, useNavigate } from "react-router"
import HomePage from "../pages/HomePage"
import ReservationsPage from "../pages/ReservationsPage"
import ConfirmedReservationPage from "../pages/ConfirmedReservationPage"
import { useEffect, useReducer, useState } from "react"
import { fetchAPI, submitAPI } from "../utils/fakeAPI"

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
    const [ reservation, setReservation ] = useState( {} )
    const [ availableTimes, availableTimesDispatch ] = useReducer( updateTimes, [], initializeTimes )
    const navigate = useNavigate()

    const handleDateChange = event => {
        setDate( new Date( event.target.value ) )
    }

    const handleReservationFormSubmit = reservation => {
        submitAPI( reservation )
            .then( () => {
                setReservation( reservation )

                navigate( '/reservations/confirmed' )
            } )
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
                            onFormSubmit={ handleReservationFormSubmit }
                        />
                    }
                />

                <Route
                    path="/reservations/confirmed"
                    element={
                        <ConfirmedReservationPage
                            reservation={ reservation }
                        />
                    }
                />
            </Routes>
        </main>
    )
}

export default Main
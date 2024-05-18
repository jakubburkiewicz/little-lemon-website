import { useState } from "react"

const ReservationsForm = ( {
    availableTimes,
    onDateChange
} ) => {
    const [ date, setDate ] = useState( new Date().toISOString().split('T')[0] )
    const [ time, setTime ] = useState( '17:00' )
    const [ guests, setGuests ] = useState( 1 )
    const [ occasion, setOccasion ] = useState( 'Birthday' )

    const handleSubmit = event => {
        event.preventDefault()
        console.log("Form submitted")
    }

    const handleDateChange = event => {
        setDate( event.target.value )

        onDateChange( event )
    }

    const handleTimeChange = event => {
        setTime( event.target.value )
    }

    const handleGuestsChange = event => {
        setGuests( event.target.value )
    }

    const handleOccasionChange = event => {
        setOccasion( event.target.value )
    }

    return (
        <form
            aria-label="Reservations form"
            className="reservationsForm"
            onSubmit={ handleSubmit }
        >
            <label className="formField">
                <span
                    id="dateLabel"
                    className="formField__label"
                >Choose date</span>

                <input
                    aria-labelledby="dateLabel"
                    className="formField__input"
                    type="date"
                    value={ date }
                    onChange={ handleDateChange }
                />
            </label>

            <label className="formField">
                <span
                    id="timeLabel"
                    className="formField__label"
                >Choose time</span>

                <select
                    aria-labelledby="timeLabel"
                    className="formField__input"
                    value={ time }
                    onChange={ handleTimeChange }
                >
                    { availableTimes.map( time => (
                        <option key={ time }>{ time }</option>
                    ) ) }
                </select>
            </label>

            <label className="formField">
                <span
                    id="guestsLabel"
                    className="formField__label"
                >Number of guests</span>

                <input
                    aria-labelledby="guestsLabel"
                    className="formField__input"
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    value={ guests }
                    onChange={ handleGuestsChange }
                />
            </label>

            <label className="formField">
                <span
                    id="occasionLabel"
                    className="formField__label"
                >Occasion</span>

                <select
                    aria-labelledby="occasionLabel"
                    className="formField__input"
                    value={ occasion }
                    onChange={ handleOccasionChange }
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </label>

            <button
                aria-label="Make Your reservation"
                className="button button--primary"
                type="submit"
            >
                Make Your reservation
            </button>
        </form>
    )
}

export default ReservationsForm
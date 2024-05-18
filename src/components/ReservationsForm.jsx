import { useState } from "react"

const availableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
]

const ReservationsForm = () => {
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
            className="reservationsForm"
            onSubmit={ handleSubmit }
        >
            <label className="formField">
                <span className="formField__label">Choose date</span>

                <input
                    className="formField__input"
                    type="date"
                    value={ date }
                    onChange={ handleDateChange }
                />
            </label>

            <label className="formField">
                <span className="formField__label">Choose time</span>

                <select
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
                <span className="formField__label">Number of guests</span>

                <input
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
                <span className="formField__label">Occasion</span>

                <select
                    className="formField__input"
                    value={ occasion }
                    onChange={ handleOccasionChange }
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </label>

            <button
                className="button button--primary"
                type="submit"
            >
                Make Your reservation
            </button>
        </form>
    )
}

export default ReservationsForm
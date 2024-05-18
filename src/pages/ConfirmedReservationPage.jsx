const ConfirmedReservationPage = ( {
    reservation
} ) => {
    return (
        <article
            aria-label="Confirmed Reservation"
            className="confirmedReservation"
        >
            <h2>Confirmed Reservation</h2>

            <p>
                Your reservation for { reservation.date } at { reservation.time } has been confirmed.
            </p>
        </article>
    )
}

export default ConfirmedReservationPage
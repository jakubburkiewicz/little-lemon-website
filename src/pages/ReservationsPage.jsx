import ReservationsForm from "../components/ReservationsForm"

const ReservationsPage = ( {
    availableTimes,
    onDateChange
} ) => (
    <>
        <ReservationsForm
            availableTimes={ availableTimes }
            onDateChange={ onDateChange }
        />
    </>
)

export default ReservationsPage
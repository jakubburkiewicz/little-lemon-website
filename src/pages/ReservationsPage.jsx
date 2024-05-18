import ReservationsForm from "../components/ReservationsForm"

const ReservationsPage = ( {
    availableTimes,
    onDateChange,
    onFormSubmit
} ) => (
    <>
        <ReservationsForm
            availableTimes={ availableTimes }
            onDateChange={ onDateChange }
            onFormSubmit={ onFormSubmit }
        />
    </>
)

export default ReservationsPage
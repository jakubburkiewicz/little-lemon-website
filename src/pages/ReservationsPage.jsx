import ReservationsForm from "../components/ReservationsForm"

const ReservationsPage = ( {
    availableTimes
} ) => (
    <>
        <ReservationsForm
            availableTimes={ availableTimes }
        />
    </>
)

export default ReservationsPage
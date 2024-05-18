import { render, screen } from '@testing-library/react';
import ReservationsForm from './ReservationsForm';

const availableTimes = [ '17:00', '18:00', '19:00' ];
const mockOnDateChange = jest.fn();

describe( 'ReservationsForm', () => {
  test('renders the label for the date input field', () => {
    render(
        <ReservationsForm
            availableTimes={ availableTimes }
            onDateChange={ mockOnDateChange }
        />
    );

    expect( screen.getByLabelText('Choose date') ).toBeInTheDocument();
  } );
} );

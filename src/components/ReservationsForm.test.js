import { render, screen, fireEvent } from '@testing-library/react';
import ReservationsForm from './ReservationsForm';

const availableTimes = [ '17:00', '18:00', '19:00' ];
const mockOnDateChange = jest.fn();
const mockOnFormSubmit = jest.fn(event => event.preventDefault());

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

  test( 'validates the form', () => {
    render(
      <ReservationsForm
        availableTimes={ availableTimes }
        onDateChange={ mockOnDateChange }
        onFormSubmit={ mockOnFormSubmit }
      />
    );

    const dateInput = screen.getByLabelText( 'Choose date' );
    const timeInput = screen.getByLabelText( 'Choose time' );
    const guestsInput = screen.getByLabelText( 'Number of guests' );
    const occasionInput = screen.getByLabelText( 'Occasion' );
    const submitButton = screen.getByRole( 'button', { name: 'Make Your reservation' } );

    // Setting initial valid values
    fireEvent.change( dateInput, { target: { value: '2022-12-31' } } );
    fireEvent.change( timeInput, { target: { value: '17:00' } } );
    fireEvent.change( occasionInput, { target: { value: 'Birthday' } } );

    // Test invalid guests value (0)
    fireEvent.change( guestsInput, { target: { value: 0 } } );
    fireEvent.click( submitButton );
    expect( mockOnFormSubmit ).not.toHaveBeenCalled();

    // Test valid guests value (1)
    fireEvent.change( guestsInput, { target: { value: 1 } } );
    fireEvent.click( submitButton );
    expect( mockOnFormSubmit ).toHaveBeenCalledTimes( 1 );

    // Reset mock function
    mockOnFormSubmit.mockReset();

    // Test invalid guests value (11)
    fireEvent.change( guestsInput, { target: { value: 11 } } );
    fireEvent.click( submitButton );
    expect( mockOnFormSubmit ).not.toHaveBeenCalled();

    // Test valid guests value (10)
    fireEvent.change( guestsInput, { target: { value: 10 } } );
    fireEvent.click( submitButton );
    expect( mockOnFormSubmit ).toHaveBeenCalledTimes( 1 );
  });
} );

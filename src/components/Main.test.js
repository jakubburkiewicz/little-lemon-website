import { initializeTimes, updateTimes } from './Main';

describe( 'Main component', () => {
    test( 'initializeTimes returns the correct initial times', () => {
        expect( initializeTimes() ).toEqual( [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00'
        ] );
    } );

    test( 'updateTimes returns the correct times after an update', () => {
        expect( updateTimes( [], { type: 'update' } ) ).toEqual( [
            '19:00',
            '20:00',
            '21:00'
        ] );
    } );
} );

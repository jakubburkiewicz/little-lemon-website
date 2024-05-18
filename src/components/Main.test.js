import { initializeTimes, updateTimes } from './Main';

describe( 'Main component', () => {
    test( 'initializeTimes returns the correct initial times', () => {
        expect( initializeTimes() ).not.toEqual( [] );
    } );

    test( 'updateTimes returns the correct times after an update', () => {
        expect( updateTimes( [], { type: 'update', payload: [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00'
        ] } ) ).toEqual( [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00'
        ] );
    } );
} );

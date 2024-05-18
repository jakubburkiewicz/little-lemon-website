export const fetchAPI = async date => {
    let times = Array.from( { length: 5 }, () => {
        const hour = Math.floor( Math.random() * 12 ) + 10
        const minutes = Math.random() < 0.5 ? '00' : '30'

        return `${ hour }:${ minutes }`
    } ).sort()

    times = times.filter( ( time, index, array ) => array.indexOf( time ) === index )

    return new Promise( resolve => {
        setTimeout( () => {
            resolve( times )
        }, 1000 )
    } )
}

export const submitAPI = async reservation => {
    return new Promise( resolve => {
        setTimeout( () => {
            resolve( true )
        }, 1000 )
    } )
}

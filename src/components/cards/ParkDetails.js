import React from 'react'
import Map from './Map'

export default function ParkDetails({park}) {

    const openLink = () => {
        window.open(park.url, "_blank")
    }

    return (
        <div>
            <section className='details-top'>
                <Map park={park} />
                <div>
                    <p>{park.description}</p>
                    <h4>Climate:</h4>
                    <p>{park.weatherInfo}</p>
                    <div className='buttons'>
                        <button onClick={openLink}>➤</button>
                        <button>Back</button>
                        <button>♡</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

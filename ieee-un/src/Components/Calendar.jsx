import React from 'react'

import '../Styles/Calendar.sass'

const Calendar  = ( props ) => {
    return (
        <>
            <iframe id="calendar" className='event-container' src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FBogota&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=Y19hYWU4YzQxYTBiZjY2OGRiYTVjMzg2ZTZmNjEwNWVlZDU2OTIwZDI3MWEzMWU3NDUzYTMyYjFhMTY1YThlMTNkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19mNzY1NWQ3MDdlOTFkN2M3MDJiZjU5YzU4ODc1MmUyMDY2NmFiNTJhYzQ3OWJkNGFmN2I2OGJlNGFlNjBjOWY3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23009688" width={800} height={600} frameborder="0" scrolling="no"></iframe>

            
        </>
    )
}

export default Calendar
import React from 'react'


DataTime.defaultProps = {
    options: {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    },
};

function DataTime({
    date, 
    options: { weekday, year, month, day, hour, minute, second },

}) {

    var currentLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
    const getDate = () => 
        new Intl.DateTimeFormat(currentLocale, {
            year,
            month,
            weekday,
            day,
            hour,
            minute,
            second,
        }).format(Date.parse(date));



    return (
        <>
            {getDate()}
        </>
    )
}

export default DataTime

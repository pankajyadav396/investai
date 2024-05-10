import React from 'react'

const Primarybutton = (props) => {
    return (
        <>
            <button className='btn-common text-white fs-sm fw-semibold ff-inter text-nowrap border-0'>{props.text}</button>
        </>
    )
}

export default Primarybutton
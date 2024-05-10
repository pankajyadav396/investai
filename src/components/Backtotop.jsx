import React, { useEffect, useState } from 'react'

const Backtotop = () => {
    const [Visible, setVisible] = useState(false)
    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > 200) {
                setVisible(true)
            }
            else (setVisible(false))
        };
        window.addEventListener('scroll', handlescroll);
        return () => {
            window.removeEventListener('scroll', handlescroll);
        };

    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <button
                className={`${Visible ? 'opacity-100' : 'opacity-0'
                    } position-fixed btn-back border-0 p-2 bg-gradient`}
                onClick={scrollToTop}
            >
                <span>
                    <svg width="27" height="27" fill="#ffff" viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"></path><path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path></svg>
                </span>
            </button>
        </>
    )
}

export default Backtotop
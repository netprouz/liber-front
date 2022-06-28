import React from 'react';
import useCountDown from 'react-countdown-hook';
import styled from 'styled-components';

const initialTime = 59 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000

const CoutDown = () => {
    const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime, interval);
    // start the timer during the first render
    React.useEffect(() => {
        start();
    }, []);

    return (
        <>
            <Timer>00 : {timeLeft > 9000 ? timeLeft / 1000 : "0" + timeLeft / 1000}</Timer>
        </>
    );
}
export default CoutDown

const Timer = styled.p`
font-weight: 600;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.15px;
color: #242424;
margin: 0;
`
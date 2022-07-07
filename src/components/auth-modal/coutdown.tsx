import React from 'react';
import useCountDown from 'react-countdown-hook';
import styled from 'styled-components';

const Timer = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #242424;
  margin: 0;
`;
const initialTime = 59 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000
const defaultStartNumber = '00 : ';
const CoutDown = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(
    initialTime,
    interval
  );
  // start the timer during the first render
  React.useEffect(() => {
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Timer>
      {defaultStartNumber}
      {/* {timeLeft > 9000 ? timeLeft / 1000 : '0' + timeLeft / 1000} */}
    </Timer>
  );
};
export default CoutDown;

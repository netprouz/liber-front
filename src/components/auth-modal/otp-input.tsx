import React from 'react'
import OtpInput, { OtpInputProps } from 'react-otp-input';

const CustomOtpInput: React.FC<OtpInputProps> = (props) => {
  return (
    <OtpInput
      containerStyle={{ padding: '1rem' }}
      inputStyle={{
        border: 'none',
        outline: 'none',
        fontSize: '2rem',
        borderBottom: '1px solid #000',
        //   backgroundColor: '#F4F4F4',
        margin: "0.2rem"
      }}
      {...props}
    />
  )
};

export default CustomOtpInput
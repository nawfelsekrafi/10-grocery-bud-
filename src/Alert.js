import React, { useEffect } from 'react'

const Alert = ({msg, type}) => {
  return (
    
      <span className={`alert ${type}`}>
        {msg}
      </span>
  
  );
}

export default Alert

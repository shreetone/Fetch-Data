import React, { useEffect } from 'react';

function Counter() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("tick");
    }, 1000);
    
  
    return () => {
      clearInterval(timer);
      console.log("cleanup");
    };
  }, []); 
  return <div>Counter Component</div>; 
}

export default Counter;
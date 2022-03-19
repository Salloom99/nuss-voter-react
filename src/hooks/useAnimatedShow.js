import { useState, useEffect } from 'react';

function useAnimatedShow(poke, hiddenClass, duration) {
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
      setTimeout(() => setHidden(false), 500);
      setTimeout(() => setHidden(true), duration - 500);
      setTimeout(poke, duration);
    }, [poke, duration]);
  
    return hidden ? ` ${hiddenClass}` : "";
  }
  
export default useAnimatedShow;
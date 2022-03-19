import { useState, useEffect } from "react";

function useAnimatedHideShow(hiddenClass, deleting) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => setHidden(false), 100);
  }, []);

  const handleDelete = () => {
    setHidden(true);
    setTimeout(() => deleting(), 500);
  };

  const Class = hidden ? ` ${hiddenClass}` : "";

  return [Class, handleDelete];
}

export default useAnimatedHideShow;

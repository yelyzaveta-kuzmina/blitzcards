import { useRef, useCallback, useEffect, useState } from 'react';
import { clamp } from 'lodash-es';

const useTimer = ({
  interval = 1000,
  initialValue = 0,
  incrementBy = 1,
  min = 0,
  max = Infinity
} = {}) => {
  const [value, setValue] = useState(initialValue);
  const timerIdRef = useRef(null);

  const startTimer = useCallback(() => {
    setValue(initialValue);
    timerIdRef.current = setInterval(() => {
      setValue((value) => clamp(value + incrementBy, min, max));
    }, interval);
  }, [initialValue, interval, incrementBy, min, max]);

  const stopTimer = useCallback(() => {
    clearInterval(timerIdRef.current);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(timerIdRef.current);
    };
  }, []);

  return { value, startTimer, stopTimer };
};

export default useTimer;

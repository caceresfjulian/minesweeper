import React, { memo, useEffect, useRef, useState } from "react";
import formatTimekeeper from "../../utils/formatTimekeeper";
import { Header } from "./TimeKeeper.styles";

interface BaseTimeKeeperProps {
  stop: boolean;
}

const BaseTimeKeeper = ({ stop }: BaseTimeKeeperProps): JSX.Element => {
  const [time, setTime] = useState(0);
  const intervalIdRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  useEffect(() => {
    if (stop) {
      clearInterval(intervalIdRef.current);
    }
  }, [stop]);

  return <Header>{formatTimekeeper(time)}</Header>;
};

const TimeKeeper = memo(BaseTimeKeeper);

export default TimeKeeper;

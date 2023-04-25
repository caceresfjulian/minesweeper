import { memo, useEffect, useRef, useState } from "react";
import formatTimekeeper from "../utils/formatTimekeeper";

type BaseTimeKeeperProps = {
  stop: Boolean;
};

const BaseTimeKeeper = ({ stop }: BaseTimeKeeperProps) => {
  const [time, setTime] = useState(0);
  const intervalIdRef = useRef<number>();

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

  return (
    <h4 style={{ padding: "5px 8px", marginBottom: "5px" }}>
      {formatTimekeeper(time)}
    </h4>
  );
};

const TimeKeeper = memo(BaseTimeKeeper);

export default TimeKeeper;

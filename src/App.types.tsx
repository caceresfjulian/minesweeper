import { ChangeEvent } from "react";

export type InitForm = ChangeEvent<HTMLFormElement> & {
  target: {
    elements: {
      size: {
        value: string;
      };
    };
  };
};

import React, { type ReactNode } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { type RootState } from "../store";

export const CustomThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const theme = useSelector((state: RootState) => state.theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

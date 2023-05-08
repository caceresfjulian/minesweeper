import React, { type ChangeEvent } from "react";
import styled from "styled-components";
import { HiddenCheckbox, Icon, ShownCheckbox } from "./common.styles";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

interface CheckboxProps {
  className?: string;
  checked: boolean;
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
  className,
  checked,
  handleCheckboxChange,
}: CheckboxProps): JSX.Element => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
    <ShownCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </ShownCheckbox>
  </CheckboxContainer>
);

export default Checkbox;

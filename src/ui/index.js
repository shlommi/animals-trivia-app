import styled, { css } from "styled-components";

export const Div = styled.div`
    ${({ marginTop }) =>
      marginTop &&
      css`
        margin-top: ${marginTop};
      `}
    ${({ marginRight }) =>
      marginRight &&
      css`
        margin-right: ${marginRight};
      `}
    ${({ marginBottom }) =>
      marginBottom &&
      css`
        margin-bottom: ${marginBottom};
      `}
    ${({ marginLeft }) =>
      marginLeft &&
      css`
        margin-left: ${marginLeft};
      `}
`;

export const FlexDiv = styled(Div)`
  display:flex;
  ${({ column }) =>
    column &&
    css`
      flex-direction: ${column};
    `}
  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}
`;

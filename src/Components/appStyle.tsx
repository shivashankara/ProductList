import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const HeaderContainer = styled.header`
  background-color: #ffff;
  color: green;
  padding: 20px;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  a{
    text-decoration: none;
    color: black;
    margin: 0 10px;
    font-size: 20px;
  }
`;
export const AppContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

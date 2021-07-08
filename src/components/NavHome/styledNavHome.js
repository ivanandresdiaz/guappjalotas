import styled from 'styled-components';

export const DivNav = styled.div`
margin: 20px 0;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
height:50px;
align-items: center;
justify-items: center;
.currentFocus{
    border-bottom: 1px solid #fa4a0c;
  color: #fa4a0c;
  }
`;

export const ButtonNav = styled.button`
  width:100%;
  height: 45px;
  border: none;
  background-color:transparent;
  cursor:pointer;
  color:#9A9A9D;
`;

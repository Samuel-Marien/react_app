import styled from '@emotion/styled';
import { GiCaveman } from 'react-icons/gi';

import { useContext } from 'react';
import Context from '../context/Context';

const StyledScreen = styled('div')`
  border-radius: 15px 15px 5px 5px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c0c295;
  box-shadow: 3px 3px 2px #6c6e58 inset, 7px 7px 7px #9a9c7c inset;
  text-shadow: 2px 2px 2px #6c6e58;
  color: #47412d;
  transition: 0.9s;
  cursor: pointer;

  &:hover {
    color: black;
    transition: 0.9s;
  }
`;

const Screen = (props) => {
  const { count, setCount } = useContext(Context);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <StyledScreen onClick={handleClick}>
        <GiCaveman
          style={{
            fontSize: 180,
          }}
        />
      </StyledScreen>
    </div>
  );
};

export default Screen;

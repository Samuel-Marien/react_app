import styled from '@emotion/styled';
import { useState } from 'react';
import { GiGecko } from 'react-icons/gi';
import { RiKnifeBloodFill } from 'react-icons/ri';
import { GiParasaurolophus } from 'react-icons/gi';
import { GiHydra } from 'react-icons/gi';
import { GiMonsterGrasp } from 'react-icons/gi';
import { GiPocketWatch } from 'react-icons/gi';

const initialState = {
  production: {
    gecko: {
      count: 0,
      price: 1,
      dps: 1,
    },
    parasauro: {
      count: 0,
      price: 10,
      dps: 5,
    },
    hydra: {
      count: 0,
      price: 30,
      dps: 10,
    },
  },
  boost: {
    miniBoost: {
      count: 0,
      price: 10,
      dps: 1,
      time: 5,
    },
    middleBoost: {
      count: 0,
      price: 100,
      dps: 5,
      time: 5,
    },
    superBoost: {
      count: 0,
      price: 300,
      dps: 20,
      time: 7,
    },
    xtraBoost: {
      count: 0,
      price: 1000,
      dps: 60,
      time: 12,
    },
  },
};

const StyledThumbnail = styled('li')`
  margin-bottom: 10px;
  width: 300px;
  height: 80px;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 8px #333633;
  transition: 0.3s;

  &:hover {
    box-shadow: none;
  }
  &:hover h2 {
    color: white;
    transition: 0.6s;
  }
`;

const StyledTitle = styled('h2')`
  font-size: 1.5rem;
  color: #5a785b;
`;

const StyledPara = styled('p')`
  font-size: 0.7rem;
  color: #7b8c7b;
`;

const StyledCounter = styled('h1')`
  font-size: 2.5rem;
  color: #5a785b;
`;

const StyledBonus = styled('div')`
  width: 60px;
  height: 70px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  box-shadow: 0 0 5px #333633;
  transition: 0.3s;

  &:hover {
    box-shadow: none;
  }
  &:hover :nth-of-type(2) {
    color: #9fd2d2;
    transition: 0.3s;
  }
`;

const StyledParaBonus = styled('div')`
  font-size: 0.6rem;
  width: 60px;
  color: white;
`;

const Shop = (props) => {
  const [items, setItems] = useState(initialState);
  return (
    <div>
      <ul>
        <h3>Army</h3>
        <StyledThumbnail
          style={{
            background: '#333633',
          }}
        >
          <GiGecko
            style={{
              fontSize: 40,
              color: '#5a785b',
            }}
          />
          <div
            className="text-center w-50"
            style={{
              borderLeft: '1px solid #7b8c7b',
              borderRight: '1px solid #7b8c7b',
            }}
          >
            <StyledTitle>Gecko</StyledTitle>
            <StyledPara>
              Yours next Gecko: {items.production.gecko.price}
              <RiKnifeBloodFill
                style={{
                  fontSize: 15,
                  marginLeft: 3,
                }}
              />
            </StyledPara>
          </div>
          <StyledCounter>{}00</StyledCounter>
        </StyledThumbnail>
        <StyledThumbnail
          style={{
            background: '#333633',
          }}
        >
          <GiParasaurolophus
            style={{
              fontSize: 40,
              color: '#5a785b',
            }}
          />
          <div
            className="text-center w-50"
            style={{
              borderLeft: '1px solid #7b8c7b',
              borderRight: '1px solid #7b8c7b',
            }}
          >
            <StyledTitle>Parasauro</StyledTitle>
            <StyledPara>
              Yours next Parasauro: {items.production.parasauro.price}
              <RiKnifeBloodFill
                style={{
                  fontSize: 15,
                  marginLeft: 3,
                }}
              />
            </StyledPara>
          </div>
          <StyledCounter>{}00</StyledCounter>
        </StyledThumbnail>
        <StyledThumbnail
          style={{
            background: '#333633',
          }}
        >
          <GiHydra
            style={{
              fontSize: 40,
              color: '#5a785b',
            }}
          />
          <div
            className="text-center w-50"
            style={{
              borderLeft: '1px solid #7b8c7b',
              borderRight: '1px solid #7b8c7b',
            }}
          >
            <StyledTitle>Hydra</StyledTitle>
            <StyledPara>
              Yours next Hydra: {items.production.hydra.price}
              <RiKnifeBloodFill
                style={{
                  fontSize: 15,
                  marginLeft: 3,
                }}
              />
            </StyledPara>
          </div>
          <StyledCounter>{}00</StyledCounter>
        </StyledThumbnail>
      </ul>
      <h3>Boost</h3>
      <ul className="d-flex justify-content-between">
        <StyledBonus
          style={{
            background: '#7F5D5D',
          }}
        >
          <div>
            <GiMonsterGrasp
              style={{
                fontSize: 28,
                color: '#B9D29F',
              }}
            />
          </div>
          <StyledParaBonus>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              Dps : {items.boost.miniBoost.dps}
              <RiKnifeBloodFill
                style={{
                  fontSize: 10,
                  marginLeft: '12px',
                }}
              />
            </div>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              Price : {items.boost.miniBoost.price}
            </div>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              time : {items.boost.miniBoost.time}
              <GiPocketWatch
                style={{
                  fontSize: 10,
                  marginLeft: '11px',
                }}
              />
            </div>
          </StyledParaBonus>
        </StyledBonus>
        <StyledBonus
          style={{
            background: '#7F5D5D',
          }}
        >
          <div>
            <GiMonsterGrasp
              style={{
                fontSize: 28,
                color: '#B9D29F',
              }}
            />
          </div>
          <StyledParaBonus>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              Dps : {items.boost.middleBoost.dps}
              <RiKnifeBloodFill
                style={{
                  fontSize: 10,
                  marginLeft: '12px',
                }}
              />
            </div>

            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              Price : {items.boost.middleBoost.price}
            </div>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              time : {items.boost.middleBoost.time}
              <GiPocketWatch
                style={{
                  fontSize: 10,
                  marginLeft: '11px',
                }}
              />
            </div>
          </StyledParaBonus>
        </StyledBonus>
        <StyledBonus />
        <StyledBonus />
      </ul>
    </div>
  );
};
export default Shop;

import styled from '@emotion/styled';

import { InitialState } from './Shop';

import { useContext } from 'react';
import Context from '../context/Context';

import { GiMonsterGrasp } from 'react-icons/gi';
import { GiBestialFangs } from 'react-icons/gi';
import { GiFlamingClaw } from 'react-icons/gi';
import { GiFrontTeeth } from 'react-icons/gi';
import { GiPocketWatch } from 'react-icons/gi';

const StyledDiv = styled('div')`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const StyledBtn = styled('h1')`
  width: 80px;
  height: 90px;
  margin: 0;
  background: #c0c295;
  box-shadow: 3px 3px 2px #6c6e58 inset, 7px 7px 7px #9a9c7c inset;
  text-shadow: 2px 2px 2px #6c6e58;
  color: #47412d;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const BonusScreen = (props) => {
  const { displayMiniBoost } = useContext(Context);
  const { displayMiddleBoost } = useContext(Context);
  const { displaySuperBoost } = useContext(Context);
  const { displayXtraBoost } = useContext(Context);
  const { miniBoostCounter } = useContext(Context);
  const { boostIsAvailable } = useContext(Context);

  return (
    <StyledDiv>
      <StyledBtn>
        {!boostIsAvailable ? (
          <div>
            <GiMonsterGrasp
              style={{ fontSize: 50, color: '#47412d', opacity: '100%' }}
            />
            <div className="d-flex justify-content-between align-items-between w-100">
              <p className="h3" style={{ opacity: '100%' }}>
                {miniBoostCounter}
              </p>
              <GiPocketWatch
                style={{
                  fontSize: 30,
                  opacity: '100%',
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            <GiMonsterGrasp
              style={{
                fontSize: 50,
                color: '#47412d',
                opacity: '10%',
              }}
            />
            <div className="d-flex justify-content-between align-items-between w-100">
              <p
                className="h3"
                style={{
                  opacity: '10%',
                }}
              >
                {InitialState.boost.miniBoost.time}
              </p>
              <GiPocketWatch
                style={{
                  fontSize: 30,
                  opacity: '10%',
                }}
              />
            </div>
          </div>
        )}
      </StyledBtn>
      <StyledBtn>
        {displayMiddleBoost ? (
          <div>
            <GiBestialFangs
              style={{
                fontSize: 50,
                color: '#47412d',
                opacity: '100%',
              }}
            />
            <div className="d-flex justify-content-between align-items-between w-100">
              <p
                className="h3"
                style={{
                  opacity: '100%',
                }}
              >
                {}
              </p>
              <GiPocketWatch
                style={{
                  fontSize: 30,
                  opacity: '100%',
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            <GiBestialFangs
              style={{
                fontSize: 50,
                color: '#47412d',
                opacity: '10%',
              }}
            />
            <div className="d-flex justify-content-between align-items-between w-100">
              <p
                className="h3"
                style={{
                  opacity: '10%',
                }}
              >
                5
              </p>
              <GiPocketWatch
                style={{
                  fontSize: 30,
                  opacity: '10%',
                }}
              />
            </div>
          </div>
        )}
      </StyledBtn>
      <StyledBtn>
        {displaySuperBoost ? (
          <div>
            <GiFlamingClaw
              style={{
                fontSize: 50,
                color: '#47412d',
                opacity: '100%',
              }}
            />
            <div className="d-flex justify-content-between align-items-between w-100">
              <p
                className="h3"
                style={{
                  opacity: '100%',
                }}
              >
                {}
              </p>
              <GiPocketWatch
                style={{
                  fontSize: 30,
                  opacity: '100%',
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            <GiFlamingClaw
              style={{
                fontSize: 50,
                color: '#47412d',
                opacity: '10%',
              }}
            />
            <div className="d-flex justify-content-between align-items-between w-100">
              <p
                className="h3"
                style={{
                  opacity: '10%',
                }}
              >
                5
              </p>
              <GiPocketWatch
                style={{
                  fontSize: 30,
                  opacity: '10%',
                }}
              />
            </div>
          </div>
        )}
      </StyledBtn>
      <StyledBtn>
        {displayXtraBoost ? (
          <div>
            <GiFrontTeeth
              style={{
                fontSize: 50,
                color: '#47412d',
                opacity: '100%',
              }}
            />
            <div className="d-flex justify-content-between align-items-between w-100">
              <p
                className="h3"
                style={{
                  opacity: '100%',
                }}
              >
                {}
              </p>
              <GiPocketWatch
                style={{
                  fontSize: 30,
                  opacity: '100%',
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            <GiFrontTeeth
              style={{
                fontSize: 50,
                color: '#47412d',
                opacity: '10%',
              }}
            />
            <div className="d-flex justify-content-between align-items-between w-100">
              <p
                className="h3"
                style={{
                  opacity: '10%',
                }}
              >
                5
              </p>
              <GiPocketWatch
                style={{
                  fontSize: 30,
                  opacity: '10%',
                }}
              />
            </div>
          </div>
        )}
      </StyledBtn>
    </StyledDiv>
  );
};

export default BonusScreen;

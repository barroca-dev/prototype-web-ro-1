import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const FirstSide = styled.div`
  flex: 1;

`;

const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Description = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;




const SecondSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;


const Who = () => {
  return (
    <Section>
      <Container>
        <FirstSide>
          {/* 3d model */}
        </FirstSide>
        <SecondSide>
        <Title> Think outside the square space </Title>
          <WhatWeDo>
            <Line src= "./img/line.png"/>
            <Subtitle>Who i am</Subtitle>
          </WhatWeDo>
          <Description>
            A multimedia designer and video producer whit passion for the arts.
          </Description>
          <Button>See my works</Button>
        </SecondSide>
      </Container>
    </Section>
  );
};

export default Who;

import React from "react";
import styled from "styled-components";

const dataItems = [
  "Web Design",
  "Video production",
  "Ilustration",
  "Product Desing",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const FirsSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;

`;

const ListItem = styled.li`
  font-size: 64px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;

  ::after{
    content: "test"; 
  }
`;

const SecondSide = styled.div`
  flex: 1;
`;

const Works = () => {
  return (
    <Section>
      <Container>
        <FirsSide>
          <List>
            {dataItems.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </FirsSide>
        <SecondSide></SecondSide>
      </Container>
    </Section>
  );
};

export default Works;

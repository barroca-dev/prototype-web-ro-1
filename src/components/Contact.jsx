import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import MapChart from "./MapChart";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const FirstSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  background-color: #fbf5f5;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  background-color: #fbf5f5;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #da4ea2;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: white;
`;

const SeconSide = styled.div`
  flex: 1;
`;



const Contact = () => {
  const ref = useRef();

const [success, setSuccess] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_4cv0x9i",
      "template_8o2ystb",
      ref.current,
      "1-GKMchrSw4z9S5D7"
    )
    .then(
      (result) => {
        console.log(result.text);
        setSuccess(true);
      },
      (error) => {
        console.log(error.text);
        setSuccess(false);
      }
    );
};
  return (
    <Section>
      <Container>
        <FirstSide>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Write your message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success &&
            "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </FirstSide>
        <SeconSide>
          <MapChart 
          style={{Width: "100%", heigth: "100%", backgroundColor: "red"}}
          />
        </SeconSide>
      </Container>
    </Section>
  );
};

export default Contact;

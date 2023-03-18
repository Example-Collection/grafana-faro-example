import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { validateItem } from "../global/api";
import { Image, ImageContainer, ImageDescription } from "./Image";
import TempoTrace from "../assets/Tempo-Trace.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161b22;
  padding: 1rem;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin-bottom: 1rem;
`;

const NameInput = styled.input`
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const PriceInput = styled.input`
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const ValidateButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1a7f37;
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
  border-radius: 8px;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Result = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #5b5b5b;
  font-family: "Roboto", sans-serif;
  padding: 1rem;
`;

const SubMessage = styled.div`
  font-size: 0.9rem;
  color: #5b5b5b;
  font-family: "Roboto", sans-serif;
  padding: 1rem;
`;

const Error = styled.div`
  font-size: 1.5rem;
  font-weight: normal;
  color: #ff0000;
  font-family: "Roboto", sans-serif;
`;

const Items = (): JSX.Element => {
  const [name, setItem] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const apiCall = async () => {
    try {
      setIsLoading(true);
      const response = await validateItem(name, Number(price));
      setIsLoading(false);
      setResult(response.message);
    } catch (e) {
      setIsLoading(false);
      setErrorMessage(e.response?.data.detail.detail);
    }
  };

  return (
    <>
      <Container>
        <Title>Validate items</Title>
        <div>Name: </div>
        <NameInput type="text" value={name} onChange={handleNameChange} />
        <div>Price:</div>
        <PriceInput type="text" value={price} onChange={handlePriceChange} />
        <ValidateButton onClick={apiCall}>Validate</ValidateButton>
        <ResultWrapper>
          {isLoading ? (
            <>
              <Result>Loading..</Result>
            </>
          ) : // render Result, Error only when one of them is not ""
          result !== "" || errorMessage !== "" ? (
            <>
              <SubMessage>Result:</SubMessage>
              <Result>{result}</Result>
              <Error>{errorMessage}</Error>
            </>
          ) : (
            <></>
          )}
        </ResultWrapper>
      </Container>
      <ImageContainer>
        <ImageDescription>
          You can view distributed traces on Tempo.
        </ImageDescription>
        <Image src={TempoTrace} />
      </ImageContainer>
    </>
  );
};

export default Items;

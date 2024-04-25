import styled from "styled-components";

export default function Card({ image, isOpen, isMatched, onClick }) {
  return <CardWrapper onClick={onClick}>
  {isOpen || isMatched ? (
    <img
      src={image}
      alt="card"
      style={{ width: "inherit", height: "inherit" }}
    />
  ) : null}
</CardWrapper>
}

const CardWrapper = styled.div`
  width: 100px;
  height: 150px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

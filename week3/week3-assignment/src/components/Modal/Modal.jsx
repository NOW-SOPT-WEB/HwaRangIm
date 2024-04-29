import { ModalComment, ModalContainer, ModalResetBtn } from "./Modal.styled";

export default function Modal({ onClick }) {
  return (
    <ModalContainer>
      <ModalComment>😍축하합니다!😍</ModalComment>
      <ModalResetBtn
        onClick={() => {
          onClick();
        }}
      >
        게임으로 돌아가기
      </ModalResetBtn>
    </ModalContainer>
  );
}

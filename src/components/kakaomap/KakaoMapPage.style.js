import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 60px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const TextInput = styled.input`
  width: 70%;
  height: 35px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #515058;
  border-radius: 20px;
  margin: 20px;
  font-size: 14px;
  font-weight: var(--weight-medium);
  background-color: white;
`;

export const SubmitButton = styled.button`
  width: 20%;
  padding: 10px;
  background-color: #216dff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 20px;
  font-size: 14px;
  font-weight: var(--weight-semi-bold);
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const SuggestionButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0px;
  justify-content: center;
  color: ${(props) => (props.isClicked ? "#216DFF" : "#000000")};
  margin-left: 8px;
  gap: 8px;
`;

export const SuggestionButton = styled.button.attrs({
  isClicked: undefined,
})`
  height: 30px;
  border: 1.3px solid;
  border-radius: 20px;
  border-color: ${({ isClicked }) => (isClicked ? "#216DFF" : "#515058")};
  font-size: 14px;
  font-weight: var(--weight-medium);
  color: ${({ isClicked }) => (isClicked ? "#216DFF" : "#515058")};
  background-color: ${({ isClicked }) => (isClicked ? "#E0EBFF" : "white")};
  cursor: pointer;
  padding: 10px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 400px) {
    padding: 8px;
    font-size: 12px;
  }
`;

export const PlacesList = styled.ul`
  list-style: none;
  padding: 10px;
  margin-bottom: 60px;
  align-items: center;
  justify-content: center;
  padding-left: 25px;
`;

export const PlaceItem = styled.li`
  width: 350px;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  cursor: pointer;

  margin-bottom: 10px;
  border-radius: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 40px;
  border: 1px solid gray;

  &:hover {
    background-color: #f6f5fa;
  }
`;

export const PlaceName = styled.strong`
  font-size: 14px;
  font-weight: var(--weight-semi-bold);
  display: block;
  margin-bottom: 5px;
`;

export const PlaceAddress = styled.div`
  font-size: 14px;
  font-weight: var(--weight-regular);
  margin-bottom: 5px;
  color: #515058;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PlacePhone = styled.div`
  font-size: 14px;
  font-weight: var(--weight-regular);
  font-size: 10px;
`;

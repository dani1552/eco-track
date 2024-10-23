import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
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
`;

export const SubmitButton = styled.button`
  width: 20%;
  padding: 10px;
  background-color: ${(props) => (props.isClicked ? "#216dff" : "#216dff")};
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
  height: 400px;
`;

export const SuggestionButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 15px 0px;
  justify-content: center;
`;

export const SuggestionButton = styled.button`
  height: 30px;
  border: 1px solid #515058;
  border-radius: 20px;
  font-size: 14px;
  font-weight: var(--weight-medium);

  margin-right: 10px;
  color: #515058;
`;

export const PlacesList = styled.ul`
  list-style: none;
  padding: 10px;
`;

export const PlaceItem = styled.li`
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #ddd;
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
`;

export const PlacePhone = styled.div`
  font-size: 14px;
  font-weight: var(--weight-regular);
  font-size: 10px;
`;

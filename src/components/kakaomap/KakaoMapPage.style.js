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
  border-radius: 10px;
  margin: 20px;
  font-size: 14px;
  font-weight: var(--weight-medium);
`;

export const SubmitButton = styled.button`
  width: 20%;
  padding: 10px;
  background-color: #216dff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 20px;
  font-size: 14px;
  font-weight: var(--weight-semi-bold);
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
`;

export const PlacesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PlaceItem = styled.li`
  padding: 10px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;

export const PlaceName = styled.strong`
  display: block;
  margin-bottom: 5px;
`;

export const PlaceAddress = styled.div`
  margin-bottom: 5px;
`;

export const PlacePhone = styled.div`
  font-size: 10px;
  color: #555;
`;

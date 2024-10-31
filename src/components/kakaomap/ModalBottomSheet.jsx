import styled from "styled-components";

function ModalBottomSheet({
  onSuggestionClick,
  places,
  onPlaceItemClick,
  moveToCurrentLocation,
  opensnap,
}) {
  const handleSuggestionClick = (type) => {
    onSuggestionClick(type);
    opensnap();
  };

  return (
    <ModalContainer>
      <ButtonContainer>
        <SuggestionButton onClick={() => handleSuggestionClick("지하철역")}>
          지하철역
        </SuggestionButton>
        <SuggestionButton onClick={() => handleSuggestionClick("비건 식당")}>
          비건 식당
        </SuggestionButton>
        <SuggestionButton
          onClick={() => handleSuggestionClick("자전거 대여소")}
        >
          자전거 대여소
        </SuggestionButton>
        <SuggestionButton
          onClick={() => handleSuggestionClick("전기차 충전소")}
        >
          전기차 충전소
        </SuggestionButton>
      </ButtonContainer>

      <CurrentLocationButton onClick={moveToCurrentLocation}>
        현재 위치로 이동
      </CurrentLocationButton>

      <PlacesList>
        {places.map((place, index) => (
          <PlaceItem key={index} onClick={() => onPlaceItemClick(index)}>
            <PlaceName>{place.place_name}</PlaceName>
            <PlaceAddress>
              {place.road_address_name || place.address_name}
            </PlaceAddress>
          </PlaceItem>
        ))}
      </PlacesList>
    </ModalContainer>
  );
}

export default ModalBottomSheet;

// Styled components for ModalBottomSheet
const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const SuggestionButton = styled.button`
  padding: 10px 15px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CurrentLocationButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const PlacesList = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

const PlaceItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
`;

const PlaceName = styled.div`
  font-weight: bold;
`;

const PlaceAddress = styled.div`
  color: #757575;
`;

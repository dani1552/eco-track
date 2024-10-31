import { useEffect, useState } from "react";
import {
  Container,
  InputWrapper,
  TextInput,
  MapContainer,
  SubmitButton,
  PlacesList,
  PlaceItem,
  PlaceName,
  PlaceAddress,
  SuggestionButtonContainer,
  SuggestionButton,
} from "/src/components/kakaomap/KakaoMapPage.style.js";
import LoadingPage from "/src/pages/LoadingPage.jsx";
import MapBottomSheet from "/src/components/kakaomap/MapBottomSheet.jsx";

const kakaoKey = import.meta.env.VITE_KAKAO_JS_APP_KEY;

function KakaoMapPage() {
  const [apiLoaded, setApiLoaded] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [places, setPlaces] = useState([]);
  const [mapCenter, setMapCenter] = useState({
    lat: 37.566826,
    lng: 126.9786567,
  });
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedButton, setSelectedButton] = useState("");
  const [openToSnap, setOpenToSnap] = useState(false);

  const fetchCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setMapCenter({ lat, lng });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  useEffect(() => {
    const loadKakaoMapScript = () => {
      if (!window.kakao || !window.kakao.maps) {
        const kakaoScript = document.createElement("script");
        kakaoScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&libraries=services,clusterer`;
        kakaoScript.async = false;
        kakaoScript.defer = true;
        kakaoScript.onload = () => {
          window.kakao.maps.load(() => {
            setApiLoaded(true);
          });
        };
        document.head.appendChild(kakaoScript);
      } else {
        window.kakao.maps.load(() => {
          setApiLoaded(true);
        });
      }
    };

    loadKakaoMapScript();
  }, []);

  useEffect(() => {
    if (apiLoaded && mapCenter) {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
        level: 3,
      };

      const newMap = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(newMap);
    }
  }, [apiLoaded, mapCenter]);

  const searchPlaces = (keyword) => {
    if (!window.kakao || !window.kakao.maps || !map) return;

    const placesService = new window.kakao.maps.services.Places(map);
    const options = {
      location: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
      radius: 5000,
      size: 10,
    };

    placesService.keywordSearch(
      keyword,
      (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          setPlaces(data);
          setOpenToSnap(true);
          if (data.length > 0) {
            const newCenter = {
              lat: parseFloat(data[0].y),
              lng: parseFloat(data[0].x),
            };
            setMapCenter(newCenter);
          }
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
          alert("검색 결과가 없습니다.");
        } else {
          alert("검색 중 오류가 발생했습니다.");
        }
      },
      options
    );
  };

  useEffect(() => {
    if (apiLoaded && map && places.length > 0) {
      const markerList = [];
      const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

      places.forEach((place) => {
        const marker = new window.kakao.maps.Marker({
          map,
          position: new window.kakao.maps.LatLng(place.y, place.x),
        });

        window.kakao.maps.event.addListener(marker, "click", () => {
          infowindow.setContent(`${place.place_name}`);
          infowindow.open(map, marker);
        });

        markerList.push(marker);
      });

      setMarkers(markerList);

      return () => {
        markerList.forEach((marker) => marker.setMap(null));
      };
    }
  }, [map, places]);

  const handleListItemClick = (index) => {
    const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
    const marker = markers[index];
    const place = places[index];

    if (marker) {
      infowindow.setContent(
        `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`
      );
      infowindow.open(map, marker);
      map.panTo(marker.getPosition());
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setKeyword(suggestion);
    searchPlaces(suggestion);
    setSelectedButton(suggestion);
  };

  return (
    <div>
      {apiLoaded ? (
        <Container>
          <InputWrapper>
            <TextInput
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색어를 입력하세요"
            />
            <SubmitButton onClick={() => searchPlaces(keyword)}>
              검색
            </SubmitButton>
          </InputWrapper>

          <MapContainer id="map" />

          <MapBottomSheet openToSnap={openToSnap}>
            <SuggestionButtonContainer>
              <SuggestionButton
                isClicked={selectedButton === "지하철역"}
                onClick={() => handleSuggestionClick("지하철역")}
              >
                🚊 지하철역
              </SuggestionButton>
              <SuggestionButton
                isClicked={selectedButton === "자전거 대여소"}
                onClick={() => handleSuggestionClick("자전거 대여소")}
              >
                🚲 자전거 대여소
              </SuggestionButton>
              <SuggestionButton
                isClicked={selectedButton === "전기차 충전소"}
                onClick={() => handleSuggestionClick("전기차 충전소")}
              >
                🚘 전기차 충전소
              </SuggestionButton>
            </SuggestionButtonContainer>

            <PlacesList>
              {places.map((place, index) => (
                <PlaceItem
                  key={index}
                  onClick={() => handleListItemClick(index)}
                >
                  <PlaceName>{place.place_name}</PlaceName>
                  <PlaceAddress>
                    {place.road_address_name || place.address_name}
                  </PlaceAddress>
                </PlaceItem>
              ))}
            </PlacesList>
          </MapBottomSheet>
        </Container>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default KakaoMapPage;

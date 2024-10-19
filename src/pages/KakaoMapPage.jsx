import { useEffect, useState } from "react";
import {
  InputWrapper,
  TextInput,
  MapContainer,
  SubmitButton,
  PlacesList,
  PlaceItem,
  PlaceName,
  PlaceAddress,
  PlacePhone,
} from "/src/components/kakaomap/KakaoMapPage.style.js";
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

  // Kakao Maps API 로드
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
            console.log("Kakao map script loaded successfully!");
          });
        };
        document.head.appendChild(kakaoScript);
      } else {
        window.kakao.maps.load(() => {
          setApiLoaded(true);
          console.log("Kakao Maps API already loaded");
        });
      }
    };

    loadKakaoMapScript();
  }, []);

  // Kakao Maps API 초기화
  useEffect(() => {
    if (apiLoaded) {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
        level: 3,
      };

      const newMap = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(newMap);
    }
  }, [apiLoaded, mapCenter]);

  // 키워드로 장소 검색
  const searchPlaces = () => {
    if (!apiLoaded || !window.kakao || !window.kakao.maps.services) {
      console.error("Kakao Maps API가 로드되지 않았습니다.");
      return;
    }

    // 검색어가 비어있으면 경고 메시지를 표시하고 검색을 하지 않음
    if (!keyword.trim()) {
      alert("검색어를 입력하세요.");
      return;
    }

    const placeSearch = new window.kakao.maps.services.Places();
    placeSearch.keywordSearch(keyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setPlaces(data);

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
    });
  };

  // 마커와 인포윈도우 관리
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

      // 마커 상태 저장
      setMarkers(markerList);

      // cleanup function: 새로운 장소 검색 또는 언마운트 시 기존 마커 지도에서 제거
      return () => {
        markerList.forEach((marker) => marker.setMap(null));
      };
    }
  }, [map, places]);

  // 특정 장소를 클릭했을 때 해당 마커에 인포윈도우 표시
  const handleListItemClick = (index) => {
    const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
    const marker = markers[index];
    const place = places[index];

    if (marker) {
      infowindow.setContent(
        `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`
      );
      infowindow.open(map, marker);
      map.panTo(marker.getPosition()); // 지도의 중심을 마커 위치로 이동
    }
  };

  return (
    <div>
      {apiLoaded ? (
        <>
          <InputWrapper>
            <TextInput
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="검색어를 입력하세요"
            />
            <SubmitButton onClick={searchPlaces}>검색</SubmitButton>
          </InputWrapper>

          <MapContainer id="map" />

          <PlacesList>
            {places.map((place, index) => (
              <PlaceItem key={index} onClick={() => handleListItemClick(index)}>
                <PlaceName>{place.place_name}</PlaceName>
                <PlaceAddress>
                  {place.road_address_name || place.address_name}
                </PlaceAddress>
                <PlacePhone>{place.phone}</PlacePhone>
              </PlaceItem>
            ))}
          </PlacesList>
        </>
      ) : (
        <div>Loading Map...</div>
      )}
    </div>
  );
}

export default KakaoMapPage;

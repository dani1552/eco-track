import { useEffect, useState } from "react";
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

  // Kakao Maps API 로드
  useEffect(() => {
    const loadKakaoMapScript = () => {
      if (!window.kakao || !window.kakao.maps) {
        const kakaoScript = document.createElement("script");
        kakaoScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&libraries=services,clusterer`;
        kakaoScript.async = false; // 비동기 로드를 방지하여 HTML 파싱 후 로드
        kakaoScript.defer = true; // HTML이 먼저 로드된 후 스크립트 로드 (defer)
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
      places.forEach((place) => {
        const marker = new window.kakao.maps.Marker({
          map,
          position: new window.kakao.maps.LatLng(place.y, place.x),
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          zIndex: 1,
        });
        window.kakao.maps.event.addListener(marker, "click", () => {
          infowindow.setContent(
            `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`
          );
          infowindow.open(map, marker);
        });

        markerList.push(marker);
      });

      // cleanup function: 새로운 장소 검색 || 언마운트 시 기존 마커 지도에서 제거
      return () => {
        markerList.forEach((marker) => marker.setMap(null));
      };
    }
  }, [map, places]);

  return (
    <div>
      {apiLoaded ? (
        <>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="키워드를 입력하세요"
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "10px",
                width: "300px",
                marginRight: "10px",
              }}
            />
            <button
              onClick={searchPlaces}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#9971ff",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              검색
            </button>
          </div>

          <div id="map" style={{ width: "100%", height: "500px" }}></div>
        </>
      ) : (
        <div>Loading Map...</div>
      )}
    </div>
  );
}

export default KakaoMapPage;

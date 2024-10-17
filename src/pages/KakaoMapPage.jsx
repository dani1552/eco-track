import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMapPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!window.kakao) {
      const kakaoScript = document.createElement("script");
      kakaoScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_JS_APP_KEY
      }&libraries=services,clusterer`;
      kakaoScript.onload = () => {
        setIsLoaded(true);
        console.log("Kakao map script loaded successfully!");
      };
      document.head.appendChild(kakaoScript);
    } else {
      setIsLoaded(true);
      console.log("Kakao Maps API already loaded");
    }
  }, []);

  return (
    <div>
      {isLoaded && (
        <Map
          center={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
          style={{
            width: "600px",
            height: "500px",
            borderRadius: "20px",
          }}
        >
          <MapMarker
            position={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
          >
            <div
              style={{
                color: "#9971ff",
                fontSize: "19px",
                fontWeight: "700",
                border: "4px solid #9971ff",
                borderRadius: "10px",
                padding: "2.5px",
              }}
            >
              🎬 small box 🎬
            </div>
          </MapMarker>
        </Map>
      )}
    </div>
  );
}

export default KakaoMapPage;

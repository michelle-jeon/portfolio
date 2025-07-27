import { useState } from "react";
import { Phone, Screen, Gif, SpinnerWrapper } from "./WorkDetailPhoneMockup.styles";
import { ClipLoader } from "react-spinners"; // 또는 다른 스피너 컴포넌트

type Props = {
  gif: string;
};

export default function WorkDetailPhoneMockup({ gif }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Phone>
      <Screen>
        {!isLoaded && (
          <SpinnerWrapper>
            <ClipLoader size={40} color="#999" />
          </SpinnerWrapper>
        )}
        <Gif
          src={gif}
          alt="work gif"
          style={{ display: isLoaded ? "block" : "none" }}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            // 로드 실패 시 fallback 처리
            setIsLoaded(true);
          }}
        />
      </Screen>
    </Phone>
  );
}

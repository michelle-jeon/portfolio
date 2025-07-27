import { useState } from "react";
import { Phone, Screen, StyledImage } from "./WorkDetailPhoneMockup.styles";

type Props = {
  gif: string;
};

export default function WorkDetailPhoneMockup({ gif }: Props) {
  const [isGifLoaded, setIsGifLoaded] = useState(false);

  // gif 경로에서 dummy 이미지 경로 유추
  const dummy = gif.replace(/\.gif$/, "Dummy.jpg");

  return (
    <Phone>
      <Screen>
        {!isGifLoaded && (
          <StyledImage src={dummy} alt="loading preview" />
        )}
        <StyledImage
          src={gif}
          alt="work gif"
          style={{ display: isGifLoaded ? "block" : "none" }}
          onLoad={() => setIsGifLoaded(true)}
        />
      </Screen>
    </Phone>
  );
}

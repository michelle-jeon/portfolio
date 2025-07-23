import {
  Phone,
  Screen,
  Gif
} from "./WorkDetailPhoneMockup.styles";

type Props = {
  gif: string;
};

export default function WorkDetailPhoneMockup({ gif }: Props) {
  return (
    <Phone>
      <Screen>
        <Gif src={gif} alt="work gif" />
      </Screen>
    </Phone>
  );
}

import { FC } from "react";
import * as S from "./styles";

interface Props {
  message: string;
}

const TitleComponent: FC<Props> = ({ message }) => {
  return <S.Container>{message}</S.Container>;
};

export default TitleComponent;

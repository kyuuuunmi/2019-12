import React from 'react';
import * as S from './style';
import { GoogleMap } from '@components';
import { Location } from 'types/Data';

interface Props {
  place: string;
  address: string;
  placeDesc: string;
  location: Location;
}

function Place({
  place,
  address,
  placeDesc,
  location,
}: Props): React.ReactElement {
  return (
    <S.PlaceDetailContainer>
      <GoogleMap {...location} />
      <S.PlcaeLabel>장소</S.PlcaeLabel>
      <S.PlaceName>{place}</S.PlaceName>
      <S.PlaceDetail>{address}</S.PlaceDetail>
      <S.PlaceDetail>{placeDesc}</S.PlaceDetail>
    </S.PlaceDetailContainer>
  );
}

export default Place;

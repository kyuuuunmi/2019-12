import React from 'react';

import * as S from './style';
import { IconBtn, Price } from 'components';
import { User, TicketType } from 'types/Data';
import { default as Theme } from 'commons/style/themes/default';
import { FaUsers, FaExternalLinkAlt } from 'react-icons/fa';

interface Props {
  id: number;
  mainImg: string;
  title: string;
  place: string;
  startAt: string;
  endAt: string;
  user: User;
  ticketType: TicketType;
}

function EventHeader({
  id: eventId,
  mainImg,
  title,
  place,
  startAt,
  endAt,
  user,
  ticketType,
}: Props): React.ReactElement {
  const ticketInfo = ticketType;
  const { firstName, lastName } = user;
  const profileImgUrl =
    'https://kr.object.ncloudstorage.com/bookus/defaultProfileImg.png';

  return (
    <S.HeaderContainer>
      <S.BannerContainer>
        <S.BannerImgWrapper>
          <S.BannerImg url={mainImg} />
        </S.BannerImgWrapper>
        <S.HostContainer>
          <S.Title>{title}</S.Title>
          <S.ShortPlace>at {place}</S.ShortPlace>
          <S.HostDetailContainer>
            <S.Label>일시</S.Label>
            <S.DateContainer>
              <S.Date>{startAt}</S.Date>
              <S.Date>{endAt}</S.Date>
            </S.DateContainer>
            <S.Label>주최</S.Label>
            <IconBtn
              btnProps={{
                styletype: 'transparent-hover',
              }}
              icon={FaExternalLinkAlt}
              children={lastName + firstName}
              noneIconColor={'black'}
              hoveredIconColor={Theme.palette.primary}
              circleImgSrc={profileImgUrl}
            />
          </S.HostDetailContainer>
        </S.HostContainer>
      </S.BannerContainer>
      <S.PriceWrapper>
        <Price separated>{ticketInfo.price}</Price>
      </S.PriceWrapper>
      <S.SubmitContainer>
        <S.ReservedPeopleContainer>
          <FaUsers size={'2rem'} />
          <S.ReservedPeople>{ticketInfo.leftCnt}명</S.ReservedPeople>
        </S.ReservedPeopleContainer>
        <S.SubmitBtn
          children={'등록'}
          to={`/events/${eventId}/register/tickets`}
        />
      </S.SubmitContainer>
    </S.HeaderContainer>
  );
}

export default EventHeader;

import React from 'react';

import * as S from './style';
import BasedTemplate from 'pages/BasedTemplate/templates';
import TicketChoice, { Props as TicketChoiceProps } from './TicketChoice';
import TicketPurchase, { Props as TicketPurchaseProps } from './TicketPurchase';

interface Props {
  step: number;
  stepList: React.ReactNode;
  eventSection: React.ReactNode;
  place: React.ReactNode;
  ticketChoiceProps: TicketChoiceProps;
  ticketPurchaseProps: TicketPurchaseProps;
}

const TICKET_CHOICE_STEP = 1;
const TICKET_PURCHASE_STEP = 2;

function EventJoinTemplate({
  step,
  stepList,
  eventSection,
  place,
  ticketChoiceProps,
  ticketPurchaseProps,
}: Props): React.ReactElement {
  return (
    <BasedTemplate hasHeaderLine>
      <S.StepListWrapper>{stepList}</S.StepListWrapper>
      <S.Container>
        <S.ContentContainer>
          {step === TICKET_CHOICE_STEP && (
            <TicketChoice {...ticketChoiceProps} />
          )}
          {step === TICKET_PURCHASE_STEP && (
            <TicketPurchase {...ticketPurchaseProps} />
          )}
          <S.EventContainer>
            {eventSection}
            <S.PlaceWrapper>{place}</S.PlaceWrapper>
          </S.EventContainer>
        </S.ContentContainer>
      </S.Container>
    </BasedTemplate>
  );
}

export default EventJoinTemplate;

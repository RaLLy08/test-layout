import Popup from "reactjs-popup";

import * as S from "./styled";

import ShowMoreSvg from "../img/ShowMore.svg";
import ShowMore from "../popup/ShowMore";

function ListHeader({ channels, totalChannels, nearestPayment, isnearestPaymentToday, settlementPayment, LogoComponent }) {
    return (
        <>
            <S.Wrapper>
                <S.CardTitle>
                    {LogoComponent}
                </S.CardTitle>
                <S.CardContent>
                    <S.ContentLeft>
                        <S.ChannelsValues>
                            <S.ChannelsValuesFirst>
                                {channels}
                            </S.ChannelsValuesFirst>
                            /
                            <S.ChannelsValuesSecond>
                                {totalChannels}
                            </S.ChannelsValuesSecond>
                        </S.ChannelsValues>
                        <S.ChannelsTitle>
                            <S.Title>Кол-во каналов</S.Title>
                        </S.ChannelsTitle>
                    </S.ContentLeft>

                    <S.ContentRight>
                        <S.ContentBox>
                            <S.Value active={isnearestPaymentToday}>
                                {nearestPayment}
                            </S.Value>
                            <S.Title active>Ближайший платеж</S.Title>
                        </S.ContentBox>

                        <S.Separator />

                        <S.ContentBox>
                            <S.Value>{settlementPayment}</S.Value>
                            <S.Title>Расчетный платеж</S.Title>
                        </S.ContentBox>
                    </S.ContentRight>
                </S.CardContent>
                <S.CardActions>
                    <Popup
                        trigger={(open) => (
                            <S.SettingsButton>
                                <S.Img
                                    src={ShowMoreSvg}
                                    width="26px"
                                    height="6px"
                                ></S.Img>
                            </S.SettingsButton>
                        )}
                        offsetX={94}
                        offsetY={2}
                        closeOnDocumentClick
                    >
                        <ShowMore />
                    </Popup>
                </S.CardActions>
            </S.Wrapper>
        </>
    );
}

export default ListHeader;

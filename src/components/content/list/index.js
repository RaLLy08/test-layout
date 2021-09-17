import InstTitleLogo from "../img/InstTitle.svg";
import InstLogo from "../img/InstLogo.svg";
import ShowMoreLogo from "../img/ShowMore.svg";
import * as S from "./styled";
import Popup from "reactjs-popup";
import ShowMore from "../popup/ShowMore";
import ListItem from "../listItem";


function List() {
    return (
        <>
            <S.Wrapper>
                <S.CardTitle>
                    <S.InstImg src={InstLogo}></S.InstImg>
                    <S.InstTitleImg src={InstTitleLogo}></S.InstTitleImg>
                </S.CardTitle>
                <S.CardContent>
                    <S.ContentLeft>
                        <S.ChannelsValues>
                            <S.ChannelsValuesFirst>3</S.ChannelsValuesFirst>/
                            <S.ChannelsValuesSecond>4</S.ChannelsValuesSecond>
                        </S.ChannelsValues>
                        <S.ChannelsTitle>
                            <S.Title>Кол-во каналов</S.Title>
                        </S.ChannelsTitle>
                    </S.ContentLeft>

                    <S.ContentRight>
                        <S.ContentBox>
                            <S.Value active>Cейчас</S.Value>
                            <S.Title active>Ближайший платеж</S.Title>
                        </S.ContentBox>

                        <S.Separator />

                        <S.ContentBox>
                            <S.Value>13 августа 2021</S.Value>
                            <S.Title>Расчетный платеж</S.Title>
                        </S.ContentBox>
                    </S.ContentRight>
                </S.CardContent>
                <S.CardActions>
                    <Popup
                        trigger={(open) => (
                            <S.SettingsButton>
                                <S.SettingsIcon
                                    src={ShowMoreLogo}
                                ></S.SettingsIcon>
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
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem inactive></ListItem>
        </>
    );
}

export default List;

import Popup from "reactjs-popup";

import * as S from "./styled";
import UserPhoto from "./img/Userphoto.svg";
import NotifyRing from "./img/NotifyRing.svg";
import Arrow from "./img/ArrowDown.svg";
import PopupContent from "./popup";

function Header() {
    return (
        <>
            <S.Wrapper>
                <S.Main>
                    <S.MainTitle>Мои интеграций</S.MainTitle>
                </S.Main>
                <S.Right>
                    <S.PeriodTitle>Пробный период</S.PeriodTitle>
                    <S.Balance>
                        <S.BalanceTitle>Баланс:</S.BalanceTitle>
                        <S.BalanceValue>
                            5.327.00
                            <S.BalanceCurrency>&#x20bd;</S.BalanceCurrency>
                        </S.BalanceValue>
                    </S.Balance>
                    <S.Notifications>
                        <S.RingNotifyWrapper>
                            <S.Icon src={NotifyRing} />
                        </S.RingNotifyWrapper>
                    </S.Notifications>
                    <Popup
                        trigger={(open) => (
                            <S.MailWrapper>
                                <S.UserPhotoWrapper>
                                    <S.UserPhotoIcon
                                        src={UserPhoto}
                                    ></S.UserPhotoIcon>
                                </S.UserPhotoWrapper>
                                <S.Mail>
                                    nikiforovdesign@yandex.ru
                                    <S.ArrowIcon
                                        src={Arrow}
                                        up={open}
                                    ></S.ArrowIcon>
                                </S.Mail>
                            </S.MailWrapper>
                        )}
                        offsetX={-24}
                        offsetY={45}
                        closeOnDocumentClick
                    >
                        <PopupContent />
                    </Popup>
                </S.Right>
            </S.Wrapper>
            <S.Divider />
        </>
    );
}

export default Header;

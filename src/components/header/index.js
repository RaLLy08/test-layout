import Popup from "reactjs-popup";

import * as S from "./styled";
import UserPhotoSvg from "./img/Userphoto.svg";
import NotifyRingSvg from "./img/NotifyRing.svg";
import ArrowSvg from "./img/ArrowDown.svg";
import UserPopup from "./popup";
import BurgerSvg from "./img/Burger.svg";

function Header() {
    return (
        <>
            <S.Wrapper>
                <S.Main>
                    <S.BurgerMenu>
                        <S.Img src={BurgerSvg} />
                    </S.BurgerMenu>

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
                        <S.Img src={NotifyRingSvg} width="29px" height="31px" />
                    </S.Notifications>
                    <Popup
                        trigger={(open) => (
                            <S.MailWrapper>
                                <S.UserPhotoWrapper>
                                    <S.Img
                                        src={UserPhotoSvg}
                                        width="32px"
                                        height="32px"
                                    />
                                </S.UserPhotoWrapper>
                                <S.LargeScreen>
                                    <S.Mail>nikiforovdesign@yandex.ru</S.Mail>
                                </S.LargeScreen>
                                <S.SmallScreen>
                                    <S.Mail>Кямиль Н.</S.Mail>
                                </S.SmallScreen>

                                <S.MailAction>
                                    <S.ArrowImgWraper up={open}>
                                        <S.Img
                                            src={ArrowSvg}
                                            width="31px"
                                            height="7px"
                                        />
                                    </S.ArrowImgWraper>
                                </S.MailAction>
                            </S.MailWrapper>
                        )}
                        offsetX={-24}
                        offsetY={45}
                        closeOnDocumentClick
                    >
                        <UserPopup />
                    </Popup>
                </S.Right>
            </S.Wrapper>
            <S.Divider />
        </>
    );
}

export default Header;

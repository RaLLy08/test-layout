import * as S from "./styled";

import SettingsSvg from "../img/Settings.svg";
import InfinitySvg from "../img/Infinity.svg";
import Status from "./Status";
import Popup from "reactjs-popup";
import Settings from "../popup/Settings";

function ListItem({ UserComponent, dialogs, followers, status, paymentDate }) {
    return (
        <S.ItemWrapper inactive={status === "inactive"}>
            <S.Content>
                <S.UserInfo>
                    {UserComponent}
                </S.UserInfo>

                <S.StatusWrapper>
                    <Status status={status} />
                </S.StatusWrapper>
                <S.ItemSeparator />

                <S.DialogsWrapper>
                    <S.DialogsTitle>Кол-во диалогов</S.DialogsTitle>
                    {dialogs ? (
                        <S.DialogsValue>
                            <S.FirstDialogsValue>{dialogs}</S.FirstDialogsValue>
                            /<S.SecondDialogsValue>500</S.SecondDialogsValue>
                        </S.DialogsValue>
                    ) : (
                        <S.Img src={InfinitySvg} width="16px" height="8px" />
                    )}
                </S.DialogsWrapper>

                <S.ItemSeparator />

                <S.PaymentWrapper>
                    {status === "inactive" ? (
                        <S.LinkTitle>Оплатить подписку</S.LinkTitle>
                    ) : (
                        <S.PaymentTitle>Следующий платеж</S.PaymentTitle>
                    )}
                    <S.PaymentValue>{paymentDate}</S.PaymentValue>
                </S.PaymentWrapper>
            </S.Content>
            <S.Actions>
                <Popup
                    trigger={(open) => (
                        <S.SettingsButton>
                            <S.Img
                                src={SettingsSvg}
                                width="18px"
                                height="18px"
                            />
                        </S.SettingsButton>
                    )}
                    offsetX={70}
                    closeOnDocumentClick
                >
                    <Settings />
                </Popup>
            </S.Actions>
        </S.ItemWrapper>
    );
}

export default ListItem;
;
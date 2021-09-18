import * as S from "./styled";
import UserLogoSvg from '../img/UserLogo.svg'
import SettingsSvg from "../img/Settings.svg";
import InfinitySvg from "../img/Infinity.svg";
import Status from "./Status";

function ListItem({ mail, dialogs, followers, status, paymentDate }) {
    return (
        <S.Wrapper inactive={status === "inactive"}>
            <S.Content>
                <S.ContentBox>
                    <S.MailLogo>
                        <S.Img src={UserLogoSvg} width="32px" height="32px" />
                    </S.MailLogo>
                    <S.MailWrapper>
                        <S.Mail>{mail}</S.Mail>
                    </S.MailWrapper>
                </S.ContentBox>
                <S.ContentBox>
                    <S.Followers>{followers}</S.Followers>
                </S.ContentBox>
                <S.ContentBox>
                    <S.StatusWrapper>
                        <Status status={status} />
                    </S.StatusWrapper>
                </S.ContentBox>
                <S.Separator />
                <S.ContentBox>
                    <S.DialogsWrapper>
                        <S.DialogsTitle>Кол-во диалогов</S.DialogsTitle>
                        {dialogs ? (
                            <S.DialogsValue>
                                <S.FirstDialogsValue>
                                    {dialogs}
                                </S.FirstDialogsValue>
                                /
                                <S.SecondDialogsValue>500</S.SecondDialogsValue>
                            </S.DialogsValue>
                        ) : (
                            <S.Img
                                src={InfinitySvg}
                                width="16px"
                                height="8px"
                            />
                        )}
                    </S.DialogsWrapper>
                </S.ContentBox>
                <S.Separator />
                <S.ContentBox>
                    <S.PaymentWrapper>
                        {status === "inactive" ? (
                            <S.PaymentLinkTitle>
                                Оплатить платеж
                            </S.PaymentLinkTitle>
                        ) : (
                            <S.PaymentTitle>Следующий платеж</S.PaymentTitle>
                        )}
                        <S.PaymentValue>{paymentDate}</S.PaymentValue>
                    </S.PaymentWrapper>
                </S.ContentBox>
            </S.Content>
            <S.Actions>
                <S.SettingsButton>
                    <S.Img src={SettingsSvg} width="18px" height="18px" />
                </S.SettingsButton>
            </S.Actions>
        </S.Wrapper>
    );
}

export default ListItem;

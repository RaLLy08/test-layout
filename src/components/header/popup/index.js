import React from "react";
import { Divider } from "../styled";
import UserPhotoLargeSvg from "../img/Userphoto-large.svg";
import * as S from "./styled";


function User() {

    return (
        <S.Wrapper>
            <S.Header>
                <S.HeaderTitle>
                    <S.HeaderName>Привет, Кямиль!</S.HeaderName>
                </S.HeaderTitle>
                <S.HeaderIconWrapper>
                    <S.Img src={UserPhotoLargeSvg} width="56px" height="56px" />
                </S.HeaderIconWrapper>
                <S.HeaderBottom>
                    <S.TextSecondary>nikiforovdesign@yandex.ru</S.TextSecondary>
                </S.HeaderBottom>
            </S.Header>
            <Divider />
            <S.Body>
                <S.Actions>
                    <S.Action>История операции</S.Action>
                    <S.Action>Редактировать профиль</S.Action>
                    <S.Action>Выйти</S.Action>
                </S.Actions>
            </S.Body>
            <Divider />
            <S.Footer>
                <S.TextSecondary>
                    Возникли сложности? Напишите нам
                    <S.Link> hello@followmes.ru </S.Link> или
                    <S.Link> Telegram </S.Link>
                </S.TextSecondary>
            </S.Footer>
        </S.Wrapper>
    );
}

export default User;

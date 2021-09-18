import React from "react";

import {
    AlertWraper,
    AlertText,
    AlertSum,
    AlertTitle,
    AlertAction,
    ArrowLeftUpImg,
    CloseButton,
    Img,
} from "./styled";

import CloseSvg from "../img/Close.svg";
import ArrowLeftUpSvg from "../img/ArrowLeftUp.svg";

function BalanceAlert() {
    return (
        <AlertWraper>
            <AlertTitle>
                <AlertText>
                    Для уравнения подписки пополните баланс на сумму:
                </AlertText>
                <AlertSum> 42 142&#x20bd;</AlertSum>
            </AlertTitle>
            <AlertAction>
                <CloseButton>
                    <Img src={CloseSvg} width="10px" height="10px" />
                </CloseButton>
            </AlertAction>
            <ArrowLeftUpImg src={ArrowLeftUpSvg} />
        </AlertWraper>
    );
}

export default BalanceAlert;

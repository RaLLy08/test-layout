import React from "react";

import {
    AlertWraper,
    AlertText,
    AlertSum,
    AlertTitle,
    AlertAction,
    CloseImg,
    ArrowLeftUpImg,
    CloseButton,
} from "./styled";

import CloseIcon from "../img/Close.svg";
import ArrowLeftUpIcon from "../img/ArrowLeftUp.svg";

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
                    <CloseImg src={CloseIcon} />
                </CloseButton>
            </AlertAction>
            <ArrowLeftUpImg src={ArrowLeftUpIcon}/>
        </AlertWraper>
    );
}

export default BalanceAlert;

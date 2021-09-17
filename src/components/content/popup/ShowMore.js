import React from "react";
import Popup from "reactjs-popup";
import BalanceAlert from "./BalanceAlert";

import { ShowMoreWraper, ShowMoreAction } from "./styled";

function ShowMore() {
    return (
        <ShowMoreWraper>
            <Popup
                trigger={(open) => (
                    <ShowMoreAction>Уровнять платежи каналов</ShowMoreAction>
                )}
            >
                <BalanceAlert />
            </Popup>
            <ShowMoreAction>Перезагрузить все</ShowMoreAction>
            <ShowMoreAction>Отключить все</ShowMoreAction>
            <ShowMoreAction>Удалить все</ShowMoreAction>
        </ShowMoreWraper>
    );
}

export default ShowMore;

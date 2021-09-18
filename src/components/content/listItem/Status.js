import React from "react";

import { Img, StatusIcon, StatusTitle, StatusWrapper } from "./styled";
import StatusRebootSvg from "../img/StatusReboot.svg";
import StatusActiveSvg from "../img/StatusActive.svg";
import StatusInactiveSvg from "../img/StatusInactive.svg";

function Status({ status }) {
    const statuses = {
        active: {
            icon: StatusActiveSvg,
            title: "Активен",
        },
        inactive: {
            icon: StatusInactiveSvg,
            title: "Не оплачен",
        },
        reboot: {
            icon: StatusRebootSvg,
            title: "Перезагрузка",
        },
    };

    return (
        <StatusWrapper>
            <StatusIcon>
                <Img src={statuses[status].icon} width="8px" height="8px" />
            </StatusIcon>
            <StatusTitle>{statuses[status].title}</StatusTitle>
        </StatusWrapper>
    );
}

export default Status;

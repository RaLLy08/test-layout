import React from 'react';
import { List, Icon, ListIconWrapper, ListItem, ListTitle } from "./styled";
import PlusIcon from './img/Plus.svg'
import QuestionIcon from './img/Question.svg'
import IntegrationIcon from "./img/Integration.svg";
import Ring from "./img/Ring.svg";

function MenuList() {
    const [activeIdx, setActive] = React.useState(1)
    const list = React.useMemo(
        () => [
            {
                title: "Новая Интеграция",
                icon: PlusIcon,
                listItemProps: {
                    active: activeIdx === 0,
                },
                listTitleProps: {
                    thick: true,
                },
            },
            {
                title: "Мои Интеграции",
                icon: IntegrationIcon,
                listItemProps: {
                    active: activeIdx === 1,
                },
            },
            {
                title: "Настройка уведомлений",
                icon: Ring,
                listItemProps: {
                    active: activeIdx === 2,
                },
            },
            {
                title: "Помощь",
                icon: QuestionIcon,
                listItemProps: {
                    active: activeIdx === 3,
                },
            },
        ],
        [activeIdx]
    );

    return (
        <List>
            {list.map((item, i) => {
                const listItemProps = item.listItemProps || {};
                const listTitleProps = item.listTitleProps || {};

                return (
                    <ListItem key={i} {...listItemProps} onClick={() => setActive(i)}>
                        <ListIconWrapper>
                            <Icon src={item.icon} />
                        </ListIconWrapper>
                        <ListTitle {...listTitleProps}>
                            {item.title}
                        </ListTitle>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default MenuList;
     
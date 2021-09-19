import ListHeader from "./listHeader";
import {
    ContentWraper,
    Followers,
    Img,
    User,
    UserLogo,
    UserTitle,
    UserWrapper,
    Wrapper,
} from "./styled";
import InstTitleSvg from "./img/InstTitle.svg";
import InstLogoSvg from "./img/InstLogo.svg";
import WpTitleSvg from "./img/WpTitle.svg";
import WpLogoSvg from "./img/WpLogo.svg";
import ListItem from "./listItem/Item";
import AddItem from "./listItem/AddItem";
import UserLogoSvg from "./img/UserLogo.svg";

function Content() {


    return (
        <Wrapper>
            <ContentWraper>
                <ListHeader
                    LogoComponent={
                        <>
                            <Img
                                src={InstLogoSvg}
                                width="56px"
                                height="56px"
                            ></Img>
                            <Img
                                src={InstTitleSvg}
                                width="111px"
                                height="45px"
                            ></Img>
                        </>
                    }
                    channels={3}
                    totalChannels={4}
                    nearestPayment="Сейчас"
                    settlementPayment="13 августа 2021"
                    isnearestPaymentToday
                />
                <ListItem
                    UserComponent={
                        <>
                            <User>
                                <UserLogo>
                                    <Img
                                        src={UserLogoSvg}
                                        width="32px"
                                        height="32px"
                                    />
                                </UserLogo>
                                <UserWrapper>
                                    <UserTitle>@spb.designer</UserTitle>
                                </UserWrapper>
                            </User>

                            <Followers>11K</Followers>
                        </>
                    }
                    paymentDate="11 августа 2021"
                    status="reboot"
                ></ListItem>
                <ListItem
                    UserComponent={
                        <>
                            <User>
                                <UserLogo>
                                    <Img
                                        src={UserLogoSvg}
                                        width="32px"
                                        height="32px"
                                    />
                                </UserLogo>
                                <UserWrapper>
                                    <UserTitle>@spb.designer</UserTitle>
                                </UserWrapper>
                            </User>

                            <Followers>11K</Followers>
                        </>
                    }
                    paymentDate="12 августа 2021"
                    dialogs={230}
                    status="active"
                ></ListItem>
                <ListItem
                    UserComponent={
                        <>
                            <User>
                                <UserLogo>
                                    <Img
                                        src={UserLogoSvg}
                                        width="32px"
                                        height="32px"
                                    />
                                </UserLogo>
                                <UserWrapper>
                                    <UserTitle>@spb.designer</UserTitle>
                                </UserWrapper>
                            </User>

                            <Followers>9K</Followers>
                        </>
                    }
                    paymentDate="5 августа 2021"
                    status="inactive"
                ></ListItem>
                <AddItem active />
            </ContentWraper>
            <ContentWraper>
                <ListHeader
                    LogoComponent={
                        <>
                            <Img
                                src={WpLogoSvg}
                                width="56px"
                                height="56px"
                            ></Img>
                            <Img
                                src={WpTitleSvg}
                                width="111px"
                                height="45px"
                            ></Img>
                        </>
                    }
                    channels={2}
                    totalChannels={3}
                    nearestPayment="11 августа 2021"
                    settlementPayment="13 августа 2021"
                />
                <ListItem
                    UserComponent={
                        <>
                            <User>
                                <UserLogo>
                                    <Img
                                        src={UserLogoSvg}
                                        width="32px"
                                        height="32px"
                                    />
                                </UserLogo>
                                <UserWrapper>
                                    <UserTitle>+7(999) 669 03 40</UserTitle>
                                </UserWrapper>
                            </User>
                        </>
                    }
                    paymentDate="11 августа 2021"
                    status="error"
                ></ListItem>
                <ListItem
                    UserComponent={
                        <>
                            <User>
                                <UserLogo>
                                    <Img
                                        src={UserLogoSvg}
                                        width="32px"
                                        height="32px"
                                    />
                                </UserLogo>
                                <UserWrapper>
                                    <UserTitle>+7(999) 669 03 40</UserTitle>
                                </UserWrapper>
                            </User>
                        </>
                    }
                    paymentDate="11 августа 2021"
                    status="active"
                ></ListItem>
                <AddItem />
            </ContentWraper>
        </Wrapper>
    );
}

export default Content;

import ListHeader from "./listHeader";
import ListItem from "./listItem";
import { ContentWraper, Img, Wrapper } from "./styled";
import InstTitleSvg from "./img/InstTitle.svg";
import InstLogoSvg from "./img/InstLogo.svg";


function Content() {
    // ?? 2 wrapers ///////////////////////
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
                    user="@spb.designer"
                    followers="11K"
                    paymentDate="11 августа 2021"
                    status="reboot"
                ></ListItem>
                <ListItem
                    user="@spb.designer"
                    followers="14K"
                    paymentDate="12 августа 2021"
                    dialogs={230}
                    status="active"
                ></ListItem>
                <ListItem
                    user="@spb.designer"
                    followers="9K"
                    paymentDate="5 августа 2021"
                    status="inactive"
                ></ListItem>
            </ContentWraper>
        </Wrapper>
    );
}

export default Content;

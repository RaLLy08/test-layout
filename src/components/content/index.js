import List from "./list";
import { ContentWraper, Wrapper } from "./styled";



function Content() {
    // ?? 2 wrapers ///////////////////////
    return (
        <Wrapper>
            <ContentWraper>
                <List />
            </ContentWraper>
        </Wrapper>
    );
}

export default Content;

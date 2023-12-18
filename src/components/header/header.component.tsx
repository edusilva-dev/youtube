import { GenericCenteredDiv, Header } from "./header.styles"
import { FaYoutube as YoutubeIcon} from "react-icons/fa";

export const HeaderComponent = () => {
    return (
        <Header>
            {/* start */}
            <GenericCenteredDiv>
                <YoutubeIcon size={40}/>
                <span>YouTube</span>
            </GenericCenteredDiv>
            {/* center [search input] */}
            <div>

            </div>
            {/* end [login + options] */}
            <div>

            </div>
        </Header>
    )
}
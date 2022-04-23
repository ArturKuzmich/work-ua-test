import './index.scss'
import { ReactComponent as Icon } from "../../assets/images/info.svg";


const Title = ({text, icon = false, Tag, size }) => {
    return(
        <Tag className={`page-title ${size}`}>
            <>
                {text}
                {icon &&
                    <Icon />
                }
            </>
        </Tag>
    )
}

export default Title
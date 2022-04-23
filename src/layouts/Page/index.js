import Title from "../../components/Title";
import './index.scss'

const Page = ({title, actionCancel = null, actionButton = null, actionButtonTop = false, actionButtonBottom = false, titleSize, titleIcon, children, titleTag, Tag = 'div' }) => {
    return(
        <Tag className='page-view'>
            <div className="page-view-inner">
                <div className="inner-head">
                    <Title Tag={titleTag} icon={titleIcon} size={titleSize} text={title} />
                    {actionButtonTop && (
                        <div>
                            {actionButton}
                        </div>
                    )}
                </div>
                <div className="inner-content">
                    {children}
                </div>
                {actionButtonBottom && (
                    <div className="content-action-bottom">
                        {actionButton}
                        {actionCancel &&
                            <div className='action-cancel'>
                                <span>

                                </span>
                                <div className='action'>
                                    {actionCancel}
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div>

        </Tag>
    )
}

export default Page
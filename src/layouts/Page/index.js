import Title from "../../components/Title";
import './index.scss'

const Page = ({submitForm, style, pageBg = '#FFFFFF', title, actionCancel = null, actionButton = null, actionButtonTop = false, actionButtonBottom = false, titleSize, titleIcon, children, titleTag, Tag = 'div' }) => {
    return(
        <Tag
            onSubmit={submitForm ? submitForm : null}
            className='page-view'
            style={{
                background: pageBg
            }}
        >
            <div className="page-view-inner">
                <div className="inner-head">
                    <Title Tag={titleTag} icon={titleIcon} size={titleSize} text={title} />
                    {actionButtonTop && (
                        <>
                            {actionButton}
                        </>
                    )}
                </div>
                <div
                    className="inner-content"
                    style={style}
                >
                    {children}
                    {actionButtonBottom && (
                        <div className="content-action-bottom">
                            {actionButton}
                            {actionCancel &&
                                <div className='action-cancel'>
                                <span>
                                    или
                                </span>
                                    <div className='action'>
                                        {actionCancel}
                                    </div>
                                </div>
                            }
                        </div>
                    )}
                </div>

            </div>

        </Tag>
    )
}

export default Page
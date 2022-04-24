import Title from "../../components/Title";
import './index.scss'
import ErrorContainer from "../../components/ErrorContainer";

const Page = ({errorTitle, errorDesc, error, submitForm, style, pageBg = '#FFFFFF', title, actionCancel = null, actionButton = null, actionButtonTop = false, actionButtonBottom = false, titleSize, titleIcon, children, titleTag, Tag = 'div' }) => {


    const size = (val) =>
        // Если val массив
        Array.isArray(val)
            ? val.length
            : // Если val объект
            val && typeof val === "object"
                ? val.size || val.length || Object.keys(val).length
                : // Если val строка
                typeof val === "string"
                    ? new Blob([val]).size
                    : 0;


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
                {size(error) > 0 &&
                    <ErrorContainer errorTitle={errorTitle} errorDesc={errorDesc}/>
                }
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
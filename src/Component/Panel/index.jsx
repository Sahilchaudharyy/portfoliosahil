import React from 'react'

const Panel = ({ children, heading }) => {
    return (
        <div className="container full">
            <div className="row">
                <div className="col-md-12">
                    <div classname="sect-gap grey">
                        <div classname="container">
                            <div classname="row">
                                <div className="col-md-12">
                                    <div className="title style1">
                                        <h2>{heading}</h2>
                                        <p>UI &amp; UX Developer</p>
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div></div>
    )
}

export default Panel
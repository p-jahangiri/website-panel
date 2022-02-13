import React from 'react';

const PostInfo = ({ info }) => {
    console.log(info);
    return (
        <div className="col-md-4 p-3">
            <div className="card">
                <div className="card-header bg-primary text-white pb-1 card-title">
                    {info.title}
                </div>
                <div className="card-body ">
                    <p>{info.body}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn btn-secondary btn -sm">کامنت ها</button>
                </div>
                <p>
                    <a
                        class="btn btn-primary"
                        data-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        Link with href
                    </a>
                    <button
                        class="btn btn-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        Button with data-target
                    </button>
                </p>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        Some placeholder content for the collapse component. This panel is hidden by
                        default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostInfo;

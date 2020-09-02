import React from 'react';

const Content = ({ contents, values, }) => {
    return (
        <div style={{ width: "70%" }} class="card text-center mx-auto mb-5 shadow-lg">
            <div class="card-body">
                <h2 class="card-title pt-3">Speaker Name: {contents[values].name}</h2>
                <h4 class="card-text mt-4 pb-5">Session Name: "{contents[values].event}"</h4>
            </div>
        </div>
    )
}

export default Content;
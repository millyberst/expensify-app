// Higher Order Component (HOC) - a component (HOC) that renders another component
// Reuse code
//  Render hijacking
// Prop maniputation
// Abstrate state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const WithAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info. Please don't share</p>
            <WrappedComponent {...props}/>
        </div>
    );
}
const RequireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to see the Info</p> }
        </div>
    );
}
const AdminInfo = WithAdminWarning(Info);
const AuthInfo = RequireAuthentication(Info);

//ReactDOM.render(<AdminInfo info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details"/>, document.getElementById('app'));
import React from 'react'
import styled from 'styled-components';
import Sidebar from '../component/sidebar/Sidebar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Mail from '../component/Mail/Mail';
import MailList from '../component/MailList/MailList';

export const EmailBodyContainer = styled.div`
    display: flex;
`;

function EmailBodyPage() {
    return (
        <Router>
            <EmailBodyContainer>
                <Sidebar />
                <Switch>
                    <Route path="/mail">
                        <Mail />
                    </Route>
                    <Route path="/">
                        <MailList/>
                    </Route>
                </Switch>
            </EmailBodyContainer>
        </Router>
    )
}


export default EmailBodyPage;

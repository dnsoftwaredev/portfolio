import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NavigationBar from './NavigationBar';
import Landing from './aboutMe/Landing';
import Projects from './aboutMe/Projects';
import WorkExperience from './aboutMe/WorkExperience';

class App extends React.Component {
    const;

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <BrowserRouter>
                        <div>
                            <NavigationBar />
                            <Switch>
                                <Route path="/portfolio" exact component={Landing} />
                                <Route path="/who" exact component={Landing} />
                                <Route path="/projects" exact component={Projects} />
                                <Route path="/workexperience" exact component={WorkExperience} />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;;
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { GlobalStyle, Container, ScreenWrapper, AnimationWrapper } from './globalStyles';
import { rootStore } from './store/reducers/rootReducer';
import { appLoaderHide, appContentShow } from './store/actions/appActions';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Main from './screens/Main';
import Skills from './screens/Skills';
import Works from './screens/Works';
import Contacts from './screens/Contacts';

const routes: Array<{ path: string, Component: React.FC }> = [
    {path: '/', Component: Main},
    {path: '/skills', Component: Skills},
    {path: '/works', Component: Works},
    {path: '/contacts', Component: Contacts},
]

const App: React.FC = () => {
    const dispatch = useDispatch();
    const { showContent } = useSelector((state: rootStore) => state.app);

    useEffect(() => {
        setTimeout(() => {
            dispatch(appLoaderHide())
        }, 1000);
        setTimeout(() => {
            dispatch(appContentShow())
        }, 1500);
    }, [])

    return (
        <Container>
            <GlobalStyle />
            <Loader />
            <Navbar />
            <Switch>
                <ScreenWrapper {...{showContent}}>
                    {routes.map(({ path, Component }) => (
                        <Route key={path} path={path} exact>
                        {({ match }) => (
                            <CSSTransition in={match != null} timeout={500} classNames='page' unmountOnExit>
                                <AnimationWrapper className='page'>
                                    <Component />
                                </AnimationWrapper>
                            </CSSTransition>
                        )}
                        </Route>
                    ))}
                </ScreenWrapper>
            </Switch>
        </Container>

    );
}

export default App;
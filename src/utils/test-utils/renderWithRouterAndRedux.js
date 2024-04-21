import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../services/redux/store';
import { render } from '@testing-library/react';

const renderWithRouterAndRedux = (ui) => {
    const Wrapper = ({ children }) => {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    { children }
                </BrowserRouter>
            </Provider>
        );
    };
    return {
        user: userEvent.setup(),
        ...render(ui, { wrapper: Wrapper }),
    };
};

export default renderWithRouterAndRedux;
import React from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { rootStore } from '../../store/reducers/rootReducer';
import { LoaderWrapper, LoaderBlock } from './Loader.style';

const Loader: React.FC = () => {
    const { showLoader } = useSelector((state: rootStore) => state.app);
    return createPortal(
        <LoaderWrapper {...{showLoader}}>
            <LoaderBlock />
        </LoaderWrapper>,
        document.querySelector('#loader')!
    );
};

export default Loader;
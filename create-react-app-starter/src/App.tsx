import React, { FC } from 'react';
import './sass/styles';
import Header from "./components/header";
import FeaturesSplit from "./components/featuresplit";
import Title from "./components/title";


const App: FC = () => {
    return (
        <div>
            <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Title/>
            <br/>
            <br/>
            <br/>
            <br/>
            <FeaturesSplit />

        </div>

    );
};
export default App;


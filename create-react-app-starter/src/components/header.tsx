import React, {FC} from 'react'
import Connectwallet from "./connectwallet";
const Header = () => {

    return (
<Content/>
)
}

export default Header
const Content: FC = () => {
    return (
        <div className="header">

            <div className="header-right">
                <a className="" href="">Discord</a>
                <a href="#contact">Whitepaper</a>
                <a href="https://the-sacred-coin-dao.floppylabs.io/">Staking</a>
                <a href="#contact">Raffle</a>
                <a href="#about"><Connectwallet/></a>

            </div>

        </div>


    );
};
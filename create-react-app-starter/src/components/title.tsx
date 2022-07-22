import React, {FC} from 'react'
const Title = () => {

    return (
        <Content />
    )
}

export default Title

const Content: FC = () => {
    return (
        <div className="container">
            Let's
            <div className="flip">
                <div><div>Flip</div></div>
                <div><div>Win</div></div>
                <div><div>Own</div></div>
            </div>
            a sacred coin!
        </div>


    );
};
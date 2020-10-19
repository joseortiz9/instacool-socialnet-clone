import React from "react";
import Footer from "./footer.comp";

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px',
    marginBottom: '10px'
}

interface IPostProps {
    image: string
}

export default class Post extends React.Component<IPostProps> {

    public render() {
        const { image } = this.props;
        return (
            <div style={style}>
                <img src={image} alt="kitten1" />
                <Footer />
            </div>
        );
    }
}
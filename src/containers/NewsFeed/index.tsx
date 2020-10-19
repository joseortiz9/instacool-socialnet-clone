import React from "react";
import Post from "../../components/posts/post.comp";
import Container from "../../components/container.comp";

export default class NewsFeed extends React.Component {

    public render() {
        return (
            <Container center={false}>
                <div style={{ margin: '0 auto' }}>
                    <Post image={'http://placekitten.com/300/200'} />
                    <Post image={'http://placekitten.com/300/200'} />
                    <Post image={'http://placekitten.com/300/200'} />
                    <Post image={'http://placekitten.com/300/200'} />
                </div>
            </Container>
        );
    }
}
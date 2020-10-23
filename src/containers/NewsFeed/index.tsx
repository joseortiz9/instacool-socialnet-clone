import React from "react";
import Post from "../../components/posts/post.comp";
import Container from "../../components/container.comp";
import { connect } from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {register as registerThunk} from "../../ducks/Users";
import {bindActionCreators} from "redux";
import * as postsDuck from '../../ducks/Posts';


interface INewsFeedProps {
    fetchPosts: () => void
    fetched: boolean
    loading: boolean
    data: postsDuck.IDataPosts
}

interface IPostActions {
    like: (id: string) => void
    share: (id: string) => void
}

class NewsFeed extends React.Component<INewsFeedProps & IPostActions> {

    constructor(props: INewsFeedProps & IPostActions) {
        super(props);
        const { fetchPosts, fetched } = props
        if (fetched) {
            return
        }
        fetchPosts();
    }

    private handleLike = (id: string) => () => {
        const { like } = this.props
        like(id)
    }

    private handleShare = (id: string) => () => {
        const { share } = this.props
        share(id)
    }

    public render() {
        const { data } = this.props
        return (
            <Container center={false}>
                {
                    Object.keys(data).map(x => {
                        const post = data[x]
                        return (
                            <div key={x} style={{ margin: '0 auto' }}>
                                <Post like={this.handleLike(x)} share={this.handleShare(x)} image={post.imageURL} />
                            </div>
                        )
                    })
                }
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => {
    const { Posts: { data, fetched, fetching } } = state
    const loading = fetching || !fetched
    return {
        data,
        fetched,
        loading
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => bindActionCreators(postsDuck, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)
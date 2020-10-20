import React from "react";
import { connect } from "react-redux";

import Card from "../../components/card.comp";
import Title from "../../components/title.comp";
import Container from "../../components/container.comp";
import LoginForm from "../../components/loginform.comp";
import { login as loginThunk, ILogin } from '../../ducks/Users';

interface ILoginProps {
    login: (a: ILogin) => void
}

class Login extends React.Component<ILoginProps> {
    public render() {
        const { login } = this.props
        return(
            <Container center={true}>
                <Card>
                    <Title>Iniciar Sesión</Title>
                    <LoginForm onSubmit={login} />
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => state

const mapDispatchToProps = (dispatch: any) => ({
    login: (payload: any) => dispatch(loginThunk(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
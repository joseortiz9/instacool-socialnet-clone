import React from "react";
import { Link } from "react-router-dom";

import Card from "../../components/card.comp";
import Title from "../../components/title.comp";
import Container from "../../components/container.comp";
import RegisterForm from "../../components/registerform.comp";
import {ILogin, register as registerThunk} from "../../ducks/Users";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";

interface IRegisterProps {
    register: (a: ILogin) => void
}

class Register extends React.Component<IRegisterProps> {
    public render() {
        const { register } = this.props
        return(
            <Container center={true}>
                <Card>
                    <Title>Registro</Title>
                    <RegisterForm onSubmit={register} />
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = (state: any) => state

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    register: (payload: any) => dispatch(registerThunk(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
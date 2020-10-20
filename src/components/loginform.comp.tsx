import * as React from "react";
import { Component } from "react";
import Input from "./input.comp";
import Button from "./button.comp";
import Center from "./center.comp";
import { Link } from "react-router-dom";
import { reduxForm, InjectedFormProps , Field} from 'redux-form';

class LoginForm extends Component<InjectedFormProps> {
    public render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Field label='Correo' placeholder='Correo' name='email' type='email' componen={Input} />
                <Field label='Contraseña' placeholder='Contraseña' name='password' type='password' componen={Input} />
                <Button block={true}>Enviar</Button>
                <Center>
                    <Link to='/register'>Ir al registro</Link>
                </Center>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
})(LoginForm)


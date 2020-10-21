import React from "react";
import { Link } from "react-router-dom";

import Card from "../../components/card.comp";
import Title from "../../components/title.comp";
import Input from "../../components/input.comp";
import Button from "../../components/button.comp";
import Center from "../../components/center.comp";
import Container from "../../components/container.comp";
import {Field} from "redux-form";

export default class Register extends React.Component {
    public render() {
        return(
            <Container center={true}>
                <Card>
                    <Title>Registro</Title>
                    <Field label='Correo' placeholder='Correo' name='email' type='email' component={Input} />
                    <Field label='Contraseña' placeholder='Contraseña' name='password' type='password' component={Input} />
                    <Button block={true}>Enviar</Button>
                    <Center>
                        <Link to='/'>Iniciar Sesión</Link>
                    </Center>
                </Card>
            </Container>
        );
    }
}
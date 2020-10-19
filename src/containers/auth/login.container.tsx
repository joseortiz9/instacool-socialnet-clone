import React from "react";
import { Link } from 'react-router-dom';

import Card from "../../components/card.comp";
import Title from "../../components/title.comp";
import Input from "../../components/input.comp";
import Button from "../../components/button.comp";
import Center from "../../components/center.comp";
import Container from "../../components/container.comp";

export default class Login extends React.Component {
    public render() {
        return(
            <Container center={true}>
                <Card>
                    <Title>Iniciar Sesión</Title>
                    <Input label="Correo" placeholder="Correo" />
                    <Input label="Contraseña" placeholder="Contraseña" />
                    <Button block={true}>Enviar</Button>
                    <Center>
                        <Link to='/register'>Ir al registro</Link>
                    </Center>
                </Card>
            </Container>
        );
    }
}
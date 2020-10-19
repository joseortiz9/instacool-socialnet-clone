import React from "react";
import ProfileImg from "../../components/profileImg.comp";
import Button from "../../components/button.comp";
import Card from "../../components/card.comp";

const style = {
    container: {
        padding: '15px',
    },
    row: {
        justifyContent: 'space-between',
        display: 'flex',
        marginBottom: '10px'
    }
}

export default class Profile extends React.Component {
    public render() {
        return (
            <div style={style.container}>
                <div style={style.row}>
                    <ProfileImg />
                    <Button>Agregar</Button>
                </div>
                <div style={style.row}>
                    <Card><img src='http://placekitten.com/120/120' alt='kitten1' /></Card>
                    <Card><img src='http://placekitten.com/120/120' alt='kitten2' /></Card>
                    <Card><img src='http://placekitten.com/120/120' alt='kitten3' /></Card>
                </div>
            </div>
        );
    }
}
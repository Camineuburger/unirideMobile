import React from "react";
import balls from '../assets/img/balls.png'
import logo from '../assets/img/logo.png'
import { Button } from 'react-bootstrap';

const Login = () => {

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '18% 10% 25% 27% 20%',
                background: '#eef1f4'
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${balls})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                }}
            />

            <div
                style={{
                    color: '#AF1B3F',
                    fontWeight: '900',
                    fontSize: '25pt',
                    textShadow: 'rgb(0 0 0 / 39%) 0.1em 0.1em 0.2em',
                    textAlign: 'center',
                }}
            >
                Seja bem vindo(a) ao UNIRIDE
            </div>


            <div id='title-uniride'
                style={{
                    alignSelf: 'center',
                    justifySelf: 'center',
                    backgroundImage: `url(${logo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: '19%',
                    height: '100%',
                    width: '100%',
                }}
            />

            <div
                style={{
                    display: 'grid',
                    marginRight: '10%',
                    gap: '3%',
                    marginLeft: '10%',
                    height: '100%'
                }}
            >
                <input
                    type={'email'}
                    placeholder={'Email'}
                    style={{
                        borderRadius: '40px',
                        border: 'none',
                        background:'#ffffff',
                        boxShadow: '3px 3px 3px #0000005e',
                        height: '84%',
                        paddingLeft: '25px',
                    }}
                />

                <input
                    type={'password'}
                    placeholder={'Senha'}
                    style={{
                        borderRadius: '40px',
                        border: 'none',
                        background:'#ffffff',
                        boxShadow: '3px 3px 3px #0000005e',
                        height: '84%',
                        paddingLeft: '25px',
                    }}
                />

                <span
                    style={{
                        textDecoration: 'underline',
                        marginRight: '6%',
                        textAlign: 'end',
                        marginTop: '-15px',
                        fontSize: '11pt',
                    }}
                >
                    Esqueceu a senha?
                </span>
            </div>

            <div id='inicial-btn'
                style={{
                    placeSelf: 'center',
                    display: 'inline-grid',
                    width: '100%',
                    height: '100%',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                }}
            >
                <Button
                    style={{
                        backgroundColor: '#AF1B3F',
                        borderRadius: '30px',
                        fontSize: '15pt',
                        fontWeight: '700',
                        width: '10em',
                        height: '63px',
                        borderColor: 'unset'
                    }}
                >
                    ENTRAR
                </Button>

                <span
                    style={{
                        textDecoration: 'underline',
                        textAlign: 'center',
                        fontSize: '11pt',
                        marginBottom: '44%',
                    }}
                >
                    Cadastre-se aqui!
                </span>
            </div>
        </div>
    )
}

export default Login;
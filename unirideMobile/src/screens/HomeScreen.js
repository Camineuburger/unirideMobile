import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import logo from '../assets/img/logo.png'
import Login from '../screens/Login'

const HomeScreen = () => {

  const [showLogin, setShowLogin] = useState(false);
  console.log(showLogin);

  return (
    <div
      style={{
        height: '100%',
        background: '#eef1f4'
      }}
    >
      {
        showLogin ?
        <Login/>
        :
        <div
          style={{
            height: '100vh',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '8% 6% 64% 22%',
          }}
        >
          <div id='btn-login'
            style={{
              justifySelf: 'end',
              marginRight: '15px',
              alignSelf: 'center',
            }}
          >
            <a
              onClick={() => setShowLogin(true)}
              style={{
                textDecoration: 'unset',
                color: '#AF1B3F',
                fontSize: '15pt',
                fontWeight: 'bold',
                textShadow: '#7a6d6d 0.1em 0.1em 0.2em'
              }}
            >
              Entrar
            </a>
          </div>

          <div>
            <span
              style={{
                color: '#AF1B3F',
                fontWeight: '900',
                fontSize: '25pt',
                textShadow: 'rgb(0 0 0 / 39%) 0.1em 0.1em 0.2em',
                marginLeft: '3%'
              }}
            >
              UNIRIDE
            </span>
          </div>
  
          <div id='title-uniride'
            style={{
              alignSelf: 'center',
              justifySelf: 'center',
              backgroundImage: `url(${logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right',
              backgroundSize: '90%',
              height: '100%',
              width: '100%',
            }}
          />
  
          <div id='inicial-btn'
            style={{
              alignSelf: 'center',
              justifySelf: 'center',
            }}
          >
            <Button
              style={{
                backgroundColor: '#AF1B3F',
                borderRadius: '30px',
                fontSize: '15pt',
                fontWeight: '700',
                width: '8em',
                height: '50px',
                borderColor: 'unset'
              }}
            >
              Iniciar
            </Button>
          </div>
        </div>
      }
    </div>
  );
}

export default HomeScreen;
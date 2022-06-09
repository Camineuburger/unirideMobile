import React from "react";
import '../../src/style.scss'

const Login = () => {

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '20% 20% 20% 20% 20%',
            }}
        >
            <div>
                <div className="ball_1"></div>
                <div className="ball_2"></div>
            </div>
            <div>Teste2</div>
            <div>Teste3</div>
            <div>Teste4</div>
            <div>Teste5</div>
        </div>
    )
}

export default Login;
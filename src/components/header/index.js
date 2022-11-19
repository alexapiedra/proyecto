
import React from "react";
import { Alert } from 'react-bootstrap';


const Aux = () => {
    return (
        <div>
            <h3>comida</h3>
            <h1>Hola soy el header 12345</h1>
            <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                </p>
            </Alert>
            <h2>soy un gato</h2>
            <h3>alexandra</h3>
            <p>el griego: penta, cinco y grama, escribir. Es donde se escriben las notas y signos musicales. Consta de cinco líneas horizontales, equidistantes y rectas, y cuatro espacios, que se enumeran de abajo hacia arriba.
            </p>
            <h2>perro</h2>
            <p>angel ya camina</p>
        </div>
    );
};

export default Aux;

import Link from "next/link";
import React from "react";
import { Container, Grid, Icon, Segment } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <h4>Información</h4>
              <p>Tu descripción del sitio web.</p>
            </Grid.Column>
            <Grid.Column width={4}>
              <h4>Enlaces útiles</h4>
              <ul>
                <li>
                  <a href="#inicio">Inicio</a>
                </li>
                <li>
                  <a href="#servicios">Servicios</a>
                </li>
                <li>
                  <a href="#nosotros">Nosotros</a>
                </li>
                <li>
                  <a href="#contacto">Contacto</a>
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column width={4}>
              <h4>Síguenos en redes sociales</h4>
              <div>
              <Link
                  href="https://whatsapp.com/tu-perfil-de-twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    name="whatsapp"
                    size="big"
                    link
                    style={{ color: "white" }}
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/tu-pagina-de-facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    name="facebook"
                    size="big"
                    link
                    style={{ color: "white" }}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/tu-perfil-de-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    name="instagram"
                    size="big"
                    link
                    style={{ color: "white" }}
                  />
                </Link>
                <Link
                  href="https://twitter.com/tu-perfil-de-twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    name="twitter"
                    size="big"
                    link
                    style={{ color: "white" }}
                  />
                </Link>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <h4>Contacto</h4>
              <p>San Martin 989898</p>
              <p>Tu número de teléfono</p>
              <p>Tu dirección de correo electrónico</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;

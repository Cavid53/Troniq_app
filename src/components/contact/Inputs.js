import React from "react";
import "../../assets/styles/contactStyles/contact.css";
import { Col, Button, Form, FormGroup, Input } from "reactstrap";

const ContactInput = () => {
  return (
    <div className="input-part">
      <Form>
        <FormGroup row>
          <Col sm={6}>
            <Input
              className="contact-input"
              type="name"
              name="name"
              id="nameInput"
              placeholder="Ad ve soyadiniz"
            />
          </Col>
          <Col sm={6}>
            <Input
              className="contact-input"
              type="email"
              name="email"
              id="emailInput"
              placeholder="E-mail"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
            <Input
              className="contact-input"
              type="subject"
              name="subject"
              id="subjectInput"
              placeholder="Bashliq"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
            <Input
              className="contact-input-text"
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="Movzu"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Button className="input-button">Gonder</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default ContactInput;

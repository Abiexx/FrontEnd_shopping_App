import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function SelectUserRoles() {
  const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();


  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleContinueClick = () => {
    // TODO: handle continue button click
    if (selectedRole === 'BUYER') {
      console.log('Selected role:', selectedRole);
      navigate(`/signup`, { state: { role: selectedRole } });
      return;
    } else
    console.log('Selected role:', selectedRole);
    navigate(`/checkoutform`, { state: { role: selectedRole } });

  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={6}>
          <h2 className="mb-3 text-center">What Role You Want to Register as?</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                id="buyer-radio"
                label=" BUYER"
                value="BUYER"
                checked= {selectedRole === 'BUYER'}
                onChange= {handleRoleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                id="seller-radio"
                label=" SELLER"
                value="SELLER"
                checked= {selectedRole === 'SELLER'}
                onChange= {handleRoleChange}
              />
            </Form.Group>

            <Button variant="primary" onClick = {handleContinueClick} disabled={!selectedRole}>
              Continue 
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SelectUserRoles;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form, InputGroup, FormControl } from "react-bootstrap"; // Retain Bootstrap for styling

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [conversionRate, setConversionRate] = useState(null);
  const [result, setResult] = useState(null);
  const [currencies, setCurrencies] = useState([]);

  const apiKey = "981482e9544dd4d9695b9ce1";  // API Key
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  useEffect(() => {
    const fetchConversionRates = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCurrencies(Object.keys(data.conversion_rates));
        setConversionRate(data.conversion_rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching the conversion rates", error);
      }
    };

    fetchConversionRates();
  }, [fromCurrency, toCurrency ,apiUrl]);

  useEffect(() => {
    if (conversionRate) {
      setResult((amount * conversionRate).toFixed(2));
    }
  }, [amount, conversionRate]);

  return (
    <Container className="my-5" style={{ background: "transparent" }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg p-4" style={{ borderRadius: '15px', boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4" style={{ fontSize: '2rem', fontWeight: '700', color: '#2c3e50' }}>
                Currency Converter
              </Card.Title>

              <Form>
                <Form.Group controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      min="1"
                      className="form-control-lg"
                      style={{
                        borderRadius: '12px',
                        padding: '15px',
                        border: '2px solid #2980b9',
                        fontSize: '18px',
                      }}
                    />
                    <InputGroup.Text style={{
                      background: '#2980b9',
                      color: 'white',
                      fontWeight: '600',
                      borderRadius: '12px',
                    }}>
                      {fromCurrency}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="fromCurrency">
                  <Form.Label>From Currency</Form.Label>
                  <Form.Control
                    as="select"
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    style={{
                      borderRadius: '12px',
                      padding: '10px',
                      border: '2px solid #2980b9',
                      fontSize: '16px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      transition: 'border 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.border = '2px solid #3498db'}
                    onBlur={(e) => e.target.style.border = '2px solid #2980b9'}
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="toCurrency">
                  <Form.Label>To Currency</Form.Label>
                  <Form.Control
                    as="select"
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    style={{
                      borderRadius: '12px',
                      padding: '10px',
                      border: '2px solid #2980b9',
                      fontSize: '16px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      transition: 'border 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.border = '2px solid #3498db'}
                    onBlur={(e) => e.target.style.border = '2px solid #2980b9'}
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Button
                  variant="primary"
                  className="w-100 mt-4"
                  disabled={!conversionRate}
                  style={{
                    padding: '14px',
                    fontSize: '18px',
                    borderRadius: '12px',
                    background: '#3498db',
                    border: 'none',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#2980b9'}
                  onMouseLeave={(e) => e.target.style.background = '#3498db'}
                >
                  Convert
                </Button>
              </Form>

              <div className="mt-4 text-center">
                {result !== null ? (
                  <h3 style={{
                    fontWeight: '500',
                    color: '#2c3e50',
                    fontSize: '1.5rem',
                    transition: 'color 0.3s ease',
                  }}>
                    {amount} {fromCurrency} = {result} {toCurrency}
                  </h3>
                ) : (
                  <p style={{ color: '#888', fontSize: '1rem' }}>Loading conversion rate...</p>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrencyConverter;

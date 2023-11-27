import React, { useState } from 'react';

const Temperatura = () => {
      const [celsius, setCelsius] = useState('');
        const [fahrenheit, setFahrenheit] = useState('');

          const handleCelsiusChange = (e) => {
                const celsiusValue = e.target.value;
                    setCelsius(celsiusValue);
                        setFahrenheit(celsiusValue !== '' ? (celsiusValue * 9) / 5 + 32 : '');
          };

            const handleFahrenheitChange = (e) => {
                    const fahrenheitValue = e.target.value;
                        setFahrenheit(fahrenheitValue);
                            setCelsius(fahrenheitValue !== '' ? ((fahrenheitValue - 32) * 5) / 9 : '');
            };

              return (
                    <div>
                          <label>
                                  Celsius:
                                          <input
                                                    type="number"
                                                              value={celsius}
                                                                        onChange={handleCelsiusChange}
                                                                                  placeholder="Enter Celsius"
                                                                                          />
                                                                                                </label>
                                                                                                      <br />
                                                                                                            <label>
                                                                                                                    Fahrenheit:
                                                                                                                            <input
                                                                                                                                      type="number"
                                                                                                                                                value={fahrenheit}
                                                                                                                                                          onChange={handleFahrenheitChange}
                                                                                                                                                                    placeholder="Enter Fahrenheit"
                                                                                                                                                                            />
                                                                                                                                                                                  </label>
                                                                                                                                                                                      </div>
              );
};

export default Temperatura;
              )
            }
          }
}
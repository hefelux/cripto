import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  margin-bottom: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  const [criptoMoneda, SelectCriptoMonedas] = useSelectMonedas(
    "Elige tu CriptoMoneda",
    criptos
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

      const resp = await fetch(url);
      const result = await resp.json();
      const data = result.Data;

      var arrayCriptos = [];

      if (Object.keys(data).length != 0) {
        arrayCriptos = data.map((cripto) => {
          const coinInfo = cripto.CoinInfo;

          const newCoin = {
            id: coinInfo.Name,
            name: coinInfo.FullName,
          };

          return newCoin;
        });
      }

      setCriptos(arrayCriptos);
    };

    consultarApi();
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptoMoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({ moneda, criptoMoneda });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={HandleSubmit}>
        <SelectMonedas />
        <SelectCriptoMonedas />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;

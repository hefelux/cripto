import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  display: flex;
  gap: 2rem;
`;

const Texto = styled.p`
  font-size: 17px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.div`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
  display: block;
  height: 120px;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  const imageUrl = `https://cryptocompare.com/${IMAGEURL}`;

  return (
    <Contenedor>
      <Imagen src={imageUrl} alt="Image Cripto" />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;

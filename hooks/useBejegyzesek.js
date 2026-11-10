import { useEffect, useState } from 'react';

const mintaLista = [
  { cim: 'Tesco', hely: 'Eger', kedvenc: false },
  { cim: 'Jankó', hely: 'Eger', kedvenc: false },
  { cim: 'Lidl', hely: 'Eger', kedvenc: true },
];

export default function useBejegyzes() {
  const [utinaplo, setUtinaplo] = useState([]);
  const [betolt, setBetolt] = useState(true);

  useEffect(() => {
    if (utinaplo.length === 0) {
      setUtinaplo(mintaLista);
    }
    setBetolt(false);
  }, [utinaplo.length]);
  function ujBejegyzes(cim, hely) {
    setUtinaplo((e) => [...e, { cim, hely, kedvenc: false }]);
  }
  function kedvencValtas(index) {
    setUtinaplo((e) =>
      e.map((elem, i) =>
        i === index
          ? {
              ...elem,
              kedvenc: !elem.kedvenc,
            }
          : elem,
      ),
    );
  }
  return {
    utinaplo,
    betolt,
    ujBejegyzes,
    kedvencValtas,
  };
}

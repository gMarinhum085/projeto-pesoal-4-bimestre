let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let interval = null;

const formatTime = () => {
  return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(milisegundos).padStart(3, '0')}`;
};

const iniciarCronometro = () => {
  if (!interval) {
    interval = setInterval(() => {
      milisegundos += 10;
      if (milisegundos === 1000) {
        milisegundos = 0;
        segundos += 1;
      }
      if (segundos === 60) {
        segundos = 0;
        minutos += 1;
      }
      if (minutos === 60) {
        minutos = 0;
        horas += 1;
      }
      document.getElementById('cronometro').innerText = formatTime();
    }, 10);
  }
};

const pararCronometro = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

const resetarCronometro = () => {
  pararCronometro();
  milisegundos = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;
  document.getElementById('cronometro').innerText = formatTime();
};

export default function Cronometro() {
  return (
    <div>
      <h1>Cronômetro</h1>
      <p id="cronometro">00:00:00:000</p>
      <button id="verde" onClick={iniciarCronometro}>Iniciar</button>
      <button id="vermelho" onClick={pararCronometro}>Parar</button>
      <button id="laranja" onClick={resetarCronometro}>Resetar</button>
    </div>
  );
}

AOS.init();

const dataDoEvento = new Date("May 28, 2024 19:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date ();
    const timeStampAtual = agora.getTime();

    const distaciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;
    const segundosEmMS = 1000;

    const diasAteOEvento = Math.floor(distaciaAteOEvento / diasEmMS);
    const horasAteOEvento = Math.floor((distaciaAteOEvento % diasEmMS) / horasEmMS);
    const minutosAteOEvento = Math.floor((distaciaAteOEvento % horasEmMS) / minutosEmMS);
    const segundosAteOEvento = Math.floor((distaciaAteOEvento % minutosEmMS) / segundosEmMS);

    // console.log(diasAteOEvento);
    // console.log(horasAteOEvento);
    // console.log(minutosAteOEvento);
    // console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    /* Colocando Um Parametro Para quando a data ja passou ou esta acontecendo */

    if (distaciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "Evento Expirado";
    }

},1000);


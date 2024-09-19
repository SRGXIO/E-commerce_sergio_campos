let victorias = 0;
let derrotas = 0;
let rondas = 0;

document.getElementById("iniciar-juego").addEventListener("click", iniciarJuego);

function iniciarJuego() {
    Swal.fire({
        title: 'Selecciona el nivel de dificultad',
        input: 'select',
        inputOptions: {
            facil: 'Fácil (1-3)',
            medio: 'Medio (1-5)',
            dificil: 'Difícil (1-10)'
        },
        inputPlaceholder: 'Selecciona una dificultad',
        showCancelButton: true,
        confirmButtonText: 'Jugar',
        confirmButtonColor: '#00796b',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.isConfirmed) {
            let maxNumber;
            switch (result.value) {
                case 'facil':
                    maxNumber = 3;
                    break;
                case 'medio':
                    maxNumber = 5;
                    break;
                case 'dificil':
                    maxNumber = 10;
                    break;
            }
            jugarRonda(maxNumber);
        }
    });
}

function jugarRonda(maxNumber) {
    const random = Math.floor(Math.random() * maxNumber) + 1;

    Swal.fire({
        title: `Ingresa un número entre 1 y ${maxNumber}`,
        input: 'number',
        inputAttributes: {
            min: 1,
            max: maxNumber,
            step: 1
        },
        confirmButtonText: 'Adivinar',
        confirmButtonColor: '#00796b',
        preConfirm: (num) => {
            if (num < 1 || num > maxNumber) {
                Swal.showValidationMessage('Por favor ingresa un número válido.');
            }
        }
    }).then((num) => {
        if (num.isConfirmed) {
            evaluarResultado(Number(num.value), random, maxNumber);
        }
    });
}

function evaluarResultado(num, random, maxNumber) {
    rondas++;

    if (num === random) {
        victorias++;
        Swal.fire({
            icon: 'success',
            title: '¡Ganaste!',
            text: `Adivinaste correctamente. El número era ${random}.`,
            confirmButtonColor: '#00796b'
        });
    } else {
        derrotas++;
        Swal.fire({
            icon: 'error',
            title: 'Perdiste',
            text: `No adivinaste. El número correcto era ${random}.`,
            confirmButtonColor: '#00796b'
        });
    }

    mostrarEstadisticas(maxNumber);
}

function mostrarEstadisticas(maxNumber) {
    Swal.fire({
        title: 'Estadísticas del juego',
        html: `
            <p>Rondas jugadas: ${rondas}</p>
            <p>Victorias: ${victorias}</p>
            <p>Derrotas: ${derrotas}</p>
        `,
        confirmButtonText: 'Jugar otra ronda',
        cancelButtonText: 'Salir',
        showCancelButton: true,
        confirmButtonColor: '#00796b',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.isConfirmed) {
            jugarRonda(maxNumber);
        } else {
            Swal.fire({
                title: 'Gracias por jugar',
                text: `Terminaste con ${victorias} victorias y ${derrotas} derrotas en ${rondas} rondas.`,
                confirmButtonColor: '#00796b'
            });
        }
    });
}
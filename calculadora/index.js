document.getElementById("calcular").addEventListener("click", function() {
    Swal.fire({
        title: '¿Qué operación realizarás?',
        input: 'select',
        inputOptions: {
            suma: 'Suma',
            resta: 'Resta',
            multiplicacion: 'Multiplicación',
            division: 'División'
        },
        inputPlaceholder: 'Selecciona una operación',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#00796b',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.isConfirmed) {
            let tipo = result.value;
            Swal.fire({
                title: 'Pon el primer número:',
                input: 'number',
                inputAttributes: {
                    min: 0
                },
                confirmButtonText: 'Siguiente',
                confirmButtonColor: '#00796b'
            }).then((num1) => {
                let a = Number(num1.value);
                Swal.fire({
                    title: 'Pon el segundo número:',
                    input: 'number',
                    inputAttributes: {
                        min: 0
                    },
                    confirmButtonText: 'Calcular',
                    confirmButtonColor: '#00796b'
                }).then((num2) => {
                    let b = Number(num2.value);
                    let resultado;

                    switch (tipo) {
                        case 'suma':
                            resultado = a + b;
                            break;
                        case 'resta':
                            resultado = a - b;
                            break;
                        case 'multiplicacion':
                            resultado = a * b;
                            break;
                        case 'division':
                            if (b !== 0) {
                                resultado = a / b;
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'No se puede dividir entre cero',
                                    confirmButtonColor: '#00796b'
                                });
                                return;
                            }
                            break;
                        default:
                            Swal.fire({
                                icon: 'error',
                                title: 'Error',
                                text: 'Operación no válida',
                                confirmButtonColor: '#00796b'
                            });
                            return;
                    }

                    Swal.fire({
                        title: 'Resultado',
                        text: `El resultado es: ${resultado}`,
                        confirmButtonColor: '#00796b'
                    });
                });
            });
        }
    });
});
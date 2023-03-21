import Swal from 'sweetalert2';

export default class AlertClass {

    static success(message) {
        Swal.fire({
            icon: 'success',
            title: 'Tudo certo!',
            text: message,
            showConfirmButton: false,
            timer: 1800
        });
    }

    static error(message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            showConfirmButton: false,
            timer: 1800
        });
    }

    static warning(message) {
        Swal.fire({
            icon: 'warning',
            title: 'Espera aí...',
            text: message,
            showConfirmButton: true,
        });
    }

    static info(message) {
        Swal.fire({
            icon: 'info',
            title: 'Se liga aí...',
            text: message,
            showConfirmButton: false,
            timer: 1800
        });
    }

    static question(message) {
        Swal.fire({
            icon: 'question',
            title: message,
            showConfirmButton: false,
            timer: 1800
        });
    }

}
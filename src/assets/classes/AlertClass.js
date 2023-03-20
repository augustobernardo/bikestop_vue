import Swal from 'sweetalert2';

export default class AlertClass {

    static success(message) {
        Swal.fire({
            icon: 'success',
            title: message,
            showConfirmButton: false,
            timer: 1500
        });
    }

    static error(message) {
        Swal.fire({
            icon: 'error',
            title: message,
            showConfirmButton: false,
            timer: 1500
        });
    }

    static warning(message) {
        Swal.fire({
            icon: 'warning',
            title: message,
            showConfirmButton: false,
            timer: 1500
        });
    }

    static info(message) {
        Swal.fire({
            icon: 'info',
            title: message,
            showConfirmButton: false,
            timer: 1500
        });
    }

    static question(message) {
        Swal.fire({
            icon: 'question',
            title: message,
            showConfirmButton: false,
            timer: 1500
        });
    }

}
import Swal from 'sweetalert2';
import Icon from '../assets/img/sendEmail.svg';

export default class AlertClass {


    static sendEmail(message) {
        Swal.fire({
            title: 'Showw!!!',
            imageUrl: Icon,
            imageWidth: 250,
            imageHeight: 250,
            text: message,
            showConfirmButton: false,
            timer: 3500
        });
    }

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
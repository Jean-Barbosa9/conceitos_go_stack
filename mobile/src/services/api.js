import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * Vale lembrar que para fazer essa conexão localmente, é preciso considerar:
 *  - no emulador do iOS, é possível usar o localhost;
 *  - no dispositivo físico iOS, precisa usar o ip da máquina;
 *  - no emulador do Android, é possível usar localhost, se usar o comando:
 *     "adb reverse tcp:port_backend tcp:port_backend"
 *    Isso fará um proxy da sua máquina para a máquina virtual do emulador.
 *  - no emulador do Android, com ip específico, que no caso seria o 10.0.2.2
 *  - em emulador de terceiro, como o Genymotion, por exemplo, precisa do ip 10.0.3.2;
 *  - no dispositivo físico do Android, precisa colocar o ip da máquina.
 */
import path from 'path';
import mkcert from 'vite-plugin-mkcert';

const cert = mkcert({ keyFileName: path.join(process.cwd(), 'localhost.pem'), certFileName: path.join(process.cwd(), 'localhost.cert.pem') });
cert.config({ server: { https: true } });

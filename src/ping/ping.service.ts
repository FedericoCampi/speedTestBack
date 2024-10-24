// import { Injectable } from '@nestjs/common';
// import * as ping from 'ping';

// @Injectable()
// export class PingService {
//   async pingHost(host: string): Promise<any> {
//     try {
//       const result = await ping.promise.probe(host);
//       // return {
//       //   host: result.host,
//       //   alive: result.alive,
//       //   time: result.time, // Tiempo en milisegundos
//       //   min: result.min,
//       //   max: result.max,
//       //   avg: result.avg,
//       // };
//       return {
//         time: result.time, // Tiempo en milisegundos
//       };
//     } catch (error) {
//       throw new Error(`Error pinging host: ${error.message}`);
//     }
//   }
// }

import { Injectable } from '@nestjs/common';
import { promises as dns } from 'dns';
import { performance } from 'perf_hooks';

@Injectable()
export class PingService {
  async pingHost(host: string): Promise<any> {
    try {
      const start = performance.now(); // Inicia el temporizador
      const addresses = await dns.resolve4(host); // Resuelve el dominio
      const end = performance.now(); // Detiene el temporizador

      const pingTime = end - start; // Calcula el tiempo de ping en milisegundos

      // return {
      //   host,
      //   alive: addresses.length > 0,
      //   addresses, // Lista de direcciones IP resueltas
      //   pingTime: pingTime.toFixed(2), // Tiempo de respuesta en ms
      // };
      return {
        pingTime: pingTime.toFixed(2), // Tiempo de respuesta en
      };
    } catch (error) {
      throw new Error(`Error pinging host: ${error.message}`);
    }
  }
}
import { Injectable } from '@nestjs/common';
import * as ping from 'ping';

@Injectable()
export class PingService {
  async pingHost(host: string): Promise<any> {
    try {
      const result = await ping.promise.probe(host);
      // return {
      //   host: result.host,
      //   alive: result.alive,
      //   time: result.time, // Tiempo en milisegundos
      //   min: result.min,
      //   max: result.max,
      //   avg: result.avg,
      // };
      return {
        time: result.time, // Tiempo en milisegundos
      };
    } catch (error) {
      throw new Error(`Error pinging host: ${error.message}`);
    }
  }
}
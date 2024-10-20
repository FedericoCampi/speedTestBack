import { Injectable } from '@nestjs/common';
import * as FastSpeedtest from 'fast-speedtest-api';

@Injectable()
export class SpeedtestService {
  private speedtest: FastSpeedtest;

  constructor() {
    this.speedtest = new FastSpeedtest({
      token: 'YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm', // Obtén tu token en https://fast.com (opcional si configuras rate limit correctamente)
      verbose: false, // Para ver más detalles en consola
      timeout: 10000, // Tiempo máximo para que la prueba se complete
      https: true, // Habilitar HTTPS
      urlCount: 5, // Número de URLs usadas para realizar la prueba
    });
  }

  async getInternetSpeed(): Promise<any> {
    try {
      const speed = await this.speedtest.getSpeed();
      return {
        downloadSpeed: `${speed}`,
      };
    } catch (error) {
      throw new Error('Error al medir la velocidad de internet');
    }
  }
}
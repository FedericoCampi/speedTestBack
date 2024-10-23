import { Injectable } from '@nestjs/common';
import * as FastSpeedtest from 'fast-speedtest-api';

@Injectable()
export class SpeedtestService {
  private speedtest: FastSpeedtest;
  
  constructor() {
    this.speedtest = new FastSpeedtest({
      token: process.env.FAST_SPEEDTEST_API_TOKEN, // Obtén tu token en https://fast.com (opcional si configuras rate limit correctamente)
      verbose: false, // Para ver más detalles en consola
      timeout: 10000, // Tiempo máximo para que la prueba se complete
      https: true, // Habilitar HTTPS
      urlCount: 5, // Número de URLs usadas para realizar la prueba
    });
  }

  async getInternetSpeed(): Promise<any> {

    try {
      //velodidades mbps
      const downloadSpeed = await this.speedtest.getSpeed();
      
      const donwloadSpeedFinal = downloadSpeed / 125000;
      const uploadSpeed = donwloadSpeedFinal / 3;

      return {
        downloadSpeed: Number(donwloadSpeedFinal.toFixed(2)),
        uploadSpeed: Number(uploadSpeed.toFixed(2)), // Ejemplo de valor para la subida
      };
    } catch (error) {
      throw new Error('Error al medir la velocidad de internet');
    }
  }
}
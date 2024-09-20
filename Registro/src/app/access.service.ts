import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { BiometricAuth } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor() { }

  async authenticateWithBiometrics(): Promise<boolean> {
    try {
      // Acceder a los métodos con índices de cadena
      const isAvailableMethod = BiometricAuth['isAvailable'];
      const verifyMethod = BiometricAuth['verify'];

      const available = await isAvailableMethod();
      if (available) {
        const result = await verifyMethod({
          reason: 'Please authenticate to access the app',
          title: 'Login with Biometrics',
          subtitle: 'Use your fingerprint',
          description: 'This is for security purposes'
        });
        return result.verified;
      }
      return false;
    } catch (error) {
      console.error('Biometric authentication failed', error);
      return false;
    }
  }
}

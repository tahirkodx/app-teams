import { toastController } from '@ionic/vue';

export async function presentToast(message: string, duration: number = 2000) {
    const toast = await toastController.create({
      message: message,
      duration: duration,
      position: 'top',
    });

    await toast.present();
  }
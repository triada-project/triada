import React from 'react';
import { capturePayment } from '../../components/Stripe/api.jsx'; // Importa la función capturePayment desde tu módulo de API

const PaymentPage = () => {
  const handleCapturePayment = async () => {
    try {
      const paymentIntentId = { paymentIntentId: 'pi_3PDzYoDoqexf69Wm0Lpctt7I' }; // ID del PaymentIntent
      const capturedPayment = await capturePayment(paymentIntentId);
      console.log('Payment captured successfully:', capturedPayment);
      // Realizar cualquier acción adicional después de capturar el pago
    } catch (error) {
      console.error('Failed to capture payment:', error);
      // Manejar el error de captura de pago
    }
  };

  return (
    <div class="bg-white bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5 w-2/4">
      {/* Contenido de la página de pago */}
      <button onClick={handleCapturePayment}>Finalizar Pago</button>
    </div>
  );
};

export default PaymentPage;
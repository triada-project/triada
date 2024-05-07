import React from 'react';
import { capturePayment } from '../../components/Stripe/api.jsx'; // Importa la función capturePayment desde tu módulo de API

const PaymentPage = () => {
  const handleCapturePayment = async () => {
    try {
      const paymentIntentId = { paymentIntentId: 'pi_3PDdZIDoqexf69Wm4q7xt9zR' }; // ID del PaymentIntent
      const capturedPayment = await capturePayment(paymentIntentId);
      console.log('Payment captured successfully:', capturedPayment);
      // Realizar cualquier acción adicional después de capturar el pago
    } catch (error) {
      console.error('Failed to capture payment:', error);
      // Manejar el error de captura de pago
    }
  };

  return (
    <div>
      {/* Contenido de la página de pago */}
      <button onClick={handleCapturePayment}>Finalizar Pago</button>
    </div>
  );
};

export default PaymentPage;
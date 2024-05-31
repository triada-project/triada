export async function capturePayment(paymentIntentId) {
  try {
    const response = await fetch(
      "https://apitriada.rodolfo-ramirez.com/capture-payment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentIntentId }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to capture payment");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error capturing payment: ${error.message}`);
  }
}

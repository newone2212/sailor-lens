const Razorpay = require('razorpay');

// Initialize Razorpay client with your Razorpay API key and secret
const razorpay = new Razorpay({
  key_id: 'rzp_test_hwUjFy8AB6TrHd',
  key_secret: 'BCW5E7QZGaXl8wmgn0d0sLzi'
});

// Function to initiate a payment
const initiatePayment = async (req, res) => {
    const { amount, currency, receipt, customer_name,email,product_id,mobile } = req.body;

    const options = {
        amount: amount * 100, // amount in paise
        currency: currency,
        receipt: receipt,
        notes: {
            "customer_name": customer_name,
            "email": email,
            "product_id": product_id,
            "mobile" : mobile
            // Add any other custom metadata or information as needed
        }
    };

    try {
        const payment = await razorpay.orders.create(options);
        res.json({ payment });
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({ error: 'Error creating payment' });
    }
}

const callback = async (req, res) => {
    const { payment_id, razorpay_order_id, razorpay_signature } = req.body;

    try {
        const payment = await razorpay.payments.fetch(payment_id);
        // Handle the payment details (e.g., update database, send confirmation email)
        res.json({ payment });
    } catch (error) {
        console.error('Error handling payment callback:', error);
        res.status(500).json({ error: 'Error handling payment callback' });
    }
}

module.exports={
    initiatePayment,
    callback
}
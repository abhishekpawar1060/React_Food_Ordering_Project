import React from 'react'
import { useLoading } from '../../hooks/useLoading';
import { pay } from '../../services/orderService';
import { useCart } from '../../hooks/useCart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

export default function PaypalButtons({ order }) {
    const { clearCart } = useCart();
    const navigate = useNavigate();
    const {showLoading, hideLoading} = useLoading();

    const loadRazorpayScript = () => {
        return new Promise(( resolve ) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });

    };

    const handlePayment = async () => {
        showLoading();
        const res = await loadRazorpayScript();

        if(!res){
            toast.error("Razorpay failed to load", 'Error');
            hideLoading();
            return;
        }

        const options = {
            key: 'rzp_test_bWavEzmrV22CzH',
            amount: order.totalPrice * 100,
            currency: 'INR',
            name: 'Food App',
            description: 'Test Transaction',
            order_id: order.razorpayOrderId,
            Handler: async (res) => {
                try {
                    const paymentId = res.razorpay_payment_id;
                    const orderId = await pay(paymentId);
                    clearCart();
                    toast.success("Payment Saved Successfully","Success");
                    navigate('/track' + orderId);
                } catch (error) {
                    toast.error('Payment Save Failes', "Error");
                }
            },
            prefill: {
                name: order.name,
                email: order.email,

            },
            theme: {
                color: '#3399cc',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        hideLoading();
    };

    return(
        <>

            <Button
                type='submit'
                text='Pay with Razorpay'
                backgroundColor= '#0B88D6'
                onClick={handlePayment}
            />
        </>


        
    );
}
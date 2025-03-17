import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRef } from "react";
import StripeSeprateComponent from "./StripeSeprateComponent";
import { RiCoinsFill } from "react-icons/ri";
import swal from "sweetalert";

interface Plan {
    id?: string;
    coins?: number;
    duration?: number;
    price?: number;
}

interface Tax {
    type?: string;
    amount?: number;
}

interface PaymentProps {
    totalAmount?: number;
    selectedPlan?: Plan;
    tax?: Tax;
    setIsLoading?: (val: boolean) => void;
}

const stripePromise = loadStripe("pk_test_51OEUmkGaxxNRTGagQIYF34iTl3r85j1GMZDKbq7jnesM3AzvN5MyudpkqwjLr9m1PLNjjKLz0G7MQCPOPpiL5jar00XuVUMSb8");

const PaymentSection: React.FC<PaymentProps> = ({
    totalAmount,
    selectedPlan,
    tax,
    setIsLoading,
}) => {
    const totalAmountPara = useRef<HTMLParagraphElement | null>(null);

    const Paypal__Before__Payment = () => {
        console.log("Processing PayPal Payment");
    };

    const Paypal__Successful__Payment = (order: any) => {
        console.log("Payment Successful", order);
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row h-full">
            <div className="flex-1 p-4">
                <PayPalScriptProvider
                    options={{
                        clientId: "ASKmsVMYxaukXBVYZ9Ec0pG7zfo-vPl4qHeHIBgrbWO-KPz8_G-ZjVDm9CHs5_TaznFaGo0brU2KMJ0q",
                        disableFunding: ["paylater", "card"],
                    }}
                >
                    <PayPalButtons
                        style={{ label: "checkout" }}
                        createOrder={(data, actions) => {
                            Paypal__Before__Payment();
                            return actions.order.create({
                                intent: "CAPTURE", // ✅ Add this line
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: "USD",
                                            value: totalAmountPara.current?.textContent || "0",
                                        },
                                    },
                                ],
                            });
                        }}

                        // createOrder={(data, actions) => {
                        //     Paypal__Before__Payment();
                        //     return actions.order.create({
                        //       purchase_units: [
                        //         {
                        //           amount: {
                        //             currency_code: "USD", 
                        //             value: totalAmountPara.current?.textContent || "0",
                        //           },
                        //         },
                        //       ],
                        //     });
                        //   }}

                        onApprove={(data, actions) => {
                            if (!actions.order) {
                                console.error("PayPal order actions are undefined.");
                                return Promise.reject(new Error("PayPal order actions are undefined."));
                            }

                            return actions.order.capture().then((order) => {
                                Paypal__Successful__Payment(order);
                            });
                        }}


                        // onApprove={(data, actions) => {
                        //     return actions.order.capture().then((order) => {
                        //         Paypal__Successful__Payment(order);
                        //     });
                        // }}
                        onError={() => {
                            swal("Error!", "Deposit Balance Transaction Not Successful!", "error");
                        }}
                        onCancel={() => {
                            swal("Error!", "Deposit Balance Transaction has been cancelled", "error");
                        }}
                    />
                </PayPalScriptProvider>
                <div className="px-10 py-2 flex items-center">
                    <span className="w-full border-t border-primary-blue"></span>
                    <span className="mx-4 font-Lexend">OR</span>
                    <span className="w-full border-t border-primary-blue"></span>
                </div>
                <div className="pt-4">
                    <div className="py-2 flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-primary">Pay With Card</h1>
                        <span className="text-muted text-sm">
                            All transactions are secure and encrypted
                        </span>
                    </div>
                </div>
                <Elements stripe={stripePromise} options={undefined}>
                    <StripeSeprateComponent
                        isLoading={setIsLoading}
                        total_amount={totalAmount}
                        selectedPlan={selectedPlan?.id}
                        tax_type={tax?.type}
                        tax_amount={tax?.amount?.toFixed(1)}
                    />
                </Elements>

                {/* <Elements stripe={stripePromise} options={null}>
                    <StripeSeprateComponent
                        isLoading={setIsLoading}
                        total_amount={totalAmount}
                        selectedPlan={selectedPlan.id}
                        tax_type={tax.type}
                        tax_amount={tax.amount.toFixed(1)}
                        currency="usd"
                    />
                </Elements> */}
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-[300px] xl:w-[400px] 2xl:w-[500px] font-Lexend p-4 border h-full rounded-xl">
                <div className="flex items-center justify-between">
                    <span className="text-muted text-base">Coins</span>
                    <div className="flex items-center gap-1">
                        <RiCoinsFill className="text-yellow-400" />
                        <span>{selectedPlan?.coins}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-muted">Valid Until</span>
                    <span>{selectedPlan?.duration} Days</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-muted">Price</span>
                    <span>${selectedPlan?.price}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-muted">Tax ({tax?.type})</span>
                    <span>+ {tax?.amount}%</span>
                </div>
                <hr />
                <div className="flex items-center justify-between">
                    <span className="font-bold">Total</span>
                    <span className="flex items-center">
                        $<p ref={totalAmountPara}>{totalAmount}</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PaymentSection;


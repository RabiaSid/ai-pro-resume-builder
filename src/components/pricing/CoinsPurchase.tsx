import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useRef, useState } from "react";
import { RiCoinsFill } from "react-icons/ri";
import styles from "./CoinPurchase.module.css";
// import swal from "sweetalert";
import { Elements } from "@stripe/react-stripe-js";
import StripeSeprateComponent from "./StripeSeprateComponent";
import PaymentSection from "./paymentSection";

interface Plan {
  id: string;
  coins: number;
  duration: number;
  price: number;
}

interface Tax {
  type: string;
  amount: number;
}

// interface PaymentProps {
//   totalAmount: number;
//   selectedPlan: Plan;
//   tax: Tax;
//   setIsLoading: (val: boolean) => void;
// }

// const stripePromise = loadStripe("pk_test_51OEUmkGaxxNRTGagQIYF34iTl3r85j1GMZDKbq7jnesM3AzvN5MyudpkqwjLr9m1PLNjjKLz0G7MQCPOPpiL5jar00XuVUMSb8");

const CoinsPurchase = () => {
  const [coinPlans, setCoinPlans] = useState<any[]>([
    { id: 1, coins: 5, price: "10.00", discount: 0, duration: 90 },

    { id: 2, coins: 10, price: "20.00", discount: 0, duration: 90 },

    { id: 3, coins: 25, price: "50.00", discount: 0, duration: 90 },

    { id: 4, coins: 50, price: "95.00", discount: 5, duration: 90 },

    { id: 5, coins: 75, price: "135.00", discount: 10, duration: 90 },

    { id: 6, coins: 100, price: "180.00", discount: 20, duration: 90 },
  ]);
  const [selectedPlan, setSelectedPlan] = useState<any>();
  const [isProceeding, setIsProceeding] = useState<any>(false);
  // const [tax, setTax] = useState<any>({
  //   amount: 0,
  //   type: "",
  // });
  // const [totalAmount, setTotalAmount] = useState<any>(0);
  // const totalAmountPara = useRef(null);

  // const Paypal__Before__Payment = () => {
  //   // setIsLoading(true);
  //   const data = {
  //     payment_type: "paypal",
  //     card_number: "4242",
  //     //   card_name: user?.name,
  //     tax: totalAmount.toFixed(1),
  //     tax_type: tax.type,
  //     total_amount: totalAmount,
  //     planId: selectedPlan.id,
  //   };

  //   console.log(data);

  //   // ApiService.purchaseCoins(user?.token, data)
  //   //   .then((res) => {
  //   //     set_insert_id(res.data.data.id);
  //   //     setIsLoading(false);
  //   //     swal({
  //   //       closeOnClickOutside: true,
  //   //       title: "Congratulations",
  //   //       text: res.data.message,
  //   //       icon: "success",
  //   //     })
  //   //       .then(() => {})
  //   //       .catch(() => {});
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //     setIsLoading(false);
  //   //   });
  // };

  // const Paypal__Successful__Payment = (order: any) => {
  //   // setIsLoading(true);
  //   const data = {
  //     payment_type: "paypal",
  //     card_number: "",
  //     card_name: order.payer.name.given_name + " " + order.payer.name.surname,
  //     tax: totalAmount.toFixed(1),
  //     tax_type: tax.type,
  //     total_amount: order.purchase_units[0].amount.value,
  //     planId: selectedPlan.id,
  //     //   id: insert_id,
  //   };

  //   console.log(data);

  //   // ApiService.purchaseCoinsUpdate(user?.token, data)
  //   //   .then((res) => {
  //   //     console.log(res.data);
  //   //     setIsLoading(false);
  //   //     swal({
  //   //       closeOnClickOutside: true,
  //   //       title: "Congratulations",
  //   //       text: res.data.message,
  //   //       icon: "success",
  //   //     })
  //   //       .then(() => navigate("/dashboard?tab=mytransactions"))
  //   //       .catch(() => navigate("/dashboard?tab=mytransactions"));
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //     setIsLoading(false);
  //   //   });
  // };

  // const stripePromise = loadStripe(
  //   "pk_test_51OEUmkGaxxNRTGagQIYF34iTl3r85j1GMZDKbq7jnesM3AzvN5MyudpkqwjLr9m1PLNjjKLz0G7MQCPOPpiL5jar00XuVUMSb8"
  // );

  return (
    <>
      <div>
        <div className="w-full flex flex-col gap-[10px] justify-center items-center p-5 px-6 py-8 mb-[30px] bg-[#ececec]/60">
          <div className="mb-4 text-center">
            <p className="text-3xl font-bold font-Lexend mb-2">Buy Coins</p>
            <div className="container">
              <p className="font-Lexend text-base text-left">
                Our flexible coin packages allow you to purchase resume parser
                tokens and more. With these coins, you can select the package
                that suits your needs and use them to buy any service available
                on the platform. When using the resume parser, remember that
                each document (up to 3 pages) costs two coins to parse. On
                registration, you will receive two coins and 5 parser tries as
                part of the default-free package.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 container">
            <div className=" flex items-center justify-center flex-wrap gap-4 ">
              {coinPlans?.map((plan, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-lg hover:bg-slate-200 border-2 shadow-[0px_0px_30px_rgb(220,220,230)] text-lg font-Lexend w-[120px] h-[100px] flex items-center justify-center relative flex-col ${selectedPlan?.id === plan.id
                    ? "bg-[#0072b1] text-white"
                    : "bg-white"
                    }`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  {plan.discount > 0 && (
                    <div
                      className={`${styles.discountbadge} text-white text-sm flex justify-center items-center absolute -top-[5px] -right-[5px]`}
                    >
                      <span className="z-10 text-[12px] relative font-Lexend ">
                        {plan.discount}%
                      </span>
                    </div>
                  )}
                  <div className="">${plan.price}</div>
                  <div className="flex items-center justify-center text-xl gap-1">
                    <RiCoinsFill className="text-yellow-400" />
                    {plan.coins}
                  </div>
                </div>
              ))}
            </div>
            {!isProceeding ? (
              <div className={`flex items-center justify-center w-full`}>
                <button
                  disabled={!selectedPlan}
                  onClick={() => {
                    // if (user?.token) {
                    setIsProceeding(true);
                    // }
                    // else {
                    //   swal({
                    //     buttons: true,
                    //     icon: "warning",
                    //     title: "Need to Login First",
                    //   }).then((yes) => {
                    //     if (yes) {
                    //       navigate(`/login`);
                    //     }
                    //   });
                    // }
                  }}
                  className={`w-[200px] font-Lexend rounded-xl p-2 ${selectedPlan ? "bg-primaryBlue" : "bg-gray-200"
                    }   text-white`}
                >
                  Proceed To Checkout
                </button>
              </div>
            ) : (
              <div
                id="paymentProccedSection"
                className={`  rounded-md transition-[0.5s] overflow-hidden w-full xl:max-w-[70%] m-auto`}
              >
                <div
                  id="paymentProccedSection"
                  className={`  rounded-md transition-[0.5s] overflow-hidden w-full xl:max-w-[90%] m-auto`}
                >
                  {/* Payment Section */}
                  <PaymentSection />
                </div>
              </div>
            )}
            <div className="mb-4">
              <p className="text-3xl font-bold font-Lexend mb-2">
                How to purchase coins?
              </p>
              <div className="container">
                <p className="font-Lexend text-base">
                  <ul className="list-inside list-disc">
                    <li>Select your preferred coin package and click on it.</li>
                    <li>Now press the process to checkout button.</li>
                    <li>
                      A dropdown appears; select your desired payment method.
                    </li>
                    <li>You can pay through a card or use a PayPal account.</li>
                    <li>Enter all the details and click on Pay Now.</li>
                    <li>
                      Once you are done with the payment, you will get the
                      coins.
                    </li>
                    <li>
                      In the header, you can see the coin icon along with the
                      number of coins you purchased.
                    </li>
                  </ul>
                </p>
              </div>

              <p className="text-3xl font-bold font-Lexend my-2">Referrals:</p>
              <div className="container">
                <p className="font-Lexend text-base">
                  If you do not want to purchase the coins, you can earn coins
                  through referrals. Invite your friends to join AI Pro Resume,
                  and you will earn coins when they sign up using your referral
                  link. You can use them to unlock parser tokens and premium
                  services. You will receive 3 coins for 10 referrals, 4 coins
                  for 20 referrals, and 6 coins for 30 referrals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinsPurchase;


import Axios from "axios";
import React, { useState } from "react";

import { server } from "./Server";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

// this function will handel payment when user submit his/her money
// and it will confim if payment is successfull or not
  const handlePaymentSuccess = async (response) => {
    try {
      let bodyData = new FormData();

      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

      await Axios({
        url: `${server}/api/checkout_verification/`,
        method: "POST",
        data: bodyData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Everything is OK!");
          setName("");
          setPhone("");
          setEmail("");
          setAmount("");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(console.error());
    }
  };

  // this will load a script tag which will open up Razorpay payment card to make //transactions
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const addDonation = async () => {
    const res = await loadScript();

    let bodyData = new FormData();

    bodyData.append("amount", amount.toString());
    bodyData.append("name", name);
    bodyData.append("email", email);
    bodyData.append("phone", phone.toString());
    bodyData.append("organization", 1);
    bodyData.append("disaster", 1);

    const data = await Axios({
        url: `${server}/api/donate`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: bodyData,
      }).then((res) => {
        return res;
      });

};

  const showRazorpay = async () => {
    const res = await loadScript();

    let payData = new FormData();

    // we will pass the amount and product name to the backend using form data

    payData.append("order_amount", amount.toString());
    payData.append("order_product", "Donation");


    const data = await Axios({
      url: `${server}/api/order/`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: payData,
    }).then((res) => {
      return res;
    });

    // in data we will receive an object from the backend with the information about the payment
    //that has been made by the user

    var options = {
      key_id: process.env.REACT_APP_PUBLIC_KEY, // in react your environment variable must start with REACT_APP_
      key_secret: process.env.REACT_APP_SECRET_KEY,
      amount: data.data.payment.amount,
      currency: "INR",
      name: "Org. Name",
      description: "Test teansaction",
      image: "", // add image url
      order_id: data.data.payment.id,
      handler: function (response) {
        // we will handle success by calling handlePaymentSuccess method and
        // will pass the response that we've got from razorpay
        handlePaymentSuccess(response);
      },
      prefill: {
        name: "User's name",
        email: "User's email",
        contact: "User's phone",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="container" style={{ marginTop: "20vh" }}>
      <form>
        <h1>Payment page</h1>
        <br />
        <div className="">
        <div className="form-group">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            
            className="form-control-lg"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="name">Contact</label>
          <input
            type="text"
            align="center"
            className="form-control-lg"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="name">Email-Id</label>
          <input
            type="email"
            className="form-control-lg"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Amount</label>
          <input
            type="text"
            className="form-control-lg"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </form>
      <br />
      <br />
   
      <button onClick={addDonation} className="btn btn-primary btn-block">
        Confirm
      </button>
      <br />
      <br />
      <button onClick={showRazorpay} className="btn btn-primary btn-block">
        Pay with razorpay
      </button>
    </div>
  );
}

export default App;

import emailjs from "@emailjs/browser";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fuuh5q",
        "template_0ar35iq",
        e.target,
        "7nJVgsVNuINo2c3yt"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Order placed successfully ✅");
          e.target.reset();
          setOrderPopup(false);
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send order ❌");
        }
      );
  };

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">

              {/* Header */}
              <div className="flex items-center justify-between">
                <h1 className="font-semibold">Order Now</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-3"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-3"
                />

                <input
                  type="text"
                  name="user_address"
                  placeholder="Address"
                  required
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-3"
                />

                {/* New textbox for order items */}
                <input
                  type="text"
                  name="user_order"
                  placeholder="Your Order"
                  required
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
                />

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-5 rounded-full"
                  >
                    Order Now
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

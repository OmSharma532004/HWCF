import React from "react";
import Footer from "../components/HomePage/Footer";

const RefundPolicy = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-8 text-gray-800">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 border-b-4 border-gray-200 pb-4">
          Refund Policy
        </h1>

        <div className="mb-10">
          <p className="text-lg mb-4">
            Refunds are available 28 days before any event, less a 10% charge for administration.
          </p>

          <p className="text-lg mb-4">
            14 days before an event, 50% of the fees will be refunded.
          </p>

          <p className="text-lg mb-4">
            Less than 14 days before an event, no refunds are available.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;

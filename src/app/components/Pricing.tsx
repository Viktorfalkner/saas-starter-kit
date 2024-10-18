import React from "react";
import config from "../../../config";

interface PricingOption {
  originalPrice: string;
  discountedPrice: string;
  currency: string;
  features: string[];
  highlighted?: boolean;
}

const Pricing: React.FC = () => {
  // Pricing options data
  const pricingOptions: PricingOption[] = [
    {
      originalPrice: "99",
      discountedPrice: "49",
      currency: "$",
      features: [
        "ZenVoice link",
        "Unlimited self-serve invoices",
        "1 Stripe account",
      ],
    },
    {
      originalPrice: "119",
      discountedPrice: "69",
      currency: "$",
      features: [
        "ZenVoice link",
        "Unlimited self-serve invoices",
        "Unlimited Stripe accounts",
      ],
      highlighted: true, // Highlight this plan
    },
    {
      originalPrice: "299",
      discountedPrice: "249",
      currency: "$",
      features: [
        "All Pro Features",
        "Unlimited Stripe accounts",
        "Unlimited 1 on 1 support",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-gray-750 py-16">
      <div className="container mx-auto text-center">
        {/* Top Section */}
        <div className="mb-10">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            🌟 Launch discount — $50 OFF 🌟
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Stop wasting your energy on things you can't solve
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ditch the Stripe Invoicing fee, reduce customer support, and focus
            on your startup. 1-minute no-code setup.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-lg rounded-xl p-8 w-full max-w-sm transition-transform duration-300 
              ${
                option.highlighted
                  ? "scale-105 border-2 border-green-500 shadow-2xl transform translate-y-2 md:translate-y-0"
                  : "border border-gray-200"
              }`}
            >
              {/* Highlighted Badge */}
              {option.highlighted && (
                <span className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-semibold">
                  BUSY FOUNDERS' CHOICE
                </span>
              )}

              {/* Pricing Content */}
              <div className="text-left">
                <div className="text-gray-500 line-through">
                  {option.currency}
                  {option.originalPrice}
                </div>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {option.currency}
                    {option.discountedPrice}
                  </span>
                  <span className="text-sm ml-1 text-gray-500">USD</span>
                </div>
                <ul className="text-gray-700 mb-6 space-y-3">
                  {option.features.map((feature, i) => (
                    <li key={i}>✔️ {feature}</li>
                  ))}
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Get {config.appName} 🚀
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  One-time payment, then{" "}
                  <a href="#" className="underline">
                    it's yours forever
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React, { useState } from "react";
import { QRCode } from "react-qr-code";

const WhatsAppSupport = () => {
  // WhatsApp chat link
  const whatsappLink = "https://wa.me/9621014735?text=Hello%20I%20need%20support"; // Replace with your phone number

  // State to manage QR code visibility
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-center gap-4">
      {/* QR Code for WhatsApp Chat (Conditional Rendering) */}
      {showQRCode && (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <QRCode
            value={whatsappLink}
            size={100} // Adjust size as needed
            bgColor="#ffffff" // White background for QR code
            fgColor="#000000" // Black foreground for QR code
            level="Q" // Error correction level
          />
          <p className="text-sm text-center mt-2 text-gray-700">
            Scan to Chat on WhatsApp
          </p>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setShowQRCode(!showQRCode)} // Toggle QR code visibility
        className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.48 3.53 1.32 5L2 22l5-1.32A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z" />
        </svg>
        Chat on WhatsApp
      </button>
    </div>
  );
};

export default WhatsAppSupport;
import { Mail, Smartphone } from "lucide-react";

export const metadata = {
  title: "Moji | Contact",
  description: "Get in touch with Moji's support team.",
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-orange-600 text-center">
        Contact Us
      </h1>
      <p className="text-gray-600 text-center mt-2">
        We're here to help. Reach out to us anytime!
      </p>

      {/* Contact Details */}
      <div className="mt-6">
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold flex items-center gap-2">
            <Mail color="#f97316" /> Email:
          </span>
          <a
            href="mailto:khandaysalmaan00@gmail.com"
            className="text-orange-500 hover:underline"
          >
            khandaysalmaan00@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 mt-3">
          <span className="text-lg font-semibold flex items-center gap-2">
            <Smartphone color="#f97316" /> Phone:
          </span>
          <a
            href="tel:+917006172734"
            className="text-orange-500 hover:underline"
          >
            +91 7006-172-734
          </a>
        </div>
      </div>

      {/* Google Map (Embed) */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Find Us Here 📍</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211426.63515711698!2d74.64194030996975!3d34.106892743953715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1855686e3c5ef%3A0x66244b7cc1e305c6!2sSrinagar!5e0!3m2!1sen!2sin!4v1738479716717!5m2!1sen!2sin"
          style={{ width: "100%", height: "450px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

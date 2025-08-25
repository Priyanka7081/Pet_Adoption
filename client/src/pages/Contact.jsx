// import React, { useState } from "react";

// const Contact= () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     type: "buy",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     alert("Thank you for reaching out! 🐾");
//     setFormData({ name: "", email: "", type: "buy", message: "" });
//   };

//   const [openFAQ, setOpenFAQ] = useState(null);
//   const faqs = [
//     {
//       question: "How can I adopt a pet?",
//       answer:
//         "Simply browse our adoption gallery, choose your furry friend, and fill out the adoption form. Our team will reach out to guide you through the next steps.",
//     },
//     {
//       question: "What is the adoption fee?",
//       answer:
//         "Adoption fees vary depending on the pet and cover vaccinations, microchipping, and initial health checkups.",
//     },
//     {
//       question: "Can I meet the pet before adopting?",
//       answer:
//         "Yes! We encourage in-person visits so you can bond with your future companion before finalizing adoption.",
//     },
//     {
//       question: "How long does the process take?",
//       answer:
//         "The adoption process typically takes 3–7 days depending on verification and readiness of both adopter and pet.",
//     },
//     {
//       question: "Do you offer support after adoption?",
//       answer:
//         "Absolutely! We provide post-adoption guidance, vet recommendations, and behavior tips to ensure a smooth transition.",
//     },
//   ];


//   return (
//     <div className="bg-green-200 min-h-screen flex items-center justify-center p-6">
//       <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
//           Contact PetWorld 🐶🐾
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Your Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Enter your name"
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Your Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email"
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           {/* Buy or Donate */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               I want to
//             </label>
//             <select
//               name="type"
//               value={formData.type}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
//             >
//               <option value="buy">Buy a Pet 🐕</option>
//               <option value="donate">Donate a Pet 🐾</option>
//             </select>
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Message
//             </label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               placeholder="Write your message here..."
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
//             ></textarea>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;




import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "buy",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for reaching out! 🐾");
    setFormData({ name: "", email: "", type: "buy", message: "" });
  };

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqs = [
    {
      question: "How can I adopt a pet?",
      answer:
        "Simply browse our adoption gallery, choose your furry friend, and fill out the adoption form. Our team will reach out to guide you through the next steps.",
    },
    {
      question: "What is the adoption fee?",
      answer:
        "Adoption fees vary depending on the pet and cover vaccinations, microchipping, and initial health checkups.",
    },
    {
      question: "Can I meet the pet before adopting?",
      answer:
        "Yes! We encourage in-person visits so you can bond with your future companion before finalizing adoption.",
    },
    {
      question: "How long does the process take?",
      answer:
        "The adoption process typically takes 3–7 days depending on verification and readiness of both adopter and pet.",
    },
    {
      question: "Do you offer support after adoption?",
      answer:
        "Absolutely! We provide post-adoption guidance, vet recommendations, and behavior tips to ensure a smooth transition.",
    },
  ];

  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Contact PetWorld 🐶🐾
        </h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Buy or Donate */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              I want to
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
            >
              <option value="buy">Buy a Pet 🐕</option>
              <option value="donate">Donate a Pet 🐾</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message here..."
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>

        {/* FAQ Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
            Frequently Asked Questions ❓
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl p-4 cursor-pointer"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                >
                  <h4 className="text-lg font-semibold text-gray-700">
                    {faq.question}
                  </h4>
                  <span className="text-green-600 font-bold">
                    {openFAQ === index ? "-" : "+"}
                  </span>
                </div>
                {openFAQ === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

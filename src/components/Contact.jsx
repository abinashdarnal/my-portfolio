import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex justify-center sm:mx-[80px] mx-[20px] my-8 "
    >
      <div className="max-w-[1040px]">
        <div className="flex justify-center text-red-600 text-2xl font-bold mb-4">
          Contact Me
        </div>
        <form
          action="https://getform.io/f/768daa3e-2bee-45aa-aa25-ea2a7ad86341"
          method="POST"
          encType=""
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 border-red-300 rounded-md focus:outline-none pl-1 py-1 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="number">Mobile number </label>
              <input
                type="phone"
                name="number"
                id="number"
                className="border-2 border-red-300 rounded-md focus:outline-none pl-1 py-1 text-sm"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-red-300 rounded-md focus:outline-none pl-1 py-1 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="border-2 border-red-300 rounded-md focus:outline-none pl-1 py-1 text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Massage</label>

            <textarea
              name="message"
              id="message"
              cols="10"
              rows="10"
              className="border-2 border-red-300 rounded-md focus:outline-none pl-1 py-1 text-sm resize-none"
            ></textarea>
          </div>
          <div className="flex mt-3">
            <button
              type="submit"
              className="bg-red-600 w-full p-2 rounded-lg text-white font-semibold active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;

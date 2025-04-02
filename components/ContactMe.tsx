import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rohitjire55@gmail.com?subject=${formData.subject}&body=Hi, my name is 
    ${formData.name}, ${formData.message} Contact me here: ${formData.email}`;
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left
md:flex-row max-w-7xl px-4 sm:px-6 md:px-10 justify-evenly mx-auto items-center pt-16 sm:pt-20 md:pt-24"
    >
      <h3
        className="absolute top-8 sm:top-12 md:top-16 uppercase tracking-[20px]
       text-gray-500 text-xl sm:text-2xl"
      >
        Contact Me
      </h3>
      <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 mt-8 sm:mt-12 md:mt-16">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          I have just got what you need. Let's talk
        </h4>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center space-x-3 sm:space-x-4 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
            <p className="text-base sm:text-lg md:text-xl">+919028179378</p>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
            <p className="text-base sm:text-lg md:text-xl">rohitjire55@gmail.com</p>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
            <p className="text-base sm:text-lg md:text-xl">Pune Maharashtra</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full sm:w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-2 sm:py-3 px-6 sm:px-8 rounded-md text-black font-bold
          text-sm sm:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;

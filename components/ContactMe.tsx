import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
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
    window.location.href = `mailto:rohitjire55@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} Contact me here: ${formData.email}`;
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left
      max-w-7xl px-4 sm:px-6 md:px-10 justify-center mx-auto items-center"
    >
      <h3
        className="absolute top-8 sm:top-12 md:top-16 uppercase tracking-[20px]
        text-matte-gray text-xl sm:text-2xl"
      >
        Contact Me
      </h3>

      <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full mt-16 sm:mt-20 font-montserrat">
        {/* Left Panel - Contact Info */}
        <div className="bg-surface-card rounded-2xl p-6 sm:p-8 flex-1">
          <h4 className="text-2xl sm:text-3xl font-semibold text-matte-white">
            Let's Build Something Together
          </h4>
          <p className="text-matte-gray text-sm mt-2">
            Feel free to reach out. I'm always open to new opportunities.
          </p>

          <div className="space-y-6 mt-8">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <EnvelopeIcon className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-matte-gray text-xs uppercase tracking-wider">Email</p>
                <p className="text-matte-white text-sm sm:text-base">rohitjire55@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPinIcon className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-matte-gray text-xs uppercase tracking-wider">Location</p>
                <p className="text-matte-white text-sm sm:text-base">Mainz, Germany</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="bg-surface-card rounded-2xl p-6 sm:p-8 flex-[1.5]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-matte-gray text-xs uppercase tracking-wider mb-1 block">
                  Name
                </label>
                <input
                  {...register("name")}
                  placeholder="Your name"
                  className="contactInput"
                  type="text"
                />
              </div>
              <div>
                <label className="text-matte-gray text-xs uppercase tracking-wider mb-1 block">
                  Email
                </label>
                <input
                  {...register("email")}
                  placeholder="Your email"
                  className="contactInput"
                  type="email"
                />
              </div>
            </div>

            <div>
              <label className="text-matte-gray text-xs uppercase tracking-wider mb-1 block">
                Subject
              </label>
              <input
                {...register("subject")}
                placeholder="What's this about?"
                className="contactInput"
                type="text"
              />
            </div>

            <div>
              <label className="text-matte-gray text-xs uppercase tracking-wider mb-1 block">
                Message
              </label>
              <textarea
                {...register("message")}
                placeholder="Your message..."
                className="contactInput"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-accent hover:bg-accent-light text-surface-primary
                font-semibold rounded-lg transition-colors text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

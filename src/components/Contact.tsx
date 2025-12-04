import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  emailjs
    .sendForm(
      "service_b0k8fil",      // your Service ID
      "template_7cbfnvv",     // your Template ID
      form.current,
      "QpGJ8t7RuD99DvYBR"     // your PUBLIC KEY / user ID
    )
    .then(
      () => {
        toast({
          title: "Email sent successfully!",
          description: "Thank you for your message.",
        });
        form.current?.reset();
      },
      (error) => {
        console.error(error);
        toast({
          title: "Failed to send email",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    );
};

  return (
    <div className="w-full space-y-8 text-white sm:w-1/2">
      <h2 className="mb-6 text-center text-3xl font-bold">Contact Me</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <ContactOption
            icon={<MdOutlineEmail className="mb-2 text-2xl" />}
            title="Email"
            content="prasaddumpala2004@gmail.com"
            link="mailto:prasaddumpala2004@gmail.com"
          />
          <ContactOption
            icon={<FaLinkedin className="mb-2 text-2xl" />}
            title="LinkedIn"
            content="Dumpala Durga Prasad"
            link="https://www.linkedin.com/in/durga-prasad-dumpala/"
          />
          <ContactOption
            icon={<ImInstagram className="mb-2 text-2xl" />}
            title="Instagram"
            content="lonely_boi_prasad"
            link="https://ig.me/m/lonely_boi_prasad"
          />
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name" // must match variable in EmailJS template
            placeholder="Your Full Name"
            required
            className="w-full rounded-md border border-gray-500 bg-gray-700 p-4"
          />
          <input
            type="email"
            name="email" // must match variable in EmailJS template
            placeholder="Your Email"
            required
            className="w-full rounded-md border border-gray-500 bg-gray-700 p-4"
          />
          <textarea
            name="message" // must match variable in EmailJS template
            rows={7}
            placeholder="Your Message"
            required
            className="w-full rounded-md border border-gray-500 bg-gray-700 p-4"
          />
          <Button
            type="submit"
            className="bg-gray-700 hover:bg-gray-900"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

const ContactOption: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
}> = ({ icon, title, content, link }) => (
  <div className="flex flex-col items-center gap-1 rounded-lg bg-gray-800 p-4">
    {icon}
    <h4 className="text-lg font-semibold">{title}</h4>
    <p className="text-sm text-gray-300">{content}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300"
    >
      Send a message
    </a>
  </div>
);

export default Contact;

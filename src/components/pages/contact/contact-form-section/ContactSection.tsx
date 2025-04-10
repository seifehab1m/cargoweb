import React from "react";
import ContactForm from "./ContactForm";
import ContactDescribtion from "./ContactDescribtion";

export default function ContactSection() {
  return (
    <section className=" bg-primaryBg pt-4 pb-20">
      <div className=" container grid grid-cols-1 md:grid-cols-2 gap-7">
        <ContactDescribtion />
        <ContactForm />
      </div>
    </section>
  );
}

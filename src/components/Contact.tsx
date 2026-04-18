"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
     try{
        const res = await fetch('api/send-email',{
          method: "POST",
          headers: {"Content_Type": "application/json"},
          body: JSON.stringify({
            ...formData
          })
        });
  
        const data: {success: boolean, error?: string} = await res.json();
  
        if(data.success){
          alert("message sent successfully!");
          setFormData({name: "", email: "", message: ""});
        } else {
        alert("Error: " + data.error);
        }
  
     }catch(err){
          alert("Something went wrong");
       } finally {
          setIsSubmitting(false);
       }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold md:font-bold  mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3 space-y-8"
          >
            <p className="text-foreground/70 text-lg mb-8">
              I'm always open to discussing product design work or partnership opportunities.
            </p>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl glass text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email</h4>
                <a href="mailto:mushahidr317@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                  mushahidr317@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl glass text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Phone</h4>
                <a href="tel:+916386857244" className="text-foreground/70 hover:text-primary transition-colors">
                  +91 6386857244
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl glass text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Location</h4>
                <span className="text-foreground/70">
                  Mohali, Punjab, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/3 glass p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`w-full mt-2 md:mt-3.5 bg-white/8 backdrop-blur-2xl border ${errors.name ? 'border-red-500/50' : 'border-surface-border'} rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500/50' : 'focus:ring-primary'} transition-all`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`w-full mt-2 md:mt-3.5 bg-white/8 backdrop-blur-2xl border ${errors.email ? 'border-red-500/50' : 'border-surface-border'} rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500/50' : 'focus:ring-primary'} transition-all`}
                    placeholder="Email Address"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  className={`w-full mt-2 md:mt-3.5 bg-white/8 backdrop-blur-2xl border ${errors.message ? 'border-red-500/50' : 'border-surface-border'} rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500/50' : 'focus:ring-primary'} transition-all resize-none`}
                  placeholder="How can I help you?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

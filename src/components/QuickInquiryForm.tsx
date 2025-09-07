"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { ContactMessage } from "@/types";
import { AlertCircle, Send, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(20, "Please provide more details (minimum 20 characters)"),
});

export interface QuickInquiryFormProps {
  className?: string;
}

export function QuickInquiryForm({ className = "" }: QuickInquiryFormProps) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactMessage>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: ContactMessage) {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.", {
          duration: 5000,
        });
        reset();
      } else {
        toast.error(
          result.error || "Failed to send message. Please try again.",
          {
            duration: 5000,
          }
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        "Something went wrong. Please try again or contact us directly.",
        {
          duration: 5000,
        }
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-w-2xl mx-auto ${className}`}>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-primary-light">Start your wellness journey with us</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Full Name *
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <User size={20} />
                </div>
                <input
                  id="name"
                  {...register("name")}
                  placeholder="Enter your full name"
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-300 text-gray-900 bg-gray-50 placeholder:text-gray-500 ${
                    errors.name 
                      ? 'border-red-300 focus:border-red-500 bg-red-50' 
                      : 'border-gray-200 focus:border-primary hover:border-gray-300'
                  }`}
                  disabled={loading}
                />
              </div>
              {errors.name && (
                <p className="text-red-600 text-sm flex items-center gap-2">
                  <AlertCircle size={14} />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Mail size={20} />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="your.email@example.com"
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-300 text-gray-900 bg-gray-50 placeholder:text-gray-500 ${
                    errors.email 
                      ? 'border-red-300 focus:border-red-500 bg-red-50' 
                      : 'border-gray-200 focus:border-primary hover:border-gray-300'
                  }`}
                  disabled={loading}
                />
              </div>
              {errors.email && (
                <p className="text-red-600 text-sm flex items-center gap-2">
                  <AlertCircle size={14} />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
              Phone Number (Optional)
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Phone size={20} />
              </div>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="+94 11 222 3344"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 bg-gray-50 rounded-xl focus:outline-none focus:ring-0 focus:border-primary hover:border-gray-300 transition-all duration-300 text-gray-900 placeholder:text-gray-500"
                disabled={loading}
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Your Message *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-5 text-gray-400">
                <MessageSquare size={20} />
              </div>
              <textarea
                id="message"
                {...register("message")}
                placeholder="Tell us about your wellness goals, preferred treatments, duration of stay, or any specific questions you have..."
                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-300 resize-none text-gray-900 bg-gray-50 placeholder:text-gray-500 ${
                  errors.message 
                    ? 'border-red-300 focus:border-red-500 bg-red-50' 
                    : 'border-gray-200 focus:border-primary hover:border-gray-300'
                }`}
                rows={5}
                disabled={loading}
              />
            </div>
            {errors.message && (
              <p className="text-red-600 text-sm flex items-center gap-2">
                <AlertCircle size={14} />
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-5 px-8 rounded-xl hover:from-primary-dark hover:to-primary focus:outline-none focus:ring-4 focus:ring-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span className="text-lg">Sending Message...</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                <Send size={20} />
                <span className="text-lg">Send Message</span>
              </span>
            )}
          </button>
        </form>

        {/* Footer Section */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>Quick Response</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>Confidential</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>24h Response</span>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-3">
            * Required fields • We typically respond within 2-4 hours during business hours
          </p>
        </div>
      </div>
    </div>
  );
}
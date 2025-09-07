import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parse = schema.safeParse(body);
    
    if (!parse.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { name, email, phone, message } = parse.data;

    // Send to Formspree with your specific form ID
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/myzdldpw";
    
    const formspreeResponse = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "Not provided",
        message,
        _replyto: email,
        _subject: `New inquiry from ${name} - Diya Ulpatha`,
      }),
    });

    if (!formspreeResponse.ok) {
      const errorText = await formspreeResponse.text();
      console.error("Formspree error:", errorText);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    // Log successful submission
    console.log("Contact form submission sent successfully:", {
      name,
      email,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      message: "Your message has been sent successfully!" 
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ 
      error: "Failed to process request. Please try again." 
    }, { status: 500 });
  }
}
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email function");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactEmailRequest = await req.json();
    
    console.log("Processing contact form submission from:", email);

    // Send notification email to the business owner
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "EpoxyMasters <onboarding@resend.dev>",
        to: ["edmena24@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
          <h2>Message:</h2>
          <p>${message}</p>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const error = await notificationRes.text();
      throw new Error(`Failed to send notification: ${error}`);
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to the customer
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "EpoxyMasters <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting EpoxyMasters!",
        html: `
          <h1>Thank you for reaching out, ${name}!</h1>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to call us at <strong>+1 (941) 518-1657</strong> for immediate assistance.</p>
          <br>
          <p>Best regards,</p>
          <p><strong>The EpoxyMasters Team</strong></p>
          <p>Bradenton/Lakewood Ranch, Florida</p>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      console.log("Confirmation email failed but notification was sent");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);

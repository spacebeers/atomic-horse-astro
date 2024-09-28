import sgMail from '@sendgrid/mail';

// Set SendGrid API Key from environment variable
sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

// Define the expected form data structure
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Send email function
export async function sendEmail(request: Request): Promise<{ success: boolean; error?: string }> {
  try {
    // Get the form data from the request
    const formData = await request.formData();
    
    // Extract data and validate
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const message = formData.get('message')?.toString();

    if (!name || !email || !message) {
      throw new Error('Missing form fields');
    }

    // Create the email object
    const msg = {
      to: 'support@atomichorse.agency', // Replace with your email
      from: 'no-reply@yourdomain.com', // Replace with your verified sender email
      subject: `New message from ${name}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send the email via SendGrid
    await sgMail.send(msg);

    // Return success response
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}
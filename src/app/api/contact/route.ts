import { NextResponse } from 'next/server';
import { BUSINESS_INFO } from '@/data/business';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, subject, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    console.log('[Contact Form Submission]:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      subject: subject || 'General Enquiry',
      message,
      recipient: BUSINESS_INFO.email,
    });

    // If a webhook or Web3Forms key is configured, forward it
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `New Enquiry from ${name}: ${subject || 'General'}`,
            from_name: name,
            to: BUSINESS_INFO.email,
            email,
            phone,
            message,
          }),
        });
      } catch (err) {
        console.error('Failed to forward to Web3Forms:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been received. We will be in touch shortly!',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting. Please try again or WhatsApp us.' },
      { status: 500 }
    );
  }
}

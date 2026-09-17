import { NextResponse } from 'next/server';
import { BUSINESS_INFO } from '@/data/business';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      clientName,
      clientPhone,
      clientEmail,
      packageName,
      guestCount,
      totalPrice,
      depositRequired,
      preferredDate,
      preferredTime,
      notes,
    } = data;

    if (!clientName || !clientEmail || !clientPhone) {
      return NextResponse.json(
        { error: 'Name, email, and phone number are required.' },
        { status: 400 }
      );
    }

    console.log('[Spa Day Booking Request]:', {
      timestamp: new Date().toISOString(),
      clientName,
      clientPhone,
      clientEmail,
      packageName,
      guestCount,
      totalPrice,
      depositRequired,
      preferredDate,
      preferredTime,
      notes,
      recipient: BUSINESS_INFO.email,
    });

    // Forward to Web3Forms if configured
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `Spa Day Booking Request: ${packageName} (${guestCount} guests) - ${clientName}`,
            from_name: clientName,
            to: BUSINESS_INFO.email,
            email: clientEmail,
            phone: clientPhone,
            message: `Spa Day Request Details:
- Package: ${packageName}
- Guests: ${guestCount}
- Total Price: £${totalPrice}
- 50% Securing Deposit: £${depositRequired}
- Preferred Date: ${preferredDate || 'Not specified'}
- Preferred Arrival Time: ${preferredTime || 'Not specified'}
- Special Occasion / Dietary Notes: ${notes || 'None provided'}`,
          }),
        });
      } catch (err) {
        console.error('Failed to forward booking request:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Booking request received! Our team will contact you to verify cabin availability.',
    });
  } catch (error) {
    console.error('Booking request error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request.' },
      { status: 500 }
    );
  }
}

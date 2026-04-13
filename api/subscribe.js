/**
 * Vercel Serverless Function for ECOMAIL email subscription
 * This replaces the FastAPI backend for email capture
 */

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only POST requests are accepted'
    });
  }

  try {
    const { email, firstName, lastName } = req.body;

    // Validate input
    if (!email || !email.includes('@')) {
      return res.status(400).json({
        error: 'Invalid email',
        message: 'Prosím zadejte platný e-mail'
      });
    }

    if (!firstName || !firstName.trim()) {
      return res.status(400).json({
        error: 'Missing first name',
        message: 'Jméno je povinné'
      });
    }

    // ECOMAIL API configuration
    const ECOMAIL_API_KEY = process.env.ECOMAIL_API_KEY || '2b0adccba47da8496b64d51b80521f8d5a3c4ed03efccf015d92de2fd35cf86a';
    const ECOMAIL_LIST_ID = process.env.ECOMAIL_LIST_ID || '1';
    const ECOMAIL_API_URL = 'https://api2.ecomailapp.cz';

    // Prepare subscriber data according to ECOMAIL API format
    const requestBody = {
      subscriber_data: {
        email: email.trim(),
        name: firstName.trim(),
        surname: lastName ? lastName.trim() : ''
      },
      trigger_autoresponders: true,
      update_existing: false,
      resubscribe: false,
      skip_confirmation: true  // Skip double opt-in for immediate subscription
    };

    // Call ECOMAIL API
    const ecomailResponse = await fetch(
      `${ECOMAIL_API_URL}/lists/${ECOMAIL_LIST_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'key': ECOMAIL_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      }
    );

    const responseData = await ecomailResponse.json();

    // Handle ECOMAIL API response
    if (ecomailResponse.ok) {
      // Check if already subscribed (from response body)
      const alreadySubscribed = responseData.already_subscribed || false;
      
      return res.status(200).json({
        message: alreadySubscribed ? 'Email already subscribed' : 'Email saved successfully',
        email: email,
        already_subscribed: alreadySubscribed,
        subscriber_id: responseData.id
      });
    }

    // Handle other errors
    if (ecomailResponse.status === 400) {
      return res.status(400).json({
        error: 'Invalid data',
        message: 'Neplatné údaje. Zkontrolujte prosím e-mail.',
        details: responseData
      });
    }

    // Generic error
    throw new Error(`ECOMAIL API error: ${ecomailResponse.status} - ${JSON.stringify(responseData)}`);

  } catch (error) {
    console.error('Subscription error:', error);
    
    return res.status(500).json({
      error: 'Server error',
      message: 'Něco se pokazilo. Zkuste to prosím znovu.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

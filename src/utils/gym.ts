/**
 * Pure business logic for VK FITNESS
 */

export interface GymScheduleState {
  isOpen: boolean;
  statusText: string;
  hoursToday: string;
  isSunday: boolean;
}

export interface EnquiryInput {
  name: string;
  phone: string;
  goal: string;
  batchSlot: string;
  customMessage?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    phone?: string;
  };
}

export const GYM_CONTACT = {
  name: 'VK FITNESS',
  location: 'Radha Raman Rd, near Hansh Kuti Ashram, Narayanpur, Akundaiya, Mainpuri, Uttar Pradesh 205001',
  mapsUrl: 'https://maps.app.goo.gl/wXww7d1FzsrDKUKi7',
  phoneDisplay: '+91 70171 06874',
  phoneRaw: '917017106874',
  instagram: 'https://www.instagram.com/vk.fitness2024/',
  instagramHandle: '@vk.fitness2024',
  regularHours: 'Mon - Sat: 5:00 AM – 10:00 PM',
  sundayHours: 'Sunday: Closed',
};

/**
 * Evaluates if VK FITNESS is open at a given Date time.
 * Open: Mon (1) - Sat (6) between 05:00 and 22:00 (10:00 PM).
 * Sunday (0): Closed.
 */
export function checkGymOpen(date: Date = new Date()): GymScheduleState {
  const day = date.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  const openMinutes = 5 * 60; // 05:00 AM = 300 min
  const closeMinutes = 22 * 60; // 10:00 PM = 1320 min

  if (day === 0) {
    return {
      isOpen: false,
      statusText: 'Closed Today (Sunday)',
      hoursToday: 'Closed',
      isSunday: true,
    };
  }

  const isWithinHours = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (isWithinHours) {
    const remainingMinutes = closeMinutes - currentMinutes;
    const remainingHours = Math.floor(remainingMinutes / 60);
    const subMinutes = remainingMinutes % 60;
    const closingSoon = remainingMinutes <= 60;

    return {
      isOpen: true,
      statusText: closingSoon
        ? `Closing in ${subMinutes} min (at 10:00 PM)`
        : `Open Now until 10:00 PM (${remainingHours}h ${subMinutes}m remaining)`,
      hoursToday: '5:00 AM – 10:00 PM',
      isSunday: false,
    };
  }

  if (currentMinutes < openMinutes) {
    const untilOpen = openMinutes - currentMinutes;
    const untilHours = Math.floor(untilOpen / 60);
    const untilMins = untilOpen % 60;
    return {
      isOpen: false,
      statusText: `Opens at 5:00 AM (in ${untilHours > 0 ? `${untilHours}h ` : ''}${untilMins}m)`,
      hoursToday: '5:00 AM – 10:00 PM',
      isSunday: false,
    };
  }

  return {
    isOpen: false,
    statusText: 'Closed for the night (Opens 5:00 AM tomorrow)',
    hoursToday: '5:00 AM – 10:00 PM',
    isSunday: false,
  };
}

/**
 * Validates membership enquiry inputs
 */
export function validateEnquiry(input: { name: string; phone: string }): ValidationResult {
  const errors: { name?: string; phone?: string } = {};

  const cleanName = input.name.trim();
  if (!cleanName || cleanName.length < 2) {
    errors.name = 'Please provide your full name (at least 2 characters).';
  }

  const cleanPhone = input.phone.replace(/[\s\-\(\)\+]/g, '');
  // Matches 10 digit Indian numbers with optional 91 or 0 prefix
  const indianPhoneRegex = /^(?:91|0)?[6-9]\d{9}$/;
  if (!cleanPhone || !indianPhoneRegex.test(cleanPhone)) {
    errors.phone = 'Please provide a valid 10-digit mobile number.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Builds formatted message and direct WhatsApp link for VK FITNESS
 */
export function buildWhatsAppEnquiry(params: EnquiryInput): {
  messageText: string;
  whatsappUrl: string;
} {
  const cleanName = params.name.trim() || 'Guest';
  const cleanPhone = params.phone.trim();
  const goal = params.goal || 'General Fitness';
  const slot = params.batchSlot || 'Flexible';
  const note = params.customMessage?.trim();

  let message = `Hello VK FITNESS! 👋\n\nI would like to enquire about gym membership and batch timings.\n`;
  message += `\n• Name: ${cleanName}`;
  if (cleanPhone) {
    message += `\n• Phone: ${cleanPhone}`;
  }
  message += `\n• Fitness Goal: ${goal}`;
  message += `\n• Preferred Batch: ${slot}`;
  if (note) {
    message += `\n• Query Note: ${note}`;
  }
  message += `\n\nPlease share latest fee structure and joining details. Thank you!`;

  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${GYM_CONTACT.phoneRaw}?text=${encoded}`;

  return {
    messageText: message,
    whatsappUrl,
  };
}

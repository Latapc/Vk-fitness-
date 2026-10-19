import test from 'node:test';
import assert from 'node:assert/strict';
import { checkGymOpen, validateEnquiry, buildWhatsAppEnquiry, GYM_CONTACT } from './gym.ts';

test('GYM_CONTACT contains accurate verified details', () => {
  assert.equal(GYM_CONTACT.phoneRaw, '917017106874');
  assert.ok(GYM_CONTACT.location.includes('Radha Raman Rd'));
  assert.ok(GYM_CONTACT.location.includes('Mainpuri'));
  assert.ok(GYM_CONTACT.mapsUrl.includes('maps.app.goo.gl'));
});

test('checkGymOpen correctly reports Sunday as closed', () => {
  // Sunday 2026-10-18 10:00 AM
  const sunday = new Date('2026-10-18T10:00:00');
  const res = checkGymOpen(sunday);
  assert.equal(res.isOpen, false);
  assert.equal(res.isSunday, true);
  assert.ok(res.statusText.includes('Closed'));
});

test('checkGymOpen correctly reports weekday business hours', () => {
  // Monday 2026-10-19 08:30 AM (Open)
  const mondayMorning = new Date('2026-10-19T08:30:00');
  const openRes = checkGymOpen(mondayMorning);
  assert.equal(openRes.isOpen, true);
  assert.equal(openRes.isSunday, false);
  assert.ok(openRes.statusText.includes('Open Now'));

  // Monday 2026-10-19 04:00 AM (Early morning, before opening)
  const mondayEarly = new Date('2026-10-19T04:00:00');
  const earlyRes = checkGymOpen(mondayEarly);
  assert.equal(earlyRes.isOpen, false);
  assert.ok(earlyRes.statusText.includes('Opens at 5:00 AM'));

  // Monday 2026-10-19 23:00 PM (Late night, after closing)
  const mondayNight = new Date('2026-10-19T23:00:00');
  const nightRes = checkGymOpen(mondayNight);
  assert.equal(nightRes.isOpen, false);
  assert.ok(nightRes.statusText.includes('Closed for the night'));
});

test('validateEnquiry validates name and Indian phone formats', () => {
  const valid = validateEnquiry({ name: 'Rahul Sharma', phone: '9876543210' });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);

  const validWithPrefix = validateEnquiry({ name: 'Vikas Kumar', phone: '+91 70171 06874' });
  assert.equal(validWithPrefix.isValid, true);

  const invalidName = validateEnquiry({ name: ' ', phone: '9876543210' });
  assert.equal(invalidName.isValid, false);
  assert.ok(invalidName.errors.name);

  const invalidPhone = validateEnquiry({ name: 'Amit Singh', phone: '12345' });
  assert.equal(invalidPhone.isValid, false);
  assert.ok(invalidPhone.errors.phone);
});

test('buildWhatsAppEnquiry generates properly encoded WhatsApp URL and message', () => {
  const enquiry = buildWhatsAppEnquiry({
    name: 'Rohit Verma',
    phone: '9876543210',
    goal: 'Strength & Muscle Building',
    batchSlot: 'Morning (6:00 AM - 9:00 AM)',
    customMessage: 'Do you have trainer slots?',
  });

  assert.ok(enquiry.whatsappUrl.startsWith('https://wa.me/917017106874?text='));
  assert.ok(enquiry.messageText.includes('Rohit Verma'));
  assert.ok(enquiry.messageText.includes('Strength & Muscle Building'));
  assert.ok(enquiry.messageText.includes('Do you have trainer slots?'));
});

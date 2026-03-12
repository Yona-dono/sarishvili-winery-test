'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import Button from './Button';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    if (!data.get('name')) errs.name = t('required');
    const email = data.get('email') as string;
    if (!email) {
      errs.email = t('required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = t('emailInvalid');
    }
    if (!data.get('inquiry')) errs.inquiry = t('required');
    if (!data.get('message')) errs.message = t('required');
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const endpoint =
      process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/placeholder';

    setState('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setState('success');
        form.reset();
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  const fieldClass =
    'w-full rounded-md border border-cream-dark bg-white px-4 py-3 text-charcoal text-sm placeholder:text-warm-gray/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors';
  const labelClass = 'block text-sm font-medium text-charcoal/80 mb-1';
  const errorClass = 'text-xs text-red-600 mt-1';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <input
        name="_gotcha"
        type="text"
        aria-hidden="true"
        tabIndex={-1}
        style={{ display: 'none' }}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            {t('name')} <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className={errorClass} role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            {t('email')} <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className={errorClass} role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            {t('phone')}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>

        {/* Inquiry type */}
        <div>
          <label htmlFor="inquiry" className={labelClass}>
            {t('inquiry')} <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <select
            id="inquiry"
            name="inquiry"
            className={`${fieldClass} cursor-pointer`}
            aria-required="true"
            aria-describedby={errors.inquiry ? 'inquiry-error' : undefined}
            defaultValue=""
          >
            <option value="" disabled>—</option>
            <option value="general">{t('inquiryOptions.general')}</option>
            <option value="order">{t('inquiryOptions.order')}</option>
            <option value="visit">{t('inquiryOptions.visit')}</option>
            <option value="wholesale">{t('inquiryOptions.wholesale')}</option>
            <option value="press">{t('inquiryOptions.press')}</option>
          </select>
          {errors.inquiry && (
            <p id="inquiry-error" className={errorClass} role="alert">
              {errors.inquiry}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          {t('message')} <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${fieldClass} resize-vertical`}
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className={errorClass} role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Status messages */}
      {state === 'success' && (
        <div role="alert" className="rounded-md bg-green-50 border border-green-200 px-4 py-3 text-green-800 text-sm">
          {t('success')}
        </div>
      )}
      {state === 'error' && (
        <div role="alert" className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-red-800 text-sm">
          {t('error')}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={state === 'sending'}
        className="w-full sm:w-auto"
      >
        {state === 'sending' ? t('sending') : t('submit')}
      </Button>
    </form>
  );
}

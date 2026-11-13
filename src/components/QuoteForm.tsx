import React, { useState } from 'react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(255).or(z.literal('')),
  address: z.string().trim().max(200),
  projectType: z.string().max(40),
  sqft: z.string().trim().max(20),
  message: z.string().trim().max(1000),
});

const QuoteForm: React.FC<{ area?: string }> = ({ area }) => {
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      toast({ title: 'Please check the form', description: 'Name and a valid phone number are required.', variant: 'destructive' });
      return;
    }
    const d = parsed.data;
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: d.name,
          email: d.email || 'not provided',
          phone: d.phone,
          service: `${d.projectType || 'Quote'}${area ? ` – ${area}` : ''}`,
          message: [`Address/ZIP: ${d.address || '-'}`, `Approx. sq ft: ${d.sqft || '-'}`, area ? `Page: ${area}` : '', '', d.message].filter(Boolean).join('\n'),
        },
      });
      if (error) throw error;
      toast({ title: 'Request sent', description: 'We\'ll call you back shortly.' });
      form.reset();
    } catch {
      toast({ title: 'Could not send', description: 'Please call +1 (941) 518-1657.', variant: 'destructive' });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <Input name="name" placeholder="Name *" required maxLength={100} aria-label="Name" />
      <Input name="phone" type="tel" placeholder="Phone *" required maxLength={30} aria-label="Phone" />
      <Input name="email" type="email" placeholder="Email (optional)" maxLength={255} aria-label="Email" />
      <Input name="address" placeholder="Address or ZIP" maxLength={200} aria-label="Address or ZIP" />
      <div className="grid grid-cols-2 gap-3">
        <select name="projectType" aria-label="Project type" defaultValue="Garage" className="h-10 rounded-md border border-input bg-background px-3 text-sm">
          <option>Garage</option><option>Patio / lanai</option><option>Commercial</option><option>Other</option>
        </select>
        <Input name="sqft" inputMode="numeric" placeholder="Approx. sq ft" maxLength={20} aria-label="Approximate square footage" />
      </div>
      <Textarea name="message" placeholder="Tell us about your floor" rows={3} maxLength={1000} aria-label="Message" />
      <Button type="submit" className="w-full" size="lg" disabled={sending}>{sending ? 'Sending…' : 'Get My Free Quote'}</Button>
    </form>
  );
};
export default QuoteForm;

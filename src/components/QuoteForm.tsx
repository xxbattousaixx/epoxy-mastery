import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const QuoteForm: React.FC<{ area?: string }> = ({ area }) => {
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: fd.get('name'),
          email: fd.get('email'),
          phone: fd.get('phone'),
          service: area ? `Quote – ${area}` : 'Quote request',
          message: `${fd.get('message') || ''}${area ? `\n\nArea: ${area}` : ''}`,
        },
      });
      if (error) throw error;
      toast({ title: 'Request sent', description: 'We\'ll call you back shortly.' });
      form.reset();
    } catch (err: any) {
      toast({ title: 'Could not send', description: 'Please call +1 (941) 518-1657.', variant: 'destructive' });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <Input name="name" placeholder="Name" required maxLength={100} aria-label="Name" />
      <Input name="phone" type="tel" placeholder="Phone" required maxLength={30} aria-label="Phone" />
      <Input name="email" type="email" placeholder="Email" required maxLength={255} aria-label="Email" />
      <Textarea name="message" placeholder="Garage, patio, business… tell us about your floor" rows={3} maxLength={1000} aria-label="Message" />
      <Button type="submit" className="w-full" size="lg" disabled={sending}>
        {sending ? 'Sending…' : 'Get My Free Quote'}
      </Button>
    </form>
  );
};

export default QuoteForm;

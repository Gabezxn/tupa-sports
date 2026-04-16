'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>(['Olá! Sou a assistente da Tupã Sports. Posso ajudar?']);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="w-80 rounded-2xl border border-white/15 bg-brand-steel p-3 shadow-glow">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-semibold">Atendimento rápido</p>
            <button type="button" onClick={() => setOpen(false)} className="text-xs text-white/70">
              minimizar
            </button>
          </div>

          <div className="mb-3 max-h-56 space-y-2 overflow-auto text-sm">
            {messages.map((message) => (
              <p key={message} className="rounded-lg bg-white/5 p-2">
                {message}
              </p>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMessages((prev) => [...prev, 'Nosso suporte responde em até 2 minutos.'])}
            className="w-full rounded-lg bg-brand-blue px-3 py-2 text-sm"
          >
            Simular resposta
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full bg-brand-blue p-4 text-white shadow-glow"
          aria-label="Abrir chat"
        >
          <MessageCircle size={22} />
        </button>
      )}
    </div>
  );
}

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import { SITE } from "../lib/site-data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function LeadForm({ defaultService = "", source = "", variant = "light" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const dark = variant === "dark";

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Вкажіть імʼя та телефон");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, {
        name: name.trim(),
        phone: phone.trim(),
        service: defaultService || null,
        message: message.trim() || null,
        source_page: source || window.location.pathname,
      });
      setDone(true);
      toast.success("Дякуємо! Ми звʼяжемось з вами протягом 10 хвилин.");
      setName(""); setPhone(""); setMessage("");
    } catch {
      toast.error("Сталася помилка. Спробуйте подзвонити: " + SITE.phone);
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        data-testid="lead-form-success"
        className={`p-8 rounded-sm border ${dark ? "bg-white/5 border-white/15 text-[#F0EBDF]" : "bg-card border-border text-foreground"}`}
      >
        <h3 className="font-display text-2xl font-bold mb-2">Заявку прийнято</h3>
        <p className="opacity-80">
          Менеджер передзвонить протягом 10 хвилин у робочий час.
          Якщо терміново — телефонуйте напряму:
        </p>
        <a href={SITE.phoneHref} className="inline-flex items-center gap-2 mt-4 text-accent hover:opacity-80 font-bold">
          <Phone className="w-4 h-4" /> {SITE.phone}
        </a>
      </motion.div>
    );
  }

  const inputCls = `w-full px-4 py-3 rounded-sm border outline-none transition-colors ${
    dark
      ? "panel-ink-input focus:border-accent"
      : "bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-accent"
  }`;

  return (
    <form onSubmit={submit} data-testid="lead-form" className="grid gap-3">
      <input type="text" required value={name} onChange={(e) => setName(e.target.value)}
        placeholder="Ваше імʼя" data-testid="lead-name-input" className={inputCls} />
      <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
        placeholder="+380 ___ ___ __ __" data-testid="lead-phone-input" className={inputCls} />
      <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)}
        placeholder="Коротко про задачу (необовʼязково)" data-testid="lead-message-input"
        className={inputCls + " resize-none"} />
      {defaultService && (
        <input type="hidden" value={defaultService} readOnly data-testid="lead-service-hidden" />
      )}
      <button type="submit" disabled={loading} data-testid="lead-submit-btn"
        className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-60 text-accent-foreground px-6 py-3.5 rounded-sm font-semibold transition-all hover:-translate-y-0.5">
        <Send className="w-4 h-4" />
        {loading ? "Надсилаємо…" : "Замовити дзвінок"}
      </button>
      <p className={`text-xs ${dark ? "opacity-60" : "text-muted-foreground"}`}>
        Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних. Менеджер зателефонує протягом 10 хвилин.
      </p>
    </form>
  );
}

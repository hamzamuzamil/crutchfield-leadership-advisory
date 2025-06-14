
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ConsultationForm = () => {
  const [form, setForm] = useState({
    name: "",
    org: "",
    challenge: "",
    timeline: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Request Submitted",
        description:
          "Thank you for your interest. Mark will be in touch within 24 hours.",
      });
      setForm({ name: "", org: "", challenge: "", timeline: "" });
    }, 800);
  };

  return (
    <form
      className="space-y-7 pt-2 animate-fade-in"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div>
        <label className="block text-slate-300 font-semibold mb-2" htmlFor="name">
          Name
        </label>
        <Input
          id="name"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          disabled={submitting}
          className="bg-slate-900/80 border-gold/30 text-white"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className="block text-slate-300 font-semibold mb-2" htmlFor="org">
          Organisation
        </label>
        <Input
          id="org"
          name="org"
          required
          value={form.org}
          onChange={handleChange}
          disabled={submitting}
          className="bg-slate-900/80 border-gold/30 text-white"
          placeholder="Organisation name"
        />
      </div>
      <div>
        <label className="block text-slate-300 font-semibold mb-2" htmlFor="challenge">
          Project Challenge
        </label>
        <Textarea
          id="challenge"
          name="challenge"
          required
          value={form.challenge}
          onChange={handleChange}
          disabled={submitting}
          className="bg-slate-900/80 border-gold/30 text-white"
          placeholder="Describe your main challenge"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-slate-300 font-semibold mb-2" htmlFor="timeline">
          Ideal Timeline
        </label>
        <Input
          id="timeline"
          name="timeline"
          value={form.timeline}
          onChange={handleChange}
          disabled={submitting}
          className="bg-slate-900/80 border-gold/30 text-white"
          placeholder="E.g. Q3 2025, ASAP, or specific date"
        />
      </div>
      <Button
        type="submit"
        className="w-full mt-2 bg-gold text-slate-950 hover:bg-gold/80 font-semibold rounded-lg py-2 px-3 text-lg transition animate-scale-in"
        disabled={submitting}
      >
        {submitting ? "Sending..." : "Request Consultation"}
      </Button>
    </form>
  );
};

export default ConsultationForm;

import { motion } from 'framer-motion'
import Section from '../layout/section'

const C = '#fb4c1e'

const STEPS = [
  'Once we receive and process your request, we will get back to you to detail your project needs and sign an NDA to ensure confidentiality.',
  'After examining your wants, needs, and expectations, our team will devise a project proposal with the scope of work, team size, time, and cost estimates.',
  'We will arrange a meeting with you to discuss the offer and nail down the details.',
  'Finally, we will sign a contract and start working on your project right away.',
]

const inputCls = 'w-full bg-transparent py-2.5 text-sm outline-none transition-colors placeholder:text-[var(--fg-subtle)]'
const inputStyle = { borderBottom: '1px solid var(--border-mid)', color: 'var(--fg)' }

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export default function Contact() {
  return (
    <div id="contact" style={{ borderTop: '1px solid var(--border)' }}>
      <Section className="py-24 lg:py-32">

        <motion.div {...fade()} className="mb-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px" style={{ backgroundColor: C }} />
                <p className="text-[11px] font-mono tracking-[0.2em] uppercase" style={{ color: C }}>08 — Start a Project</p>
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl" style={{ color: 'var(--fg)' }}>
                Let's discuss<br />your project
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed lg:text-right" style={{ color: 'var(--fg-muted)' }}>
              Book a call or fill out the form below and we will get back to you once we have processed your request.
            </p>
          </div>
        </motion.div>

        <motion.div {...fade(0.1)} className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Form */}
          <form className="flex flex-col gap-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: 'var(--fg-muted)' }}>
                  Name <span style={{ color: C }}>*</span>
                </label>
                <input type="text" name="name" required placeholder="Your full name" className={inputCls} style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = C)}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--border-mid)')} />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: 'var(--fg-muted)' }}>
                  Company <span style={{ color: C }}>*</span>
                </label>
                <input type="text" name="company" required placeholder="Company name" className={inputCls} style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = C)}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--border-mid)')} />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: 'var(--fg-muted)' }}>
                  Corporate email <span style={{ color: C }}>*</span>
                </label>
                <input type="email" name="email" required placeholder="you@company.com" className={inputCls} style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = C)}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--border-mid)')} />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: 'var(--fg-muted)' }}>
                  Phone <span style={{ color: C }}>*</span>
                </label>
                <input type="tel" name="phone" required placeholder="+1 (555) 000-0000" className={inputCls} style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = C)}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--border-mid)')} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-2" style={{ color: 'var(--fg-muted)' }}>
                Describe your needs <span style={{ color: C }}>*</span>
              </label>
              <textarea name="message" rows={4} required
                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                className={`${inputCls} resize-none`} style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderBottomColor = C)}
                onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--border-mid)')} />
            </div>

            <label className="group flex items-center gap-3 cursor-pointer py-1 w-fit">
              <div className="flex h-8 w-8 items-center justify-center transition-colors duration-200"
                style={{ border: '1px solid var(--border-mid)', color: 'var(--fg-muted)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(251,76,30,0.3)'; (e.currentTarget as HTMLElement).style.color = C }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-mid)'; (e.currentTarget as HTMLElement).style.color = 'var(--fg-muted)' }}>
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </div>
              <span className="text-xs" style={{ color: 'var(--fg-muted)' }}>Attach documents</span>
              <input type="file" name="attachment" className="sr-only" multiple />
            </label>

            <p className="text-[10px] leading-relaxed max-w-md" style={{ color: 'var(--fg-subtle)' }}>
              By clicking Send, you consent to ellietec processing your personal data per our Privacy Policy to provide you with relevant information.
            </p>

            <button type="submit"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 w-fit"
              style={{ backgroundColor: C }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e03d12')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = C)}>
              Send request
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>

          {/* What happens next */}
          <div className="lg:pl-8 lg:border-l" style={{ borderColor: 'var(--border)' }}>
            <h3 className="text-base font-semibold mb-8" style={{ color: 'var(--fg)' }}>What happens next?</h3>
            <div className="flex flex-col gap-6">
              {STEPS.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="flex h-7 w-7 items-center justify-center text-[10px] font-mono shrink-0 mt-0.5"
                    style={{ border: '1px solid var(--border-mid)', color: C }}>
                    {i + 1}
                  </span>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 flex flex-col gap-3" style={{ borderTop: '1px solid var(--border)' }}>
              <p className="text-xs mb-1" style={{ color: 'var(--fg-muted)' }}>Prefer a direct conversation?</p>
              {[
                { href: 'mailto:hello@ellietec.com', label: 'hello@ellietec.com', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { href: 'tel:+1234567890', label: '+1 (555) 000-0000', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
              ].map(link => (
                <a key={link.href} href={link.href}
                  className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-[#fb4c1e]"
                  style={{ color: 'var(--fg-muted)' }}>
                  <svg className="h-4 w-4" style={{ color: 'rgba(251,76,30,0.6)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={link.d} />
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </motion.div>
      </Section>
    </div>
  )
}

import React, { useState, FormEvent } from 'react'


const Newsletter = () => {

    const [email, setEmail] = useState('');
  
    const handleSubscribe = (e: FormEvent) => {
      e.preventDefault();
      console.log('Subscribed:', email);
      setEmail('');
    };

  return (
    <>
      <div className="space-y-2 max-w-sm">
        <span className="inline-block font-display text-sm md:text-base font-semibold text-text-body">Stay Updated</span>
        <form onSubmit={handleSubscribe} className="flex w-full items-center justify-between rounded-full border border-primary! pl-6">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent text-sm md:text-base text-text-body placeholder-[#A0AEC0] placeholder:text-sm outline-none py-2"
          />
          <button
            type="submit"
            className="flex shrink-0 items-center justify-center rounded-r-full bg-linear-to-r from-primary to-secondary px-4 py-3  xl:px-4 xl:py-3 font-display text-xs md:text-sm  font-semibold text-white transition-all duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  )
}

export default Newsletter
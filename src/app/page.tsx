import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#2b47ff] text-black selection:bg-[#ffae00]">
      {/* HEADER */}
      <header className="flex justify-between items-stretch border-b border-black/20 bg-[#2b47ff] sticky top-0 z-50 h-[80px]">
        <div className="flex items-center px-8">
          {/* Logo Placeholder */}
          <div className="font-[var(--font-alt)] text-3xl tracking-tighter">
            SR
          </div>
        </div>
        
        <nav className="hidden md:flex flex-1 justify-end items-center font-[var(--font-heading)] font-bold text-lg uppercase tracking-wider">
          <div className="flex gap-8 px-8 items-center h-full">
            <a href="#work" className="hover:opacity-70">WORK</a>
            <a href="#services" className="hover:opacity-70">SERVICES</a>
            <a href="#about" className="hover:opacity-70">ABOUT</a>
            <a href="#experience" className="hover:opacity-70">EXPERIENCE</a>
            <a href="#blog" className="hover:opacity-70">BLOG</a>
            <a href="#contact" className="hover:opacity-70">CONTACT</a>
          </div>
          <a href="mailto:shubhamrathod1619@gmail.com" className="h-full flex items-center justify-center px-8 border-l border-black/20 hover:bg-black/5 transition-colors">
            LET'S TALK ↗
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative px-4 md:px-12 py-12 md:py-20 min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Clouds */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
           <svg className="w-full h-full text-[#4a64ff]" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
              <path d="M-10,50 Q20,30 40,50 T110,40 L110,110 L-10,110 Z" />
              <path d="M-10,70 Q30,50 60,70 T110,60 L110,110 L-10,110 Z" opacity="0.5" />
           </svg>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Left Text Box */}
          <div className="w-full md:w-5/12">
            <div className="border border-black/40 rounded-2xl bg-[#2b47ff]/20 backdrop-blur-sm p-8 md:p-10 shadow-sm relative z-20">
              <h1 className="font-[var(--font-alt)] text-[100px] md:text-[120px] leading-[0.8] tracking-tighter text-black mb-4">
                HEY!
              </h1>
              
              <div className="flex items-end gap-3 mb-8">
                <span className="font-sans text-2xl font-medium tracking-wide">I'm</span>
                <div className="relative">
                  <span className="font-[var(--font-caveat)] text-6xl leading-none block -rotate-2 text-black">Shubham</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-4 text-black" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M0,10 Q50,20 100,5" />
                  </svg>
                </div>
              </div>

              <div className="border-t border-dotted border-black/40 pt-6">
                <p className="font-medium text-[15px] leading-relaxed text-black/90 max-w-[95%]">
                  An AI Engineer & full stack developer crafting modern, high-performance systems and applications.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="#work" className="bg-[#0a0a0a] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase flex items-center gap-3 hover:bg-black/80 transition-colors shadow-lg tracking-wider">
                  VIEW MY WORK <span className="text-lg leading-none">→</span>
                </a>
                <a href="#about" className="border border-black/40 text-black px-6 py-3 rounded-xl font-bold text-xs uppercase flex items-center gap-3 hover:bg-black/5 transition-colors tracking-wider">
                  WATCH INTRO <span className="w-5 h-5 rounded-full border border-black flex items-center justify-center text-[8px] pl-[2px]">▶</span>
                </a>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="mt-16 text-[10px] font-bold uppercase tracking-widest text-black/60 flex flex-col items-start gap-4">
              <span>SCROLL TO EXPLORE</span>
              <div className="w-5 h-8 border border-black/30 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-black/40 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* Right Illustration Area */}
          <div className="w-full md:w-7/12 flex justify-end items-end relative h-[600px]">

             {/* Avatar Image */}
             <div className="absolute -bottom-20 -right-12 z-10 w-[120%] h-[120%] flex justify-end items-end pointer-events-none">
               <img src="/avatar.png" alt="Shubham Rathod" className="object-contain object-right-bottom h-full w-auto drop-shadow-2xl" />
             </div>
          </div>
        </div>
      </section>

      {/* WORK / PROJECTS SECTION */}
      <section id="work" className="relative py-32 bg-[#2b47ff] overflow-hidden flex flex-col items-center">
        {/* Giant Background Text */}
        <div className="absolute top-10 right-4 md:right-12 flex justify-end pointer-events-none z-0">
          <h2 className="font-[var(--font-heading)] text-[22vw] leading-[0.8] text-white font-black tracking-tighter">WORK</h2>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-20 md:mt-40">
          <div className="bg-black border-[6px] border-black rounded-3xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Left Info Panel */}
            <div className="w-full md:w-5/12 flex flex-col border-r-[6px] border-black">
              {/* Top Half: Black */}
              <div className="bg-black p-8 md:p-12 flex items-center justify-center min-h-[250px]">
                <h3 className="font-[var(--font-heading)] text-[120px] md:text-[140px] leading-none text-white font-black tracking-tighter">ECO</h3>
              </div>
              
              {/* Bottom Half: Purple */}
              <div className="bg-[#9499ff] p-8 md:p-12 flex-1 border-t-[6px] border-black flex flex-col">
                <div className="border-b-4 border-black pb-4">
                  <p className="font-bold text-sm uppercase tracking-wider mb-2 text-black/80">PROJECT</p>
                  <h4 className="font-[var(--font-heading)] text-5xl md:text-6xl uppercase leading-[0.9] font-black">ECOSYSTEM<br/>AI</h4>
                </div>

                <div className="flex gap-6 font-black text-[10px] uppercase pt-4">
                  <span className="flex flex-col items-center gap-1">
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-t-[6px] border-t-black border-r-[4px] border-r-transparent"></div>
                    NEXT.JS
                  </span>
                  <span className="flex flex-col items-center gap-1">
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-t-[6px] border-t-black border-r-[4px] border-r-transparent"></div>
                    PYTHON
                  </span>
                  <span className="flex flex-col items-center gap-1">
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-t-[6px] border-t-black border-r-[4px] border-r-transparent"></div>
                    N8N
                  </span>
                </div>

                <div className="mt-auto pt-16 flex items-end justify-between">
                  <a href="https://github.com/Rathod-shubhamm" className="inline-flex items-center justify-between border-4 border-black px-6 py-2 hover:bg-white transition-colors bg-transparent text-black">
                    <span className="font-[var(--font-heading)] text-xl md:text-2xl uppercase font-black mr-8">VIEW WORK</span>
                    <span className="text-xl font-black">→</span>
                  </a>
                  <div className="font-[var(--font-heading)] text-sm font-black text-black/60">1/5</div>
                </div>
              </div>
            </div>

            {/* Right Image Panel */}
            <div className="w-full md:w-7/12 bg-[#e0e0e0] flex items-center justify-center p-12 relative min-h-[400px]">
               {/* Phone Mockup Representation */}
               <div className="w-[200px] h-[400px] bg-white border-[12px] border-black rounded-[30px] shadow-xl flex flex-col overflow-hidden relative z-10 transform -rotate-6">
                 <div className="w-1/2 h-4 bg-black mx-auto rounded-b-xl"></div>
                 <div className="flex-1 p-4">
                   <div className="h-20 bg-blue-100 rounded-lg mb-4"></div>
                   <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                   <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                 </div>
               </div>
               
               {/* Landscape Mockup */}
               <div className="absolute w-[350px] h-[200px] bg-[#1a1a1a] border-4 border-black rounded-2xl shadow-2xl z-20 translate-x-12 translate-y-12 flex overflow-hidden">
                  <div className="w-1/3 bg-blue-900 border-r-4 border-black p-4 flex flex-col justify-between">
                     <div className="w-12 h-12 bg-white rounded-full opacity-20"></div>
                     <div className="h-2 bg-white/50 rounded w-full"></div>
                  </div>
                  <div className="w-2/3 bg-blue-600 p-4">
                    <h5 className="font-[var(--font-alt)] text-white text-3xl mb-2">95%</h5>
                    <p className="text-white/80 text-xs font-bold leading-tight">Semantic relevance across 10k+ automated content cycles.</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES / SKILLS SECTION */}
      <section id="services" className="relative py-32 bg-[#2b47ff] overflow-hidden">
        <div className="px-4 md:px-12 mb-20 flex flex-col md:flex-row justify-between items-end">
          <h2 className="font-[var(--font-heading)] text-[15vw] leading-[0.7] text-black font-black tracking-tighter">SERVICES</h2>
          <p className="font-bold text-lg max-w-md md:text-right text-black mt-8 md:mt-0">
            I'm a full stack creative and AI Engineer which means I can help take any project from ground zero to an award-worthy launch. If you have a project you'd like to discuss then please <a href="#" className="underline font-black hover:text-white">get in touch</a>.
          </p>
        </div>

        {/* Horizontal Line across */}
        <div className="absolute top-[55%] w-full h-2 bg-black z-0"></div>

        <div className="relative z-10 w-full overflow-x-auto pb-12 pt-10">
          <div className="flex gap-8 min-w-max px-4 md:px-12 items-center">
            
            {/* Card 1 */}
            <div className="w-[350px] h-[500px] bg-black rounded-[40px] flex flex-col overflow-hidden relative">
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-[#ff4a4a] rounded-3xl flex flex-col items-center justify-center text-black font-black z-20 shadow-[0_8px_0_0_rgba(0,0,0,0.2)]">
                <span className="text-lg">WEB</span>
                <div className="w-8 h-8 border-[6px] border-black rounded-full mt-2 bg-[#2b47ff]"></div>
                <span className="text-[10px] mt-2">08-20-12</span>
              </div>
              <div className="h-[60%] relative flex items-end justify-center pb-8 z-10">
                <h3 className="font-[var(--font-alt)] text-[90px] leading-none text-[#ff4a4a] transform scale-y-110">WEB</h3>
              </div>
              <div className="h-[40%] bg-[#b83e85] p-8 flex flex-col justify-end z-10">
                <span className="font-black text-sm uppercase">SERVICE</span>
                <h4 className="font-[var(--font-heading)] text-5xl uppercase leading-none mt-1">WEB DESIGN</h4>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[350px] h-[550px] bg-black rounded-[40px] flex flex-col overflow-hidden relative -mt-12">
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-[#ffae00] rounded-3xl flex flex-col items-center justify-center text-black font-black z-20 shadow-[0_8px_0_0_rgba(0,0,0,0.2)]">
                <span className="text-lg">DEV</span>
                <div className="w-8 h-8 border-[6px] border-black rounded-full mt-2 bg-[#2b47ff]"></div>
                <span className="text-[10px] mt-2">02-20-03</span>
              </div>
              <div className="h-[65%] relative flex items-end justify-center pb-8 z-10">
                <h3 className="font-[var(--font-alt)] text-[90px] leading-none text-[#ffae00] transform scale-y-110">DEV</h3>
              </div>
              <div className="h-[35%] bg-[#d4cbb8] p-8 flex flex-col justify-end z-10">
                <span className="font-black text-sm uppercase">SERVICE</span>
                <h4 className="font-[var(--font-heading)] text-5xl uppercase leading-none mt-1">WEB DEVELOPMENT</h4>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[350px] h-[500px] bg-black rounded-[40px] flex flex-col overflow-hidden relative">
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-[#8fff4a] rounded-3xl flex flex-col items-center justify-center text-black font-black z-20 shadow-[0_8px_0_0_rgba(0,0,0,0.2)]">
                <span className="text-lg">AI</span>
                <div className="w-8 h-8 border-[6px] border-black rounded-full mt-2 bg-[#2b47ff]"></div>
                <span className="text-[10px] mt-2">10-15-24</span>
              </div>
              <div className="h-[60%] relative flex items-end justify-center pb-8 z-10">
                <h3 className="font-[var(--font-alt)] text-[100px] leading-none text-[#8fff4a] transform scale-y-110">AI</h3>
              </div>
              <div className="h-[40%] bg-[#a3c4a3] p-8 flex flex-col justify-end z-10">
                <span className="font-black text-sm uppercase">SERVICE</span>
                <h4 className="font-[var(--font-heading)] text-5xl uppercase leading-none mt-1">AI ENGINEERING</h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative pt-32 bg-[#2b47ff] overflow-hidden min-h-screen flex items-center justify-center" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #2b47ff, #2b47ff 20px, #1a2eba 20px, #1a2eba 40px)' }}>
        
        {/* Pitch / Field Graphic at Bottom */}
        <div className="absolute bottom-0 w-full h-1/2">
           <div className="w-full h-full bg-[#1b9e1b] relative border-t-8 border-white overflow-hidden perspective-1000">
             {/* Center Circle */}
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-8 border-white rounded-full"></div>
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
             {/* Penalty Box Left */}
             <div className="absolute bottom-0 left-[20%] w-[60%] h-40 border-t-8 border-l-8 border-r-8 border-white"></div>
             {/* Goal Box Left */}
             <div className="absolute bottom-0 left-[35%] w-[30%] h-16 border-t-8 border-l-8 border-r-8 border-white"></div>
           </div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 -mt-20">
          
          <div className="bg-white border-[6px] border-black rounded-[20px] overflow-hidden">
            <div className="flex flex-col lg:flex-row p-12 md:p-16 gap-12">
              
              <div className="w-full lg:w-4/12">
                <h2 className="font-[var(--font-heading)] font-black text-[100px] leading-[0.8] tracking-tighter">ABOUT</h2>
              </div>
              
              <div className="w-full lg:w-5/12">
                <h3 className="font-[var(--font-heading)] text-3xl uppercase mb-4 font-bold text-gray-500">BIO</h3>
                <p className="font-bold text-sm mb-4 leading-relaxed">
                  For 2 years, I have been engineering intelligent systems for complex data problems. Currently building multi-agent AI pipelines at Apexneural Pvt Ltd, I architect solutions that automate the entire content lifecycle.
                </p>
                <p className="font-bold text-sm leading-relaxed">
                  Whether setting the direction through predictive models, or tactical execution via scalable APIs and React frontends, I help businesses of all sizes to operate more intelligently.
                </p>
              </div>

              <div className="w-full lg:w-3/12">
                <h3 className="font-[var(--font-heading)] text-3xl uppercase mb-4 font-bold text-gray-500">ROSTER</h3>
                <ul className="font-bold text-sm space-y-1">
                  <li>Apexneural Pvt Ltd</li>
                  <li>BlinkCare</li>
                  <li>VIT Bhopal</li>
                  <li>EcoSystem AI</li>
                  <li>PitchPulse AI</li>
                  <li>MarketBrain AI</li>
                  <li>Lumina AI</li>
                </ul>
              </div>

            </div>

            {/* Scoreboard Marquee */}
            <div className="border-t-[6px] border-black flex items-stretch h-32 relative z-20 bg-white">
              {/* Score Box */}
              <div className="bg-black text-white flex gap-4 px-6 items-center border-r-[6px] border-black h-full rounded-bl-[14px]">
                <div className="flex flex-col items-center justify-center">
                  <span className="font-[var(--font-heading)] uppercase text-sm mb-1">HOME</span>
                  <span className="font-[var(--font-alt)] text-6xl leading-none">0</span>
                </div>
                <span className="font-[var(--font-alt)] text-6xl leading-none -mt-4">-</span>
                <div className="flex flex-col items-center justify-center">
                  <span className="font-[var(--font-heading)] uppercase text-sm mb-1">AWAY</span>
                  <span className="font-[var(--font-alt)] text-6xl leading-none">0</span>
                </div>
              </div>
              {/* Marquee Text */}
              <div className="flex-1 overflow-hidden flex items-center bg-white h-full relative">
                <div className="whitespace-nowrap font-[var(--font-heading)] text-6xl md:text-8xl font-black uppercase tracking-tighter absolute left-0 flex animate-marquee text-black">
                  <span className="px-4">SS WINNER SOTD X4 / AXIOM SILVER MEDALIST /</span>
                  <span className="px-4">SS WINNER SOTD X4 / AXIOM SILVER MEDALIST /</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

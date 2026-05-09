"use client";

import { use, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Activity, Network, Zap, LayoutGrid, Terminal } from "lucide-react";
import { notFound } from "next/navigation";

// Define the data for the 4 pages
const WORK_DATA = {
  "agentic-systems": {
    title: "AGENTIC SYSTEMS",
    code: "AGT",
    color: "#f04d3c",
    description: "Enterprise automation and autonomous multi-agent orchestration infrastructure.",
    overview: "Engineered an entire organization-wide automation system powered by OpenClaw. The architecture relies on a 4-node autonomous workforce: a Main Coordinator, Coder, Browser-enabled Researcher, and Writer. The main orchestrator processes voice and text inputs, actively delegating and tracking progress across sub-agents. C-level executives can frictionlessly push tasks to any employee's Jira board, pull Slack summaries, and receive automated daily/weekly operational reports directly via Telegram.",
    metrics: [
      { label: "Autonomous Agents", value: "4-Node" },
      { label: "Platform Integrations", value: "6+" },
      { label: "Orchestration", value: "Multi-Agent" },
    ],
    features: [
      "Enterprise OpenClaw automation",
      "Voice-to-Jira task delegation pipelines",
      "Autonomous Coder, Researcher & Writer agents",
      "Slack/Gmail/GitHub cross-platform integration",
      "Automated Telegram progress reporting",
      "Slack channel/DM intelligent summarization"
    ],
    tech: {
      AI: ["OpenClaw", "LangChain", "CrewAI", "GPT-4"],
      Backend: ["Python", "FastAPI", "Celery", "Redis"],
      Integrations: ["Jira", "Slack", "Telegram", "GitHub", "Gmail"]
    },
    architectureUrl: "/placeholder-architecture.svg",
    dashboardStyle: "terminal",
    heroImage: "/e95dce3e43594e6b8dca15148275a117.webp"
  },
  "ai-content-infrastructure": {
    title: "AI CONTENT INFRA",
    code: "CNT",
    color: "#9499ff",
    description: "Omnichannel social automation and AI-driven content scheduling systems.",
    overview: "Architected 'AI Content Factory', an end-to-end multi-platform publishing engine with frictionless zero-setup onboarding. Users simply log in—no developer accounts or complex API keys required—to simultaneously blast content across Facebook, Twitter, Instagram, Reddit, and YouTube. It empowers users to generate AI imagery or upload custom media, auto-generate SEO-optimized captions with targeted hashtags, while a robust calendar scheduler orchestrates cross-platform drops dynamically.",
    metrics: [
      { label: "Platforms Synced", value: "5 Networks" },
      { label: "Onboarding", value: "Zero-Config" },
      { label: "Asset Pipeline", value: "AI + Custom" },
    ],
    features: [
      "Zero-config OAuth login (No Dev APIs needed)",
      "Omnichannel posting (FB, X, IG, Reddit, YT)",
      "Automated SEO-optimized captions & hashtags",
      "Dynamic calendar-based scheduling",
      "AI image generation pipelines",
      "Custom media & video upload bypass"
    ],
    tech: {
      AI: ["Stable Diffusion", "GPT-4V", "DALL-E 3"],
      Backend: ["Node.js", "Express", "RabbitMQ", "PostgreSQL"],
      Integrations: ["Meta Graph API", "X API", "YouTube API", "Reddit API"]
    },
    dashboardStyle: "dashboard",
    heroImage: "/cnt-preview.png"
  },
  "data-intelligence-systems": {
    title: "DATA INTELLIGENCE SYSTEMS",
    code: "DAT",
    color: "#ffae00",
    description: "Data lineage, analytics infrastructure, ETL, and intelligence systems.",
    overview: "Robust foundational data systems built for scale. By structuring raw telemetry into structured, queryable graphs, we enable real-time anomaly detection and predictive scoring. The system features self-healing ETL pipelines and massive SQL processing capability.",
    metrics: [
      { label: "SQL Transformations", value: "10,000+" },
      { label: "Production Data", value: "2TB+" },
      { label: "Lineage Coverage", value: "94%" },
    ],
    features: [
      "Data lineage platform",
      "SQL dependency graph systems",
      "ETL pipelines with auto-retry",
      "Anomaly detection systems",
      "Predictive scoring algorithms",
      "Large-scale SQL processing"
    ],
    tech: {
      Data: ["Snowflake", "BigQuery", "dbt", "Airflow"],
      Backend: ["Python", "Go", "Redis", "Kafka"],
      Infra: ["GCP", "Kubernetes", "Prometheus", "Grafana"]
    },
    dashboardStyle: "pipeline",
    heroImage: "/dat-hero.png"
  },
  "computer-vision": {
    title: "COMPUTER VISION",
    code: "VIS",
    color: "#8aff70",
    description: "Machine perception and visual AI systems.",
    overview: "Real-time visual inference at the edge and in the cloud. We deploy optimized detection and segmentation models capable of running at high framerates. From agricultural analysis to industrial monitoring, these systems convert pixel data into structured operational insights.",
    metrics: [
      { label: "Inference Latency", value: "<40ms" },
      { label: "Detection Accuracy", value: "96.5%" },
      { label: "Live Streams", value: "24/7" },
    ],
    features: [
      "YOLOv8 object detection",
      "Potato disease detection models",
      "High-throughput image processing",
      "OpenCV custom pipelines",
      "Real-time inference systems"
    ],
    tech: {
      AI: ["PyTorch", "Ultralytics YOLO", "TensorRT", "OpenCV"],
      Backend: ["C++", "Python", "FastAPI", "NVIDIA Triton"],
      Frontend: ["WebRTC", "React", "Canvas API", "WebGL"]
    },
    dashboardStyle: "vision",
    heroImage: "/vis-hero.png"
  }
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Main Component
export default function ProjectPage({ params }: PageProps) {
  const { slug } = use(params);
  const data = WORK_DATA[slug as keyof typeof WORK_DATA];

  useEffect(() => {
    // scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return notFound();
  }

  return (
    <div className="site-shell bg-black min-h-screen text-black overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Navigation Bar (Brutalist matches existing) */}
        <header className="fixed top-0 left-[10px] right-[10px] z-[1000] h-[clamp(56px,5.9vw,92px)] flex items-center justify-between px-[1.5vw] border-t-[10px] border-b-[2px] border-black bg-[#2b47ff]">
          <Link href="/" className="w-[clamp(40px,3vw,58px)] flex-shrink-0 text-black hover:opacity-80 transition-opacity">
            <span className="logo-mark" aria-hidden="true">
              <span /><span /><span /><span />
            </span>
          </Link>
          <div className="flex items-center ml-auto font-[family-name:var(--font-alumni)] text-[clamp(18px,2vw,32px)] font-extrabold leading-[0.8] uppercase">
            <Link href="/" className="flex items-center gap-2 hover:bg-black hover:text-white px-4 py-2 border-2 border-transparent hover:border-black rounded-full transition-all">
              <ArrowLeft className="w-5 h-5" />
              <span>BACK TO PORTFOLIO</span>
            </Link>
          </div>
        </header>

        <main className="pt-[clamp(80px,10vw,120px)] px-[10px] pb-[10px]">

          {/* HERO SECTION */}
          <section
            className="relative border-2 border-black rounded-t-[clamp(4px,0.8vw,8px)] overflow-hidden"
            style={{ backgroundColor: data.color }}
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "32px 32px" }} />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              <div className="p-[5vw] flex flex-col justify-center">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="inline-block bg-black text-white font-[family-name:var(--font-alumni)] text-[clamp(18px,2vw,32px)] font-bold px-4 py-1 mb-6 uppercase tracking-wider">
                    PROJECT / {data.code}
                  </div>
                  <h1 className="m-0 font-[family-name:var(--font-alumni)] text-[clamp(60px,10vw,140px)] font-bold leading-[0.85] uppercase tracking-tight">
                    {data.title}
                  </h1>
                  <p className="mt-8 text-[clamp(18px,2vw,28px)] font-medium max-w-2xl leading-[1.3] font-[family-name:var(--font-inter)] border-l-4 border-black pl-6">
                    {data.description}
                  </p>
                </motion.div>
              </div>

              {/* @ts-ignore - heroImage added to data object */}
              {data.heroImage && (
                <div className="relative h-[300px] lg:h-auto border-t-2 lg:border-t-0 lg:border-l-2 border-black overflow-hidden bg-black/5">
                  <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full h-full"
                  >
                    <img
                      src={data.heroImage}
                      alt={data.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
                  </motion.div>
                </div>
              )}
            </div>
          </section>

          {/* PROJECT OVERVIEW & METRICS */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-x-2 border-b-2 border-black bg-white">
            <div className="col-span-1 lg:col-span-7 p-[5vw] border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-center">
              <h2 className="font-[family-name:var(--font-alumni)] text-[clamp(42px,5vw,84px)] font-bold uppercase leading-[0.9] mb-8">System Overview</h2>
              <p className="text-[clamp(16px,1.25vw,22px)] leading-[1.6] font-[family-name:var(--font-inter)] text-gray-900 max-w-2xl">
                {data.overview}
              </p>
            </div>
            <div className="col-span-1 lg:col-span-5 flex flex-col">
              {data.metrics.map((metric, idx) => (
                <div key={idx} className="flex-1 p-[3vw] border-b-2 last:border-b-0 border-black flex flex-col justify-center bg-[#f4f4f4] hover:bg-black hover:text-white transition-colors duration-300 group">
                  <span className="font-[family-name:var(--font-inter)] text-[clamp(12px,1vw,16px)] uppercase font-bold tracking-widest text-gray-500 group-hover:text-gray-400 mb-2">{metric.label}</span>
                  <span className="font-[family-name:var(--font-alumni)] text-[clamp(50px,6vw,100px)] font-bold leading-[0.8]">{metric.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CORE FEATURES GRID */}
          <section className="border-x-2 border-b-2 border-black bg-black p-[5vw]">
            <h2 className="font-[family-name:var(--font-alumni)] text-[clamp(42px,5vw,84px)] font-bold uppercase leading-[0.9] mb-[4vw] text-white">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 0.98, y: -5 }}
                  className="border-2 border-[#333] hover:border-white bg-[#111] p-8 flex flex-col gap-4 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-inter)] text-white text-[clamp(18px,1.5vw,24px)] font-bold leading-[1.2]">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </section>

          {/* TECH STACK SECTION */}
          <section className="border-x-2 border-b-2 border-black bg-[#2b47ff] p-[5vw]">
            <h2 className="font-[family-name:var(--font-alumni)] text-[clamp(42px,5vw,84px)] font-bold uppercase leading-[0.9] mb-[4vw] text-black">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(data.tech).map(([category, techs], idx) => (
                <div key={idx} className="border-2 border-black bg-white p-8 shadow-[8px_8px_0_0_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0_0_#000] transition-all">
                  <div className="inline-block bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-6">
                    {category}
                  </div>
                  <ul className="flex flex-col gap-4">
                    {techs.map((tech, i) => (
                      <li key={i} className="font-[family-name:var(--font-inter)] text-[clamp(16px,1.5vw,24px)] font-bold border-b-2 border-dashed border-gray-300 pb-2 flex justify-between items-center">
                        {tech}
                        <Activity className="w-5 h-5 opacity-30" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SYSTEM ARCHITECTURE VISUAL */}
          <section className="border-x-2 border-b-2 border-black bg-[#0a0a0a] min-h-[50vh] flex flex-col items-center justify-center p-[5vw] relative overflow-hidden text-white">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

            <div className="relative z-10 w-full max-w-5xl border-2 border-[#333] bg-black p-8 shadow-[0_0_50px_rgba(43,71,255,0.15)] flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="flex-1 flex flex-col gap-6">
                {data.dashboardStyle === 'terminal' && (
                  <>
                    <div className="font-mono text-green-400 text-sm md:text-base opacity-80 mb-2">root@system:~/orchestration$ tail -f agent.log</div>
                    <div className="bg-[#111] border border-[#333] p-6 font-mono text-sm space-y-3">
                      <div className="flex gap-4"><span className="text-gray-500">[14:32:01]</span> <span className="text-blue-400">INFO</span> <span>Agent 'Researcher' spawned</span></div>
                      <div className="flex gap-4"><span className="text-gray-500">[14:32:03]</span> <span className="text-yellow-400">WAIT</span> <span>Executing tool: web_search</span></div>
                      <div className="flex gap-4"><span className="text-gray-500">[14:32:05]</span> <span className="text-green-400">DONE</span> <span>Context retrieved. Handoff to 'Writer'</span></div>
                    </div>
                  </>
                )}
                {data.dashboardStyle === 'pipeline' && (
                  <div className="flex flex-col gap-4 w-full">
                    {['Ingestion', 'Transformation', 'Validation', 'Loading'].map((step, i) => (
                      <div key={i} className="w-full bg-[#111] border border-[#333] p-4 flex items-center justify-between">
                        <span className="font-mono text-sm font-bold">{step}</span>
                        <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">HEALTHY</span>
                      </div>
                    ))}
                  </div>
                )}
                {data.dashboardStyle === 'dashboard' && (
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="bg-[#111] border border-[#333] p-4 flex flex-col gap-2">
                        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[70%]" /></div>
                        <span className="font-mono text-xs text-gray-500">Pipeline {i} Active</span>
                      </div>
                    ))}
                  </div>
                )}
                {data.dashboardStyle === 'vision' && (
                  <div className="aspect-video bg-[#111] border border-[#333] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-30 bg-[url('/cyclist-fg.png')] bg-cover bg-center grayscale" />
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-red-500" />
                    <div className="absolute top-[23%] left-[25%] bg-red-500 text-white text-xs px-1 font-mono">PERSON 0.98</div>
                    <div className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-green-500" />
                    <div className="absolute top-[48%] right-[25%] bg-green-500 text-white text-xs px-1 font-mono">BICYCLE 0.92</div>
                  </div>
                )}
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-[family-name:var(--font-alumni)] text-[clamp(32px,4vw,64px)] font-bold uppercase leading-[0.9] mb-4">Architecture Visualization</h3>
                <p className="text-gray-400 font-[family-name:var(--font-inter)] text-sm md:text-base leading-[1.6]">
                  Simulated view of the underlying operational state. The system is designed for high-throughput, fault-tolerant execution, ensuring robust performance under load.
                </p>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="border-2 border-t-0 border-black bg-[#ffae00] p-[8vw] text-center rounded-b-[clamp(4px,0.8vw,8px)] flex flex-col items-center justify-center">
            <h2 className="font-[family-name:var(--font-alumni)] text-[clamp(60px,8vw,140px)] font-bold uppercase leading-[0.8] mb-8">Ready to Build?</h2>
            <Link href="/#contact" className="inline-flex items-center gap-4 bg-black text-white px-8 py-5 font-[family-name:var(--font-inter)] text-[clamp(18px,2vw,24px)] font-bold uppercase tracking-widest hover:bg-[#222] hover:scale-105 transition-all">
              <span>Initialize System</span>
              <ExternalLink className="w-6 h-6" />
            </Link>
          </section>

        </main>

        {/* Footer */}
        <footer className="mt-8 mb-4 text-center pb-8 font-[family-name:var(--font-inter)] font-bold text-sm uppercase tracking-widest text-white">
          SYSTEM OVER / [ {data.code} ] / 2026
        </footer>
      </motion.div>
    </div>
  );
}

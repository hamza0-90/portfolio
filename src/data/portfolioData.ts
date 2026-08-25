import { PersonalInfo, Project, Certification, Experience, Education, SkillGroup } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Hamza Khalid",
  role: "Software Engineer & AI Solutions Developer",
  subTitle: "Specializing in Full-Stack Web Development, Generative AI Systems, Flutter, and Intelligent Machine Learning Applications.",
  bio: "Motivated Software Engineering graduate from NUML University with hands-on expertise in building full-stack web applications, Flutter mobile apps, AI-powered automation pipelines, and robust database architectures. Holds 14+ internationally accredited certifications from Google Cloud, Simplilearn, Alison, and Udemy. Actively serving global clients as a freelance developer on Fiverr and Upwork with a track record of reliable project delivery.",
  email: "onlyworkfiverr@gmail.com",
  secondaryEmail: "newforwork6@gmail.com",
  phone: "+92 321 7677493",
  location: "Faisalabad, Punjab, Pakistan",
  linkedIn: "https://www.linkedin.com/in/hamza-khalid-629a20299/",
  fiverr: "https://www.fiverr.com",
  upwork: "https://www.upwork.com",
  github: "https://github.com",
  availability: "Available for Hire",
  yearsExperience: "3+ Years",
  completedProjectsCount: "15+",
  certificationsCount: "14+",
  satisfactionRate: "100%"
};

export const projectsData: Project[] = [
  {
    id: "one-airport-taxi",
    title: "One Airport Taxi",
    tagline: "Live UK Airport Transfer & Dispatch Platform with Maps, Stripe & Email Notifications",
    category: "fullstack",
    categoryLabel: "Commercial & Full-Stack",
    period: "Delivered in 1 Month (Live in UK)",
    academicTag: "Live Client Project (UK)",
    featured: true,
    highlightBadge: "Live Client Project (UK)",
    liveDemoUrl: "https://oneairporttaxi.com/",
    description: "A production-grade airport taxi booking and dispatch platform built and launched in 1 month for a UK-based transport client. Features real-time Google Maps route calculations, dynamic fare estimations, secure Stripe payment processing, and automated customer and driver email notifications.",
    keyFeatures: [
      "Google Maps Distance Matrix & Directions API integration for real-time mileage and route fare calculation",
      "Stripe Payment Gateway integration supporting secure card payments, Apple Pay, and automated receipts in GBP (£)",
      "Automated transactional email notification system for instant booking confirmations and driver dispatch manifests",
      "Vehicle fleet selection (Saloon, Estate, Executive, MPV, 8-Seater) with luggage capacity logic and airport surcharges",
      "Flight number tracking and scheduled airport pickup coordination across all major UK international airports"
    ],
    techStack: ["React", "Node.js", "Google Maps API", "Stripe API", "Email Notifications", "Tailwind CSS", "Express"],
    architectureOverview: "Frontend single-page booking application queries Google Maps Distance Matrix API for route geometry, sends booking payloads to an Express backend for Stripe checkout session verification, and dispatches automated transactional emails via SMTP webhooks.",
    interactiveDemoType: "airport-taxi",
    stats: [
      { label: "Client Location", value: "United Kingdom" },
      { label: "Delivery Timeframe", value: "1 Month" },
      { label: "Live Deployment", value: "oneairporttaxi.com" }
    ]
  },
  {
    id: "sahulat-bazar",
    title: "Sahulat Bazar",
    tagline: "Retail Installment Management & Merchant Ledger Platform",
    category: "fullstack",
    categoryLabel: "FinTech & Web",
    period: "Feb 2026 – Jul 2026",
    academicTag: "Commercial FinTech",
    featured: true,
    highlightBadge: "FinTech Ledger",
    description: "Comprehensive financial ledger and installment management software built for local electronics and retail businesses. Automates installment schedule generation, penalty calculations, customer SMS reminders, and merchant cashflow tracking.",
    keyFeatures: [
      "Custom installment tenure configurations with flexible down payment algorithms",
      "Automated overdue payment tracking and automated WhatsApp/SMS payment alerts",
      "Customer credit history and guarantor verification records",
      "Financial reporting with monthly profit/loss and projected installment cash inflows"
    ],
    techStack: ["PHP", "SQL / MySQL", "JavaScript", "Bootstrap & Tailwind", "Chart.js"],
    architectureOverview: "Secure relational database with normalized schema handling customer loan ledgers, amortized payment tables, and audit logs.",
    stats: [
      { label: "Ledger Accuracy", value: "100%" },
      { label: "Installment Cycles", value: "3 - 36 Mo" },
      { label: "Audit Integrity", value: "ACID Compliant" }
    ]
  },
  {
    id: "zerimo-ai",
    title: "Zerimo AI",
    tagline: "Startup Success Prediction, Cost & Timeline Estimation Engine",
    category: "ai-ml",
    categoryLabel: "AI & Predictive Analytics",
    period: "Feb 2026 – Jul 2026",
    academicTag: "AI Predictive Engine",
    featured: true,
    highlightBadge: "AI Venture Forecaster",
    description: "Predictive enterprise system utilizing historical venture capital data and machine learning to analyze startup pitch parameters, estimate engineering timelines, forecast cash burn runway, and deliver competitor SWOT intelligence.",
    keyFeatures: [
      "Algorithmic venture success probability scoring based on 40+ market metrics",
      "Dynamic software development cost and sprint timeline estimation",
      "AI-driven competitor landscape mapping and competitive moat evaluation",
      "Interactive scenario modeling (hiring ramp-up, marketing spend shifts)"
    ],
    techStack: ["Python", "Machine Learning", "React", "Tailwind CSS", "Flask", "Recharts"],
    architectureOverview: "Supervised classification and regression ensembles evaluate business parameters alongside LLM-driven competitive synthesis to render risk analysis dashboards.",
    interactiveDemoType: "startup-predictor",
    stats: [
      { label: "Model Metrics Evaluated", value: "45+" },
      { label: "Estimation Variance", value: "±8%" },
      { label: "Market Segments", value: "12 Tech Verticals" }
    ]
  },
  {
    id: "linkify-hub",
    title: "Linkify Hub",
    tagline: "Web-Based SEO Marketplace for Streamlined Backlink Management",
    category: "fullstack",
    categoryLabel: "Full-Stack Web",
    period: "Feb 2026 – Apr 2026",
    academicTag: "SEO Marketplace",
    featured: true,
    highlightBadge: "SEO Marketplace",
    description: "A centralized, high-trust marketplace platform connecting website publishers and SEO buyers for guest posting, high-authority backlink acquisitions, automated domain metric verification (DA/DR), and order tracking with escrow payments.",
    keyFeatures: [
      "Verified domain metric scraping (Domain Authority, Spam Score, Organic Traffic)",
      "Real-time order workflow with submission review, draft verification, and live link checks",
      "Secure transaction wallet system with dispute handling and payout management",
      "Publisher dashboard with multi-site inventory and custom pricing tiers"
    ],
    techStack: ["React", "Node.js", "Express", "SQL / PostgreSQL", "Tailwind CSS", "JWT Auth"],
    architectureOverview: "RESTful microservices architecture with role-based access control (Publishers, Buyers, Admins) and automated periodic domain health checking cron jobs.",
    interactiveDemoType: "seo-marketplace",
    stats: [
      { label: "Publisher Verification", value: "Automated" },
      { label: "Order Turnaround", value: "< 48h" },
      { label: "Role Management", value: "Multi-Tier" }
    ]
  },
  {
    id: "daraz-insight-analyzer",
    title: "Daraz Insight Analyzer",
    tagline: "AI-Powered E-Commerce Product & Market Intelligence Platform",
    category: "ai-ml",
    categoryLabel: "AI & Data Science",
    period: "Feb 2025 – Jul 2025",
    academicTag: "Final Year Project (FYP)",
    featured: true,
    highlightBadge: "FYP Flagship Project",
    description: "An advanced market analysis platform tailored for Daraz e-commerce sellers. It automatically aggregates product reviews, extracts customer sentiment, benchmarks competitor pricing, and forecasts inventory sales velocity using machine learning models.",
    keyFeatures: [
      "Real-time customer sentiment analysis across hundreds of product reviews",
      "Automated competitor price tracking and dynamic price suggestion engine",
      "Trend forecasting and stock replenishment prediction graphs",
      "Interactive executive dashboard with exportable PDF & Excel reports"
    ],
    techStack: ["Python", "React", "Scikit-Learn", "FastAPI", "Tailwind CSS", "Pandas", "BeautifulSoup"],
    architectureOverview: "Web crawler & API scrapers stream raw Daraz product listings into a Python NLP pipeline that computes sentiment polarity and sales velocity, delivered to an interactive React frontend.",
    interactiveDemoType: "daraz-analyzer",
    stats: [
      { label: "Prediction Accuracy", value: "92.4%" },
      { label: "Review Parsing Speed", value: "< 1.2s" },
      { label: "Market Coverage", value: "Multi-Category" }
    ]
  },
  {
    id: "multimodal-tts-summarizer",
    title: "Smart Multimodal TTS & Text Summarizer",
    tagline: "AI Platform for Multilingual Summarization & Natural Voice Synthesis",
    category: "ai-ml",
    categoryLabel: "Generative AI & NLP",
    period: "Jan 2025 – Mar 2025",
    academicTag: "Final Year Project (FYP)",
    featured: true,
    highlightBadge: "Multimodal AI",
    description: "An intelligent platform combining state-of-the-art Large Language Models for context-aware extractive/abstractive summarization with neural Text-to-Speech (TTS) models providing multilingual audio output with adjustable pitch, tone, and speech pace.",
    keyFeatures: [
      "Dual summarization mode: Executive bullet highlights vs. comprehensive abstractive digests",
      "Multilingual audio synthesis with accent and emotion customization",
      "Upload documents (PDF, DOCX, TXT) or paste raw articles with immediate waveform playback",
      "Audio export in high-bitrate MP3/WAV format with timestamped transcripts"
    ],
    techStack: ["Python", "GenAI / LLMs", "Neural TTS Engine", "React 19", "FastAPI", "Web Audio API"],
    architectureOverview: "Transformer-based attention architecture splits long-form text into contextual chunks for summarization, then pipes synthesized paragraphs into a low-latency neural TTS synthesis pipeline.",
    interactiveDemoType: "text-summarizer",
    stats: [
      { label: "Summarization Compression", value: "70%+" },
      { label: "Voice Latency", value: "350ms" },
      { label: "Languages Supported", value: "10+" }
    ]
  },
  {
    id: "ai-website-builder",
    title: "AI Website Builder (FYP)",
    tagline: "Autonomous Prompt-to-Website Generation with Interactive React Editor",
    category: "fullstack",
    categoryLabel: "Full-Stack Web & AI",
    period: "2025 – 2026",
    academicTag: "Final Year Project",
    featured: false,
    description: "An AI-powered website generator that converts natural language business descriptions into fully responsive, production-ready React component layouts with live preview, palette tuning, and instant code export.",
    keyFeatures: [
      "Prompt-based layout and copy generation tailored to industry niches",
      "Interactive visual component tree manipulation with live drag adjustments",
      "One-click responsive preview across mobile, tablet, and widescreen",
      "Clean export of production-ready Tailwind CSS and React code packages"
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "LLM APIs", "Vite", "Node.js"],
    architectureOverview: "AI code generator maps system prompts to atomic UI layout blocks and renders real-time sandboxed component trees directly in the browser.",
    stats: [
      { label: "Generation Time", value: "< 5s" },
      { label: "Templates", value: "Dynamic" }
    ]
  },
  {
    id: "ai-data-security-steganography",
    title: "Steganography AI Data Security",
    tagline: "Lossless Image Steganography & Encrypted Secure Data Transmission",
    category: "security-db",
    categoryLabel: "Security & Python",
    period: "5th Semester",
    academicTag: "Academic Capstone",
    featured: false,
    description: "A cryptographic security tool developed in Python implementing advanced Least Significant Bit (LSB) and Discrete Cosine Transform (DCT) steganography algorithms to conceal confidential payload data inside digital image containers without perceptible visual degradation.",
    keyFeatures: [
      "AES-256 pre-encryption of secret text and binary payloads before carrier embedding",
      "LSB spatial encoding and DCT frequency domain insertion",
      "Zero perceptual distortion verified by Peak Signal-to-Noise Ratio (PSNR) analysis",
      "Tamper detection verification to identify if carrier images were modified in transit"
    ],
    techStack: ["Python", "OpenCV", "NumPy", "Cryptography", "Tkinter / Web UI"],
    architectureOverview: "Dual-layer security mechanism: raw data is AES encrypted, salted with a cryptographic key, and pixel-mapped across RGB matrix components.",
    interactiveDemoType: "steganography",
    stats: [
      { label: "PSNR Fidelity", value: "> 45 dB" },
      { label: "Encryption", value: "AES-256" }
    ]
  },
  {
    id: "cricket-match-updates-app",
    title: "Cricket Live Updates App",
    tagline: "Native Android Live Match Streaming & Real-Time Scorecard App",
    category: "mobile",
    categoryLabel: "Mobile Development",
    period: "2nd Semester",
    academicTag: "Mobile Engineering",
    featured: false,
    description: "Native Android application built in Java & Android Studio providing cricket enthusiasts with live ball-by-ball commentary, real-time scorecard updates, player career statistics, match schedules, and push notifications for key wickets and milestones.",
    keyFeatures: [
      "Ball-by-ball commentary feed with low-latency REST API sync",
      "Interactive scorecard breakdown with strike rates, bowling economies, and fall of wickets",
      "Tournament points table with automatic net run rate calculations",
      "Offline caching of historic match summaries using SQLite Room database"
    ],
    techStack: ["Java", "Android Studio", "XML", "SQLite", "Retrofit", "REST API"],
    architectureOverview: "MVVM architecture with Retrofit HTTP client fetching cricket API data into LiveData state containers bound to responsive Android XML layouts.",
    stats: [
      { label: "Refresh Rate", value: "Real-time" },
      { label: "Platform", value: "Android Native" }
    ]
  },
  {
    id: "ecommerce-web-platform",
    title: "Full-Stack E-Commerce Portal",
    tagline: "Responsive Online Store with Inventory & Payment Processing",
    category: "fullstack",
    categoryLabel: "Full-Stack Web",
    period: "5th Semester",
    academicTag: "Web Technologies",
    featured: false,
    description: "A complete end-to-end e-commerce website designed with modern UI standards, full product catalog filtering, customer shopping cart, order checkout processing, and admin product inventory management.",
    keyFeatures: [
      "Dynamic product filtering by category, price range, and rating",
      "Persistent user shopping cart with session and cookie synchronization",
      "Secure user authentication with password hashing and session tokens",
      "Admin inventory management panel with stock alerts"
    ],
    techStack: ["PHP", "SQL / MySQL", "JavaScript", "HTML5/CSS3", "Tailwind CSS"],
    architectureOverview: "MVC architecture separating presentation layers from database relational schemas for orders, products, and customer credentials.",
    stats: [
      { label: "Catalog Filter Speed", value: "< 100ms" },
      { label: "Mobile Responsive", value: "100%" }
    ]
  },
  {
    id: "sql-event-management-system",
    title: "SQL Event Management System",
    tagline: "Relational Database Backend for Multi-Venue Event Operations",
    category: "security-db",
    categoryLabel: "Database Engineering",
    period: "4th Semester",
    academicTag: "DBMS Core Project",
    featured: false,
    description: "High-performance relational database management system designed to handle complex multi-venue event logistics, attendee ticketing, scheduling conflicts, vendor allocations, and financial ledger calculations.",
    keyFeatures: [
      "3NF normalized database schema eliminating data anomalies and redundant records",
      "Complex SQL stored procedures for conflict-free venue booking and seat assignment",
      "Automated SQL triggers for real-time ticket availability updates and revenue logs",
      "Role-based SQL view security for event coordinators, vendors, and finance admins"
    ],
    techStack: ["SQL", "MySQL / PostgreSQL", "Database Normalization", "Stored Procedures", "Triggers"],
    architectureOverview: "Optimized relational schema featuring indexed tables, relational foreign key constraints, ACID transaction guarantees, and stored analytical views.",
    stats: [
      { label: "Schema Form", value: "3rd Normal Form (3NF)" },
      { label: "Query Optimization", value: "Indexed & Tuned" }
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-google-genai-studio",
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud",
    issuerCategory: "Google Cloud & AI",
    issueDate: "Aug 10, 2024",
    credentialCode: "7207466",
    badgeColor: "from-blue-500 to-indigo-600",
    description: "Certified by Google Cloud (via Simplilearn SkillUp) in leveraging Vertex AI & Generative AI Studio for prompt design, tuning LLMs, model experimentation, and enterprise AI prototyping.",
    skillsAcquired: ["Generative AI Studio", "Prompt Engineering", "Model Tuning", "Vertex AI", "LLM Prototyping"],
    iconType: "brain"
  },
  {
    id: "cert-google-attention-mechanism",
    title: "Attention Mechanism",
    issuer: "Google Cloud",
    issuerCategory: "Google Cloud & AI",
    issueDate: "Aug 22, 2024",
    credentialCode: "7312478",
    badgeColor: "from-sky-500 to-blue-600",
    description: "Official Google Cloud certification on transformer architecture, self-attention calculations, cross-attention mechanisms, and deep neural network contextual representations.",
    skillsAcquired: ["Self-Attention", "Transformer Architecture", "Contextual Vectors", "Deep Learning", "Seq2Seq Models"],
    iconType: "cpu"
  },
  {
    id: "cert-google-llm-intro",
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    issuerCategory: "Google Cloud & AI",
    issueDate: "Aug 07, 2024",
    credentialCode: "7084929",
    badgeColor: "from-indigo-500 to-purple-600",
    description: "Comprehensive Google Cloud certification covering foundational LLM concepts, pre-training methodologies, few-shot prompt crafting, and fine-tuning techniques for production tasks.",
    skillsAcquired: ["Large Language Models", "Fine-Tuning", "Zero/Few-Shot Learning", "Tokenization", "Model Architecture"],
    iconType: "brain"
  },
  {
    id: "cert-google-responsible-ai",
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud",
    issuerCategory: "Google Cloud & AI",
    issueDate: "Aug 07, 2024",
    credentialCode: "7085166",
    badgeColor: "from-emerald-500 to-teal-600",
    description: "Official Google Cloud certification on AI ethics, bias mitigation in machine learning pipelines, interpretability frameworks, and responsible AI system deployment practices.",
    skillsAcquired: ["AI Ethics", "Bias Mitigation", "Model Fairness", "Explainable AI (XAI)", "Data Governance"],
    iconType: "shield"
  },
  {
    id: "cert-google-image-generation",
    title: "Introduction to Image Generation",
    issuer: "Google Cloud",
    issuerCategory: "Google Cloud & AI",
    issueDate: "Aug 31, 2024",
    credentialCode: "7335129",
    badgeColor: "from-pink-500 to-rose-600",
    description: "Google Cloud certification in diffusion models, generative adversarial networks (GANs), image synthesis pipelines, and text-to-image prompt conditioning.",
    skillsAcquired: ["Diffusion Models", "Text-to-Image", "GANs", "Visual Embedding", "Generative Vision"],
    iconType: "cpu"
  },
  {
    id: "cert-n8n-ai-agents",
    title: "n8n Course: No Code AI Agent Builder",
    issuer: "Simplilearn",
    issuerCategory: "AI & Machine Learning",
    issueDate: "Feb 02, 2026",
    credentialCode: "9792831",
    badgeColor: "from-amber-500 to-orange-600",
    description: "Specialized certification in architecting autonomous AI agents, workflow automation pipelines, API orchestrations, vector database connections, and intelligent multi-step task bots using n8n.",
    skillsAcquired: ["n8n Workflow Automation", "Autonomous AI Agents", "RAG Pipelines", "API Webhooks", "Automated Workflows"],
    iconType: "brain"
  },
  {
    id: "cert-blockchain-developer",
    title: "Blockchain Developer Training",
    issuer: "Simplilearn",
    issuerCategory: "Development & Web",
    issueDate: "Aug 14, 2024",
    credentialCode: "7293422",
    badgeColor: "from-cyan-500 to-blue-600",
    description: "In-depth training on decentralized systems, consensus algorithms (PoW, PoS), cryptographic hashing, smart contract fundamentals, and distributed ledger technology.",
    skillsAcquired: ["Blockchain Architecture", "Smart Contracts", "Cryptographic Hashing", "Consensus Algorithms", "DApps"],
    iconType: "code"
  },
  {
    id: "cert-flutter-course",
    title: "Introduction to Flutter Course",
    issuer: "Simplilearn",
    issuerCategory: "Development & Web",
    issueDate: "Jan 19, 2024",
    credentialCode: "4794678",
    badgeColor: "from-teal-500 to-emerald-600",
    description: "Hands-on certification in cross-platform mobile app development with Flutter & Dart, responsive widget tree structuring, state management, and native device API integration.",
    skillsAcquired: ["Flutter SDK", "Dart", "Cross-Platform Mobile", "Widget Hierarchy", "State Management"],
    iconType: "code"
  },
  {
    id: "cert-neural-networks-ml",
    title: "Neural Network 101: Image Recognition with ML",
    issuer: "Simplilearn",
    issuerCategory: "AI & Machine Learning",
    issueDate: "Aug 29, 2024",
    credentialCode: "7330820",
    badgeColor: "from-violet-500 to-purple-600",
    description: "Deep dive into artificial neural networks, convolutional neural networks (CNNs), feature map extractions, image classification, and backpropagation optimization.",
    skillsAcquired: ["Convolutional Neural Networks (CNN)", "Image Classification", "Backpropagation", "Feature Extraction", "PyTorch/TensorFlow"],
    iconType: "brain"
  },
  {
    id: "cert-nlp-text-mining",
    title: "NLP & Text Mining Tutorial for Beginners",
    issuer: "Simplilearn",
    issuerCategory: "AI & Machine Learning",
    issueDate: "Aug 20, 2024",
    credentialCode: "7305758",
    badgeColor: "from-blue-600 to-indigo-700",
    description: "Core certification in text preprocessing, TF-IDF vectorization, sentiment scoring, entity recognition, and information retrieval from unstructured textual data.",
    skillsAcquired: ["Natural Language Processing", "TF-IDF", "Tokenization & Lemmatization", "Sentiment Classification", "Text Mining"],
    iconType: "brain"
  },
  {
    id: "cert-digital-marketing-tools",
    title: "Digital Marketing Tools and Techniques",
    issuer: "Simplilearn",
    issuerCategory: "Professional & Business",
    issueDate: "Sep 21, 2024",
    credentialCode: "7391742",
    badgeColor: "from-rose-500 to-red-600",
    description: "Applied expertise in digital marketing analytics, on-page & technical SEO audits, Google Search Console, keyword research, and data-driven audience targeting.",
    skillsAcquired: ["SEO Audit", "Search Console", "Campaign Analytics", "Keyword Research", "Conversion Optimization"],
    iconType: "trending"
  },
  {
    id: "cert-lead-generation-ai",
    title: "Lead Generation with AI",
    issuer: "Simplilearn",
    issuerCategory: "Professional & Business",
    issueDate: "Jul 10, 2025",
    credentialCode: "8605505",
    badgeColor: "from-yellow-500 to-amber-600",
    description: "Training on leveraging artificial intelligence algorithms, automated email outreach funnels, automated web prospecting, and data enrichment for customer acquisition.",
    skillsAcquired: ["AI Lead Prospecting", "Outreach Automation", "Data Enrichment", "Funnel Optimization", "CRM Workflows"],
    iconType: "trending"
  },
  {
    id: "cert-alison-ai-project-management",
    title: "Artificial Intelligence in Project Management",
    issuer: "Alison",
    issuerCategory: "AI & Machine Learning",
    issueDate: "Aug 10, 2024",
    score: "96% Distinction",
    badgeColor: "from-emerald-600 to-teal-700",
    description: "Certified with 96% Distinction in applying AI tools to forecast engineering risks, automate status reporting, optimize resource allocation, and accelerate team delivery milestones.",
    skillsAcquired: ["AI Project Management", "Risk Forecasting", "Automated Reporting", "Agile Optimization", "Decision Analytics"],
    iconType: "shield"
  },
  {
    id: "cert-udemy-critical-thinking",
    title: "Critical Thinking, Decision Analysis & Problem Solving",
    issuer: "Udemy",
    issuerCategory: "Professional & Business",
    issueDate: "Jul 18, 2024",
    credentialCode: "UC-a4c0fecd-0932-4015-8232-c71245e2cf55",
    badgeColor: "from-purple-600 to-pink-600",
    description: "Professional certification under Dr. José Prabhu J covering structured root-cause analysis, decision matrices, cognitive bias elimination, and algorithmic problem resolution.",
    skillsAcquired: ["Root Cause Analysis", "Decision Matrices", "Systematic Problem Solving", "Logical Reasoning", "Analytical Thinking"],
    iconType: "shield"
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-freelance",
    role: "Freelance Software & Web Developer",
    company: "Fiverr & Upwork",
    location: "Remote / International",
    period: "Jan 2023 – Present",
    duration: "2+ Years",
    type: "Freelance",
    verifiedStatus: "Active",
    description: [
      "Architect and deliver custom full-stack web applications, React frontends, and backend database integrations for international clients.",
      "Integrate cutting-edge AI and LLM APIs into existing business workflows, automated data scrapers, and customer portal tools.",
      "Maintain 100% on-time milestone delivery with positive client ratings across freelance marketplaces."
    ],
    skillsUsed: ["React", "Python", "Node.js", "Flutter", "SQL", "Tailwind CSS", "REST APIs", "Client Management"]
  },
  {
    id: "exp-hex-web-ml",
    role: "Web Development & Machine Learning Intern",
    company: "Hex Softwares Pvt. Ltd.",
    location: "WFH (Remote)",
    period: "March 2026",
    duration: "1 Month (Intensive)",
    type: "Internship",
    letterId: "HXA15L0308470 / HXA10L0307601",
    verifiedStatus: "Offer Received",
    description: [
      "Selected for dual-domain program across Web Development and Machine Learning.",
      "Contribute to hands-on industry projects applying full-stack architecture, clean code standards, and ML training pipelines.",
      "Collaborate with senior engineering mentors on production deliverables and code reviews."
    ],
    skillsUsed: ["Web Development", "Machine Learning", "Python", "JavaScript", "Model Training", "Version Control"]
  },
  {
    id: "exp-codomax-ai",
    role: "AI & ML Intern",
    company: "Codomax Digital Solutions",
    location: "Remote / Chennai Incubation",
    period: "August 2026",
    duration: "1 Month",
    type: "Internship",
    letterId: "CDS/INT/202688904",
    verifiedStatus: "Offer Received",
    description: [
      "Selected for AI & ML internship focusing on structured practical industry exposure and real-world assignments.",
      "Implement machine learning data pipelines, model testing, and digital solution integrations via the Codomax portal."
    ],
    skillsUsed: ["Artificial Intelligence", "Machine Learning", "Python", "Data Processing", "Model Evaluation"]
  },
  {
    id: "exp-crixsoft",
    role: "Web Development & Machine Learning Intern",
    company: "Crixsoft Solution",
    location: "WFH (Remote)",
    period: "June 2026",
    duration: "1 Month",
    type: "Internship",
    letterId: "CS01S05L002132 / CS01S05L001479",
    verifiedStatus: "Offer Received",
    description: [
      "Selected for Web Development and Machine Learning programs with hands-on project participation.",
      "Work with responsive frontend web frameworks and predictive machine learning models."
    ],
    skillsUsed: ["Web Development", "Machine Learning", "Algorithms", "Software Engineering Standards"]
  },
  {
    id: "exp-tsgreentech-ads",
    role: "Meta Ads & Digital Marketing Intern",
    company: "TSgreentech",
    location: "Remote / UAE Headquarters",
    period: "July 2026 – August 2026",
    duration: "1 Month",
    type: "Internship",
    letterId: "HA/MA/1213",
    verifiedStatus: "Offer Received",
    description: [
      "Execute targeted Meta Ads campaigns, ad copy optimization, audience segmentation, and lead generation funnels.",
      "Analyze conversion tracking analytics and calculate ROI on paid digital advertising campaigns."
    ],
    skillsUsed: ["Meta Ads", "Campaign Analytics", "Lead Generation", "Digital Marketing Strategy"]
  },
  {
    id: "exp-softgrowtech",
    role: "Data Science Intern",
    company: "SoftGrowTech",
    location: "Online / Flexible",
    period: "March 2026",
    duration: "1 Month",
    type: "Internship",
    letterId: "SGT-26C-1090",
    verifiedStatus: "Offer Received",
    description: [
      "Hands-on project-based data science training covering predictive modeling, exploratory data analysis, and guided mentorship.",
      "Analyze structured datasets and build machine learning evaluation pipelines."
    ],
    skillsUsed: ["Data Science", "Python", "Pandas", "Predictive Modeling", "Exploratory Data Analysis"]
  },
  {
    id: "exp-enzipe",
    role: "SEO & Guest Posting Intern",
    company: "Enzipe",
    location: "Faisalabad, Pakistan",
    period: "3 Months",
    duration: "3 Months",
    type: "Internship",
    verifiedStatus: "Completed",
    description: [
      "Managed on-page and off-page SEO optimization for client websites.",
      "Conducted publisher outreach, negotiated guest posting placements, and implemented backlink building strategies to boost organic search rankings."
    ],
    skillsUsed: ["On-Page SEO", "Off-Page SEO", "Guest Posting", "Backlink Building", "Keyword Research"]
  },
  {
    id: "exp-itzoneuk",
    role: "Digital Marketing Intern",
    company: "ITZoneUK",
    location: "Remote",
    period: "7th Semester",
    duration: "Semester Internship",
    type: "Internship",
    verifiedStatus: "Completed",
    description: [
      "Implemented digital marketing campaigns, social media content strategies, and foundational SEO enhancements for web portals."
    ],
    skillsUsed: ["Digital Marketing", "Social Media Strategy", "SEO Fundamentals", "Campaign Analytics"]
  },
  {
    id: "exp-customer-services",
    role: "Customer Services Specialist",
    company: "Client Operations",
    location: "Faisalabad, Pakistan",
    period: "Jul 2023 – Dec 2023",
    duration: "6 Months",
    type: "Job",
    verifiedStatus: "Completed",
    description: [
      "Handled client communications, resolved inquiries, maintained structured transaction records, and ensured high customer satisfaction."
    ],
    skillsUsed: ["Customer Handling", "Record Management", "Problem Resolution", "Communication"]
  }
];

export const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Software Engineering (BS SE)",
    institution: "National University of Modern Languages (NUML)",
    location: "Faisalabad Campus, Pakistan",
    period: "2022 – 2026",
    major: "Software Engineering, AI & Database Systems",
    status: "In Progress",
    highlights: [
      "Comprehensive coursework in Object-Oriented Programming (Java/Python), Data Structures & Algorithms, DBMS, Web Engineering, and AI.",
      "Led multiple academic capstone projects including Daraz Insight Analyzer (FYP) and Smart Multimodal TTS System.",
      "Active participant in technical workshops, hackathons, and software exhibitions."
    ]
  },
  {
    degree: "Intermediate (FSc Pre-Engineering)",
    institution: "Govt. Degree College, Faisalabad",
    location: "Faisalabad, Pakistan",
    period: "2018 – 2020",
    status: "Completed",
    highlights: [
      "Strong foundational coursework in Advanced Mathematics, Physics, and Chemistry.",
      "Developed analytical problem-solving, logical reasoning, and engineering fundamentals."
    ]
  },
  {
    degree: "Matriculation (Science)",
    institution: "Govt. High School 209 RB Akalgarh",
    location: "Faisalabad, Pakistan",
    period: "2016 – 2018",
    status: "Completed",
    highlights: [
      "Graduated with high distinction in core sciences and mathematics."
    ]
  }
];

export const skillGroupsData: SkillGroup[] = [
  {
    category: "AI, ML & Generative Models",
    icon: "Brain",
    description: "Applied machine learning, transformer architectures, prompt engineering, and autonomous agent systems.",
    skills: [
      { name: "Generative AI & LLMs", level: 92, experienceYears: "2+ yrs", popularTag: true },
      { name: "Attention Mechanisms & Transformers", level: 88, experienceYears: "2+ yrs" },
      { name: "n8n No-Code AI Agents", level: 90, experienceYears: "2+ yrs", popularTag: true },
      { name: "Natural Language Processing (NLP)", level: 85, experienceYears: "2+ yrs" },
      { name: "Neural Networks & Computer Vision", level: 82, experienceYears: "2+ yrs" },
      { name: "Image Generation & Diffusion", level: 80, experienceYears: "1.5+ yrs" },
      { name: "Responsible AI & Ethics", level: 90, experienceYears: "2+ yrs" }
    ]
  },
  {
    category: "Full-Stack Web & Mobile",
    icon: "Code",
    description: "Modern, reactive web applications and cross-platform mobile apps with responsive design.",
    skills: [
      { name: "React (18 & 19) / Vite", level: 92, experienceYears: "3+ yrs", popularTag: true },
      { name: "JavaScript (ES6+) & TypeScript", level: 90, experienceYears: "3+ yrs", popularTag: true },
      { name: "Tailwind CSS & UI Systems", level: 95, experienceYears: "3+ yrs", popularTag: true },
      { name: "Flutter & Dart (Mobile)", level: 84, experienceYears: "2+ yrs", popularTag: true },
      { name: "PHP & Laravel Basics", level: 82, experienceYears: "2+ yrs" },
      { name: "Node.js & Express.js", level: 86, experienceYears: "2.5+ yrs" },
      { name: "HTML5, CSS3 & Responsive UI", level: 96, experienceYears: "3+ yrs" }
    ]
  },
  {
    category: "Programming Languages & DB",
    icon: "Database",
    description: "Core algorithms, object-oriented design, relational modeling, and query optimization.",
    skills: [
      { name: "Python", level: 92, experienceYears: "3+ yrs", popularTag: true },
      { name: "Java", level: 85, experienceYears: "3+ yrs" },
      { name: "SQL (MySQL & PostgreSQL)", level: 88, experienceYears: "3+ yrs", popularTag: true },
      { name: "Database Schema Design & 3NF", level: 90, experienceYears: "3+ yrs" },
      { name: "Stored Procedures & Triggers", level: 84, experienceYears: "2+ yrs" }
    ]
  },
  {
    category: "Security, Systems & Tools",
    icon: "Shield",
    description: "Operating systems, cybersecurity concepts, version control, and development environments.",
    skills: [
      { name: "Linux & Parrot OS (Ethical Hacking)", level: 86, experienceYears: "2+ yrs" },
      { name: "Steganography & Cryptography", level: 88, experienceYears: "2+ yrs" },
      { name: "Git & GitHub Version Control", level: 90, experienceYears: "3+ yrs", popularTag: true },
      { name: "Android Studio & Native Tools", level: 82, experienceYears: "2+ yrs" },
      { name: "RESTful API Integration", level: 94, experienceYears: "3+ yrs", popularTag: true },
      { name: "Troubleshooting & Operations", level: 92, experienceYears: "4+ yrs" }
    ]
  },
  {
    category: "SEO, Marketing & Strategy",
    icon: "TrendingUp",
    description: "Growth, search engine visibility, paid social acquisition, and analytical decision making.",
    skills: [
      { name: "On-Page & Off-Page SEO", level: 90, experienceYears: "2+ yrs", popularTag: true },
      { name: "Guest Posting & Backlinks", level: 92, experienceYears: "2+ yrs" },
      { name: "Meta Ads & Paid Acquisition", level: 86, experienceYears: "1.5+ yrs" },
      { name: "Lead Generation with AI", level: 90, experienceYears: "2+ yrs", popularTag: true },
      { name: "AI in Project Management", level: 94, experienceYears: "2+ yrs" },
      { name: "Critical Thinking & Decision Analysis", level: 96, experienceYears: "Academic" }
    ]
  }
];

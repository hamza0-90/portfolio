import React, { useState } from 'react';
import { Project } from '../types';
import { 
  X, 
  Sparkles, 
  Layers, 
  Cpu, 
  Terminal, 
  CheckCircle, 
  Play, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  TrendingUp, 
  ExternalLink,
  Code2,
  Copy,
  Check,
  Car,
  MapPin,
  CreditCard,
  Mail,
  Plane,
  Clock,
  Navigation,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface InteractiveProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const InteractiveProjectModal: React.FC<InteractiveProjectModalProps> = ({
  project,
  onClose,
}) => {
  // Tabs: Overview vs Live Simulator
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator'>(
    project.interactiveDemoType ? 'simulator' : 'overview'
  );

  // One Airport Taxi (UK) Simulator State
  const [taxiPickup, setTaxiPickup] = useState('London Heathrow (LHR) - Terminal 2 & 3');
  const [taxiDropoff, setTaxiDropoff] = useState('Central London (Westminster / Oxford St)');
  const [taxiVehicle, setTaxiVehicle] = useState<'saloon' | 'executive' | 'estate' | 'mpv' | 'minibus'>('executive');
  const [taxiFlightNo, setTaxiFlightNo] = useState('BA-117');
  const [taxiPassengers, setTaxiPassengers] = useState(2);
  const [taxiLuggage, setTaxiLuggage] = useState(2);
  const [taxiPaymentStatus, setTaxiPaymentStatus] = useState<'unpaid' | 'paid'>('unpaid');
  const [taxiEmailDispatched, setTaxiEmailDispatched] = useState(false);

  // Daraz Analyzer Simulator State
  const [darazInput, setDarazInput] = useState(
    "The camera quality on this smartphone is absolutely amazing for this price. Battery easily lasts 2 full days with heavy gaming and streaming. Highly recommended seller!"
  );
  const [darazResult, setDarazResult] = useState<{
    sentiment: 'Positive' | 'Negative' | 'Neutral';
    score: number;
    keywords: string[];
    priceRecommendation: string;
    stockVelocity: string;
  } | null>({
    sentiment: 'Positive',
    score: 94,
    keywords: ['camera quality', 'amazing battery', 'heavy gaming', 'recommended seller'],
    priceRecommendation: 'Optimal at PKR 45,999 (5% margin headroom vs market)',
    stockVelocity: 'High Demand — Restock recommended within 8 days'
  });

  // Multimodal TTS Simulator State
  const [ttsText, setTtsText] = useState(
    "Software Engineering in the modern era combines rapid full-stack application development with intelligent generative agents. By fusing neural transformers with scalable microservices, developers can deliver transformative experiences."
  );
  const [summaryMode, setSummaryMode] = useState<'bullets' | 'digest'>('bullets');
  const [generatedSummary, setGeneratedSummary] = useState<string>(
    "• Modern software engineering integrates full-stack systems with autonomous AI agents.\n• Transformer architectures enable instant context-aware summarization.\n• Delivers robust microservices and optimized user experiences."
  );
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceRate, setVoiceRate] = useState(1);

  // Zerimo AI Startup Simulator State
  const [fundingAmount, setFundingAmount] = useState(150000);
  const [burnRate, setBurnRate] = useState(12000);
  const [teamSize, setTeamSize] = useState(5);
  const [startupCategory, setStartupCategory] = useState('SaaS / AI Tools');
  const [startupScore, setStartupScore] = useState<number>(86);

  // Steganography Simulator State
  const [secretMessage, setSecretMessage] = useState("NUML_CONFIDENTIAL_KEY_2026");
  const [passphrase, setPassphrase] = useState("HamzaKhalid@Secure");
  const [stegoEncoded, setStegoEncoded] = useState(false);
  const [decodedMessage, setDecodedMessage] = useState("");

  // Helper calculation for One Airport Taxi
  const getTaxiFareEstimate = () => {
    let baseMiles = 22.4;
    let baseMinutes = 42;
    if (taxiPickup.includes('Gatwick')) { baseMiles = 38.5; baseMinutes = 65; }
    else if (taxiPickup.includes('Stansted')) { baseMiles = 41.2; baseMinutes = 70; }
    else if (taxiPickup.includes('Luton')) { baseMiles = 34.8; baseMinutes = 55; }
    else if (taxiPickup.includes('Manchester')) { baseMiles = 14.5; baseMinutes = 28; }
    else if (taxiPickup.includes('Birmingham')) { baseMiles = 16.2; baseMinutes = 32; }

    if (taxiDropoff.includes('Canary Wharf')) { baseMiles += 5.5; baseMinutes += 15; }
    else if (taxiDropoff.includes('Oxford')) { baseMiles += 28.0; baseMinutes += 35; }
    else if (taxiDropoff.includes('Cambridge')) { baseMiles += 32.0; baseMinutes += 40; }
    else if (taxiDropoff.includes('Southampton')) { baseMiles += 45.0; baseMinutes += 50; }

    const rates = {
      saloon: { base: 45, perMile: 1.85, name: 'Standard Saloon', car: 'Skoda Superb / VW Passat', pass: 4, bags: 2 },
      estate: { base: 55, perMile: 2.10, name: 'Estate Wagon', car: 'Passat Estate / Mondeo', pass: 4, bags: 4 },
      executive: { base: 75, perMile: 2.65, name: 'Executive Luxury', car: 'Mercedes-Benz E-Class / BMW 5', pass: 3, bags: 2 },
      mpv: { base: 85, perMile: 2.95, name: 'MPV 6-Seater', car: 'Ford Galaxy / VW Sharan', pass: 6, bags: 4 },
      minibus: { base: 110, perMile: 3.40, name: '8-Seater Minibus', car: 'Mercedes Vito / Transporter', pass: 8, bags: 8 }
    };

    const currentRate = rates[taxiVehicle];
    const dropoffFee = 5.00; // UK Airport barrier surcharge
    const distanceCost = baseMiles * currentRate.perMile;
    const totalGbp = Math.round(currentRate.base + distanceCost + dropoffFee);

    return {
      miles: baseMiles.toFixed(1),
      duration: `${baseMinutes} mins`,
      baseCost: currentRate.base,
      distanceCost: distanceCost.toFixed(2),
      dropoffFee: '5.00',
      totalGbp,
      vehicleInfo: currentRate
    };
  };

  // Action handlers
  const handleCalculateTaxi = () => {
    setTaxiPaymentStatus('unpaid');
    setTaxiEmailDispatched(false);
    confetti({ particleCount: 25, spread: 55, origin: { y: 0.6 } });
  };

  const handleSimulateStripePayment = () => {
    setTaxiPaymentStatus('paid');
    confetti({ particleCount: 45, spread: 70 });
  };

  const handleSimulateEmailDispatch = () => {
    setTaxiEmailDispatched(true);
    confetti({ particleCount: 35, spread: 65 });
  };

  const handleAnalyzeDaraz = () => {
    const textLower = darazInput.toLowerCase();
    let sentiment: 'Positive' | 'Negative' | 'Neutral' = 'Neutral';
    let score = 65;

    if (textLower.includes('bad') || textLower.includes('broken') || textLower.includes('late') || textLower.includes('poor') || textLower.includes('waste')) {
      sentiment = 'Negative';
      score = 22;
    } else if (textLower.includes('good') || textLower.includes('amazing') || textLower.includes('best') || textLower.includes('great') || textLower.includes('recommended')) {
      sentiment = 'Positive';
      score = 92;
    }

    setDarazResult({
      sentiment,
      score,
      keywords: textLower.split(' ').filter(w => w.length > 5).slice(0, 4),
      priceRecommendation: sentiment === 'Positive' ? 'Maintain competitive price (+3% headroom)' : 'Price drop suggested to regain volume (-8%)',
      stockVelocity: sentiment === 'Positive' ? 'High Demand Velocity' : 'Low Velocity — Clearance Strategy'
    });

    confetti({ particleCount: 20, spread: 50, origin: { y: 0.7 } });
  };

  const handleSynthesizeSummary = () => {
    if (summaryMode === 'bullets') {
      const sentences = ttsText.split('.').filter(s => s.trim().length > 0);
      setGeneratedSummary(sentences.map(s => `• ${s.trim()}`).slice(0, 3).join('\n'));
    } else {
      setGeneratedSummary(ttsText.substring(0, Math.min(180, ttsText.length)) + '... (AI Abstractive Synthesis)');
    }
  };

  const handleSpeakText = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const textToRead = generatedSummary || ttsText;
      const utterance = new SpeechSynthesisUtterance(textToRead.replace(/•/g, ''));
      utterance.rate = voiceRate;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCalculateStartupScore = () => {
    const runwayMonths = fundingAmount / (burnRate || 1);
    let calculated = Math.min(95, Math.max(20, Math.round((runwayMonths * 3.5) + (teamSize * 4) + (startupCategory.includes('AI') ? 15 : 8))));
    setStartupScore(calculated);
    confetti({ particleCount: 30, spread: 60 });
  };

  const handleEncodeStego = () => {
    setStegoEncoded(true);
    setDecodedMessage("");
    confetti({ particleCount: 25, spread: 50 });
  };

  const handleDecodeStego = () => {
    setDecodedMessage(secretMessage);
  };

  const taxiFare = getTaxiFareEstimate();

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {project.categoryLabel}
              </span>
              {project.academicTag && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-50 text-purple-700 border border-purple-200">
                  {project.academicTag}
                </span>
              )}
              <span className="text-xs text-slate-400 font-mono">{project.period}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{project.tagline}</p>
          </div>

          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-live-demo-link"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Live Site</span>
              </a>
            )}
            <button
              onClick={onClose}
              id="close-project-modal-btn"
              className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-slate-200 bg-white px-6">
          {project.interactiveDemoType && (
            <button
              onClick={() => setActiveTab('simulator')}
              id="tab-interactive-sim"
              className={`py-3 px-4 text-sm font-semibold border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'simulator'
                  ? 'border-blue-600 text-blue-700 bg-blue-50/50'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Interactive Live Demo Simulator</span>
            </button>
          )}
          <button
            onClick={() => setActiveTab('overview')}
            id="tab-project-overview"
            className={`py-3 px-4 text-sm font-semibold border-b-2 flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-700 bg-blue-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Architecture & Specifications</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm bg-white">
          {/* 1. One Airport Taxi Simulator */}
          {activeTab === 'simulator' && project.interactiveDemoType === 'airport-taxi' && (
            <div className="space-y-6">
              {/* Notice Banner */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start justify-between gap-3">
                <div>
                  <strong className="font-semibold block mb-0.5">Production Client Project (Live in the UK):</strong>
                  Delivered in 1 month featuring real-time Google Maps route matrix calculations, secure Stripe card checkout, and automated booking & driver dispatch email alerts.
                </div>
                <a
                  href="https://oneairporttaxi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold whitespace-nowrap flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>oneairporttaxi.com</span>
                </a>
              </div>

              {/* Route & Booking Simulator Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-blue-600" />
                    <span>Pickup UK Airport (With Terminal Gate):</span>
                  </label>
                  <select
                    value={taxiPickup}
                    onChange={(e) => {
                      setTaxiPickup(e.target.value);
                      handleCalculateTaxi();
                    }}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="London Heathrow (LHR) - Terminal 2 & 3">London Heathrow (LHR) - Terminal 2 & 3</option>
                    <option value="London Heathrow (LHR) - Terminal 4 & 5">London Heathrow (LHR) - Terminal 4 & 5</option>
                    <option value="London Gatwick (LGW) - South Terminal">London Gatwick (LGW) - South Terminal</option>
                    <option value="London Stansted (STN)">London Stansted (STN)</option>
                    <option value="London Luton Airport (LTN)">London Luton Airport (LTN)</option>
                    <option value="Manchester Airport (MAN) - Terminal 1">Manchester Airport (MAN) - Terminal 1</option>
                    <option value="Birmingham International (BHX)">Birmingham International (BHX)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-600" />
                    <span>Dropoff Destination Address:</span>
                  </label>
                  <select
                    value={taxiDropoff}
                    onChange={(e) => {
                      setTaxiDropoff(e.target.value);
                      handleCalculateTaxi();
                    }}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Central London (Westminster / Oxford St)">Central London (Westminster / Oxford St)</option>
                    <option value="Canary Wharf Financial District, London">Canary Wharf Financial District, London</option>
                    <option value="Oxford University Campus, Oxfordshire">Oxford University Campus, Oxfordshire</option>
                    <option value="Cambridge Science Park, Cambridge">Cambridge Science Park, Cambridge</option>
                    <option value="Southampton International Cruise Port">Southampton International Cruise Port</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Flight Number (Auto Flight-Tracking):
                  </label>
                  <input
                    type="text"
                    value={taxiFlightNo}
                    onChange={(e) => setTaxiFlightNo(e.target.value)}
                    placeholder="e.g. BA-117, EK-003"
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Passengers:</label>
                    <select
                      value={taxiPassengers}
                      onChange={(e) => setTaxiPassengers(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="6">6 Persons</option>
                      <option value="8">8 Persons</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Luggage Bags:</label>
                    <select
                      value={taxiLuggage}
                      onChange={(e) => setTaxiLuggage(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs"
                    >
                      <option value="1">1 Suitcase</option>
                      <option value="2">2 Suitcases</option>
                      <option value="4">4 Suitcases</option>
                      <option value="6">6 Suitcases</option>
                      <option value="8">8 Suitcases</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Fleet Selection Tabs */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Select Vehicle Class & Capacity:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { key: 'saloon', name: 'Saloon', model: 'Skoda Superb', pass: '4 Pass', bags: '2 Bags' },
                    { key: 'estate', name: 'Estate', model: 'Passat Estate', pass: '4 Pass', bags: '4 Bags' },
                    { key: 'executive', name: 'Executive', model: 'Mercedes E-Class', pass: '3 Pass', bags: '2 Bags' },
                    { key: 'mpv', name: 'MPV 6', model: 'Ford Galaxy', pass: '6 Pass', bags: '4 Bags' },
                    { key: 'minibus', name: '8-Seater', model: 'Mercedes Vito', pass: '8 Pass', bags: '8 Bags' },
                  ].map((v) => (
                    <button
                      key={v.key}
                      onClick={() => {
                        setTaxiVehicle(v.key as any);
                        handleCalculateTaxi();
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        taxiVehicle === v.key
                          ? 'border-blue-600 bg-blue-50/70 text-blue-900 shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold text-xs flex items-center justify-between">
                        <span>{v.name}</span>
                        <Car className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <div className="text-[10px] text-slate-500 truncate mt-0.5">{v.model}</div>
                      <div className="text-[10px] font-mono text-slate-400 mt-1">{v.pass} • {v.bags}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Maps Distance & Fare Breakdown Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-xs text-slate-800">Google Maps Route Matrix & ETA:</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-slate-600">Distance: <strong>{taxiFare.miles} miles</strong></span>
                    <span className="text-slate-600">Duration: <strong>{taxiFare.duration}</strong></span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Base Fare & Distance:</span>
                    <span className="font-mono font-bold text-slate-900">£{taxiFare.baseCost} + £{taxiFare.distanceCost}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">UK Airport Dropoff Toll:</span>
                    <span className="font-mono font-bold text-slate-900">£{taxiFare.dropoffFee}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-900">
                    <span className="text-blue-700 block text-[11px] font-semibold">Total Guaranteed Fare:</span>
                    <span className="text-lg font-extrabold font-mono text-blue-800">£{taxiFare.totalGbp}.00 GBP</span>
                  </div>
                </div>

                {/* Stripe and Email Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={handleSimulateStripePayment}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                      taxiPaymentStatus === 'paid'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>
                      {taxiPaymentStatus === 'paid'
                        ? '✓ Stripe Payment Confirmed (£' + taxiFare.totalGbp + ')'
                        : 'Simulate Stripe Instant Card Checkout (£' + taxiFare.totalGbp + ')'}
                    </span>
                  </button>

                  <button
                    onClick={handleSimulateEmailDispatch}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                      taxiEmailDispatched
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                        : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200'
                    }`}
                  >
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>
                      {taxiEmailDispatched ? '✓ Email Triggered' : 'Simulate Automated Email Dispatch'}
                    </span>
                  </button>
                </div>

                {/* Transaction & Email Dispatch Payloads */}
                {taxiPaymentStatus === 'paid' && (
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-mono space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Stripe Payment Intent Succeeded: `pi_live_stripe_984102941`</span>
                    </div>
                    <div className="text-[11px] text-emerald-700">
                      Amount: £{taxiFare.totalGbp}.00 GBP | Status: Paid & Captured | Currency: GBP (£)
                    </div>
                  </div>
                )}

                {taxiEmailDispatched && (
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 font-mono space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-blue-800">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>Transactional Email Notifications Sent via Webhook:</span>
                    </div>
                    <div className="text-[11px] text-blue-700">
                      1. Customer PDF Confirmation generated & sent to passenger.<br />
                      2. Driver dispatch manifest alert triggered with flight {taxiFlightNo} live radar tracking.
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. Daraz Analyzer Simulator */}
          {activeTab === 'simulator' && project.interactiveDemoType === 'daraz-analyzer' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs">
                <strong>Live E-Commerce NLP Simulator:</strong> Test how the Daraz Insight Analyzer parses customer feedback, scores sentiment polarity, and adjusts merchant sales recommendations in real-time.
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Sample Daraz Customer Review Text:
                </label>
                <textarea
                  value={darazInput}
                  onChange={(e) => setDarazInput(e.target.value)}
                  rows={3}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter product review text to analyze sentiment and velocity..."
                />

                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    onClick={() =>
                      setDarazInput(
                        "Very impressive build quality, sound is crystal clear with deep bass! Fast 2-day delivery across Faisalabad."
                      )
                    }
                    className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-[11px] text-slate-700 border border-slate-200 cursor-pointer"
                  >
                    Preset: Positive Review
                  </button>
                  <button
                    onClick={() =>
                      setDarazInput(
                        "Packaging was damaged and Bluetooth disconnected repeatedly. Waste of money, asking for return."
                      )
                    }
                    className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-[11px] text-slate-700 border border-slate-200 cursor-pointer"
                  >
                    Preset: Negative Review
                  </button>
                </div>
              </div>

              <button
                onClick={handleAnalyzeDaraz}
                id="btn-run-daraz-analysis"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Cpu className="w-4 h-4" />
                <span>Run AI NLP & Sentiment Pipeline</span>
              </button>

              {darazResult && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Analyzed Sentiment:</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        darazResult.sentiment === 'Positive'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : darazResult.sentiment === 'Negative'
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {darazResult.sentiment} ({darazResult.score}% Confidence)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="text-slate-500 block mb-1">Pricing Strategy Recommendation:</span>
                      <span className="font-semibold text-slate-900">{darazResult.priceRecommendation}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="text-slate-500 block mb-1">Inventory Reorder Velocity:</span>
                      <span className="font-semibold text-blue-700">{darazResult.stockVelocity}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 3. Multimodal TTS Simulator */}
          {activeTab === 'simulator' && project.interactiveDemoType === 'text-summarizer' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs">
                <strong>Multimodal Speech & AI Digest Simulator:</strong> Test contextual summarization and neural voice synthesis with multilingual capability and pitch tuning.
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Input Article / Technical Text:
                </label>
                <textarea
                  value={ttsText}
                  onChange={(e) => setTtsText(e.target.value)}
                  rows={3}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500">Mode:</span>
                  <button
                    onClick={() => {
                      setSummaryMode('bullets');
                      handleSynthesizeSummary();
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer ${
                      summaryMode === 'bullets'
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    Bullet Highlights
                  </button>
                  <button
                    onClick={() => {
                      setSummaryMode('digest');
                      handleSynthesizeSummary();
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer ${
                      summaryMode === 'digest'
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    Executive Digest
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500">Speech Rate:</span>
                  <select
                    value={voiceRate}
                    onChange={(e) => setVoiceRate(Number(e.target.value))}
                    className="bg-white border border-slate-200 rounded px-2 py-1 text-slate-700 text-xs"
                  >
                    <option value="0.8">0.8x (Slow)</option>
                    <option value="1">1.0x (Normal)</option>
                    <option value="1.2">1.2x (Fast)</option>
                  </select>
                </div>
              </div>

              {/* AI Generated Output Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Synthesized AI Summary:</span>
                  <span className="text-blue-700 font-mono font-semibold">Attention Transformer</span>
                </div>
                <div className="whitespace-pre-line font-mono text-xs text-slate-800 bg-white p-3 rounded-lg border border-slate-200">
                  {generatedSummary}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={handleSpeakText}
                    id="btn-play-voice-tts"
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    {isSpeaking ? (
                      <>
                        <VolumeX className="w-4 h-4" />
                        <span>Stop Voice Playback</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4" />
                        <span>Play Audio Synthesis (Neural TTS)</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleSynthesizeSummary}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold cursor-pointer"
                  >
                    Re-Generate
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 4. Zerimo AI Startup Simulator */}
          {activeTab === 'simulator' && project.interactiveDemoType === 'startup-predictor' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs">
                <strong>Zerimo AI Venture Forecaster:</strong> Simulation modeling seed funding, monthly burn rate, team capability, and competitive moat to calculate venture survival probabilities.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Seed Capital (USD): ${fundingAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="30000"
                    max="500000"
                    step="10000"
                    value={fundingAmount}
                    onChange={(e) => setFundingAmount(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Monthly Burn Rate (USD): ${burnRate.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="4000"
                    max="35000"
                    step="1000"
                    value={burnRate}
                    onChange={(e) => setBurnRate(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Engineering Team Size: {teamSize} Members
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="20"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Industry Domain Vertical:
                  </label>
                  <select
                    value={startupCategory}
                    onChange={(e) => setStartupCategory(e.target.value)}
                    className="w-full p-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs"
                  >
                    <option value="SaaS / AI Tools">SaaS / Generative AI</option>
                    <option value="E-Commerce / B2B">E-Commerce Marketplace</option>
                    <option value="FinTech">FinTech / Installments</option>
                    <option value="HealthTech">HealthTech Solutions</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleCalculateStartupScore}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Compute Venture Survival Probability</span>
              </button>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">Survival Runway Projection:</div>
                  <div className="text-base font-bold text-slate-900">
                    {(fundingAmount / burnRate).toFixed(1)} Months Cash Runway
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Venture Success Probability:</div>
                  <div className="text-2xl font-extrabold text-blue-700">{startupScore}%</div>
                </div>
              </div>
            </div>
          )}

          {/* 5. Steganography Simulator */}
          {activeTab === 'simulator' && project.interactiveDemoType === 'steganography' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs">
                <strong>Steganography & Cryptographic Payload Encoder:</strong> Conceal encrypted data within digital carrier matrices using LSB insertion and AES-256 key salting.
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Secret Message Payload:
                  </label>
                  <input
                    type="text"
                    value={secretMessage}
                    onChange={(e) => setSecretMessage(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    AES-256 Cryptographic Passphrase:
                  </label>
                  <input
                    type="password"
                    value={passphrase}
                    onChange={(e) => setPassphrase(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleEncodeStego}
                    className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Encode & Hide in Carrier Pixels</span>
                  </button>

                  <button
                    onClick={handleDecodeStego}
                    disabled={!stegoEncoded}
                    className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      stegoEncoded
                        ? 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 cursor-pointer shadow-sm'
                        : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                    }`}
                  >
                    Extract & Decrypt
                  </button>
                </div>

                {stegoEncoded && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-emerald-300 text-xs space-y-2">
                    <div className="flex items-center justify-between text-emerald-700 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        Payload Encrypted & Embedded
                      </span>
                      <span className="font-mono text-[11px] text-slate-500">PSNR: 48.2 dB (Zero Visual Noise)</span>
                    </div>

                    {decodedMessage && (
                      <div className="pt-2 border-t border-slate-200 text-slate-700">
                        <span className="text-slate-500 block mb-1">Losslessly Decrypted Message:</span>
                        <span className="font-mono font-bold text-blue-700 bg-white border border-slate-200 px-2 py-1 rounded">
                          {decodedMessage}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Overview Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Project Summary</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{project.description}</p>
              </div>

              {project.liveDemoUrl && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div className="text-xs text-emerald-900">
                    <span className="font-bold block">Live Production Website Available:</span>
                    This project is live and accessible online.
                  </div>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Visit {project.liveDemoUrl.replace('https://', '').replace('/', '')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-3">Key Functional Capabilities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Architecture & Data Flow</h4>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 leading-relaxed">
                  {project.architectureOverview}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Technologies & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.stats && (
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">Engineering Performance Metrics</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {project.stats.map((s, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <div className="text-lg font-bold text-blue-700">{s.value}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Hamza Khalid • Engineering Portfolio
          </span>
          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Live URL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold cursor-pointer shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

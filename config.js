/**
 * =========================================================================
 * CONSTRUCTION COMPANY WEBSITE CONFIGURATION & PLACEHOLDERS
 * =========================================================================
 * You can easily update all your company information, contact details,
 * services, projects, and testimonials right here or directly in index.html.
 */

const SITE_CONFIG = {
  // --- Company Information (Editable Placeholders) ---
  company: {
    name: "NIKITA CONSTRUCTION COMPANY",
    shortName: "NIKITA",
    tagline: "Building Your Vision. Creating Your Future.",
    subHeadline: "From bespoke residential houses and multi-story commercial buildings to modern office fitouts and retail spaces, we deliver structural excellence, precision engineering, and transparent project execution.",
    license: "Licensed General Contractor & Structural Engineers | Registered Builder",
    foundedYear: 2012,
    yearsOfExperience: "14+",
    projectsCompleted: "350+",
    happyClients: "300+",
    safetyScore: "100%",
  },

  // --- Contact & Location Information (Editable Placeholders) ---
  contact: {
    phone: "+91 93094 22007",
    phoneRaw: "+919309422007", // Clean number for tel: links
    whatsapp: "919309422007", // Clean number for WhatsApp API
    whatsappPreFill: "Hello Nikita Construction Company! I would like to discuss a construction project with your team.",
    email: "sitaramkumawat9309@gmail.com",
    supportEmail: "sitaramkumawat9309@gmail.com",
    address: "Nikita Construction Company, Main Office, India",
    workingHours: "Monday – Saturday: 8:00 AM – 7:00 PM (Emergency Support 24/7)",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25436351647!2d-74.11976373099955!3d40.69766374940561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1684345260194!5m2!1sen!2sus",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Nikita+Construction+Company",
  },

  // --- Social Media Links (Editable Placeholders) ---
  socials: {
    facebook: "https://facebook.com/nikitaconstruction",
    instagram: "https://instagram.com/nikitaconstruction",
    linkedin: "https://linkedin.com/company/nikitaconstruction",
    youtube: "https://youtube.com/@nikitaconstruction",
  },

  // --- Core Services ---
  services: [
    {
      id: "residential",
      title: "Residential House Construction",
      tagline: "Custom Luxury Villas, Smart Homes & Family Residences",
      shortDesc: "Comprehensive turnkey house construction tailored to your lifestyle, incorporating sustainable materials, energy-efficient HVAC, and premium architectural finishes.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      features: [
        "Architectural 3D concept & structural blueprint design",
        "Soil testing, foundation engineering & seismic stability",
        "Turnkey execution from groundbreaking to interior handover",
        "Smart home automation and solar power integration"
      ],
      details: "We turn your dream home into an enduring reality. Our residential division handles single-family custom houses, duplexes, luxury villas, and multi-unit developments. We handle permitting, zoning regulations, foundation pouring, steel framing, electrical, plumbing, insulation, and high-end exterior cladding with strict milestone adherence."
    },
    {
      id: "commercial",
      title: "Commercial Building Construction",
      tagline: "High-Rise Complexes, Business Parks & Mixed-Use Centers",
      shortDesc: "End-to-end commercial development built to meet rigorous code compliance, heavy foot traffic demands, and optimized operational efficiency.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      features: [
        "Heavy reinforced concrete & structural steel construction",
        "Advanced fire suppression, elevator & HVAC engineering",
        "LEED-certified green building design capabilities",
        "Tight critical-path scheduling for rapid commercial tenant occupancy"
      ],
      details: "Commercial developments require absolute logistical coordination and structural mastery. Apex delivers corporate headquarters, mixed-use retail towers, logistic hubs, and institutional complexes. Our teams ensure all zoning, life-safety codes, ADA compliance, and structural load ratings are exceeded."
    },
    {
      id: "office",
      title: "Office Construction & Fitouts",
      tagline: "Modern Workspaces, Executive Suites & Tech Headquarters",
      shortDesc: "Bespoke corporate build-outs and tenant improvements designed to elevate productivity, collaboration, and executive brand presence.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      features: [
        "Acoustic architectural zoning & ergonomic layouts",
        "Advanced high-density MEP, data cabling & smart lighting",
        "Executive boardrooms, open workstations & collaboration lounges",
        "Accelerated turnaround times to minimize business downtime"
      ],
      details: "Whether converting raw shell space into high-velocity technology campuses or building dedicated corporate towers, our office construction specialists ensure cutting-edge infrastructure, sound isolation, clean aesthetics, and flexible work environments."
    },
    {
      id: "shop",
      title: "Shop & Retail Construction",
      tagline: "Flagship Showrooms, Boutiques & Retail Centers",
      shortDesc: "Eye-catching commercial storefronts and experiential retail spaces engineered for optimal customer flow and visual merchandising impact.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      features: [
        "High-impact architectural glass facades & storefront framing",
        "Custom millwork, display integration & specialized lighting",
        "Security, POS networking & inventory backroom infrastructure",
        "Rapid retail-ready handover ahead of peak seasonal launches"
      ],
      details: "Retail success depends on foot-traffic flow, brand prestige, and seamless physical infrastructure. We build retail stores, boutique outlets, car showrooms, and shopping arcade units designed to attract customers and endure heavy commercial use."
    },
    {
      id: "renovation",
      title: "Renovation & Remodeling",
      tagline: "Structural Overhauls, Modernization & Historic Restorations",
      shortDesc: "Breathe fresh life into existing spaces with structural alterations, facade upgrades, space re-planning, and modernization of vital MEP systems.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      features: [
        "Load-bearing wall removal & structural steel beam insertion",
        "Complete exterior facade and architectural facelift",
        "Electrical rewiring, plumbing replacement & modern HVAC",
        "Historic landmark preservation & code modernization"
      ],
      details: "Renovation requires specialized engineering to safely reinforce and modernize existing building fabrics. From total residential gut-renovations to commercial building retrofits, we expand floor space, update building systems, and boost asset value."
    },
    {
      id: "civil",
      title: "Civil & Structural Work",
      tagline: "Deep Foundations, Earthwork, Steel & Concrete Structures",
      shortDesc: "The robust backbone of any successful build: geotechnical grading, piling, retaining walls, slab engineering, and heavy steel fabrication.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
      features: [
        "Excavation, grading, shoring & storm drainage systems",
        "Drilled shaft, helical piers & raft foundation engineering",
        "Precision post-tensioned slab & structural steel erection",
        "Non-destructive testing & concrete core compression validation"
      ],
      details: "Our civil and structural engineering division operates heavy equipment and precision telemetry to prepare terrain, pour high-strength structural concrete, and erect structural steel frames designed to withstand seismic and environmental forces."
    },
    {
      id: "interior",
      title: "Interior & Finishing Work",
      tagline: "Architectural Millwork, Premium Flooring & Fine Finishes",
      shortDesc: "Flawless attention to detail: bespoke woodwork, marble and hardwood flooring, Italian plaster, architectural ceiling drops, and MEP integration.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      features: [
        "Precision gypsum drywall, coffered ceilings & cove lighting",
        "Natural stone, porcelain slab & engineered hardwood installations",
        "Bespoke architectural cabinetry & custom metal fabrication",
        "Multi-stage zero-VOC paint finishes & microcement treatments"
      ],
      details: "The distinction between average and elite construction lies in the final finish. Our master artisans and finishing supervisors guarantee razor-sharp alignment, flawless paint textures, immaculate tile transitions, and enduring quality."
    }
  ],

  // --- Featured Projects ---
  projects: [
    {
      id: 1,
      title: "The Horizon Cantilever Residence",
      category: "houses",
      categoryName: "Residential House",
      location: "Westchester Ridge, NY",
      area: "7,800 sq.ft.",
      year: "2025",
      duration: "14 Months",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      description: "A luxury multi-tier modern residential villa with steel-reinforced cantilevered living decks, floor-to-ceiling thermal curtain walls, integrated infinity pool, and geothermal heating.",
      highlights: ["Triple-glazed structural glass", "Post-tensioned cantilever concrete", "Smart home HVAC & automation", "Solar roof with battery backup"]
    },
    {
      id: 2,
      title: "Nexus Commercial Tower",
      category: "buildings",
      categoryName: "Commercial Building",
      location: "Financial Core, Downtown",
      area: "145,000 sq.ft.",
      year: "2024",
      duration: "24 Months",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      description: "A 16-story mixed-use commercial tower engineered with composite steel framing, high-performance unitized glass curtain facade, and three underground parking levels.",
      highlights: ["LEED Gold Certification", "Earthquake-resistant core shear walls", "High-speed destination-dispatch elevators", "Rainwater reclamation system"]
    },
    {
      id: 3,
      title: "Vanguard Tech Innovation Hub",
      category: "offices",
      categoryName: "Office Construction",
      location: "Silicon Promenade, Suite 100",
      area: "42,000 sq.ft.",
      year: "2025",
      duration: "9 Months",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
      description: "Turnkey multi-floor corporate office construction featuring acoustic biophilic pods, high-density server room infrastructure, dynamic smart glass partitions, and executive suites.",
      highlights: ["Bespoke acoustic wood baffles", "Underfloor air distribution (UFAD)", "Dedicated Tier-3 data center room", "Flexible modular conference suites"]
    },
    {
      id: 4,
      title: "Lumina Flagship Luxury Galleria",
      category: "commercial",
      categoryName: "Shop / Retail",
      location: "Fifth Avenue Retail District",
      area: "18,500 sq.ft.",
      year: "2024",
      duration: "6 Months",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      description: "High-end multi-brand luxury retail showroom boasting frameless spider-glass facade, terrazzo stone flooring, custom brass displays, and intelligent showcase lighting.",
      highlights: ["Spider-glass structural facade", "Seamless Venetian plaster walls", "Automated customer tracking MEP", "High-security vault room"]
    },
    {
      id: 5,
      title: "The Glass Pavilion Villa",
      category: "houses",
      categoryName: "Residential House",
      location: "Pine Hill Estate",
      area: "6,200 sq.ft.",
      year: "2024",
      duration: "11 Months",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      description: "Ultra-minimalist modern house with exposed architectural board-formed concrete, black steel framework, open-concept skylit interior atrium, and private landscaped courtyards.",
      highlights: ["Board-formed architectural concrete", "Radiant floor heating throughout", "Floating steel staircase with glass railing", "Custom European kitchen integration"]
    },
    {
      id: 6,
      title: "Metro Plaza Shopping Complex",
      category: "commercial",
      categoryName: "Commercial & Retail",
      location: "Northpoint Boulevard",
      area: "86,000 sq.ft.",
      year: "2023",
      duration: "18 Months",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=900&q=80",
      description: "A two-story commercial lifestyle strip center comprising 24 retail shops, anchor grocery store, underground drainage containment, and expansive stamped asphalt parking.",
      highlights: ["Precast concrete wall panels", "Heavy-duty commercial loading bays", "Energy-efficient LED area illumination", "High-capacity storm attenuation tanks"]
    },
    {
      id: 7,
      title: "Centennial Heritage Loft Renovation",
      category: "offices",
      categoryName: "Renovation & Office",
      location: "Historic Arts District",
      area: "28,000 sq.ft.",
      year: "2024",
      duration: "8 Months",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
      description: "Total structural restoration and modernization of a 1910 masonry industrial warehouse into creative collaborative office studios with preserved timber beams and new steel seismic ties.",
      highlights: ["Tuckpointing and brick conservation", "Seismic steel moment frames", "Preserved heavy Douglas fir timber", "Modern VRF climate control"]
    },
    {
      id: 8,
      title: "The Solstice Contemporary Duplex",
      category: "houses",
      categoryName: "Residential House",
      location: "Harbor View Avenue",
      area: "5,400 sq.ft.",
      year: "2025",
      duration: "10 Months",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      description: "A sophisticated urban duplex designed with natural cedar cladding, insulated concrete forms (ICF), acoustic soundproof party walls, and private rooftop entertainment terraces.",
      highlights: ["ICF energy efficiency rating", "Double STC 65 soundproof walls", "Cedar & slate rainscreen exterior", "Private green rooftop decks"]
    }
  ],

  // --- Client Testimonials ---
  testimonials: [
    {
      id: 1,
      quote: "Apex transformed our empty hillside plot into an architectural marvel. Their structural engineers solved complicated grading issues that two other contractors walked away from. On-budget, on-time, and built like a fortress.",
      clientName: "David & Eleanor Vance",
      clientRole: "Luxury Homeowners",
      projectType: "Custom Residential Villa (7,800 sq.ft.)",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      quote: "Managing a 145,000 sq.ft. commercial build requires clockwork logistics. The Apex site superintendents were relentlessly transparent, provided weekly drone flight progress scans, and handed over keys 3 weeks ahead of schedule.",
      clientName: "Marcus Sterling",
      clientRole: "VP of Real Estate, Sterling Capital",
      projectType: "Nexus Commercial Tower",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      quote: "Our tech firm needed a 42,000 sq.ft. office fitout with intricate acoustic zones and rapid delivery. Apex handled all city permits seamlessly and the finishing craftsmanship is second to none.",
      clientName: "Sophia Lin-Kowalski",
      clientRole: "Chief Operations Officer, Synapse Labs",
      projectType: "Corporate Office Construction",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      quote: "Their transparent itemized billing made budgeting stress-free. Every invoice had receipts, daily labor logs, and structural inspection certificates. They are true master builders.",
      clientName: "Robert T. Henderson",
      clientRole: "Retail Chain Developer",
      projectType: "Retail Shopping Plaza & 4 Outlets",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ],

  // --- Why Choose Us Highlights ---
  whyChooseUs: [
    {
      icon: "shield-check",
      title: "Quality Materials Only",
      desc: "We exclusively source certified Grade-60 steel, high-performance slump concrete, weather-rated membranes, and premium sustainable timbers with strict origin certifications."
    },
    {
      icon: "users",
      title: "Experienced Team",
      desc: "Our project managers, structural engineers, and site foremen hold over 18+ years of field mastery with OSHA-30 certification and zero lost-time accident records."
    },
    {
      icon: "receipt",
      title: "Transparent Pricing",
      desc: "Detailed Bill of Quantities (BOQ) with fixed-price commitments. No hidden line-items, no surprise markup creep, and complete open-book procurement."
    },
    {
      icon: "clock",
      title: "On-Time Completion",
      desc: "We utilize Primavera P6 & BIM critical-path scheduling with milestone-backed commitments, weekly digital progress reports, and penalty-backed delivery deadlines."
    },
    {
      icon: "award",
      title: "Professional Workmanship",
      desc: "Multi-point QA/QC inspection checklist at every phase — from foundation rebar tie spacing to final micro-millimeter trim alignment, backed by our 10-year structural warranty."
    },
    {
      icon: "headphones",
      title: "24/7 Dedicated Support",
      desc: "Direct access to your dedicated project director, client portal login with real-time site photos, and a responsive post-handover warranty response team."
    }
  ],

  // --- 4-Step Process ---
  process: [
    {
      step: "01",
      title: "Consultation & Feasibility",
      desc: "We conduct in-depth site inspections, zoning reviews, geotechnical assessments, and budget alignment to establish total project viability."
    },
    {
      step: "02",
      title: "Planning & Architectural Design",
      desc: "Our architects & civil engineers create 3D BIM models, structural engineering calculations, obtain all municipal permits, and finalize detailed BOQs."
    },
    {
      step: "03",
      title: "Construction & Quality Assurance",
      desc: "Groundbreaking, foundation pouring, steel and masonry framing, MEP installations, followed by continuous rigorous structural safety testing."
    },
    {
      step: "04",
      title: "Final Inspection & Handover",
      desc: "Comprehensive punch-list resolution, municipal occupancy certification, deep detailing, key handover, and activation of our warranty coverage."
    }
  ]
};

// Make accessible to browser window
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}

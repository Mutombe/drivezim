import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Tag, Phone, BookOpen, ChevronRight, Search } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedArticle, setExpandedArticle] = useState(null);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'safety', label: 'Road Safety' },
    { id: 'maintenance', label: 'Vehicle Maintenance' },
    { id: 'emergency', label: 'Emergency Tips' },
    { id: 'guides', label: 'How-To Guides' },
  ];

      const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263785948128";
    } else if (action === "email") {
      window.location.href = "mailto:info@biddulphs.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263780579261?text=Hello%20Drive%20Zimbabwe%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";
    }
  };

  const articles = [
    {
      id: 1,
      category: 'emergency',
      title: 'What to Do When You\'re in a Car Accident: A Complete Guide',
      excerpt: 'Being in a car accident is stressful. Here\'s a step-by-step guide on what to do immediately after an accident to ensure your safety and protect your interests.',
      image: '/5.jpg',
      author: 'Drive Zimbabwe Team',
      date: 'January 15, 2026',
      readTime: '8 min read',
      featured: true,
      content: `
        <h3>Stay Calm and Assess the Situation</h3>
        <p>The moments after an accident can be overwhelming, but staying calm is crucial. Take a deep breath and check yourself and your passengers for injuries. If anyone is seriously injured, call emergency services immediately at 999 or 112.</p>

        <h3>Move to Safety</h3>
        <p>If the accident is minor and your vehicle is drivable, move it to the side of the road to avoid blocking traffic and risking further collisions. Turn on your hazard lights to alert other drivers.</p>

        <h3>Document Everything</h3>
        <p>Take photos of all vehicles involved, the accident scene, road conditions, traffic signs, and any visible injuries. Exchange information with the other driver including names, contact details, insurance information, and vehicle registration numbers.</p>

        <h3>Call for Help</h3>
        <p>Contact the police to file an official report, especially if there are injuries or significant damage. Then call Drive Zimbabwe at 078 057 9261 for professional towing and assistance. We'll help coordinate your vehicle's safe transport and provide guidance on next steps.</p>

        <h3>Notify Your Insurance</h3>
        <p>Report the accident to your insurance company as soon as possible. Provide them with all documentation including photos, the police report number, and details of the other parties involved.</p>
      `
    },
    {
      id: 2,
      category: 'maintenance',
      title: 'Essential Vehicle Maintenance Tips to Avoid Roadside Breakdowns',
      excerpt: 'Prevention is better than cure. Learn the key maintenance checks that can help you avoid being stranded on the side of the road.',
      image: '/20.jpg',
      author: 'Technical Team',
      date: 'January 10, 2026',
      readTime: '6 min read',
      featured: false,
      content: `
        <h3>Regular Oil Changes</h3>
        <p>Engine oil is your vehicle's lifeblood. Check your oil level monthly and change it according to your manufacturer's recommendations—typically every 5,000-10,000 kilometers. Old, dirty oil can cause engine damage and unexpected breakdowns.</p>

        <h3>Battery Health</h3>
        <p>Car batteries typically last 3-5 years. Look for signs of corrosion on terminals, slow engine cranking, or dim headlights. Have your battery tested annually, especially before the rainy season when electrical systems work harder.</p>

        <h3>Tyre Maintenance</h3>
        <p>Check tyre pressure monthly and before long trips. Properly inflated tyres improve fuel efficiency and handling. Inspect tread depth using the coin test—if you can see the top of the coin, it's time for new tyres. Don't forget to check your spare tyre too!</p>

        <h3>Cooling System</h3>
        <p>Overheating is a common cause of breakdowns, especially in Zimbabwe's hot climate. Check coolant levels regularly and inspect hoses for cracks or leaks. Have your radiator flushed every 40,000 kilometers.</p>

        <h3>Brake Inspection</h3>
        <p>Listen for squealing or grinding sounds when braking. Have brake pads and rotors inspected every 20,000 kilometers. Good brakes aren't just about avoiding breakdowns—they're essential for safety.</p>
      `
    },
    {
      id: 3,
      category: 'safety',
      title: 'Night Driving Safety: Tips for Staying Safe on Zimbabwe Roads',
      excerpt: 'Driving at night presents unique challenges. Here\'s how to stay safe during nighttime travel on Zimbabwe\'s roads.',
      image: '/26.jpg',
      author: 'Safety Department',
      date: 'January 5, 2026',
      readTime: '5 min read',
      featured: false,
      content: `
        <h3>Ensure Proper Lighting</h3>
        <p>Before night driving, check that all your lights are working—headlights, taillights, brake lights, and indicators. Clean your headlight lenses regularly as dirt and oxidation can reduce visibility by up to 50%.</p>

        <h3>Reduce Speed</h3>
        <p>Your reaction time is limited by what you can see. Drive at speeds that allow you to stop within your visible range. This is especially important on unlit rural roads where pedestrians and animals may be present.</p>

        <h3>Stay Alert</h3>
        <p>Fatigue is more common at night. Take regular breaks on long journeys—every 2 hours or 200 kilometers. If you feel drowsy, pull over somewhere safe and rest. Coffee and energy drinks are temporary fixes, not solutions.</p>

        <h3>Watch for Hazards</h3>
        <p>Be extra vigilant for pedestrians, cyclists without reflectors, and animals on the road. In Zimbabwe, cattle and donkeys often wander onto roads at night. Scan the road ahead and watch for reflections from eyes.</p>

        <h3>Know Your Emergency Contacts</h3>
        <p>Save Drive Zimbabwe's number (078 057 9261) in your phone. If you break down at night, we provide 24/7 assistance. Stay in your vehicle with doors locked until help arrives, especially in unfamiliar areas.</p>
      `
    },
    {
      id: 4,
      category: 'guides',
      title: 'How to Change a Flat Tyre: Step-by-Step Guide',
      excerpt: 'A flat tyre doesn\'t have to ruin your day. Learn how to safely change a tyre yourself, or know when to call for professional help.',
      image: '/37.jpg',
      author: 'Drive Zimbabwe Team',
      date: 'December 28, 2025',
      readTime: '7 min read',
      featured: false,
      content: `
        <h3>Before You Start</h3>
        <p>Find a safe, flat location away from traffic. Turn on your hazard lights and apply the parking brake. If you have them, place warning triangles behind your vehicle. Locate your spare tyre, jack, and lug wrench in your boot.</p>

        <h3>Loosen the Lug Nuts</h3>
        <p>Before raising the vehicle, use the lug wrench to loosen each nut by turning counterclockwise. Don't remove them completely—just break the resistance. If they're too tight, try standing on the wrench for extra leverage.</p>

        <h3>Position and Raise the Jack</h3>
        <p>Place the jack under the vehicle frame near the flat tyre. Consult your owner's manual for the correct jacking point. Raise the vehicle until the flat tyre is about 15cm off the ground.</p>

        <h3>Change the Tyre</h3>
        <p>Remove the lug nuts completely and pull off the flat tyre. Mount the spare tyre, ensuring the valve stem faces outward. Hand-tighten the lug nuts in a star pattern to ensure even seating.</p>

        <h3>Lower and Finish</h3>
        <p>Lower the vehicle until the tyre touches the ground but doesn't bear full weight. Tighten the lug nuts firmly in a star pattern. Lower completely and remove the jack. Check tyre pressure as soon as possible—spare tyres often need inflation.</p>

        <h3>When to Call for Help</h3>
        <p>If you're on a busy highway, don't have a spare, or feel unsafe, call Drive Zimbabwe at 078 057 9261. We will change your tyre safely and quickly.</p>
      `
    },
    {
      id: 5,
      category: 'maintenance',
      title: 'Understanding Your Vehicle\'s Warning Lights',
      excerpt: 'Those dashboard lights aren\'t just for decoration. Learn what each warning light means and what action to take.',
      image: '/2.jpg',
      author: 'Technical Team',
      date: 'December 20, 2025',
      readTime: '6 min read',
      featured: false,
      content: `
        <h3>Check Engine Light</h3>
        <p>This amber light can indicate various issues from a loose gas cap to serious engine problems. If it's steady, you can drive to a mechanic soon. If it's flashing, pull over safely and call for assistance—driving could cause serious damage.</p>

        <h3>Oil Pressure Warning</h3>
        <p>This red light shaped like an oil can is critical. Stop immediately if this comes on while driving. Continuing could destroy your engine. Check oil level first—if it's fine, you may have a pump or sensor issue requiring towing.</p>

        <h3>Temperature Warning</h3>
        <p>A thermometer icon means your engine is overheating. Pull over immediately and turn off the engine. Wait for it to cool before checking coolant levels. Never open the radiator cap on a hot engine. Call for assistance if needed.</p>

        <h3>Battery/Charging Alert</h3>
        <p>This light indicates your battery isn't charging properly. You may have a failing alternator, loose belt, or battery issue. Drive directly to a garage or call for help—your car will eventually lose power.</p>

        <h3>Brake System Warning</h3>
        <p>If the handbrake is released but this light stays on, you may have low brake fluid or a brake system fault. This is a safety issue—have it checked immediately. If brakes feel spongy, don't drive; call for towing.</p>
      `
    },
    {
      id: 6,
      category: 'guides',
      title: 'What to Keep in Your Vehicle Emergency Kit',
      excerpt: 'Be prepared for any roadside situation with a well-stocked emergency kit. Here\'s what every driver should carry.',
      image: '/19.jpg',
      author: 'Safety Department',
      date: 'December 15, 2025',
      readTime: '5 min read',
      featured: false,
      content: `
        <h3>Safety Equipment</h3>
        <p>Warning triangles or flares, a reflective vest, and a flashlight with extra batteries are essential. These help keep you visible if you're stranded, especially at night.</p>

        <h3>Basic Tools</h3>
        <p>Carry a tyre jack, lug wrench, and properly inflated spare tyre. Add jumper cables, a multi-tool or basic toolkit, duct tape, and zip ties for quick fixes.</p>

        <h3>First Aid Kit</h3>
        <p>Include bandages, antiseptic wipes, pain relievers, scissors, and any personal medications you may need. Check and restock your kit every six months.</p>

        <h3>Comfort and Survival Items</h3>
        <p>Keep bottled water, non-perishable snacks, a blanket, and a phone charger or power bank. In hot weather, add sunscreen; in the rainy season, include a rain poncho.</p>

        <h3>Important Documents</h3>
        <p>Keep copies of your driver's license, vehicle registration, and insurance documents. Store Drive Zimbabwe's number (078 057 9261) on speed dial and written down in case your phone dies.</p>

        <h3>Regional Considerations</h3>
        <p>If you travel to remote areas, consider adding extra fuel in an approved container, a tow rope, and a tyre repair kit. Let someone know your travel plans and expected arrival time.</p>
      `
    },
    {
      id: 7,
      category: 'emergency',
      title: 'How Vehicle Recovery Works: Behind the Scenes',
      excerpt: 'Ever wondered what happens when you call for vehicle recovery? Here\'s an inside look at how we rescue stranded vehicles.',
      image: '/5.jpg',
      author: 'Operations Team',
      date: 'December 10, 2025',
      readTime: '6 min read',
      featured: false,
      content: `
        <h3>The Dispatch Process</h3>
        <p>When you call 078 057 9261, we collect key information: your location, vehicle type, and nature of the problem. We then estimate arrival time and head to your location.</p>

        <h3>Matching the Right Approach</h3>
        <p>Different situations require different solutions. A car stuck in mud needs winching. A sedan with engine trouble needs flatbed towing. We assess the situation and use the right approach for your needs.</p>

        <h3>On-Scene Assessment</h3>
        <p>We assess the situation upon arrival, check for hazards, plan the safest recovery approach, and communicate with you throughout. Safety is our top priority—both for your vehicle and for everyone involved.</p>

        <h3>Recovery Techniques</h3>
        <p>Depending on the situation, we may use winching, lifting, or towing. We are trained in various techniques and use specialised equipment to maximise pulling power while minimising vehicle damage.</p>

        <h3>Safe Transport</h3>
        <p>Once recovered, your vehicle is secured for transport. Flatbed towing is gentlest on your vehicle. We use wheel straps, chains, and soft ties to prevent any movement during transit to your chosen destination.</p>
      `
    },
    {
      id: 8,
      category: 'safety',
      title: 'Rainy Season Driving Tips for Zimbabwe Roads',
      excerpt: 'The rainy season brings unique challenges to Zimbabwe\'s roads. Here\'s how to stay safe during the wet months.',
      image: '/26.jpg',
      author: 'Safety Department',
      date: 'December 5, 2025',
      readTime: '5 min read',
      featured: false,
      content: `
        <h3>Prepare Your Vehicle</h3>
        <p>Before the rains, check your wipers—they should clear the windscreen in one sweep without streaking. Ensure all lights work, as visibility drops significantly during storms. Check tyre tread depth and condition.</p>

        <h3>Slow Down</h3>
        <p>Wet roads reduce tyre grip significantly. Reduce your speed by at least 10-20 km/h from normal. It takes much longer to stop on wet surfaces, so increase your following distance to at least 4 seconds behind the vehicle ahead.</p>

        <h3>Avoid Flooded Areas</h3>
        <p>Never drive through standing water if you can't see the road surface. Water as shallow as 30cm can float a car. If you must cross, go slowly, stay in low gear, and keep the engine revving to prevent water entering the exhaust.</p>

        <h3>Handle Aquaplaning</h3>
        <p>If you feel the steering go light, you're aquaplaning—your tyres have lost contact with the road. Don't brake or steer sharply. Ease off the accelerator and keep the wheel straight until you feel grip return.</p>

        <h3>Plan Your Journey</h3>
        <p>Check weather forecasts before traveling. Avoid traveling during severe storms if possible. If caught in a heavy downpour with zero visibility, pull over safely with hazards on until it passes.</p>
      `
    },
  ];

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  const featuredArticle = articles.find(a => a.featured);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/d18.jpeg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-red-900/50" />

        <div className="absolute inset-0 overflow-hidden opacity-20 hidden md:block">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-96 h-96 border-4 border-white/20 rounded-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8"
            >
              <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
              <span className="text-white font-semibold text-sm md:text-base">Knowledge Hub</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Drive Zimbabwe
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
              Expert advice on road safety, vehicle maintenance, and what to do in emergencies
            </p>
          </motion.div>
        </div>
      </section>

                          {/* Floating Action Elements */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
              <button
                className="group bg-gradient-to-r from-green-400 via-green-600 to-primary-dark hover:bg-green-300 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                onClick={() => handleAction("whatsapp")}
              >
                <IoLogoWhatsapp className="w-6 h-6 group-hover:rotate-12 transition-transform text-white" />
              </button>
            </div>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-10 md:py-16 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-8"
            >
              <span className="text-red-500 font-semibold text-sm md:text-base">FEATURED ARTICLE</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-0 md:gap-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden"
            >
              <div
                className="h-48 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredArticle.image})` }}
              />
              <div className="p-5 md:p-8 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">{featuredArticle.title}</h2>
                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">{featuredArticle.excerpt}</p>
                <motion.button
                  onClick={() => setExpandedArticle(featuredArticle.id)}
                  whileHover={{ scale: 1.02 }}
                  className="self-start bg-red-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-semibold flex items-center gap-2 text-sm md:text-base"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-4 md:py-8 px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all text-xs md:text-base ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-10 md:py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
            >
              {filteredArticles.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all"
                >
                  <div
                    className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{article.date}</span>
                      <motion.button
                        onClick={() => setExpandedArticle(article.id)}
                        whileHover={{ x: 5 }}
                        className="text-red-400 font-semibold flex items-center gap-1 text-sm"
                      >
                        Read More
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {expandedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto"
            onClick={() => setExpandedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
            >
              {(() => {
                const article = articles.find(a => a.id === expandedArticle);
                if (!article) return null;
                return (
                  <>
                    <div
                      className="h-64 md:h-80 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${article.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                      <button
                        onClick={() => setExpandedArticle(null)}
                        className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="p-8 -mt-16 relative">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h2>
                      <div className="flex items-center gap-2 text-gray-400 mb-8 pb-8 border-b border-white/10">
                        <User className="w-4 h-4" />
                        <span>By {article.author}</span>
                      </div>
                      <div
                        className="article-content max-w-none"
                        style={{
                          color: '#e5e7eb',
                          lineHeight: '1.8',
                        }}
                      >
                        <style>{`
                          .article-content h3 {
                            color: #ffffff;
                            font-weight: 700;
                            font-size: 1.25rem;
                            margin-top: 2rem;
                            margin-bottom: 1rem;
                            padding-bottom: 0.5rem;
                            border-bottom: 2px solid rgba(239, 68, 68, 0.3);
                          }
                          .article-content p {
                            color: #d1d5db;
                            margin-bottom: 1.25rem;
                            font-size: 1rem;
                            line-height: 1.8;
                          }
                          .article-content strong {
                            color: #ffffff;
                            font-weight: 600;
                          }
                          @media (min-width: 768px) {
                            .article-content h3 {
                              font-size: 1.5rem;
                            }
                            .article-content p {
                              font-size: 1.125rem;
                            }
                          }
                        `}</style>
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                      </div>
                      <div className="mt-12 pt-8 border-t border-white/10">
                        <div className="bg-red-600/10 border border-red-600/30 rounded-2xl p-6 text-center">
                          <h4 className="text-xl font-bold text-white mb-2">Need Roadside Assistance?</h4>
                          <p className="text-gray-300 mb-4">We're available 24/7 to help you on Zimbabwe's roads.</p>
                          <a
                            href="tel:0780579261"
                            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold"
                          >
                            <Phone className="w-5 h-5" />
                            Call 078 057 9261
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter CTA */}
      <section className="py-12 md:py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/37.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-red-900/50 to-black/60" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-12"
          >
            <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-red-400 mx-auto mb-4 md:mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Stay Informed
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
              Get the latest road safety tips and maintenance advice delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white/10 border border-white/20 rounded-xl px-4 py-3 md:px-6 md:py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

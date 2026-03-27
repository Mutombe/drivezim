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
      id: 22,
      category: 'safety',
      title: 'The Word "Accident" Minimises What Really Happens on Our Roads',
      excerpt: 'The word "accident" suggests something random and unavoidable. But most serious incidents on our roads are collision-avoidable events caused by human decisions.',
      image: '/blog/new.jpeg',
      author: 'Drive Zimbabwe Team',
      date: 'March 27, 2026',
      readTime: '8 min read',
      featured: true,
      content: `
        <h3>Why the Word "Accident" Is a Problem</h3>
        <p>One word I feel very strongly about in road safety discussions is "accident." It's used constantly. But here's the problem: it suggests something random, something unavoidable, something no one could have prevented.</p>
        <p>The truth? Most serious incidents on our roads are not accidents. They are collision-avoidable events caused by human decisions: speed, distraction, impatience, alcohol or drugs, fatigue, and poor judgment.</p>

        <h3>Every Road User Shares the Risk</h3>
        <p>Whether you're a pedestrian, cyclist, motorcyclist, Gonyeti driver, Bus driver, or someone moving animals on the road, the outcome is almost always the result of a chain of choices and circumstances. Driving isn't just a practical skill; it's physics in motion.</p>
        <p>A vehicle weighing over a tonne is governed by forces like momentum, grip, and stopping distance. Tyres, brakes, steering, road conditions, and visibility all place limits on what that vehicle can safely do. Understanding these limitations is far more important than knowing how fast your vehicle can go.</p>

        <h3>The Person Behind the Wheel</h3>
        <p>Driving is also about the person behind the wheel: your mood, your concentration, your health, your fatigue, and any substances or medications in your system. All these influence how safely you control your vehicle. Driving isn't just sitting behind a wheel and knowing where the pedals are. Driving is a responsibility.</p>

        <h3>We Take This Responsibility Seriously</h3>
        <p>At DRIVE ZIMBABWE ROADSIDE ASSISTANCE, we take this responsibility seriously. We are here to protect lives, save vehicles, and keep Zimbabwe's roads moving safely.</p>
        <p>Every time someone sees a broken-down car or faces a problem on the road, they should think of us first. We are not just a roadside assistance service; we are your safety net, your lifeline, your partner on the road. A car breakdown doesn't give notice. It doesn't care if it's late at night. It doesn't care if you're with your children. It doesn't care if you're rushing to work.</p>
        <p>It just happens. And in that moment, the most important question becomes: <strong>Who do I call?</strong></p>

        <h3>We Have Been There</h3>
        <p>At Drive Zimbabwe Roadside Assistance, we have stood in the rain with stranded motorists. We have responded to midnight calls. We have supported families, taxi drivers, kombi operators, business owners, and individuals who simply needed someone dependable to show up.</p>

        <h3>Membership Is Peace of Mind</h3>
        <p>That's why our membership is not a luxury. It's peace of mind. It's protection. It's security for you and your loved ones. For a small annual fee, you avoid roadside panic. You avoid inflated towing charges. You avoid feeling helpless.</p>
        <p>You make one call, and we come. Whether you drive a private vehicle, mushikashika, taxi, kombi, or manage a fleet, this membership is for you.</p>
        <p>Don't wait until you are already stranded. Join while everything is still working. You can now join easily online. Secure your peace of mind today.</p>

        <h3>Drive Safely Today</h3>
        <p>Drive Zimbabwe Roadside Assistance — Reliable. Professional. Always There. Drive safely today. And if you ever need us, know we are just a call away.</p>
        <p>Share your thoughts and let's make Zimbabwe's roads safer together.</p>
      `
    },
    {
      id: 1,
      category: 'emergency',
      title: 'What to Do When You\'re in a Car Accident: A Complete Guide',
      excerpt: 'Being in a car accident is stressful. Here\'s a step-by-step guide on what to do immediately after an accident to ensure your safety and protect your interests.',
      image: '/5.jpg',
      author: 'Drive Zimbabwe Team',
      date: 'January 15, 2026',
      readTime: '8 min read',
      featured: false,
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
    // NEW ARTICLES FROM DRIVE ZIMBABWE CONTENT
    {
      id: 9,
      category: 'safety',
      title: 'The Hidden Danger: Why Feet on the Dashboard Can Be Fatal',
      excerpt: 'It looks relaxed and feels comfortable, but putting your feet on the dashboard is one of the most dangerous positions in a moving vehicle. Here\'s why.',
      image: '/blog/d1.jpeg',
      author: 'Drive Zimbabwe Team',
      date: 'January 20, 2026',
      readTime: '4 min read',
      featured: false,
      content: `
        <h3>The Illusion of Comfort</h3>
        <p>On long journeys, it's common to see front-seat passengers resting their feet on the dashboard. It looks relaxed and feels comfortable. But it is one of the most dangerous positions anyone can sit in inside a moving vehicle.</p>

        <h3>How Airbags Become Weapons</h3>
        <p>In a collision, airbags deploy from the dashboard at extremely high speed—up to 320 km/h. That force is designed to protect a properly seated passenger. But with feet on the dashboard, even a minor crash can turn tragic.</p>

        <h3>The Devastating Injuries</h3>
        <p>When the airbag deploys with feet on the dashboard, the legs are thrown violently back toward the face, chest, and spine. Common injuries include severe foot and ankle fractures, shattered knees and leg bones, facial fractures, traumatic brain injuries, and permanent spinal and pelvic damage.</p>

        <h3>Life-Altering Consequences</h3>
        <p>These injuries are not just painful—they are often life-altering for the victim and their family. A moment of comfort is not worth a lifetime of damage.</p>

        <h3>Simple Safety Rules</h3>
        <p>Keep your feet down. Wear your seatbelt correctly. Protect the people you love. On Zimbabwe's unpredictable roads, safety doesn't end at good driving—it includes how you sit in the vehicle.</p>
      `
    },
    {
      id: 10,
      category: 'safety',
      title: 'Active Vision: Why Looking Isn\'t the Same as Seeing',
      excerpt: 'Many accidents don\'t happen because drivers are reckless—they happen because drivers stay still and trust mirrors to show everything. Learn how to truly see the road.',
      image: '/blog/d2.jpeg',
      author: 'Safety Department',
      date: 'January 18, 2026',
      readTime: '5 min read',
      featured: false,
      content: `
        <h3>Vision Changes With Movement</h3>
        <p>Vision is not fixed—it changes every time you move your head. Many incidents on our roads don't happen because drivers are reckless. They happen because drivers stay still and trust mirrors to show everything. They never will.</p>

        <h3>Understanding Blind Spots</h3>
        <p>Blind spots are created by structure, not carelessness. Windscreen pillars, door frames, headrests, mirrors—even passengers—all block parts of your view. No mirror setup can eliminate that. But the solution is simple: move.</p>

        <h3>The Power of Small Movements</h3>
        <p>At junctions across Zimbabwe—from busy city intersections to quiet rural turn-offs—a pillar can hide an entire car, cyclist, or pedestrian. A small lean forward, back, or side-to-side can reveal what was hidden. On bends, a subtle shift lets you read further ahead, spotting oncoming vehicles, animals, debris, or narrowing roads in time.</p>

        <h3>Mirrors Confirm, Eyes Detect</h3>
        <p>Mirrors are important, but mirrors confirm—your eyes detect. Good drivers scan actively. They don't freeze and hope the mirror has the answer. This matters because many breakdowns, collisions, and roadside emergencies happen at low speed—pulling out, turning, or navigating tight spaces.</p>

        <h3>Active Driving Saves Lives</h3>
        <p>Good driving is active. Your eyes move. Your head moves. Your body adjusts. Vision creates time. Time creates options. Options save lives and journeys.</p>
      `
    },
    {
      id: 11,
      category: 'safety',
      title: 'Just a Second: The True Cost of Distracted Driving',
      excerpt: 'A thumb on glass instead of brake. Thirty km an hour feels forgiving—until it isn\'t. Understanding why that quick glance at your phone can change everything.',
      image: '/blog/d3.jpeg',
      author: 'Drive Zimbabwe Team',
      date: 'January 16, 2026',
      readTime: '5 min read',
      featured: false,
      content: `
        <h3>The Deceptive Second</h3>
        <p>Just a second. Just a glance. A thumb on glass instead of brake. Thirty km an hour feels forgiving—until it isn't. Until metal remembers speed and lives remember pain.</p>

        <h3>The Green Light Trap</h3>
        <p>The light turns green. Your car doesn't move. The world waits while you scroll. A horn reminds you you're alive. A heartbeat later, you might not be. Just a second steals momentum. Just a second steals control. Just a second steals attention from a job that demands your whole soul.</p>

        <h3>No One Plans an Accident</h3>
        <p>No one wakes up planning an accident. No one means to change a family forever. No one chooses sirens, broken glass, or the long silence after a phone call. It always starts the same way: "Let me just reply."</p>

        <h3>The Road's Simple Demand</h3>
        <p>The road doesn't negotiate. It doesn't forgive distractions. It doesn't care how urgent the message felt. It only asks one thing of drivers: Look up. Stay present. Keep control.</p>

        <h3>Drive Like Lives Depend On It</h3>
        <p>To every motorist, every car owner, every mechanic, every company with vehicles on the road: Drive like lives depend on it—because they do. And when the road reminds you who's in charge, make sure help is already on your side.</p>
      `
    },
    {
      id: 12,
      category: 'safety',
      title: 'We Share the Same Road: A Zimbabwean Perspective on Road Responsibility',
      excerpt: 'From combis to haulage trucks, bicycles to pedestrians—every road user shares the same stretch of tarmac and the same responsibility.',
      image: '/blog/d4.jpeg',
      author: 'Drive Zimbabwe Team',
      date: 'January 14, 2026',
      readTime: '6 min read',
      featured: false,
      content: `
        <h3>One Road, Many Journeys</h3>
        <p>From the early morning rush on Samora Machel to the long night drives along the Beitbridge Road, we all meet on the same stretch of tarmac. Different wheels, different speeds—combis, haulage trucks, buses, bicycles, scotch carts, and feet. Different journeys, the same borrowed time.</p>

        <h3>Understanding Each Road User</h3>
        <p>A cyclist rides the edge of the lane, dodging potholes and wind, balancing skill with constant risk. Often unmarked, often unseen, passed too close. A motorcyclist reads the road carefully because two wheels leave no room for error. A haulage truck pushes forward—forty-four tonnes can't stop suddenly. Physics, not pride, decides what happens next.</p>

        <h3>The Pedestrian's Faith</h3>
        <p>A pedestrian steps off the curb in Mbare, Gweru, Mutare, or Bulawayo. No metal shell. No safety net. Just faith—faith that the driver will slow down, faith that someone will see them.</p>

        <h3>This Is Not a Race</h3>
        <p>The truth is this: No one on this road is trying to win. This is not a race. Courtesy costs only seconds. Impatience costs lives. So slow the breath. Ease the grip on the steering wheel. Lift your eyes beyond the bonnet.</p>

        <h3>Respect Is Wisdom</h3>
        <p>Respect is not weakness. On our roads, it is wisdom. It is how families reunite at night. It is how businesses open again tomorrow. It is how everyone gets home.</p>
      `
    },
    {
      id: 13,
      category: 'safety',
      title: 'The Cultural Shift on Our Roads: Food for Thought',
      excerpt: 'There was a time when being on the road meant responsibility and courtesy. Today, something has changed—and it\'s time to address it.',
      image: '/blog/d5.jpeg',
      author: 'Drive Zimbabwe Team',
      date: 'January 12, 2026',
      readTime: '6 min read',
      featured: false,
      content: `
        <h3>A Time of Responsibility</h3>
        <p>There was a time when being on the road meant more than simply getting from point A to point B. It meant responsibility. Courtesy. An unspoken agreement that every life on the road mattered. Today, something has changed—not just the condition of our roads, but the culture on them.</p>

        <h3>The Erosion of Road Discipline</h3>
        <p>We are witnessing a steady erosion of road discipline and mutual respect. Tailgating has become normal. Speeding is brushed off as confidence. Phones are used behind the wheel as if consequences no longer exist. Indicators feel optional. Amber lights are treated as green. And the hooter—once a warning—has become an outlet for frustration.</p>

        <h3>The Deeper Issue</h3>
        <p>The deeper issue isn't poor driving skills—it's impatience. Impatience with learners. Impatience with cyclists. Impatience with anyone who chooses to drive within the law. As enforcement becomes less visible, accountability fades. But the truth is this: Every choice behind the wheel still matters.</p>

        <h3>Real Confidence Redefined</h3>
        <p>Real confidence on today's roads isn't about matching chaos with chaos. It's about staying grounded when others are not. It's about planning ahead, respecting space, and refusing to let anger take control of a moving vehicle.</p>

        <h3>Be the Change</h3>
        <p>Be the driver who slows down when others rush. Be the one who creates space instead of tension. Be calm when the road feels chaotic. Because one moment of patience can prevent a lifetime of regret.</p>
      `
    },
    {
      id: 14,
      category: 'safety',
      title: 'Your Safety Matters More Than You Think',
      excerpt: 'That quiet feeling when something doesn\'t feel right—that\'s not weakness, that\'s instinct. Here\'s why your safety deserves respect.',
      image: '/blog/d6.jpeg',
      author: 'Safety Department',
      date: 'January 10, 2026',
      readTime: '4 min read',
      featured: false,
      content: `
        <h3>Trust Your Instincts</h3>
        <p>That quiet feeling in your chest when something doesn't feel right… That moment when you wish the journey would just end safely… That's not weakness. That's instinct. And it deserves respect.</p>

        <h3>Breaking the Silence</h3>
        <p>Every day on Zimbabwe's roads, people stay quiet out of politeness. They endure discomfort out of fear of being "awkward." And sometimes, that silence costs too much.</p>

        <h3>No One Should Feel Trapped</h3>
        <p>Whether you're a driver carrying loved ones or a passenger trusting someone else with your life, you deserve peace of mind knowing that if something goes wrong, help will come. Breakdowns happen. Emergencies happen. Fear happens. But being prepared changes everything.</p>

        <h3>Asking for Help Is Wisdom</h3>
        <p>Leaving an unsafe situation is strength. Asking for help is wisdom. And your life matters. When the road feels unsafe, you're never alone.</p>

        <h3>Be Prepared</h3>
        <p>Join a roadside assistance membership before trouble finds you. Share this message—it could protect a friend, a sibling, a parent. Because preparation isn't optional on our roads—it's protection.</p>
      `
    },
    {
      id: 15,
      category: 'safety',
      title: 'That "Oops" Moment: Learning from Near Misses',
      excerpt: 'Your foot slams the brake. Your breath catches. Then you whisper "That was close." What do these near-miss moments teach us?',
      image: '/blog/d7.jpeg',
      author: 'Drive Zimbabwe Team',
      date: 'January 8, 2026',
      readTime: '6 min read',
      featured: false,
      content: `
        <h3>The Moment We All Know</h3>
        <p>Every driver knows that moment. Your foot slams the brake. Your breath catches. Your heart races, and for a split second, the world goes quiet. Then you whisper, "That was close." These are moments when nothing happened, but everything could have.</p>

        <h3>The Statistics Behind the Silence</h3>
        <p>Africa has just 2% of the world's vehicles, yet carries nearly 20% of global road deaths. Behind those numbers are real people—parents, children, friends, journeys that never ended the way they were meant to.</p>

        <h3>Most Tragedies Start Small</h3>
        <p>Most tragedies don't begin with recklessness. They begin with a second of lost focus, a familiar road we stopped respecting, speed we thought we could handle, or weather we underestimated. The truth is painful but hopeful: many of these moments are preventable.</p>

        <h3>Reflect and Learn</h3>
        <p>We're not asking you to relive the fear while driving. We're asking you to pause after the journey. To reflect quietly and ask: Why did that nearly happen? What did I miss? What can I change starting tomorrow? That brief moment of honesty could be the reason you arrive home safely next time.</p>

        <h3>Four Life-Saving Habits</h3>
        <p>Think about risk every time you drive. Expect the unexpected, especially where you feel comfortable. Remove the word "suddenly" from your driving—nothing should happen suddenly if you've anticipated well. And learn from mistakes without blame.</p>
      `
    },
    {
      id: 16,
      category: 'emergency',
      title: 'Severe Weather Driving: A Motoring Advisory for Zimbabwe',
      excerpt: 'Heavy rainfall, lightning, and strong winds significantly increase risks for motorists. Here\'s how to stay safe when severe weather hits.',
      image: '/blog/d12.jpeg',
      author: 'Safety Department',
      date: 'January 6, 2026',
      readTime: '5 min read',
      featured: false,
      content: `
        <h3>Understanding the Risks</h3>
        <p>Heavy rainfall, lightning, and strong winds significantly increase the risk for motorists on Zimbabwe's roads. Flooded roads and hidden potholes can cause sudden loss of control. Rivers and low-lying bridges can rise without warning. Reduced visibility increases collision risk, especially at night.</p>

        <h3>Essential Safety Measures</h3>
        <p>Avoid crossing flooded roads or rivers—if you can't see the road, don't risk it. Reduce speed and increase following distance. Switch on headlights in heavy rain, even during the day. Avoid parking under trees, power lines, or unstable structures.</p>

        <h3>Vehicle Preparation</h3>
        <p>Check tyres, wipers, brakes, and battery before travelling. Ensure all lights are working properly. Delay non-essential trips during storms where possible.</p>

        <h3>The Importance of Membership</h3>
        <p>Most breakdowns happen in bad weather. And most accidents happen when drivers push their luck. If you must travel, make sure you are not alone on the road. Having roadside assistance membership ensures help is just a call away.</p>

        <h3>Stay Prepared</h3>
        <p>Don't let severe weather catch you unprepared. Save emergency numbers. Know your route alternatives. And remember: breakdowns don't wait for good weather.</p>
      `
    },
    {
      id: 17,
      category: 'guides',
      title: 'After an Accident in Zimbabwe: What the Law Requires',
      excerpt: 'In Zimbabwe, a road accident is not just a frightening moment—it\'s a legal responsibility. Here\'s what you need to know.',
      image: '/blog/d9.jpeg',
      author: 'Drive Zimbabwe Team',
      date: 'January 4, 2026',
      readTime: '7 min read',
      featured: false,
      content: `
        <h3>Your Legal Obligations</h3>
        <p>In Zimbabwe, a road accident is not just a frightening moment—it is a legal responsibility. Whether it happens on a busy Harare highway or a dust road in Mashonaland, the law is clear: You must stop. You must remain at the scene. You must take reasonable steps to ensure safety.</p>

        <h3>What Zimbabwean Law Requires</h3>
        <p>Stop immediately and remain at the scene. Assist injured persons and call for help. Switch on hazard lights and warn other road users. Report the accident to the Zimbabwe Republic Police (ZRP). Do not remove vehicles unless instructed or for safety reasons. Do not admit fault at the scene—investigations determine liability.</p>

        <h3>Consequences of Non-Compliance</h3>
        <p>Failing to comply can result in serious charges, including hit-and-run, fines, or imprisonment. This is not theory—it happens every day on our roads.</p>

        <h3>Zimbabwe's Road Realities</h3>
        <p>Our roads come with unique challenges: narrow highways with no shoulders, poor lighting at night, livestock crossing unexpectedly, long distances between towns, limited emergency services in rural areas. After an accident or breakdown, standing alone on such roads is not just stressful—it's dangerous.</p>

        <h3>When Police Arrive</h3>
        <p>ZRP officers will secure the scene, record statements, and issue accident reports. But police do not tow every vehicle. They do not transport families. That responsibility falls on qualified towing and recovery operators. This is why professional roadside assistance membership matters.</p>
      `
    },
    {
      id: 18,
      category: 'safety',
      title: 'Driving Is a Team Activity: Even When It Feels Individual',
      excerpt: 'Every steering input, every brake press reaches beyond your own vehicle. Understanding why driving is never truly solo.',
      image: '/blog/d10.jpeg',
      author: 'Safety Department',
      date: 'January 2, 2026',
      readTime: '4 min read',
      featured: false,
      content: `
        <h3>Beyond Your Vehicle</h3>
        <p>Every steering input. Every brake press. Every moment of hesitation or urgency. Each decision reaches beyond your own vehicle. Driving is not a solo performance. It only feels that way because you are seated alone.</p>

        <h3>How Your Choices Affect Others</h3>
        <p>Your lane choice affects the flow of traffic behind you. Your speed determines whether a pedestrian crosses safely. Your spacing decides if a cyclist feels protected or exposed. Your awareness allows emergency vehicles to pass—or forces them to stop.</p>

        <h3>No Move Exists in Isolation</h3>
        <p>No move exists in isolation. No decision ends with your own car. The safest motorists understand this. They read the road as a shared system, not a personal challenge.</p>

        <h3>Responsibility Beyond Good Habits</h3>
        <p>Responsible driving does not stop at good habits—it includes being prepared for when things go wrong. Breakdowns, punctures, and unexpected incidents affect everyone on the road. How quickly and professionally they are handled matters.</p>

        <h3>Fitting In Without Friction</h3>
        <p>Driving well is not about asserting yourself. It is about fitting in without friction and being backed when you need help. Whether you acknowledge it or not, you are always part of the team. Be responsible. Be prepared. Be covered.</p>
      `
    },
    {
      id: 19,
      category: 'safety',
      title: 'Eyes Open, Mind Elsewhere: Understanding Cognitive Distraction',
      excerpt: 'You can be looking directly at the road and still not truly see it. Here\'s how to combat the invisible danger of cognitive distraction.',
      image: '/blog/d11.jpeg',
      author: 'Safety Department',
      date: 'December 30, 2025',
      readTime: '5 min read',
      featured: false,
      content: `
        <h3>The Invisible Distraction</h3>
        <p>Distraction is not always visible. You can be looking directly at the road and still not truly see it. Cognitive distraction happens when the eyes are present, but the mind is elsewhere—thinking about work, replaying a conversation, planning the next stop, feeling stressed or rushed.</p>

        <h3>The Illusion of Attention</h3>
        <p>From the outside, everything looks fine. Hands on the wheel. Eyes facing forward. But the information isn't being processed. This is why drivers later say: "I never saw them." "I didn't realise how fast I was going." "It came out of nowhere." The danger was visible. The awareness was not.</p>

        <h3>Looking vs. Seeing vs. Understanding</h3>
        <p>Good road craft isn't just about where you look—it's about what your brain does with what you see. Reading the road, scanning early, noticing patterns, movement, and change. These skills fail the moment the mind drifts. Looking is not the same as seeing. Seeing is not the same as understanding.</p>

        <h3>Reducing Invisible Distraction</h3>
        <p>Actively scan mirrors and junctions instead of staring ahead. Quietly narrate hazards in your mind to stay mentally engaged. Increase following distance to give your brain time to process. Reduce in-car conversation when conditions become complex. If your mind feels busy, slow down slightly until full awareness returns.</p>

        <h3>Attention Is the Skill</h3>
        <p>Eyes open is not enough. Attention is the skill that keeps you alive. And because even the most attentive drivers can face the unexpected, having reliable backup matters. Drive prepared. Drive aware. Drive with confidence.</p>
      `
    },
    {
      id: 20,
      category: 'guides',
      title: 'A Note for New Drivers and Parents',
      excerpt: 'Passing your driving test is the beginning, not the finish line. Here\'s essential guidance for new drivers and the parents who support them.',
      image: '/6.jpg',
      author: 'Drive Zimbabwe Team',
      date: 'December 26, 2025',
      readTime: '5 min read',
      featured: false,
      content: `
        <h3>The Beginning of a Journey</h3>
        <p>Passing your driving test is a proud moment. It's an achievement worth celebrating. But it's not the finish line—it's the beginning of a new journey: learning how to drive independently, safely, and with confidence.</p>

        <h3>Where Real Habits Form</h3>
        <p>The months after passing are where real habits are formed. This is when patience matters most, when experience is built quietly—kilometer by kilometer, mistake by lesson.</p>

        <h3>For New Drivers</h3>
        <p>Fewer passengers can make a world of difference. Friends bring laughter, music, movement, and noise—all wonderful things, but powerful distractions when confidence is still growing. The road deserves your full attention. Take your time. Keep distractions low. Learn at your own pace.</p>

        <h3>For Parents</h3>
        <p>The first car matters more than many realise. A smaller, lower-powered vehicle gives room to learn without unnecessary pressure. It's not about limiting freedom—it's about giving your child the safest chance to grow into a capable, responsible driver. Stay involved. Set gentle boundaries. Support every early kilometer.</p>

        <h3>Building Experience Gradually</h3>
        <p>Confidence will come. Skill will follow. But they don't arrive at the same time. Night driving, highways, bad weather, and unfamiliar roads all take practice. There's no rush to master everything at once. The goal isn't just passing a test—it's coming home safely every single time.</p>
      `
    },
    {
      id: 21,
      category: 'safety',
      title: 'Drink Driving: The Rules Haven\'t Changed',
      excerpt: 'Whether you passed your test last week or twenty years ago, the rules of the road have not changed. Here\'s what every driver needs to remember about alcohol.',
      image: '/blog/d13.jpeg',
      author: 'Safety Department',
      date: 'December 24, 2025',
      readTime: '5 min read',
      featured: false,
      content: `
        <h3>Experience Doesn't Change Biology</h3>
        <p>Whether you passed your driving test last week or twenty years ago, the rules of the road have not changed. Experience does not make alcohol safer. Confidence does not help your body process it faster. And feeling "fine" does not mean you are fit or legal to drive.</p>

        <h3>How Alcohol Affects Driving</h3>
        <p>Alcohol affects judgement, reaction time, and decision-making long before you feel drunk. That is why so many people get caught out—not because they are reckless, but because they believe they are being sensible.</p>

        <h3>The Morning After Risk</h3>
        <p>Festive seasons and holidays add another layer of risk: late nights, fatigue, heavier traffic, and the dangerous assumption that the morning after is safe. Often, it is not. Alcohol can remain in your system for hours. You can wake up over the limit without realising it. You can feel clear-headed and still be unsafe to drive.</p>

        <h3>This Applies to Everyone</h3>
        <p>This applies to learners, new drivers, experienced motorists, and professional drivers alike. The safest decision is also the simplest one: If you are drinking, you are not driving.</p>

        <h3>Plan Your Journey Home</h3>
        <p>Plan your journey home before the first drink. A taxi. A lift. A spare bed. Public transport. Let the celebration end well. Let the next day begin safely. Arrive home alive. Arrive home supported.</p>
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
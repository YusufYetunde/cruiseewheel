import { fadeIn } from "./animation";

export const links = [
  {
    link: "/",
    text: "Home",
    exact: true,
  },
  {
    link: "/booking?index=1",
    text: "Transfers",
    exact: true,
  },
  {
    link: "/local",
    text: "Local Transfers",
    exact: true,
  },
  {
    link: "/services",
    text: "Services",
  },
  {
    link: "/fleet",
    text: "Our Fleet",
    keyword: true,
  },
  {
    link: "/about",
    text: "About",
  },
];

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: "/planet-01.jpg",
    title: "Secure, Reliable, and Luxurious",
    description:
      "At CruiseWheel, we understand your desires – a seasoned chauffeur behind the wheel, complemented by a flawlessly stylish ride.",
  },
  {
    id: "world-2",
    imgUrl: "/planet-02.jpg",
    title: "Vehicles For Any Occasion",
    description:
      "From Unmatched Luxury to Spacious Comfort: CruiseWheel Awaits Your Selection!",
  },
  {
    id: "world-3",
    imgUrl: "/planet-03.jpg",
    title: "Need Wedding Transportation?",
    description:
      "On your wedding day, CruiseWheel delivers the ultimate luxury ride for an unforgettable journey.",
  },
];

export const homeCards = [
  {
    img: "/home-car-1.jpg",
    title: "Our Vision",
    description:
      "Transforming transportation with real-time vehicle tracking for peak efficiency and minimal downtime.",
  },
  {
    img: "/car-6.jpg",
    title: "Our Mission",
    description:
      "Empowering progress through innovative solutions and cutting-edge technology, our mission is to drive efficiency, enhance experiences, and create lasting value for our stakeholders.",
  },
  {
    img: "/car-7.jpg",
    title: "Our Approach",
    description:
      "Crafting success through a strategic and adaptive approach, we navigate challenges with creativity, innovation, and a commitment to excellence.",
  },
];

export const serviceList = [
  {
    id: 1,
    text: "Experience top-level reliability and luxury with our Melbourne Airport transfers. Whether you're traveling solo or with family, we offer a warm meet-and-greet service, luggage assistance, and real-time traffic and flight tracking for timely arrivals. Sit back, relax, and arrive refreshed, day or night.",
    title: "Airport transfers",
    img: "/airport-transfer-update.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 2,
    text: "Elevate the memories of your upcoming special event with CruiseWheel. Whether it's a wedding, hen's party, or birthday celebration, add a touch of luxury with our immaculate vehicles. Need space for a large group? Arrive in ultimate style, day or night, with our 15-seater Mercedes Benz Sprinter at your service. It's not just transportation; it's an experience tailored to ensure you and your guests make a grand entrance.",
    title: "Weddings and parties",
    img: "/parties.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 3,
    text: "CruiseWheel excels in corporate, executive, and celebrity transportation, ensuring a serene and seamless journey on every ride. Whether you're meeting a valued client or attending a pivotal business appointment, our service ensures you arrive in a state of relaxation and rejuvenation, allowing you to concentrate on what truly matters. We take pride in delivering smooth, expert, and dependable experiences, without fail.",
    title: "Corporate transfers",
    img: "/blog-3.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 4,
    text: "From a quick parent-and-child getaway to a full-scale family adventure, let us simplify your family travel experience. Traveling with an infant? We'll handle the pre-installation of any required seats before we arrive. CruiseWheel offers a safe, reliable, and luxurious solution for all your family transportation needs. When planning your next family vacation, remember to book an airport transfer with CruiseWheel to ensure a stress-free and comfortable start to your journey.",
    title: "Family transfers",
    img: "/family-transfer.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 5,
    text: "Melbourne ranks among Australia's top tourist hotspots, and CruiseWheel offers you the ultimate freedom to discover the state's iconic attractions. Allow us to guide you along the picturesque Great Ocean Road in sheer luxury, enabling you to enjoy the sights and experiences at your own leisurely pace.",
    title: "Sightseeing",
    img: "/sightseeing.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
  {
    id: 6,
    text: "Explore Victoria's premier wineries and boutique breweries, spanning from the Mornington Peninsula to the Yarra Valley. Travel seamlessly and safely between these exceptional destinations in our luxurious chauffeur-driven vehicles. Whether it's a romantic occasion with a partner or a group adventure, elevate your experience with CruiseWheel, and do it with unmatched style.",
    title: "Wine tours",
    img: "/wine-tour.jpg",
    variant1: fadeIn("left", "tween", 0.2, 1),
    variant2: fadeIn("right", "tween", 0.2, 1),
  },
  {
    id: 7,
    text: "For those who demand nothing but the best, indulge yourself with our top-tier sedans, ensuring your arrival exudes luxury and sophistication. Our premium fleet proudly showcases esteemed models like the BMW 7 Series, Mercedes Benz S-Class, and Audi A8, among others, renowned for their unparalleled comfort and performance in today's market. Paired with our expert drivers, you're in for a luxurious and elevated experience.",
    title: "Limo service",
    img: "/limo-service.jpg",
    variant1: fadeIn("right", "tween", 0.2, 1),
    variant2: fadeIn("left", "tween", 0.2, 1),
  },
];

export const insights = [
  {
    imgUrl: "/car-1.jpg",
    title: "Luxury Sedan",
    subtitle:
      "Experience the epitome of luxury with CruiseWheel's outstanding selection of premium vehicles. Whether you choose a Mercedes-Benz E-Class, BMW 5 Series, Lexus ES300, or a similar upscale model, our range of luxury vehicles is designed to elevate every occasion. Immerse yourself in the seamless blend of advanced technology, unmatched comfort, and unparalleled elegance all at an affordable price. Discover the allure of sophistication as you embark on your journey in style with CruiseWheel.",
      price:50,
  },
  {
    imgUrl: "/premium-sedan.jpg",
    title: "Premium Sedan",
    subtitle:
      "CruiseWheel presents a handpicked selection of the finest luxury vehicles for those who demand only the best. Choose from the prestigious BMW 7 Series, the iconic Mercedes-Benz S-Class, the sophisticated Audi A8, or similar elite models. Our cars are not just feature-packed; they represent the pinnacle of modern luxury automobiles. With CruiseWheel, you'll make a grand entrance, turning heads and reveling in absolute style and comfort. Elevate your arrival and make a lasting impression with our impeccable fleet of luxury automobiles.",
      price:100,
  },
  {
    imgUrl: "/car-3.jpg",
    title: "Luxury SUV",
    subtitle:
      "CruiseWheel offers a solution for those seeking both ample luggage capacity and desirable luxury. Explore our selection of premium SUVs, including the Mercedes-Benz GLE, BMW X5, and similar upscale models. These luxury SUVs provide the same exceptional features found in our luxury sedans while offering extra space for your belongings. Say goodbye to compromises and elevate your travel experience with CruiseWheel's luxurious SUVs, where style and functionality seamlessly coexist.",
      price:150,
  },

  {
    imgUrl: "/car-4.jpg",
    title: "Van",
    subtitle:
      "Discover the Mercedes-Benz V-Class, a top choice for accommodating 5-6 passengers with ample luggage space. This spacious luxury people mover boasts large rear seats and a generous boot, ensuring a smooth and spacious journey. Renowned worldwide for its versatility, the Mercedes V-Class sets the standard for transporting passengers in style and refinement. Elevate your group travel experience with this exceptional vehicle from CruiseWheel.",
      price:250,
  },
  {
    imgUrl: "/car-5.jpg",
    title: "Transporter",
    subtitle:
      "CruiseWheel proudly presents the Mercedes-Benz Sprinter and Renault Masterbus, ideal for accommodating larger groups of up to eleven people. These esteemed vehicles are the preferred choice for executives, as well as those seeking seamless transportation for airport transfers, weddings, and corporate events. Elevate your group travel experience with CruiseWheel, where luxury, comfort, and style converge. For inquiries, please reach out to us today. Your journey with us begins with a simple call.",
      price: 450,
  },
];

export const steps = [
  {
    name: "Enter Ride Details",
  },
  {
    name: "Choose a Vehicle",
  },
  {
    name: "Enter Contact Details",
  },
  {
    name: "Booking Summary",
  },
];

export const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const years = Array.from({ length: new Date().getFullYear() - 1800 + 1 }, (_, i) => new Date().getFullYear() - i);

export const pickupTime = [
  "12:00 am",
  "12:15 am",
  "12:30 am",
  "12:45 am",
  "1:00 am",
  "1:15 am",
  "1:30 am",
  "1:45 am",
  "2:00 am",
  "2:15 am",
  "2:30 am",
  "2:45 am",
  "3:00 am",
  "3:15 am",
  "3:30 am",
  "3:45 am",
  "4:00 am",
  "4:15 am",
  "4:30 am",
  "4:45 am",
  "5:00 am",
  "5:15 am",
  "5:30 am",
  "5:45 am",
  "6:00 am",
  "6:15 am",
  "6:30 am",
  "6:45 am",
  "7:00 am",
  "7:15 am",
  "7:30 am",
  "7:45 am",
  "8:00 am",
  "8:15 am",
  "8:30 am",
  "8:45 am",
  "9:00 am",
  "9:15 am",
  "9:30 am",
  "9:45 am",
  "10:00 am",
  "10:15 am",
  "10:30 am",
  "10:45 am",
  "11:00 am",
  "11:15 am",
  "11:30 am",
  "11:45 am",
  "12:00 pm",
  "12:15 pm",
  "12:30 pm",
  "12:45 pm",
  "1:00 pm",
  "1:15 pm",
  "1:30 pm",
  "1:45 pm",
  "2:00 pm",
  "2:15 pm",
  "2:30 pm",
  "2:45 pm",
  "3:00 pm",
  "3:15 pm",
  "3:30 pm",
  "3:45 pm",
  "4:00 pm",
  "4:15 pm",
  "4:30 pm",
  "4:45 pm",
  "5:00 pm",
  "5:15 pm",
  "5:30 pm",
  "5:45 pm",
  "6:00 pm",
  "6:15 pm",
  "6:30 pm",
  "6:45 pm",
  "7:00 pm",
  "7:15 pm",
  "7:30 pm",
  "7:45 pm",
  "8:00 pm",
  "8:15 pm",
  "8:30 pm",
  "8:45 pm",
  "9:00 pm",
  "9:15 pm",
  "9:30 pm",
  "9:45 pm",
  "10:00 pm",
  "10:15 pm",
  "10:30 pm",
  "10:45 pm",
  "11:00 pm",
  "11:15 pm",
  "11:30 pm",
  "11:45 pm",
];

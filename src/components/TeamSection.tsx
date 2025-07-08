// import { Linkedin, Twitter, Mail } from "lucide-react";

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       name: "John Mwangi",
//       position: "CEO & Founder",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300",
//       bio: "Visionary leader with 15+ years in technology innovation",
//       linkedin: "#",
//       twitter: "#",
//       email: "john@harleysystems.co.ke"
//     },
//     {
//       name: "Mary Wanjiku", 
//       position: "CTO",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612c8c2?auto=format&fit=crop&w=300&h=300",
//       bio: "Technical expert specializing in enterprise solutions",
//       linkedin: "#",
//       twitter: "#", 
//       email: "mary@harleysystems.co.ke"
//     },
//     {
//       name: "David Kiplagat",
//       position: "Head of Development",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
//       bio: "Full-stack developer with expertise in scalable systems",
//       linkedin: "#",
//       twitter: "#",
//       email: "david@harleysystems.co.ke"
//     },
//     {
//       name: "Grace Achieng",
//       position: "Product Manager",
//       image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&h=300",
//       bio: "Product strategist focused on user-centric solutions",
//       linkedin: "#",
//       twitter: "#",
//       email: "grace@harleysystems.co.ke"
//     },
//     {
//       name: "Samuel Mutua",
//       position: "Head of Sales",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300",
//       bio: "Business development expert with deep market knowledge",
//       linkedin: "#",
//       twitter: "#",
//       email: "samuel@harleysystems.co.ke"
//     },
//     {
//       name: "Esther Wanjiru",
//       position: "UI/UX Designer",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300",
//       bio: "Creative designer crafting intuitive user experiences",
//       linkedin: "#",
//       twitter: "#",
//       email: "esther@harleysystems.co.ke"
//     }
//   ];

//   return (
//     <section id="team" className="py-24 bg-gradient-to-b from-muted/20 to-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Meet Our Team
//           </h2>
//           <p className="text-xl text-white/80 max-w-3xl mx-auto">
//             Passionate professionals dedicated to driving your success
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <div 
//               key={index}
//               className="glass-card group hover:scale-105 transition-all duration-500 text-center"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="mb-6">
//                 <img 
//                   src={member.image} 
//                   alt={member.name}
//                   className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-secondary/30 group-hover:border-secondary transition-all duration-300"
//                 />
//                 <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
//                 <p className="text-secondary font-semibold mb-2">{member.position}</p>
//                 <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
//               </div>
              
//               <div className="flex justify-center space-x-4">
//                 <a 
//                   href={member.linkedin} 
//                   className="text-white/60 hover:text-secondary transition-colors duration-300"
//                   aria-label={`${member.name} LinkedIn`}
//                 >
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//                 <a 
//                   href={member.twitter}
//                   className="text-white/60 hover:text-secondary transition-colors duration-300"
//                   aria-label={`${member.name} Twitter`}
//                 >
//                   <Twitter className="h-5 w-5" />
//                 </a>
//                 <a 
//                   href={`mailto:${member.email}`}
//                   className="text-white/60 hover:text-secondary transition-colors duration-300"
//                   aria-label={`Email ${member.name}`}
//                 >
//                   <Mail className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;
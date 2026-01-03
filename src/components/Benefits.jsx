import { useState } from "react";

export default function BenefitsOfJoiningCourse() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const benefits = [
    {
      icon: "🎥",
      title: "Recorded Sessions",
      description:
        "Lifetime access to all course recordings for flexible learning",
      stats: "300+ Hours",
      color: "from-[#0B5AA2] to-blue-400",
    },
    {
      icon: "📄",
      title: "Resume Preparation",
      description:
        "Industry-standard resume templates & expert review sessions",
      stats: "100% Improved",
      color: "from-[#0B5AA2] to-cyan-400",
    },
    {
      icon: "💼",
      title: "Interview Guidance",
      description: "Azure-specific interview questions & expert strategies",
      stats: "500+ Questions",
      color: "from-[#F7941D] to-yellow-400",
    },
    {
      icon: "🎯",
      title: "Mock Interviews",
      description:
        "Practice with real-time feedback from Azure certified professionals",
      stats: "10+ Sessions",
      color: "from-[#F7941D] to-orange-300",
    },
    {
      icon: "🏆",
      title: "Placement Assistance",
      description: "Direct connections to 200+ hiring partners & job referrals",
      stats: "85% Placed",
      color: "from-[#0B5AA2] to-[#F7941D]",
    },
    {
      icon: "📊",
      title: "Success Rate",
      description:
        "Proven track record of students clearing AZ-104 certification",
      stats: "94% Success",
      color: "from-[#F7941D] to-[#0B5AA2]",
    },
  ];

  const successStats = [
    { label: "Certification Pass Rate", value: "94%", icon: "🎓" },
    { label: "Job Placement Rate", value: "85%", icon: "💼" },
    { label: "Salary Hike (Avg)", value: "65%", icon: "💰" },
    { label: "Student Satisfaction", value: "96%", icon: "⭐" },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0">
        {/* Animated gradient blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-[#0B5AA2]/20 to-[#F7941D]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-[#F7941D]/20 to-[#0B5AA2]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#0B5AA2]/10 via-transparent to-[#F7941D]/10 rounded-full blur-3xl animate-pulse delay-500" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-bounce ${
                i % 3 === 0 ? "bg-[#0B5AA2]/30" : "bg-[#F7941D]/30"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-14">
            <div className="inline-flex items-center px-7 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-sm font-bold tracking-widest uppercase">
                WHY CHOOSE OUR AZ-104 COURSE?
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Transform Your Career with <br />
            <span className="text-[#0B5AA2]">Comprehensive Support</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-700 leading-relaxed">
            At <strong>Neel Technologies</strong>, we don't just teach Azure —
            <strong>
              {" "}
              we ensure your success from learning to landing your dream job
            </strong>
            .
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {successStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500`}
              />

              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 h-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Stats badge */}
                <div
                  className={`absolute top-6 right-6 px-3 py-1 rounded-full bg-gradient-to-r ${benefit.color} text-white text-xs font-bold`}
                >
                  {benefit.stats}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>

                {/* Animated progress line */}
                <div className="relative h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${
                      benefit.color
                    } transition-all duration-1000 ease-out ${
                      hoveredIndex === index ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BEAUTIFUL PRICE CARD */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative group">
            {/* Animated background effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0B5AA2] via-[#F7941D] to-[#0B5AA2] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-gradient-shift" />
            
            {/* Price card container */}
            <div className="relative bg-gradient-to-br from-white via-slate-50 to-white rounded-2xl border-2 border-slate-100 shadow-[0_20px_60px_-15px_rgba(11,90,162,0.2)] overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_30px_80px_-20px_rgba(11,90,162,0.3)]">
              
              {/* Ribbon Banner */}
              <div className="absolute top-6 -right-10 z-20">
                <div className="bg-gradient-to-r from-[#F7941D] to-[#ff6b00] text-white text-sm font-bold px-10 py-2 transform rotate-45 shadow-lg animate-pulse">
                  🔥 LIMITED TIME OFFER
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />

              {/* Header with gradient */}
              <div className="relative bg-gradient-to-r from-[#0B5AA2] via-[#1c7fd1] to-[#0B5AA2] p-8 text-center overflow-hidden">
                {/* Floating particles in header */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-white/30 rounded-full animate-ping-slow" />
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-yellow-300/40 rounded-full animate-ping-slow delay-300" />
                
                <h3 className="text-3xl font-bold text-white mb-2 relative z-10">
                  🎯 Your Career Investment
                </h3>
                <p className="text-white/90 text-lg relative z-10">
                  Premium Azure Training at an Unbeatable Price
                </p>
                
                {/* Animated sparkle */}
                <div className="absolute top-1/2 right-8 w-8 h-8 bg-yellow-400/20 rounded-full animate-ping" />
              </div>

              {/* Price Comparison Section */}
              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  {/* Original Price Card */}
                  <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-6 transform transition-all duration-300 hover:scale-105">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
                      <span className="text-slate-600 text-xs">Old</span>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-500 text-sm font-medium mb-2">Original Price</p>
                      <div className="relative">
                        <span className="text-5xl font-bold text-slate-400 line-through">₹16,000</span>
                        <div className="absolute -top-1 -right-6">
                          <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm mt-2">Per course</p>
                    </div>
                  </div>

                  {/* Discounted Price Card */}
                  <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 p-6 transform transition-all duration-300 hover:scale-105 shadow-lg">
                    {/* Animated glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-xl blur opacity-50 animate-pulse" />
                    
                    <div className="relative">
                      <div className="absolute -top-4 -right-4">
                        <div className="bg-gradient-to-r from-[#F7941D] to-[#ff6b00] text-white text-sm font-bold px-4 py-1 rounded-full animate-bounce-slow">
                          30% OFF
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-blue-600 text-sm font-medium mb-2">Today's Special Price</p>
                        <div className="flex items-baseline justify-center">
                          <span className="text-6xl font-bold bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] bg-clip-text text-transparent">
                            ₹11,200
                          </span>
                          <span className="text-blue-400 ml-2 text-lg">/course</span>
                        </div>
                        <p className="text-blue-500 text-sm mt-2 font-semibold">Limited Period Offer</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Savings Highlight - Enhanced */}
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 rounded-2xl border-2 border-emerald-200/50 p-6 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 flex items-center justify-center mr-4 animate-pulse-gentle">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                            <span className="text-xs font-bold">💸</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-emerald-800">
                            You Save <span className="text-3xl">₹4,800</span>
                          </p>
                          <p className="text-emerald-600 mt-1">
                            That's like getting 1 month free! 🎉
                          </p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg transform hover:scale-105 transition-transform duration-300">
                        ₹4,800 SAVINGS
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Grid - Enhanced */}
                <div className="mb-10">
                  <h4 className="text-xl font-bold text-slate-800 text-center mb-6">
                    🏆 Everything Included in Your Course
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: "📚", feature: "300+ Hours Video Content", color: "from-blue-400 to-cyan-400" },
                      { icon: "🎯", feature: "AZ-104 Certification Support", color: "from-purple-400 to-pink-400" },
                      { icon: "👨‍🏫", feature: "1-on-1 Mentorship Sessions", color: "from-green-400 to-emerald-400" },
                      { icon: "💼", feature: "Placement Guarantee", color: "from-orange-400 to-red-400" },
                      { icon: "📝", feature: "Resume & Interview Prep", color: "from-indigo-400 to-blue-400" },
                      { icon: "🔄", feature: "Lifetime Access & Updates", color: "from-amber-400 to-yellow-400" },
                      { icon: "👥", feature: "Community Access", color: "from-cyan-400 to-blue-400" },
                      { icon: "🏆", feature: "Completion Certificate", color: "from-rose-400 to-pink-400" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mr-4`}>
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <span className="text-slate-700 font-medium">{item.feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Countdown Timer - Enhanced */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-400 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      ⚡ Offer Ends In:
                    </h4>
                  </div>
                  <div className="flex justify-center gap-4">
                    {[
                      { value: "03", label: "Days", color: "from-red-500 to-pink-500" },
                      { value: "14", label: "Hours", color: "from-orange-500 to-red-500" },
                      { value: "22", label: "Minutes", color: "from-yellow-500 to-orange-500" },
                      { value: "45", label: "Seconds", color: "from-green-500 to-emerald-500" },
                    ].map((item, index) => (
                      <div key={index} className="flex-1 max-w-24">
                        <div className={`bg-gradient-to-b ${item.color} rounded-xl p-4 shadow-lg animate-pulse-slow`}>
                          <div className="text-3xl font-bold text-white">{item.value}</div>
                          <div className="text-sm text-white/90 mt-1">{item.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm mt-4">
                    Only 12 seats left at this special price!
                  </p>
                </div>

                {/* Investment ROI Section */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 p-6 mb-8">
                  <h4 className="text-xl font-bold text-slate-800 text-center mb-4">
                    💰 Your Investment Returns
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                      <div className="text-3xl font-bold text-emerald-600">₹11,200</div>
                      <div className="text-slate-600 text-sm mt-1">Course Investment</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                      <div className="text-3xl font-bold text-blue-600">₹8-15 LPA</div>
                      <div className="text-slate-600 text-sm mt-1">Expected Salary</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                      <div className="text-3xl font-bold text-purple-600">50x</div>
                      <div className="text-slate-600 text-sm mt-1">ROI Potential</div>
                    </div>
                  </div>
                  <p className="text-center text-slate-600 mt-4 text-sm">
                    Small investment today for massive career growth tomorrow
                  </p>
                </div>

                {/* Payment Options */}
                <div className="text-center p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200">
                  <h4 className="text-lg font-bold text-slate-800 mb-4">
                    💳 Flexible Payment Options
                  </h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    <div className="px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm">
                      One-Time Payment
                    </div>
                    <div className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm">
                      EMI Available
                    </div>
                    <div className="px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm">
                      Credit/Debit Cards
                    </div>
                    <div className="px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm">
                      UPI/Net Banking
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-r from-[#0B5AA2]/5 via-white to-[#F7941D]/5 rounded-3xl p-8 md:p-12 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Your Complete{" "}
                <span className="text-[#0B5AA2]">Career Transformation</span>{" "}
                Package
              </h3>

              <ul className="space-y-4">
                {[
                  "🎯 One-on-One Mentorship Sessions",
                  "📚 Exclusive Study Materials & Practice Tests",
                  "👥 Access to Azure Professionals Community",
                  "📈 Real-time Project Experience",
                  "🔄 Continuous Learning & Updates",
                  "🎖️ Certification Exam Fee Support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              {/* Success infographic */}
              <div className="relative bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] mb-4 mx-auto">
                    <span className="text-2xl text-white">📈</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Career Growth Timeline
                  </h4>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      month: "Month 1-2",
                      milestone: "Master Azure Fundamentals",
                      progress: 100,
                    },
                    {
                      month: "Month 3",
                      milestone: "Clear AZ-104 Certification",
                      progress: 94,
                    },
                    {
                      month: "Month 4",
                      milestone: "Job Interviews & Offers",
                      progress: 85,
                    },
                    {
                      month: "Month 5-6",
                      milestone: "Career Growth & Promotions",
                      progress: 65,
                    },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900">
                          {item.month}
                        </span>
                        <span className="text-[#0B5AA2] font-bold">
                          {item.progress}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] transition-all duration-1000 delay-${
                            index * 200
                          }`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-600">{item.milestone}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4">
                <div className="bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  Guaranteed Results
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0B5AA2] via-[#F7941D] to-[#0B5AA2] rounded-2xl blur opacity-30 animate-pulse" />
            <button
              onClick={() => {
                const whatsApp = document.getElementById("whatsapp");
                if (whatsApp) {
                  whatsApp.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="group relative px-8 py-3 bg-gradient-to-r from-[#0B5AA2] to-[#F7941D] hover:from-[#0D6BC2] hover:to-[#FFA942] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span> Start Your Azure Journey Today</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D] to-[#0B5AA2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
          <p className="text-gray-600 mt-6">
            Join 250+ successful students who transformed their careers with our
            AZ-104 course
          </p>
        </div>

        <div className="mt-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Get a Glimpse of Our Azure Training
            </h3>
            <p className="mt-3 text-slate-600 text-base">
              Watch how our training approach helps learners build real-world
              Azure expertise.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-black">
            {/* Responsive 16:9 Wrapper */}
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/SiK6n-_W6-g"
                title="Neel Technologies Azure Training"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.9;
          }
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
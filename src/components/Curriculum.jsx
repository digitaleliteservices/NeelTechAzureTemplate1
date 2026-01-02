import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";

const modules = [
  {
    title: "Cloud & Azure Fundamentals",
    items: [
      "Cloud Computing Concepts: IaaS, PaaS, SaaS",
      "Overview of Microsoft Azure",
      "Azure Global Infrastructure: Regions & Availability Zones",
      "Creating a Free Azure Account",
      "Azure Portal, CLI, and PowerShell Basics",
      "Azure Pricing Calculator & Cost Management",
    ],
  },
  {
    title: "Identity & Access Management",
    items: [
      "Introduction to Azure Active Directory (Azure AD)",
      "Role-Based Access Control (RBAC)",
      "Users, Groups, and Roles",
      "Conditional Access & Multi-Factor Authentication (MFA)",
      "Azure Policy & Blueprints",
      "Subscription & Billing Management",
    ],
  },
  {
    title: "Azure Networking",
    items: [
      "Virtual Networks (VNets)",
      "IP Addressing, Subnets & NSGs",
      "Route Tables & DNS",
      "Azure VPN Gateway (Site-to-Site)",
      "Azure ExpressRoute (Intro)",
      "VNet Peering & Service Endpoints",
    ],
  },
  {
    title: "Compute Services",
    items: [
      "Azure Virtual Machines (VMs)",
      "VM Sizes, Series & Pricing Models",
      "Custom Images & Shared Image Gallery",
      "Availability Sets & Zones",
      "VM Scale Sets",
      "Azure Dedicated Hosts",
    ],
  },
  {
    title: "Azure Storage",
    items: [
      "Blob, File, Queue & Table Storage",
      "Storage Tiers & Redundancy",
      "Managed Disks & Snapshots",
      "Data Migration & Import/Export",
      "Storage Explorer & Lifecycle Management",
      "Disk Encryption & Access Control",
    ],
  },
  {
    title: "Load Balancing & Traffic Management",
    items: [
      "Azure Load Balancer (Basic & Standard)",
      "Application Gateway & WAF",
      "Azure Front Door",
      "Azure Traffic Manager",
      "Fault Tolerance & Redundancy Design",
    ],
  },
  {
    title: "Monitoring & Automation",
    items: [
      "Azure Monitor & Log Analytics",
      "Alerts & Metrics",
      "Azure Activity Logs",
      "Azure Automation & Runbooks",
      "Resource Health & Service Health",
    ],
  },
  {
    title: "Application & Container Services",
    items: [
      "Azure App Services & API Apps",
      "Deployment Slots & Scaling",
      "Azure Container Instances (ACI)",
      "Azure Kubernetes Service (AKS) Basics",
      "Azure Functions (Serverless)",
    ],
  },
  {
    title: "Azure Databases",
    items: [
      "Azure SQL Database & Managed Instances",
      "PostgreSQL & MySQL on Azure",
      "Cosmos DB (NoSQL)",
      "Backup, Restore & Geo-Replication",
      "Security & Performance Tuning",
    ],
  },
  {
    title: "Security & Compliance",
    items: [
      "Azure Security Center",
      "Azure Key Vault",
      "Azure Sentinel (SIEM)",
      "Data Protection & Encryption",
      "Compliance Tools & Certifications",
    ],
  },
  {
    title: "Business Continuity & Disaster Recovery",
    items: [
      "Backup & Azure Site Recovery (ASR)",
      "Geo-Redundancy & Replication",
      "Designing BCDR Strategies",
      "Blob & File Snapshot Management",
    ],
  },
  {
    title: "Infrastructure as Code (IaC)",
    items: [
      "ARM Templates",
      "Deploying Resources via Templates",
      "Azure Bicep",
      "Azure DevOps Pipelines for IaC",
      "Terraform on Azure (Optional – Advanced)",
    ],
  },
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="curriculum"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white scroll-mt-[120px]"
    >
      {/* ================= NEW BACKGROUND PATTERNS ================= */}

      {/* Radial gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(247, 148, 29, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(11, 90, 162, 0.08) 0%, transparent 50%)",
        }}
      />

      {/* Diagonal stripes pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #0B5AA2 0px, #0B5AA2 1px, transparent 1px, transparent 20px)",
        }}
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11, 90, 162, 0.5) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Grid overlay (kept from original) */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0B5AA2 1px, transparent 1px),
            linear-gradient(to bottom, #0B5AA2 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Soft blobs - updated positioning and colors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F7941D]/10 to-[#0B5AA2]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0B5AA2]/10 to-[#F7941D]/10 rounded-full blur-3xl" />

      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#F7941D]/5 to-[#0B5AA2]/5 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-[#0B5AA2]/5 to-[#F7941D]/5 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          {/* <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm mb-4">
            <BookOpen className="w-4 h-4 text-[#0B5AA2]" />
            <span className="text-xs font-semibold tracking-widest text-[#0B5AA2]">
              COURSE CURRICULUM
            </span>
          </div> */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5AA2] to-[#2E8BC0] text-sm font-bold tracking-widest uppercase">
              COURSE CURRICULUM
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Microsoft Azure Training
            <br />
            <span className="text-[#0B5AA2]">
              Structured, Hands-On & Job-Oriented
            </span>
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A carefully designed curriculum covering Azure fundamentals to
            advanced cloud architecture, aligned with real-world industry needs.
          </p>
        </div>

        {/* Modules */}
        <div className="space-y-4">
          {modules.map((module, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0B5AA2]/10 to-[#F7941D]/10 text-[#0B5AA2] font-bold">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {module.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-[#0B5AA2]" : ""
                    }`}
                  />
                </button>

                {/* Content */}
                <div
                  className={`px-6 transition-all duration-300 ${
                    isOpen
                      ? "max-h-[500px] pb-6 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {module.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-700 text-sm hover:text-[#0B5AA2] transition-colors duration-200"
                      >
                        <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#0B5AA2] to-[#F7941D]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";

export default function TechnologyTransfer() {
  const [newsStartIndex, setNewsStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const newsItems = [
    {
      id: 1,
      category: "Patent",
      title: "New Patent Successfully Filed",
      description: "RITE successfully filed a patent application for an innovative agricultural technology.",
      date: "February 18, 2026",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      category: "Partnership",
      title: "Industry Partnership Signed",
      description: "TTPU has signed a technology licensing agreement with a leading pharmaceutical company.",
      date: "February 15, 2026",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      category: "Event",
      title: "IP Awareness Workshop Held",
      description: "Over 100 researchers attended our comprehensive IP awareness seminar.",
      date: "February 10, 2026",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      category: "Technology",
      title: "Spinoff Company Formation",
      description: "New startup launched based on RITE's innovative technology.",
      date: "February 5, 2026",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      category: "Achievement",
      title: "Innovation Award Received",
      description: "RITE recognized for outstanding contributions to technology transfer.",
      date: "January 30, 2026",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    }
  ];

  const nextNews = () => {
    setNewsStartIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setNewsStartIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const visibleNews = [
    newsItems[newsStartIndex]
  ];

  const forms = [
    {
      name: "IP Application form",
      downloadUrl: "/forms/ip-application-form.pdf",
    },
    {
      name: "Invention / Creative Work Disclosure Form (IDF)",
      downloadUrl: "/forms/invention-disclosure-form.pdf",
    },
    {
      name: "Licensing Agreement Template",
      downloadUrl: "/forms/licensing-agreement-template.pdf",
    },
    {
      name: "Material Transfer Agreement (MTA) Template",
      downloadUrl: "/forms/mta-template.pdf",
    },
    {
      name: "Non-Disclosure Agreement (NDA) Template",
      downloadUrl: "/forms/nda-template.pdf",
    },
    {
      name: "Spin off Valuation Checklist",
      downloadUrl: "/forms/spinoff-valuation-checklist.pdf",
    },
    {
      name: "TRL-Based Valuation Table",
      downloadUrl: "/forms/trl-valuation-table.pdf",
    },
  ];

  return (
    <main className="page" style={{ padding: "clamp(1rem, 3vw, 2rem)", position: "relative", overflow: "hidden" }}>

      {/* Short Description */}
      <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1.5rem", color: "#333" }}>
        What is the Technology Transfer and Patent Unit (TTPU)?
      </h3>

      <div style={{ marginBottom: "0.5rem", padding: "1rem", backgroundColor: "#f9f9f9", borderLeft: "4px solid #2d8659", borderRadius: "4px" }}>
        <p style={{ margin: 0, color: "#555", lineHeight: "1.6", fontSize: "0.95rem" }}>
          The Technology Transfer and Patent Unit (TTPU) serves as the institutional bridge between research innovation and commercialization. Our office facilitates the transformation of research outputs into market-ready products and services, provides comprehensive intellectual property protection, and supports the creation of technology-based enterprises. We work collaboratively with researchers, industry partners, and entrepreneurs to unlock the full potential of RITE's innovations and contribute to socio-economic development.
        </p>
      </div>

      {/* Main Content Container - News + Downloadable Forms Side by Side */}
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem", flexDirection: isMobile ? "column" : "row", alignItems: "flex-start" }}>
        {/* Left Section - News Carousel */}
        <div style={{ flex: "1", minWidth: 0 }}>
          <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.3rem", color: "#333" }}>
            News
          </h4>
          
          {/* Carousel Container */}
          <div style={{ position: "relative", marginBottom: "2rem" }}>
            {/* News Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }}>
              {visibleNews.map((news, index) => (
                <div
                  key={news.id}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                  }}
                >
                  {/* News Image */}
                  <div style={{ position: "relative", height: "clamp(200px, 50vw, 450px)", overflow: "hidden" }}>
                    <img
                      src={news.image}
                      alt={news.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* Category Label */}
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        backgroundColor: "#2d8659",
                        color: "white",
                        padding: "0.4rem 0.8rem",
                        borderRadius: "4px",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                      }}
                    >
                      {news.category}
                    </div>
                  </div>

                  {/* News Content */}
                  <div style={{ padding: "0.8rem 1rem" }}>
                    <h5
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: "700",
                        marginBottom: "0.3rem",
                        color: "#333",
                        lineHeight: "1.4",
                      }}
                    >
                      {news.title}
                    </h5>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "#999",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {news.date}
                    </p>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#666",
                        margin: 0,
                        lineHeight: "1.5",
                      }}
                    >
                      {news.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevNews}
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "white",
                border: "2px solid #2d8659",
                color: "#2d8659",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2d8659";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#2d8659";
              }}
            >
              ‹
            </button>

            <button
              onClick={nextNews}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "white",
                border: "2px solid #2d8659",
                color: "#2d8659",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2d8659";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#2d8659";
              }}
            >
              ›
            </button>
          </div>
        </div>

        {/* Right Sidebar - Downloadable Forms */}
        <div style={{
          width: isMobile ? "100%" : "300px",
          flexShrink: 0,
          background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
          borderRadius: "16px",
          padding: isMobile ? "1rem" : "1.5rem",
          marginTop: isMobile ? "0" : "2.8rem",
          alignSelf: "flex-start",
          boxShadow: "0 4px 20px rgba(34,197,94,0.1)",
          border: "1px solid rgba(34,197,94,0.15)",
        }}>
          <h4 style={{
            fontSize: "1rem",
            fontWeight: "700",
            marginBottom: "1.2rem",
            color: "#166534",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}>
            <span style={{ fontSize: "1.2rem" }}>📋</span>
            Downloadable Forms
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {forms.map((form, index) => (
              <a
                key={index}
                href={form.downloadUrl}
                download
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  padding: isMobile ? "0.5rem 0.6rem" : "0.7rem 0.9rem",
                  backgroundColor: "rgba(255,255,255,0.8)",
                  borderRadius: "10px",
                  textDecoration: "none",
                  color: "#1f2937",
                  fontSize: isMobile ? "0.75rem" : "0.85rem",
                  fontWeight: "500",
                  lineHeight: "1.4",
                  transition: "all 0.2s ease",
                  border: "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.borderColor = "#22c55e";
                  e.currentTarget.style.transform = "translateX(4px)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(34,197,94,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.8)";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span style={{
                  fontSize: "1.1rem",
                  flexShrink: 0,
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#dcfce7",
                  borderRadius: "6px",
                }}>📄</span>
                <span>{form.name}</span>
                <span style={{
                  marginLeft: "auto",
                  fontSize: "0.9rem",
                  color: "#22c55e",
                  flexShrink: 0,
                  opacity: 0.7,
                }}>⬇</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Office Function and Services Section */}
      <section style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: "700", marginBottom: "clamp(1rem, 3vw, 2rem)", color: "#333" }}>
          Office Function and Services
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "clamp(1rem, 3vw, 2rem)" }}>
          {/* Card 1: Strengthen IP Creation - Dark Green */}
          <div style={{
            background: "linear-gradient(135deg, #094A25 0%, #062f1a 100%)",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            borderRadius: "24px",
            color: "white",
            boxShadow: "0 8px 24px rgba(9,74,37,0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(9,74,37,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(9,74,37,0.2)";
          }}>

            <h3 style={{ fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: "700", marginBottom: "1.2rem", color: "white" }}>
              Strengthen IP Creation
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.9rem", lineHeight: "1.7", color: "rgba(255,255,255,0.95)" }}>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Conducting IP awareness seminars and workshops.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Consulting on patents, copyrights, trademarks, and industrial designs.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Guiding preparation of invention disclosures and documentation.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Advising on research data management and prior art searches.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Identifying commercially viable ideas for IP protection.
              </li>
              <li>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Coordinating with R&D units to capture potential IP from ongoing projects.
              </li>
            </ul>
          </div>

          {/* Card 2: Facilitate IP Protection - Teal Green */}
          <div style={{
            background: "linear-gradient(135deg, #0C6B37 0%, #094a27 100%)",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            borderRadius: "24px",
            color: "white",
            boxShadow: "0 8px 24px rgba(12,107,55,0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(12,107,55,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(12,107,55,0.2)";
          }}>

            <h3 style={{ fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: "700", marginBottom: "1.2rem", color: "white" }}>
              Facilitate IP Protection
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.9rem", lineHeight: "1.7", color: "rgba(255,255,255,0.95)" }}>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Provide general IP guidance on patents, trademarks, copyrights, and utility models.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Conduct skills training in patent drafting and prosecution.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Render patent drafting and filing services.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Support patent prosecution and coordinate with the Intellectual Property Office.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Manage IP portfolios and advise on enforcement and infringement issues.
              </li>
              <li>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Assist in technology licensing, NDAs, and commercialization arrangements ongoing projects.
              </li>
            </ul>
          </div>

          {/* Card 3: Promote IP Utilization - Yellow */}
          <div style={{
            background: "linear-gradient(135deg, #FFC107 0%, #FFB300 100%)",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            borderRadius: "24px",
            color: "#333",
            boxShadow: "0 8px 24px rgba(255,193,7,0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(255,193,7,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,193,7,0.2)";
          }}>

            <h3 style={{ fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: "700", marginBottom: "1.2rem", color: "#333" }}>
              Promote IP Utilization
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.9rem", lineHeight: "1.7", color: "#333" }}>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Organize IP exhibitions, showcases, and fairs.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Develop digital catalogs and platforms for IP publicity.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Conduct media outreach to highlight innovation achievements.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Provide IP audit, evaluation, and valuation services.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Offer training on IP licensing for patents, copyrights, trademarks, and utility models.
              </li>
              <li>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Serve as a depository for patent-related documents, papers, and statistics.
              </li>
            </ul>
          </div>

          {/* Card 4: Support Technology Transfer and Spinoffs - Red */}
          <div style={{
            background: "linear-gradient(135deg, #EB442C 0%, #D93A1F 100%)",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            borderRadius: "24px",
            color: "white",
            boxShadow: "0 8px 24px rgba(235,68,44,0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(235,68,44,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(34,197,94,0.2)";
          }}>

            <h3 style={{ fontSize: "clamp(1.1rem, 3vw, 1.3rem)", fontWeight: "700", marginBottom: "1.2rem", color: "white" }}>
              Support Technology Transfer
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.9rem", lineHeight: "1.7", color: "rgba(255,255,255,0.95)" }}>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Identifying industry partners and commercialization opportunities.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Drafting and negotiating technology licensing agreements.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Supporting the creation of spin-off companies.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Providing incubation and mentoring for IP-based startups.
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Conducting market feasibility studies and business planning.
              </li>
              <li>
                <span style={{ marginRight: "0.8rem" }}>•</span>
                Monitoring post-transfer implementation and assessing impact.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}


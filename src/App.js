import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Avatar,
  Grid,
  Card,
  CardContent,
  Chip,
  Fab,
  Tooltip,
  useTheme,
  keyframes,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import {
  GitHub,
  LinkedIn,
  Email,
  KeyboardArrowDown,
  Launch,
  Code,
  EmojiEvents,
  Work,
  Person,
  Chat,
  School,
  Event,
  LocationOn,
  KeyboardArrowUp,
} from "@mui/icons-material";


// Custom styled components with animations
const StyledBox = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
  minHeight: "100vh",
  color: "#ffffff",
  position: "relative",
  overflow: "hidden",
}));

const FloatingNav = styled(AppBar)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.2)",
  backdropFilter: "blur(20px)",
  borderRadius: "50px",
  top: "24px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "auto",
  maxWidth: "90%",
  position: "fixed",
  boxShadow: "0 8px 32px rgba(0, 188, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
}));

const GlowingButton = styled(Button)(({ theme, active }) => ({
  borderRadius: "50px",
  padding: "12px 24px",
  color: active ? "#00bcd4" : "rgba(255, 255, 255, 0.7)",
  background: active ? "rgba(0, 188, 212, 0.2)" : "transparent",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#ffffff",
    background: "rgba(0, 188, 212, 0.3)",
    transform: "scale(1.05)",
    boxShadow: "0 4px 20px rgba(0, 188, 255, 0.4)",
  },
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(20px)",
  borderRadius: "24px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.5s ease",
  "&:hover": {
    borderColor: "rgba(0, 188, 255, 0.5)",
    transform: "translateY(-5px)",
    boxShadow: "0 20px 40px rgba(0, 188, 255, 0.1)",
  },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(45deg, #00bcd4 30%, #9c27b0 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontWeight: "bold",
}));

const AnimatedAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  background: "linear-gradient(45deg, #00bcd4, #9c27b0)",
  padding: "4px",
  animation: `${keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `} 8s linear infinite`,
}));

const FloatingParticles = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  overflow: "hidden",
  pointerEvents: "none",
  "& .particle": {
    position: "absolute",
    width: "4px",
    height: "4px",
    backgroundColor: "rgba(0, 188, 255, 0.3)",
    borderRadius: "50%",
    animation: `${keyframes`
      0%, 100% { opacity: 0; transform: translateY(0px); }
      50% { opacity: 1; transform: translateY(-20px); }
    `} 3s ease-in-out infinite`,
  },
}));

const SkillChip = styled(Chip)(({ theme, color }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  color: color || "#ffffff",
  margin: "8px",
  fontSize: "16px",
  padding: "24px 16px",
  height: "auto",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    borderColor: "rgba(0, 188, 255, 0.5)",
    background: "rgba(255, 255, 255, 0.1)",
  },
}));

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "research",
        "leetcode",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigation Component
  const Navigation = () => (
    <FloatingNav elevation={0}>
      <Toolbar sx={{ justifyContent: "center", px: 3 }}>
        <Typography
          variant="h5"
          sx={{ color: "#00bcd4", fontWeight: "bold", mr: 4 }}
        >
          shalini.dev
        </Typography>
        {[
          { id: "home", label: "Home", icon: <Person /> },
          { id: "about", label: "About", icon: <Person /> },
          { id: "experience", label: "Experience", icon: <Work /> },
          { id: "skills", label: "Skills", icon: <Code /> },
          { id: "projects", label: "Projects", icon: <Launch /> },
          { id: "research", label: "Research", icon: <School /> },
          { id: "leetcode", label: "LeetCode", icon: <EmojiEvents /> },
          { id: "contact", label: "Contact", icon: <Chat /> },
        ].map(({ id, label, icon }) => (
          <Tooltip key={id} title={label} arrow>
            <IconButton
              onClick={() => scrollToSection(id)}
              sx={{
                mx: 1,
                color:
                  activeSection === id ? "#00bcd4" : "rgba(255, 255, 255, 0.7)",
                background:
                  activeSection === id
                    ? "rgba(0, 188, 212, 0.2)"
                    : "transparent",
                "&:hover": {
                  color: "#ffffff",
                  background: "rgba(0, 188, 212, 0.3)",
                  transform: "scale(1.1)",
                },
              }}
            >
              {icon}
            </IconButton>
          </Tooltip>
        ))}
      </Toolbar>
    </FloatingNav>
  );

  // Hero Section
  const HeroSection = () => (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <FloatingParticles>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </FloatingParticles>

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
      >
        <Box mb={4}>
          <AnimatedAvatar sx={{ mx: "auto" }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
                fontWeight: "bold",
                background: "linear-gradient(45deg, #00bcd4, #9c27b0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              S
            </Box>
          </AnimatedAvatar>
        </Box>

        <GradientText
          variant="h1"
          sx={{ fontSize: { xs: "3rem", md: "6rem" }, mb: 3 }}
        >
          Software Engineer
        </GradientText>

        <Typography
          variant="h3"
          sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 3, fontWeight: 300 }}
        >
          Full Stack Developer
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            mb: 6,
            maxWidth: "800px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          A learner by heart and Software Engineer by Profession.{" "}
          <Box component="span" sx={{ color: "#00bcd4", fontWeight: "bold" }}>
            Looking forward for an exciting role.
          </Box>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 6 }}>
          {[
            {
              href: "https://github.com/shalini47ch",
              icon: <GitHub />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/shalini9ch/",
              icon: <LinkedIn />,
              label: "LinkedIn",
            },
            {
              href: "mailto:shalini47choudhary@gmail.com",
              icon: <Email />,
              label: "Email",
            },
          ].map(({ href, icon, label }) => (
            <Tooltip key={label} title={label} arrow>
              <IconButton
                href={href}
                target="_blank"
                sx={{
                  p: 2,
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "rgba(255, 255, 255, 0.7)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#00bcd4",
                    transform: "scale(1.1)",
                    borderColor: "rgba(0, 188, 255, 0.5)",
                    background: "rgba(0, 188, 212, 0.1)",
                  },
                }}
              >
                {icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>

        <IconButton
          onClick={() => scrollToSection("about")}
          sx={{
            animation: `${keyframes`
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(10px); }
            `} 2s ease-in-out infinite`,
            p: 2,
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#00bcd4",
          }}
        >
          <KeyboardArrowDown />
        </IconButton>
      </Container>
    </Box>
  );

  // About Section
  const AboutSection = () => (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 10,
        position: "relative",
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "linear-gradient(45deg, #00bcd4, #9c27b0)",
          opacity: 0.1,
          filter: "blur(40px)",
          animation: `${keyframes`
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-20px) scale(1.1); }
      `} 6s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
          opacity: 0.08,
          filter: "blur(50px)",
          animation: `${keyframes`
        0%, 100% { transform: translateX(0px) rotate(0deg); }
        50% { transform: translateX(30px) rotate(180deg); }
      `} 8s ease-in-out infinite`,
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              background:
                "linear-gradient(45deg, #00bcd4, #9c27b0, #4caf50, #ff9800)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "bold",
              animation: `${keyframes`
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            `} 4s ease infinite`,
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: 600,
              mx: "auto",
              fontSize: "1.1rem",
            }}
          >
            Crafting innovative solutions with passion, precision, and purpose
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <GlassCard
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(0, 188, 212, 0.1), rgba(156, 39, 176, 0.05))",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 188, 212, 0.3)",
                  transform: "translateY(0)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0, 188, 212, 0.2)",
                    border: "1px solid rgba(0, 188, 212, 0.5)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "12px",
                        background: "linear-gradient(45deg, #00bcd4, #0097a7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        boxShadow: "0 8px 25px rgba(0, 188, 212, 0.3)",
                      }}
                    >
                      <Person sx={{ color: "white", fontSize: 28 }} />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{ color: "#00bcd4", fontWeight: "bold" }}
                    >
                      My Journey
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: 1.8,
                      mb: 3,
                      fontSize: "1.1rem",
                    }}
                  >
                    Hi, I'm{" "}
                    <span style={{ color: "#00bcd4", fontWeight: "bold" }}>
                      Shalini
                    </span>{" "}
                    ✨ — a dynamic and deeply driven Software Development
                    Engineer who transforms complex challenges into elegant
                    solutions.
                  </Typography>

                  <Box
                    sx={{
                      p: 3,
                      borderRadius: "12px",
                      background: "rgba(0, 188, 212, 0.05)",
                      border: "1px solid rgba(0, 188, 212, 0.2)",
                      mb: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        lineHeight: 1.7,
                      }}
                    >
                      My expertise spans{" "}
                      <strong style={{ color: "#4caf50" }}>
                        Python, JavaScript, C++, and Java
                      </strong>
                      , built on rock-solid foundations in data structures,
                      algorithms, and object-oriented programming.
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.7,
                      fontStyle: "italic",
                    }}
                  >
                    🔬 Beyond coding, I'm passionate about{" "}
                    <strong style={{ color: "#9c27b0" }}>
                      machine learning
                    </strong>{" "}
                    and creating meaningful impact through technology —
                    particularly in developing solutions for speech and
                    hearing-impaired individuals through published research.
                  </Typography>
                </CardContent>
              </GlassCard>

              <GlassCard
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(76, 175, 80, 0.05))",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(156, 39, 176, 0.3)",
                  transform: "translateY(0)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(156, 39, 176, 0.2)",
                    border: "1px solid rgba(156, 39, 176, 0.5)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "12px",
                        background: "linear-gradient(45deg, #9c27b0, #7b1fa2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                        boxShadow: "0 8px 25px rgba(156, 39, 176, 0.3)",
                      }}
                    >
                      <Launch sx={{ color: "white", fontSize: 28 }} />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{ color: "#9c27b0", fontWeight: "bold" }}
                    >
                      What I Do
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: 1.8,
                      mb: 3,
                      fontSize: "1.1rem",
                    }}
                  >
                    🚀 My superpower?{" "}
                    <strong style={{ color: "#ff9800" }}>
                      Rapid adaptation
                    </strong>{" "}
                    to any technology stack! Currently diving deep into system
                    design, exploring how tech giants scale their masterpieces.
                  </Typography>

                  {/* Animated Skills Grid */}
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    {[
                      {
                        title: "Frontend",
                        skills:
                          "React.js, JavaScript, Tailwind CSS, Material UI",
                        color: "#00bcd4",
                        icon: "🎨",
                      },
                      {
                        title: "Backend",
                        skills: "Node.js, Python, Springboot, Redis",
                        color: "#4caf50",
                        icon: "⚡",
                      },
                      {
                        title: "Databases",
                        skills: "MySQL, MongoDB",
                        color: "#ff9800",
                        icon: "🗄️",
                      },
                      {
                        title: "Languages",
                        skills: "Python, JavaScript, C++, Java",
                        color: "#9c27b0",
                        icon: "💻",
                      },
                    ].map((skill, index) => (
                      <Grid item xs={12} sm={6} key={skill.title}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: "10px",
                            background: `linear-gradient(45deg, ${skill.color}15, ${skill.color}05)`,
                            border: `1px solid ${skill.color}30`,
                            transition: "all 0.3s ease",
                            animation: `${keyframes`
                          0% { opacity: 0; transform: translateY(20px); }
                          100% { opacity: 1; transform: translateY(0); }
                        `} 0.6s ease forwards ${index * 0.1}s`,
                            "&:hover": {
                              background: `linear-gradient(45deg, ${skill.color}25, ${skill.color}10)`,
                              transform: "scale(1.02)",
                            },
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: skill.color,
                              fontWeight: "bold",
                              mb: 0.5,
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <span>{skill.icon}</span> {skill.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgba(255, 255, 255, 0.8)",
                              fontSize: "0.9rem",
                            }}
                          >
                            {skill.skills}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Box
                    sx={{
                      p: 3,
                      borderRadius: "12px",
                      background:
                        "linear-gradient(45deg, rgba(76, 175, 80, 0.1), rgba(255, 152, 0, 0.1))",
                      border: "1px solid rgba(76, 175, 80, 0.3)",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.9)",
                        lineHeight: 1.7,
                        fontSize: "1.05rem",
                      }}
                    >
                      💡 Looking for an{" "}
                      <strong style={{ color: "#4caf50" }}>adaptable</strong>{" "}
                      and
                      <strong style={{ color: "#ff9800" }}>
                        {" "}
                        innovative
                      </strong>{" "}
                      SDE? Let's collaborate and build something{" "}
                      <em style={{ color: "#00bcd4" }}>extraordinary</em>{" "}
                      together!
                    </Typography>
                  </Box>
                </CardContent>
              </GlassCard>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Main Avatar Circle */}
              <Box
                sx={{
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(45deg, rgba(0, 188, 212, 0.2), rgba(156, 39, 176, 0.2))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid rgba(255, 255, 255, 0.1)",
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 25px 50px rgba(0, 188, 212, 0.3)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: "-25px",
                    background:
                      "linear-gradient(45deg, #00bcd4, #9c27b0, #4caf50, #ff9800)",
                    borderRadius: "50%",
                    opacity: 0.4,
                    filter: "blur(35px)",
                    animation: `${keyframes`
                  0%, 100% { opacity: 0.4; transform: rotate(0deg); }
                  50% { opacity: 0.7; transform: rotate(180deg); }
                `} 3s ease-in-out infinite`,
                  },
                }}
              >
                {/* Floating Tech Icons */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "10%",
                    left: "15%",
                    animation: `${keyframes`
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-15px) rotate(10deg); }
              `} 4s ease-in-out infinite`,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "8px",
                      background: "linear-gradient(45deg, #61dafb, #21759b)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                    }}
                  >
                    ⚛️
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: "20%",
                    right: "10%",
                    animation: `${keyframes`
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(-15deg); }
              `} 5s ease-in-out infinite`,
                  }}
                >
                  <Box
                    sx={{
                      width: 35,
                      height: 35,
                      borderRadius: "8px",
                      background: "linear-gradient(45deg, #f7df1e, #f0db4f)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                    }}
                  >
                    🟨
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: "15%",
                    left: "20%",
                    animation: `${keyframes`
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-10px) rotate(20deg); }
              `} 3.5s ease-in-out infinite`,
                  }}
                >
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: "8px",
                      background: "linear-gradient(45deg, #306998, #ffd43b)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                    }}
                  >
                    🐍
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: "25%",
                    right: "15%",
                    animation: `${keyframes`
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-18px) rotate(-10deg); }
              `} 4.5s ease-in-out infinite`,
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "8px",
                      background: "linear-gradient(45deg, #00758f, #00d4aa)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                    }}
                  >
                    🗄️
                  </Box>
                </Box>

                {/* Central Code Icon */}
                <Code
                  sx={{
                    fontSize: 140,
                    color: "#00bcd4",
                    zIndex: 1,
                    filter: "drop-shadow(0 0 20px rgba(0, 188, 212, 0.5))",
                    animation: `${keyframes`
                  0%, 100% { transform: scale(1) rotate(0deg); }
                  50% { transform: scale(1.1) rotate(5deg); }
                `} 6s ease-in-out infinite`,
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Experience Section
  const ExperienceSection = () => (
    <Box
      id="experience"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center", py: 10 }}
    >
      <Container maxWidth="lg">
        <GradientText variant="h2" align="center" sx={{ mb: 8 }}>
          Experience
        </GradientText>

        <Box sx={{ maxWidth: 800, mx: "auto" }}>
          {[
            {
              period: "January 2022 – Present · 2+ years",
              company: "Independent Development",
              role: "Full-Stack Developer",
              location: "Remote · Self-Directed Learning",
              achievements: [
                "Developed and deployed full-stack applications including Design Pattern Hub, Task Manager, and Chit Chat App using MERN stack and Spring Boot, delivering solutions to enhance learning experiences and real-time communication.",

                "Implemented all 23 GoF design patterns with code examples, class diagrams, and backend integration, strengthening software architecture expertise and demonstrating practical application of design principles.",

                "Enhanced problem-solving skills by consistently practicing data structures and algorithms, achieving strong performance across competitive coding platforms.",

                "Explored core system design principles including scalability, caching strategies, database modeling, and inter-service communication to build robust and high-performing systems.",

                "Authored technical blogs to simplify complex software concepts, share knowledge with the developer community, and reinforce conceptual depth.",

                "Currently advancing backend expertise by learning Java and Spring Boot, gaining hands-on experience with enterprise-grade application development and microservices.",
              ],
            },
            {
              period: "Aug 2021 - Nov 2021 · 4 mos",
              company: "Publicis Sapient",
              role: "Associate Experience Technology L1",
              location: "Bengaluru, Karnataka, India",
              achievements: [
                "Designed new variations for the microapp which resulted in increased acknowledgement rates from 54% to 85% amid A/B test.",
                "Worked collaboratively with the team to develop reusable components and authored unit test cases, resulting in improved test coverage by 30%.",
                "Improved website performance by 10% through the development of scripts for the Telium tags.",
                "Devised responsive and accessible web pages in various submodules through HTML5, CSS3, JavaScript.",
                "Created loaders using SVG to give a better user experience until the page was loaded.",
              ],
            },
            {
              period: "Jan 2021 - Aug 2021 · 8 mos",
              company: "Publicis Sapient",
              role: "Junior Associate Technology",
              location: "Bengaluru, Karnataka, India",
              achievements: [
                "Implemented atomic design pattern, resulting in improved code reliability and easier updates.",
                "Improved web accessibility by 10% through interactive testing and design modifications.",
                "Adopted ES6, code linters, and formatters to enhance code quality.",
                "Collaborated with product managers and backend teams to ensure timely delivery of the product.",
                "Developed a generic CSS file to facilitate component reusability.",
                "Utilized Context API instead of Redux to manage state management, as Redux was deemed unnecessary in this scenario.",
              ],
            },
          ].map((exp, index) => (
            <Box
              key={index}
              sx={{ mb: 6, display: "flex", alignItems: "flex-start", gap: 3 }}
            >
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  background: "linear-gradient(45deg, #00bcd4, #9c27b0)",
                  flexShrink: 0,
                }}
              >
                <Work />
              </Avatar>

              <GlassCard sx={{ flex: 1 }}>
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 3,
                      flexWrap: "wrap",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{ color: "#ffffff", fontWeight: "bold", mb: 1 }}
                      >
                        {exp.company}
                      </Typography>
                      <Typography variant="h6" sx={{ color: "#00bcd4", mb: 1 }}>
                        {exp.role}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "rgba(255, 255, 255, 0.6)",
                        }}
                      >
                        <LocationOn sx={{ fontSize: 16, mr: 1 }} />
                        {exp.location}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#9c27b0",
                        mt: { xs: 2, md: 0 },
                      }}
                    >
                      <Event sx={{ fontSize: 16, mr: 1 }} />
                      {exp.period}
                    </Box>
                  </Box>

                  <Box component="ul" sx={{ pl: 0, listStyle: "none", m: 0 }}>
                    {exp.achievements.map((achievement, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{
                          mb: 2,
                          display: "flex",
                          alignItems: "flex-start",
                          color: "rgba(255, 255, 255, 0.8)",
                          lineHeight: 1.6,
                        }}
                      >
                        <Box
                          sx={{
                            color: "#00bcd4",
                            mr: 2,
                            mt: 0.5,
                            fontSize: 18,
                          }}
                        >
                          ▸
                        </Box>
                        {achievement}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </GlassCard>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );

  const SkillsSection = () => {
    const categories = [
      {
        title: "Programming Languages",
        skills: ["Python", "JavaScript", "C++", "Java"],
      },
      {
        title: "Frontend",
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.js",
          "Tailwind CSS",
          "Material UI",
        ],
      },
      {
        title: "Backend",
        skills: ["Node.js", "Express.js", "Python", "Redis", "Spring Boot"],
      },
      {
        title: "Databases",
        skills: ["MySQL", "MongoDB"],
      },
      {
        title: "Version Control",
        skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
      },
      {
        title: "IT Constructs",
        skills: ["OOP", "DBMS"],
      },
      {
        title: "Tools",
        skills: [
          "VSCode",
          "JIRA",
          "Postman",
          "PyCharm",
          "IntelliJ IDEA",
          "Anaconda",
        ],
      },
      {
        title: "Deployment",
        skills: ["Netlify", "Heroku", "Render"],
      },
      {
        title: "Software Design & Architecture",
        skills: ["LLD", "System Design", "Design Patterns"],
      },
      {
        title: "AI & Productivity Tools",
        skills: ["ChatGPT", "Claude", "Gemini", "Cursor", "VoDev"],
      },
    ];

    const fadeInUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `;

    return (
      <Box
        id="skills"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: 10,
          background: "linear-gradient(180deg, #0a0f1c, #111827)",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 8,
              fontWeight: "bold",
              background: "linear-gradient(90deg, #00c6ff, #0072ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills & Technologies
          </Typography>

          <Grid container spacing={4}>
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={category.title}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
                    },
                    animation: `${fadeInUp} 0.6s ease-out ${index * 0.1}s both`,
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        color: "#00c6ff",
                      }}
                    >
                      🔹 {category.title}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {category.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            fontSize: "0.85rem",
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            color: "#e0e0e0",
                            "&:hover": {
                              background: "rgba(0, 114, 255, 0.2)",
                              border: "1px solid #0072ff",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  };

  const projects = [
    {
      title: "Task Hub",
      description:
        "TaskHub is a full-stack Task Management Application that helps users create, manage, and track tasks securely and efficiently.It features a responsive React + Tailwind CSS frontend, a robust Spring Boot backend with JWT Authentication, and MongoDB for storage — using DBRef to maintain clear relationships between tasks and their owners.",
      tech: "React.js, Tailwind CSS,Spring Boot,Spring Security,JWT,MongoDB with DBRef,Postman",
      github: "https://github.com/shalini47ch/task-manager-backend", // add link
      demo: "https://symphonious-empanada-f8fab0.netlify.app/", // add deployed link
    },
    {
      title: "Design Pattern Hub",
      description:
        "Design Pattern Hub is a full-stack web application built to help developers learn and master all 23 GoF (Gang of Four) software design patterns. The platform offers detailed explanations, code examples, class diagrams, and real-world use cases for each pattern. Users can track their learning progress, mark favorite patterns, and study case studies of Amazon Locker and Library Management systems to see design patterns in action.",
      tech: "React.js, Material UI,Node.js, Express.js,MongoDB,Vercel",
      github: "https://github.com/shalini47ch/DesignHub",
      demo: "https://design-hub-frontend-theta.vercel.app/",
    },
    {
      title: "Chat App",
      description:
        "Chit-Chat is an innovative Full Stack Chatting App that leverages cutting-edge technologies to provide users with a seamless and engaging communication experience.The application is built to facilitate real-time communication, incorporating advanced features and robust security measures.",
      tech: "React, Node.js, MongoDB, Socket.io",
      github: "https://github.com/shalini47ch/chit-chat-frontend",
      demo: "", // add deployed link if available
    },
    {
      title: "Travel Memory App",
      description:
        "A full-stack web application that transforms the way you capture and share your travel adventures. Seamlessly blending MongoDB Atlas, Express.js, Node.js, and React.js, the platform is not just an application—it's a gateway to a vibrant tapestry of memories.",
      tech: "React, Node.js, MongoDB, Express.js",
      github: "https://github.com/shalini47ch/Travel-memory-app-BackendCode-", // add link
      demo: "https://cerulean-toffee-9234f5.netlify.app/", // add deployed link
    },
    {
      title: "Sign Language Translator",
      description:
        "Embarked on a deep learning journey, the project was dedicated to solving the intricacies of interpreting and deciphering the profound language of the people with hearing and speech disabilities.Departing from conventional approaches centered around American Sign Language, this initiative delved into the intricate realm of the Indian Sign Language gestures.",
      tech: "Python, TensorFlow, OpenCV",
      github: "https://github.com/shalini47ch/Sign-Language-Translator",
      demo: "",
    },
  ];

  const ProjectsSection = () => (
    <Box
      id="projects"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center", py: 10 }}
    >
      <Container maxWidth="lg">
        <GradientText variant="h2" align="center" sx={{ mb: 8 }}>
          Projects
        </GradientText>

        <Grid container spacing={10}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <GlassCard sx={{ height: "100%", textAlign: "center", p: 4 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ color: "#ffffff", fontWeight: "bold", mb: 2 }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "1rem",
                      mb: 2,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#00bcd4",
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                      mb: 3,
                    }}
                  >
                    {project.tech}
                  </Typography>

                  <Box>
                    {project.github && (
                      <IconButton
                        component="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: "#ffffff" }}
                        aria-label={`${project.title} GitHub`}
                      >
                        <GitHub />
                      </IconButton>
                    )}
                    {project.demo && (
                      <IconButton
                        component="a"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: "#00bcd4" }}
                        aria-label={`${project.title} Live Demo`}
                      >
                        <Launch />
                      </IconButton>
                    )}
                  </Box>
                </CardContent>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Research Section
  const ResearchSection = () => (
    <Box
      id="research"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center", py: 10 }}
    >
      <Container maxWidth="md">
        <GradientText variant="h2" align="center" sx={{ mb: 8 }}>
          Research
        </GradientText>

        <GlassCard sx={{ textAlign: "center", py: 8, px: 4 }}>
          <CardContent>
            <School sx={{ fontSize: 80, color: "#9c27b0", mb: 3 }} />

            <Typography
              variant="h4"
              sx={{ color: "#ffffff", fontWeight: "bold", mb: 2 }}
            >
              Indian Sign Language Communicator Using Convolutional Neural
              Network
            </Typography>

            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "1.1rem",
                mb: 2,
              }}
            >
              Published in <b>IJAST, SERSC Journals</b> · July 11, 2020
            </Typography>

            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "1rem",
                textAlign: "justify",
                mb: 3,
              }}
            >
              The authors intend to use Artificial Neural Networks to train the
              model to perform image recognition and translation of text to
              speech using an existing dataset. This will provide those with
              disabilities a simple method to converse with those who do not
              understand sign language.
            </Typography>

            <Typography
              sx={{
                color: "#00bcd4",
                fontSize: "0.95rem",
                fontStyle: "italic",
                mb: 3,
              }}
            >
              Authors: Arvind Sreenivas, Mudit Maheshwari, Saiyam Jain, Shalini
              Choudhary, Dr. G. Vadivu
            </Typography>

            {/* Add link to publication if available */}
            <Box>
              <IconButton
                component="a"
                href="http://sersc.org/journals/index.php/IJAST/article/view/27989" // replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#9c27b0" }}
                aria-label="Research Publication"
              >
                <Launch />
              </IconButton>
            </Box>
          </CardContent>
        </GlassCard>
      </Container>
    </Box>
  );

  // LeetCode Section
  const LeetCodeSection = () => (
    <Box
      id="leetcode"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center", py: 10 }}
    >
      <Container maxWidth="lg">
        <GradientText variant="h2" align="center" sx={{ mb: 8 }}>
          LeetCode Stats
        </GradientText>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <GlassCard>
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Box
                  sx={{ position: "relative", mb: 4, display: "inline-block" }}
                >
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(45deg, rgba(0, 188, 212, 0.2), rgba(76, 175, 80, 0.2))",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "4px solid rgba(0, 188, 212, 0.3)",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: "-10px",
                        background: "linear-gradient(45deg, #00bcd4, #4caf50)",
                        borderRadius: "50%",
                        opacity: 0.2,
                        animation: `${keyframes`
                        0% { transform: rotate(0deg); opacity: 0.2; }
                        100% { transform: rotate(360deg); opacity: 0.2; }
                      `} 8s linear infinite`,
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: "#ffffff",
                        fontWeight: "bold",
                        lineHeight: 1,
                      }}
                    >
                      1900
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "0.9rem",
                      }}
                    >
                      /3436
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{ color: "#4caf50", fontWeight: "bold", mb: 1 }}
                >
                  Problems Solved
                </Typography>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                  32 Attempting
                </Typography>
              </CardContent>
            </GlassCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <GlassCard>
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <EmojiEvents sx={{ fontSize: 80, color: "#ffc107", mb: 3 }} />
                <Typography
                  variant="h5"
                  sx={{ color: "#ffc107", fontWeight: "bold", mb: 3 }}
                >
                  Achievements
                </Typography>
                <Box sx={{ textAlign: "left" }}>
                  {[
                    { label: "Total Badges", value: "57" },
                    { label: "Active Days", value: "367" },
                    { label: "Max Streak", value: "1500" },
                    { label: "Submissions (Last Year)", value: "2,967" },
                  ].map(({ label, value }) => (
                    <Box
                      key={label}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                        {label}
                      </Typography>
                      <Typography sx={{ color: "#ffffff", fontWeight: "bold" }}>
                        {value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </GlassCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Contact Section
  const ContactSection = () => (
    <Box
      id="contact"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center", py: 10 }}
    >
      <Container maxWidth="lg">
        <GradientText variant="h2" align="center" sx={{ mb: 4 }}>
          Let's Connect
        </GradientText>

        <Typography
          variant="h5"
          align="center"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            mb: 8,
            lineHeight: 1.6,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Ready to collaborate on something amazing? Let's turn ideas into
          reality together.
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              href: "https://github.com/shalini47ch",
              icon: <GitHub sx={{ fontSize: 48 }} />,
              label: "GitHub",
              description: "Check out my repositories",
              color: "#ffffff",
            },
            {
              href: "https://www.linkedin.com/in/shalini9ch/",
              icon: <LinkedIn sx={{ fontSize: 48 }} />,
              label: "LinkedIn",
              description: "Let's connect professionally",
              color: "#2196f3",
            },
            {
              href: "mailto:shalini47choudhary@gmail.com",
              icon: <Email sx={{ fontSize: 48 }} />,
              label: "Email",
              description: "Drop me a message",
              color: "#f44336",
            },
          ].map(({ href, icon, label, description, color }) => (
            <Grid item xs={12} md={4} key={label}>
              <GlassCard
                component="a"
                href={href}
                target="_blank"
                sx={{
                  textDecoration: "none",
                  display: "block",
                  textAlign: "center",
                  py: 6,
                  "&:hover .contact-icon": {
                    transform: "scale(1.1)",
                    color: color,
                  },
                }}
              >
                <CardContent>
                  <Box
                    className="contact-icon"
                    sx={{
                      mb: 3,
                      color: "rgba(255, 255, 255, 0.7)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#ffffff", fontWeight: "bold", mb: 1 }}
                  >
                    {label}
                  </Typography>
                  <Typography sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
                    {description}
                  </Typography>
                </CardContent>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Back to Top Button
  const BackToTopButton = () =>
    showBackToTop && (
      <Fab
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          background: "linear-gradient(45deg, #00bcd4, #0097a7)",
          color: "#ffffff",
          zIndex: 1000,
          "&:hover": {
            background: "linear-gradient(45deg, #0097a7, #00838f)",
            transform: "scale(1.1)",
          },
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    );

  return (
    <StyledBox>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ResearchSection />
      <LeetCodeSection />
      <ContactSection />
      <BackToTopButton />
    </StyledBox>
  );
};

export default Portfolio;

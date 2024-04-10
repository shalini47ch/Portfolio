import React from "react";
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaCloud,
  FaGit,
  FaGithub,
  FaGitlab,
  FaBitbucket,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiRedis,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiRender,
  SiExpress 

} from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const Skills = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingTop="20px" 
      paddingBottom="20px" 
      margin="50px"
    >
      <Card className="skill-card" style={{ width: "80%" }}>
        <CardContent>
          <SkillGroup>
            <SkillCard icon={<FaPython />} title="Python" />
            <SkillCard icon={<FaJs />} title="JavaScript" />
            <SkillCard icon={<SiCplusplus />} title="C++" />

            <SkillCard icon={<FaHtml5 />} title="HTML5" />
            <SkillCard icon={<FaCss3 />} title="CSS3" />
            <SkillCard icon={<FaReact />} title="React.js" />
            <SkillCard icon={<SiTailwindcss />} title="Tailwind CSS" />
            <SkillCard title="Material Ui" />

            <SkillCard icon={<FaNodeJs />} title="Node.js" />
            <SkillCard icon={<SiExpress/>}title="Express.js" />
            <SkillCard icon={<SiRedis />} title="Redis" />
            <SkillCard icon={<SiMysql />} title="MySQL" />
            <SkillCard icon={<SiMongodb />} title="MongoDB" />

            <SkillCard icon={<BiLogoNetlify/>} title="Netlify" />
            <SkillCard icon={<FaCloud />} title="Heroku" />
            <SkillCard icon={<SiRender/>}title="Render" />
            <SkillCard icon={<FaGit />} title="Git" />
            <SkillCard icon={<FaGithub />} title="GitHub" />
            <SkillCard icon={<FaGitlab />} title="Gitlab" />
            <SkillCard icon={<FaBitbucket />} title="Bitbucket" />
          </SkillGroup>
        </CardContent>
      </Card>
    </Box>
  );
};

const SkillGroup = ({ children }) => {
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" backgroundColor="maroon">
      {children}
    </Box>
  );
};

const SkillCard = ({ icon, title }) => {
  return (
    <Card
      className="skill-card"
      style={{
        minWidth: "80px",
        margin: "10px",
        backgroundColor: "lightblue",
        borderRadius: "40px",
        
      }}
    >
      <CardContent style={{ display: "flex", alignItems: "center" }}>
        {icon}
        <Typography variant="body1" style={{ marginLeft: "10px" }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Skills;

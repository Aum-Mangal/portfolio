const config = {
  title: "Aum Mangal | Software Engineer",
  description: {
    long: "B.Tech student at Vellore Institute of Technology; experienced in C++, Python, TypeScript, and modern web frameworks like React and FastAPI. Building complex systems including compilers, emulators, and full-stack AI applications.",
    short:
      "Aum Mangal — Software Engineering student specializing in C++, Python, TypeScript, and Full Stack Development.",
  },
  keywords: [
    "Aum Mangal",
    "portfolio",
    "software engineer",
    "C++",
    "Python",
    "TypeScript",
    "FastAPI",
    "React",
    "Machine Learning",
    "Compiler Design",
  ],
  author: "Aum Mangal",
  email: "aummangal307@gmail.com",
  site: "https://aummangal.vercel.app",

  // for github stars button
  githubUsername: "aummangal",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/aum-mangal-69853831b/",
    github: "https://github.com/Aum-Mangal",
    codeforces: "https://codeforces.com/profile/Aum_Mangal",
    leetcode: "https://leetcode.com/u/Aummangal/",
  },
};
export { config };

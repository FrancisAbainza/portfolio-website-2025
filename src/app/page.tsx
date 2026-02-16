import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Linkedin, Mail, Phone, MapPin, Github } from "lucide-react"
import { works } from "@/data/works";
import Slideshow from "@/components/slideshow";

const technologies = {
  "Frontend Languages & Technologies": ["CSS", "HTML", "JavaScript (JS)", "TypeScript", "EJS"],
  "Frameworks & Libraries": ["NextJS", "ReactJS", "ExpressJS"],
  "Databases & ORMs": ["Drizzle ORM", "Cloud Firestore", "MongoDB", "Neon"],
  "UI & Styling Tools": ["Shadcn UI", "Tailwind CSS"],
  "Hosting & Deployment": ["Firebase Hosting", "Vercel", "Render"],
  "Backend-as-a-Service (BaaS)": ["Firebase", "Supabase"],
  "Artificial Intelligence": ["Cursor AI", "Github Copilot", "V0"],
  "Authentication & User Management": ["Clerk", "Firebase Authentication"],
  "UI/UX Design": ["Figma"],
  "API": ["AI SDK", "Cleanuri API", "Google Maps API",],
  "Other Programming Languages": ["C++", "Java", "Python"],
  "Mobile Developement": ["React Native"],
}

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden cyan-gradient">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_20%,#000_40%,transparent)]" />
        <div className="container mx-auto px-6 py-20 min-h-[100vh] md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Badge className="bg-cyan-500 text-black hover:bg-cyan-400">Welcome</Badge>
            </div>
            <h1 className="text-4xl/tight md:text-6xl/tight font-semibold">
              Hi, I’m <span className="text-cyan-400">Francis</span> —
              <br />ready to plan, design, and build websites.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose">
              I&apos;m a web developer and I&apos;ve been crafting random web development projects for a few years now.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/works"><Button className="bg-cyan-500 text-black hover:bg-cyan-400">View Works</Button></Link>
              <Link href="/resume"><Button variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10">View Resume</Button></Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <Avatar className="h-40 w-40 md:h-56 md:w-56 ring-2 ring-cyan-500/60 cyan-glow">
                <AvatarImage src="/profile.jpg" alt="Profile" fetchPriority="high" />
                <AvatarFallback>FA</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 bg-black/40 backdrop-blur">
                  Available for work
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto px-6 pb-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <Card className="bg-secondary/40 border-cyan-500/20">
            <CardContent className="p-6 md:p-8 flex justify-center">
              <Image
                src="/about.png"
                alt="About portrait"
                width={520}
                height={520}
                className="rounded-xl object-cover cyan-glow"
              />
            </CardContent>
          </Card>
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
            <p className="text-muted-foreground max-w-prose">
              I am a web development enthusiast. I love turning ideas into reality through web development.
            </p>
            <Separator className="bg-cyan-500/30" />
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-cyan-500 text-black">Frontend</Badge>
              <Badge variant="outline" className="border-cyan-500/50 text-cyan-300">Backend</Badge>
              <Badge variant="outline" className="border-cyan-500/50 text-cyan-300">UI/UX</Badge>
              <Badge variant="outline" className="border-cyan-500/50 text-cyan-300">Performance</Badge>
            </div>
            <Link href="/resume"><Button className="bg-cyan-500 text-black hover:bg-cyan-400">Go to Resume</Button></Link>
          </div>
        </div>
      </section>

      {/* Works - Image Marquee */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-black/60">
        <div className="container mx-auto px-6 flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">My Works</h2>
          <Link href="/works"><Button variant="outline" className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10">See All</Button></Link>
        </div>
        <Slideshow worksImages={works.map(work => (
          {
            src: work.src,
            alt: work.alt,
          }
        ))} />
      </section>

      {/* Technologies */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Technologies and Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([category, techs]) => (
            <Card
              key={category}
              className="bg-secondary/40 border-cyan-500/20 hover:border-cyan-400 transition-colors duration-300"
            >
              <CardHeader>
                <CardTitle className="text-cyan-400 text-lg font-semibold">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-cyan-400/10 text-cyan-300 border-cyan-400/20 hover:bg-cyan-400/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="logo" width={50} height={50} priority />
                <h2 className="text-white font-light uppercase tracking-wide">Francis</h2>
              </Link>
              <p className="text-sm text-muted-foreground">
                Ready to plan, design, and build websites for your needs.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contacts</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>francisabainza714@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>(+63)985 122 0427</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Pedro, Laguna, Philippines 4023</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get In Touch</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/FrancisAbainza" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.facebook.com/francisrafael.abainza/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/francis-abainza-8813a0282/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <p className="text-sm text-center text-muted-foreground">© {new Date().getFullYear()} Francis Abainza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

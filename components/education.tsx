"use client"

import { motion } from "framer-motion"
import { GraduationCapIcon, CalendarIcon, MapPinIcon, AwardIcon } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
          <p className="text-foreground/70">My academic background</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-6 shadow-md mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full mt-1">
                <GraduationCapIcon className="h-6 w-6 text-primary" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold">Bachelor of Technology</h3>
                <p className="text-primary font-medium">Computer Science and Engineering</p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2 mb-4">
                  <div className="flex items-center gap-1 text-foreground/70">
                    <MapPinIcon className="h-4 w-4" />
                    <span>Kalinga Institute of Industrial Technology, Bhubaneswar</span>
                  </div>

                  <div className="flex items-center gap-1 text-foreground/70">
                    <CalendarIcon className="h-4 w-4" />
                    <span>July 2023 - June 2027 (Expected)</span>
                  </div>
                </div>


                <div>
                  <h4 className="font-bold mb-2">Extracurricular & Leadership</h4>
                  <div className="bg-card border rounded-lg p-4">
                    <h5 className="font-semibold">IOT Lab Society</h5>
                    <p className="text-sm text-foreground/70 mb-2">Competitive Programming Team member</p>
                    <ul className="space-y-1 pl-7 list-disc text-sm">
                      <li>
                        Collaborated with 30+ team members to organize tech workshops, guest lectures, and hackathons
                      </li>
                      <li>Led weekly coding challenges and technical sessions to foster peer learning</li>
                      <li>Coordinated with industry experts for coding bootcamps and workshops</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


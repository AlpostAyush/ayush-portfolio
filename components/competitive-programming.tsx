"use client"

import { motion } from "framer-motion"
import { TrophyIcon, CodeIcon, BarChart2Icon, AwardIcon } from "lucide-react"
import TiltCard from "@/components/tilt-card"

export default function CompetitiveProgramming() {
  return (
    <section id="competitive" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Competitive Programming</h2>
          <p className="text-foreground/70">My algorithmic problem-solving journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TiltCard>
              <div className="bg-card rounded-lg p-6 shadow-md h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <a
                      href="https://leetcode.com/u/4ush/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* LeetCode Icon */}
                      <img
                        src="download (2).png"
                        alt="LeetCode"
                        className="h-6 w-6"
                      />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold">LeetCode</h3>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Contest Rating</span>
                    <span className="leetcode-rating font-bold text-xl">2,037</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300"
                    ></motion.div>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Problems Solved</span>
                    <span className="font-bold">641+</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-300"
                    ></motion.div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrophyIcon className="h-5 w-5 text-yellow-500" />
                    <h4 className="font-bold">Achievements</h4>
                  </div>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>Contest Rating: 2,037 (Knight)</li>
                    <li>Global Ranking: 13,980 / 672,255</li>
                    <li>Solved 641+ problems across multiple languages</li>
                    <li>Participated in 12 contests</li>
                  </ul>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TiltCard>
              <div className="bg-card rounded-lg p-6 shadow-md h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <a
                      href="https://www.codechef.com/users/code4yu69"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* CodeChef Icon */}
                      <img
                        src="download.png"
                        alt="CodeChef"
                        className="h-6 w-6"
                      />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold">CodeChef</h3>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Global Rank</span>
                    <span className="codechef-rating font-bold text-xl">17</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "99%" }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-gradient-to-r from-amber-700 to-amber-500"
                    ></motion.div>
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Contest</span>
                    <span className="font-bold">Starters 102</span>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AwardIcon className="h-5 w-5 text-amber-700" />
                    <h4 className="font-bold">Skills Demonstrated</h4>
                  </div>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>Advanced algorithmic design and problem solving</li>
                    <li>Optimized time and space complexity solutions</li>
                    <li>Competitive performance under time constraints</li>
                    <li>Mastery of complex algorithms and data structures</li>
                  </ul>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70 italic max-w-2xl mx-auto">
            "Competitive programming has sharpened my problem-solving abilities and taught me to write efficient,
            optimized code under pressure."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
export default function Footer() {
  return (<footer className="bg-card py-8 border-t"><div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
             <p className="text-xl font-bold text-primary">Ayush<span className="text-foreground">Ranjan</span></p>
               <p className="text-foreground/70 text-sm mt-1">Computer Science Graduate & Full-Stack Developer</p>
                 </div>
                   <div className="text-center md:text-right">
                      <p className="text-foreground/70 text-sm"> © {new Date().getFullYear()} Ayush Ranjan. All rights reserved.</p>
                   </div>
                   </div>
                 </div>
         </footer>
  )
}


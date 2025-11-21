export default function Footer() {
  return (
    <footer className="w-full bg-[#0E0D0B] border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[#F5F5DC]/70 text-sm">© {new Date().getFullYear()} DJ DELUX. All rights reserved.</div>
        <div className="text-sm">
          <span className="text-[#FDF6E3]">DJ </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8B4513] font-semibold">DELUX</span>
        </div>
      </div>
    </footer>
  )
}

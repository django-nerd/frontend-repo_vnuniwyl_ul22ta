export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-400 text-sm">© {new Date().getFullYear()} DJ DELUX. All rights reserved.</div>
        <div className="text-sm">
          <span className="text-white">DJ </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-semibold">DELUX</span>
        </div>
      </div>
    </footer>
  )
}

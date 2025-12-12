export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} Nitish Bhosale. All rights reserved.
                </p>
                <p className="text-slate-600 text-xs">
                    Built with Next.js, TypeScript & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}

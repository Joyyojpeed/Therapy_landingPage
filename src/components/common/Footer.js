export default function Footer() {
  return (
    <footer className="w-full bg-alabaster py-8 px-6 text-center text-sm text-black_olive">
      <div>
        &copy; {new Date().getFullYear()} Dr. Serena Blake, PsyD · Los Angeles, CA
      </div>
      <div className="mt-2">
        Email: <a href="mailto:serena@blakepsychology.com" className="underline">serena@blakepsychology.com</a> · Phone: (323) 555-0192
      </div>
    </footer>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-blue-400 text-sm mb-2">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <a
          href="mailto:hello@jeffreypatey.com"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}

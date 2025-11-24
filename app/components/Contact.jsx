import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="section bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col max-w-md mx-auto gap-4"
      >
        <input type="text" placeholder="Name" className="p-3 rounded bg-gray-800 border border-gray-700" />
        <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800 border border-gray-700" />
        <textarea placeholder="Message" className="p-3 rounded bg-gray-800 border border-gray-700" rows={4}></textarea>
        <button type="submit" className="bg-blue-600 p-3 rounded hover:bg-blue-700 transition">
          Send
        </button>
      </motion.form>
    </section>
  );
}

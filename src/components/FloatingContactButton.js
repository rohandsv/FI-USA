"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

export default function FloatingContactButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: 8 }}
      whileTap={{ scale: 0.95 }}
      className="floating-contact-wrap"
    >
      <Link
        href="/contact"
        className="floating-contact-btn"
        aria-label="Contact FI Digital"
      >
        <MessageSquare size={28} />
      </Link>
    </motion.div>
  );
}

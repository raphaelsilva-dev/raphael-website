import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

const App = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Olá!",
      description: "Estamos trabalhando para trazer algo incrível em breve.",
      duration: 5000,
    });
  }, [toast]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-900 to-black">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 250 + 40}px`,
              height: `${Math.random() * 250 + 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 80 - 40],
              x: [0, Math.random() * 80 - 40],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl p-6 sm:p-8 mx-auto backdrop-blur-md bg-white/10 rounded-xl shadow-2xl border border-white/10"
        >
          <motion.h1 
            className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Em Desenvolvimento
          </motion.h1>
          
          <motion.p 
            className="mb-8 text-lg sm:text-xl text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Estamos trabalhando para criar algo incrível. Por favor, volte em breve.
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-3 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-300 rounded-full animate-pulse delay-150" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-200 rounded-full animate-pulse delay-300" />
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-4 text-center text-blue-200/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-xs sm:text-sm">© {new Date().getFullYear()} - Todos os direitos reservados</span>
      </motion.div>
      
      <Toaster />
    </div>
  );
};

export default App;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:ltr:right-5 sm:rtl:left-5 z-50 flex flex-col gap-2 max-w-sm sm:w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className={`pointer-events-auto flex items-center justify-between gap-3 p-3.5 rounded-2xl shadow-xl border text-sm font-semibold backdrop-blur-md ${
                toast.type === 'success'
                  ? 'bg-pakgreen-900/95 text-white border-pakgreen-700'
                  : toast.type === 'warning'
                  ? 'bg-amber-900/95 text-white border-amber-700'
                  : 'bg-slate-900/95 text-white border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {toast.type === 'success' && (
                  <CheckCircle2 className="w-5 h-5 text-relief-gold shrink-0" />
                )}
                {toast.type === 'warning' && (
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                )}
                {toast.type === 'info' && (
                  <Info className="w-5 h-5 text-blue-400 shrink-0" />
                )}
                <span className="font-lang leading-tight">{toast.text}</span>
              </div>

              <button
                type="button"
                onClick={() => onDismiss(toast.id)}
                className="text-white/60 hover:text-white p-1 rounded-lg transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

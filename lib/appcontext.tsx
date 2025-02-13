"use client"; // Required in Next.js for client-side state management

import { createContext, useContext, useState, ReactNode } from "react";

// 1️⃣ Define the context type (optional, but good for TypeScript)
interface AppContextType {
  userTab: string | null;
  adminTab: string | null;
  setUserTab: React.Dispatch<React.SetStateAction<string | null>>;
  setAdminTab: React.Dispatch<React.SetStateAction<string | null>>;
}

// 2️⃣ Create a Context with an initial value
const AppContext = createContext<AppContextType | null>(null);

// 3️⃣ Create the Provider Component
export function AppProvider({ children }: { children: ReactNode }) {
  const [userTab, setUserTab] = useState<string | null>(null);
  const [adminTab, setAdminTab] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ userTab, setUserTab, adminTab, setAdminTab }}>
      {children}
    </AppContext.Provider>
  );
}

// 4️⃣ Create a Custom Hook for easier access to context
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

export default AppContext; // Optional, but you usually don't need to export it directly.

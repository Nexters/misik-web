import { create } from "zustand";

import type { ScanResult } from "@/components/Home/Home";

interface ScanDataStoreProps {
  scanData: ScanResult[];
  setScanData: (scanData: ScanResult[]) => void;
}

export const useScanDataStore = create<ScanDataStoreProps>((set) => ({
  scanData: [],
  setScanData: (scanData: ScanResult[]) => set({ scanData }),
}));

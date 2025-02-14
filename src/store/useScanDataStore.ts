import { create } from "zustand";

interface ScanDataStoreProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scanData: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setScanData: (scanData: any[]) => void;
  resetScanData: () => void;
}

export const useScanDataStore = create<ScanDataStoreProps>((set) => ({
  scanData: [],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setScanData: (scanData: any[]) => set({ scanData }),
  resetScanData: () => set({ scanData: [] }),
}));

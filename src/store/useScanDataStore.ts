import { create } from "zustand";

interface ScanDataStoreProps {
  scanData: ScanResultPayload | string;
  setScanData: (scanData: ScanResultPayload | string) => void;
  resetScanData: () => void;
}

export const useScanDataStore = create<ScanDataStoreProps>((set) => ({
  scanData: { parsed: [] },
  setScanData: (scanData: ScanResultPayload | string) => set({ scanData }),
  resetScanData: () => set({ scanData: { parsed: [] } }),
}));

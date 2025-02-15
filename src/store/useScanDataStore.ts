import { create } from "zustand";

interface ScanDataStoreProps {
  scanData: ScanResultPayload;
  setScanData: (scanData: ScanResultPayload) => void;
  resetScanData: () => void;
}

export const useScanDataStore = create<ScanDataStoreProps>((set) => ({
  scanData: { parsed: [] },
  setScanData: (scanData: ScanResultPayload) => set({ scanData }),
  resetScanData: () => set({ scanData: { parsed: [] } }),
}));

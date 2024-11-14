import { create } from "zustand";

type dirStatus = "showDir" | "createDir" | "createFile";

interface TabStore {
  dirStatus: dirStatus;
  setFileAndDir: (fileDir: dirStatus) => void;
}

const useTabsStore = create<TabStore>((set) => ({
  dirStatus: "showDir",
  setFileAndDir: (dirStatus: dirStatus) => set({ dirStatus: dirStatus }),
}));
export default useTabsStore;
import { create } from "zustand";

type StatusValue = "success" | "error";

interface DirectoryStore {
  color: StatusValue;
  setColor: (newColor: StatusValue) => void;
}

const useDirectoryStore = create<DirectoryStore>((set) => ({
  color: "error",
  setColor: (newColor: StatusValue) => set({ color: newColor }),
}));

export default useDirectoryStore;

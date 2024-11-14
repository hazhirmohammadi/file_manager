import { create } from "zustand";
type StatusValue ="success" | "error";

  interface DirectoryStore {
  color: StatusValue;
  setColor: (newColor: string) => void;
}

const useDirectoryStore = create<DirectoryStore>((set) => ({
  color: "error" ,
  setColor: (newColor: string) => set({ color: newColor }),
}))

export default useDirectoryStore;

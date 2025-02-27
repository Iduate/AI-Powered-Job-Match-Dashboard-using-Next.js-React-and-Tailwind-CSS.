import { create } from "zustand";
import axios from "axios";

const useJobStore = create((set) => ({
  jobs: [],
  fetchJobs: async () => {
    const response = await axios.get("/api/jobs");
    set({ jobs: response.data });
  },
}));

export default useJobStore;

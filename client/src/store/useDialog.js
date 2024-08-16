import { create } from "zustand";

const useDialog = create((set) => ({
  showCreateForm: false,
  setShowCreateForm: (showCreateForm) => set({ showCreateForm }),
  showUpdateForm: false,
  setShowUpdateForm: (showUpdateForm) => set({ showUpdateForm }),
  showConfirmDialog: false,
  setShowConfirmDialog: (showConfirmDialog) => set({ showConfirmDialog }),
}));

export default useDialog;

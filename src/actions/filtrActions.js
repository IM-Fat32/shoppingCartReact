export const CHANGE_FILTR = "CHANGE_FILTR";

export const changeFiltr = (newFiltr) => ({
  type: CHANGE_FILTR,
  payload: {
    filtr: newFiltr,
  }
});
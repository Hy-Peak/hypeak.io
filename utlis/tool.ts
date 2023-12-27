import { useClipboard } from '@vueuse/core';

export const useCopy = async (text: string) => {
  const { copy } = useClipboard();
  try {
    return await copy(text).then(() => {
      return true;
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

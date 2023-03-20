import { useTranslation } from 'react-i18next';

export type NNTFunction = (key: string) => string;

const useNotNullableTranslation = () => {
  const { t: i18n } = useTranslation();
  const getTranslationByKey: NNTFunction = (key: string) => i18n(key) || '';
  return { t: getTranslationByKey };
};

export default useNotNullableTranslation;

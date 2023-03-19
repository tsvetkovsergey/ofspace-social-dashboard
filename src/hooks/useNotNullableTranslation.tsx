import { useTranslation } from 'react-i18next';

const useNotNullableTranslation = () => {
  const { t: i18n } = useTranslation();
  const getTranslationByKey = (key: string) => i18n(key) || key;
  return { t: getTranslationByKey };
};

export default useNotNullableTranslation;

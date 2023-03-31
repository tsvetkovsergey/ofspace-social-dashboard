import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        // Navbar
        'Welcome to Dashboard': 'Welcome to Dashboard',
        Team: 'Manage Team',
        Search: 'Search',
        // Dashboard
        'Response time': 'Response time by location',
        'Activity on the pages': 'Activity on the pages',
        Viewers: 'Viewers',
        Followers: 'Followers',
        'Accounts reached': 'Accounts reached',
        'Accounts engaged': 'Accounts engaged',
        'Average reached': 'Average reached',
        'Average engaged': 'Average engaged',
        'High view design': 'High view design',
        Value: 'Value',
        Sum: 'Sum',
        Metric: 'Metric',
        Tag: 'Tag',
        'Total view': 'Total view',
        'Total like': 'Total like',
        'Latency contribution': 'Latency contribution',
        'Less view design': 'Less view design',
        'Most active user': 'Most active user',
        'View all': 'View all',
        Monthly: 'Monthly',
        Weekly: 'Weekly',
        Daily: 'Daily',
        Jan: 'Jan',
        Feb: 'Feb',
        Mar: 'Mar',
        Apr: 'Apr',
        May: 'May',
        June: 'June',
        July: 'July',
        Aug: 'Aug',
        Sep: 'Sep',
        Oct: 'Oct',
        Nov: 'Nov',
        Dec: 'Dec',
        Mon: 'Mon',
        Tue: 'Tue',
        Wed: 'Wed',
        Thu: 'Thu',
        Fri: 'Fri',
        Sat: 'Sat',
        Sun: 'Sun',
        // Calendar
        Calendar: 'Calendar',
        Events: 'Events',
        // List
        Metrics: 'Metrics',
        // Team Page
        Name: 'Name',
        Age: 'Age',
        'Phone Number': 'Phone Number',
        Email: 'Email',
        'Access Level': 'Access Level',
        admin: 'admin',
        manager: 'manager',
        user: 'user',
        // Geography
        Geography: 'Geo Data',
        // 404
        'Page not found': 'This page could not be found',
      },
    },
    ru: {
      translation: {
        // Navbar
        'Welcome to Dashboard': 'Панель Управления',
        Search: 'Поиск',
        Team: 'Управление командой',
        // Dashboard
        'Response time': 'Время отклика',
        'Activity on the pages': 'Активность',
        Viewers: 'Просмотры',
        Followers: 'Подписчики',
        'Accounts reached': 'Показы',
        'Accounts engaged': 'Охват',
        'Average reached': 'Средние показы',
        'Average engaged': 'Средний охват',
        'High view design': 'Детальная статистика',
        Value: 'Значение',
        Sum: 'Сумма',
        Metric: 'Метрика',
        Tag: 'Тег',
        'Total view': 'Просмотры',
        'Total like': 'Лайки',
        'Latency contribution': 'Задержка (мс)',
        'Less view design': 'Общая статистика',
        'Most active user': 'Активные пользователи',
        'View all': 'Показать всё',
        Monthly: 'Месяцы',
        Weekly: 'Недели',
        Daily: 'Дни',
        Jan: 'Янв',
        Feb: 'Февр',
        Mar: 'Март',
        Apr: 'Апр',
        May: 'Май',
        June: 'Июнь',
        July: 'Июль',
        Aug: 'Авг',
        Sep: 'Сент',
        Oct: 'Окт',
        Nov: 'Нояб',
        Dec: 'Дек',
        Mon: 'Пн',
        Tue: 'Вт',
        Wed: 'Ср',
        Thu: 'Чт',
        Fri: 'Пт',
        Sat: 'Сб',
        Sun: 'Вс',
        // Calendar
        Calendar: 'Календарь',
        Events: 'События',
        // List
        Metrics: 'Метрики',
        // Team Page
        Name: 'Имя',
        Age: 'Возраст',
        'Phone Number': 'Номер телефона',
        Email: 'Почта',
        'Access Level': 'Уровень доступа',
        admin: 'админ',
        manager: 'менеджер',
        user: 'пользователь',
        // Geography
        Geography: 'Гео Данные',
        // 404
        'Page not found': 'Эта страница не найдена',
      },
    },
  },
});

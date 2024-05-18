import { Filters } from "../../store/filtersStore/interfaces";

interface FilterData {
  title: string;
  filters: Filters[]
}

export const sectoralFilters: FilterData = {
  title: 'Отрасль',
  filters: [
    Filters.BI,
    Filters.GOS,
    Filters.ENERGY,
    Filters.FIN_TECH,
    Filters.LIFESTYLE,
    Filters.MEDICINE,
    Filters.E_COMMERCE,
    Filters.SAFETY,
    Filters.ENTERTAINMENTS,
    Filters.CARTOGRAPHY,
  ]
};

export const platformFilters: FilterData = {
  title: 'Платформы',
  filters: [
    Filters.ANDROID,
    Filters.CHAT_SYSTEM,
    Filters.TELEGRAM,
    Filters.BACKEND,
    Filters.WINDOWS,
    Filters.CONTROL_PANEL,
    Filters.WEB,
    Filters.IOS,
  ]
};

export const servicesFilters: FilterData = {
  title: 'Услуги',
  filters: [
    Filters.RELEASE,
    Filters.SUPPORT,
    Filters.DESIGN,
    Filters.TESTING,
    Filters.DEVELOPMENT,
    Filters.PRE_PROJECT_ACTIVITIES,
    Filters.ANALYTICS,
    Filters.ACCEPTANCE,
  ]
};

export const languageFilters: FilterData = {
  title: 'Языки',
  filters: [
    Filters.NODE,
    Filters.JAVA,
    Filters.XAMARIN,
    Filters.WORDPRESS,
    Filters.DRUPAL_ANGULAR,
    Filters.NOT_AZURE,
    Filters.MS_POWER_BI,
    Filters.BITRIX,
    Filters.OBJECTIVE_C,
    Filters.C_SHARP_UWP,
    Filters.PYTHON,
    Filters.PHP,
    Filters.KOTLIN,
    Filters.MODX,
    Filters.SWIFT,
    Filters.PHONEGAP,
    Filters.REACT,
    Filters.JAVA_KOTLIN,
    Filters.CORDOVA,
    Filters.C_PLUS
  ]
};
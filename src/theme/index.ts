const appTheme = {
  COLORS: {
    BASE_GRAY_100: '#1B1D1E',
    BASE_GRAY_200: '#333638',
    BASE_GRAY_300: '#5C6265',
    BASE_GRAY_400: '#B9BBBC',
    BASE_GRAY_500: '#DDDEDF',
    BASE_GRAY_600: '#EFF0F0',
    BASE_GRAY_700: '#FAFAFA',
    BASE_WHITE: '#FFFFFF',
    BRAND_GREEN_DARK: '#639339',
    BRAND_GREEN_MID: '#CBE4B4',
    BRAND_GREEN_LIGHT: '#E5F0DB',
    BRAND_RED_DARK: '#BF3B44',
    BRAND_RED_MID: '#F3BABD',
    BRAND_RED_LIGHT: '#F4E6E7',
  },
  FONT_FAMILY: {
    REGULAR: 'Nunito_400Regular',
    BOLD: 'Nunito_700Bold',
  },
  FONT_SIZE: {
    TITLE_G: 32,
    TITLE_M: 24,
    TITLE_S: 18,
    TITLE_XS: 14,
    BODY_M: 16,
    BODY_S: 14,
    BODY_XS: 12,
  },
} as const;

export const colors = {
  success: {
    light: appTheme.COLORS.BRAND_GREEN_LIGHT,
    mid: appTheme.COLORS.BRAND_GREEN_MID,
    dark: appTheme.COLORS.BRAND_GREEN_DARK,
  },
  danger: {
    light: appTheme.COLORS.BRAND_RED_LIGHT,
    mid: appTheme.COLORS.BRAND_RED_MID,
    dark: appTheme.COLORS.BRAND_RED_DARK,
  },
};

export default appTheme;

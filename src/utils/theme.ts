export const setTheme = (value: string) => {
    const themeMetaTag = document.querySelector('meta[name="theme-color"]');
    
    if (themeMetaTag) {
      const rootStyles = getComputedStyle(document.documentElement);
      const c = value === 'highlight' ? '--palette-highlight' : '--palette-dark';
      const highlightColor = rootStyles.getPropertyValue(c).trim();

      if (highlightColor) {
        themeMetaTag.setAttribute('content', highlightColor);
      }
    }
}
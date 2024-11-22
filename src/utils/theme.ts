export const setTheme = () => {
    const themeMetaTag = document.querySelector('meta[name="theme-color"]');
    
    if (themeMetaTag) {
      const rootStyles = getComputedStyle(document.documentElement);
      const highlightColor = rootStyles.getPropertyValue('--palette-highlight').trim();

      if (highlightColor) {
        themeMetaTag.setAttribute('content', highlightColor);
      }
    }
}
export const scrollToElement = (section:string) => {
  const element = document.getElementById(section);
  element?.scrollIntoView({behavior: "smooth"});
};
  
export const slugify = (str:string) => {
  str = str.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
  return str;
}

export const getScrollOffset = (el:HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

export const capitalise = (str:string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
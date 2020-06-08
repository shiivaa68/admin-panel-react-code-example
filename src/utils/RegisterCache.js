export function setRegisterCacheItem(key, value) {
  const registerCache = getRegisterCache();
  let newCache;
  if (registerCache) {
    newCache = {
      ...registerCache,
      [key]: value
    };
  } else {
    newCache = {
      [key]: value
    };
  }
  localStorage.setItem('register', JSON.stringify(newCache));
}

export function getRegisterCache() {
  return JSON.parse(localStorage.getItem('register')) || {};
}

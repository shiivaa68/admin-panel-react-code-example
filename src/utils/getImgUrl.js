const getImgUrl = (hash, quality = 500) => `${process.env.REACT_APP_BASE_URL}/m/${hash}?pt=m${quality}`;

export default getImgUrl;

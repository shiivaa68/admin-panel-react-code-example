export default function wantKeysFromObject(data, wantKey) {
  let information = [];
  wantKey.forEach(item => {
    Object.keys(data).forEach(key => {
      if(key.includes(item)){
        information = {...information,  [key]: data[key]}
      }
    })
  });
  return information;
}
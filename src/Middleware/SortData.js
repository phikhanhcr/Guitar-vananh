// sap xep tang dan 
export const sortingDataFollowOption = (data, option = 'id', ascending) => {
  if(!ascending) {
    return data.sort((a, b) => b[option] - a[option]);
  } else {
    return data.sort((a, b) => a[option] - b[option]);  
  }
  
}

const API_URL = import.meta.env.VITE_API_URL;


export const getImages = async (nextCursor) => {
  const params = new URLSearchParams();

  if(nextCursor){
    params.append('next_cursor', nextCursor);
  }

  const response = await fetch(`${API_URL}/photos?${params}`);
  //The first time request runs, params is not included 
  //because the cloudinary api returns the first 10 results.


  const responseJson = await response.json();
  return responseJson;
}
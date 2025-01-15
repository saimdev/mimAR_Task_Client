export const signout = async (navigate) => {
  const googleUser = JSON.parse(localStorage.getItem("user"));
  const facebookUser = JSON.parse(localStorage.getItem("facebookUser"));
  const githubUser = JSON.parse(localStorage.getItem("githubUser"));
  if(googleUser){
    localStorage.removeItem('user');
  }
  else if (facebookUser){
    localStorage.removeItem('facebookUser');
  }
  else if(githubUser){
    localStorage.removeItem('githubUser');
  }
  else{
    const response = await fetch("https://mim-ar-task-server.vercel.app/api/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://mim-ar-task-client.vercel.app",
        "Access-Control-Allow-Methods": "GET,POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      credentials: "include",
    });
  
    const data = await response.json();
  }
    
    // console.log(data);
  
    
      navigate('/login');
   
  };
  
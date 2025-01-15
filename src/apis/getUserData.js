export const getUserData = async (setEmail, setUsername, navigate, setLoading) => {
    const response = await fetch("https://mim-ar-task-server.vercel.app/api/getData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://mim-ar-task-client.vercel.app",
        "Access-Control-Allow-Methods": "GET,POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  
    const data = await response.json();
    console.log(data);
    setEmail(data.email);
    setUsername(data.username);
    
  
    if (data.error || !data) {
      navigate("/login")
    } 
    else{
        setLoading(false);
    }
  };
  
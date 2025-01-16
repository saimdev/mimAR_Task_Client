export const getAllUsers = async (setUsers) => {
    const response = await fetch("https://mim-ar-task-server.vercel.app/api/allUsers", {
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
    console.log(data);
    setUsers(data);

    if (data.error || !data) {
      navigate("/login")
    } 
    else{
        setLoading(false);
    }
  };
  
export const passwordForget = async (email,navigate, setLoading) => {
    const response = await fetch("https://mim-ar-task-server.vercel.app/api/forget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://mim-ar-task-client.vercel.app",
        "Access-Control-Allow-Methods": "GET,POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
  
    const data = await response.json();
    console.log(data);
  
    if (data.error || !data) {
      window.alert(data.error);
      window.location.reload();
    } else {
        setLoading(false);
      window.alert(data.message);
      navigate("/login");
    }
  };
  
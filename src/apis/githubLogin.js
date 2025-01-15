export const githubLogin = async (code, navigate) => {
    // const CLIENT_ID = "Ov23limBVVW5jwAa4QyG";
    // const CLIENT_SECRET = "451b23d9c68d37fd9f4823d2ff2534392d90324f"
    if(code){
        const response = await fetch('https://mim-ar-task-server.vercel.app/api/auth/github/callback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "https://mim-ar-task-client.vercel.app",
        "Access-Control-Allow-Methods": "GET,POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
        body: JSON.stringify({
            code,
        }),
    });

    const data = await response.json();
      console.log(data);
        if (data.error || !data) {
          window.alert(data.error);
          window.location.reload();
        } else {
        //   const username = data.name;
        //   const userEmail = data.email;
          localStorage.setItem('githubUser', JSON.stringify({
            username: data.name,
            email: data.email
          }));
          navigate("/home")
        }
    }
  };
  
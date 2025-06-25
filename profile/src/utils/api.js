export const getProfile = async (username) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/profile/${username}`);
     if (!res.ok) throw new Error("Failed to fetch profile");
     return await res.json();
   };
   
   export const updateProfile = async (data, token) => {
     const res = await fetch(`${import.meta.env.VITE_API_URL}/api/profile/update`, 
    {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`
       },
       body: JSON.stringify(data)
     });
   
     if (!res.ok) {
       const errorData = await res.json();
       throw new Error(errorData.message || 'Profile update failed');
     }
   
     return await res.json();
   };
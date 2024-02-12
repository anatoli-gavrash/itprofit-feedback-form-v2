export const registration = async (data) => {
  try {
    const response = await fetch('http://localhost:9090/api/registration', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.json();
  } catch (error) {
    return {
      status: "error",
      message: "Server is not responding",
    };
  }
};

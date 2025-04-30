// Simulate API call with a Promise
function fetchUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = [
          { name: "Alice", age: 25 },
          { name: "Bob", age: 30 },
          { name: "Charlie", age: 28 }
        ];
        resolve(users);
      }, 5000);
    });
  }
  
  async function displayUserNames() {
    try {
      const users = await fetchUsers();
      const names = users.map(user => user.name);
      console.log("User Names:", names);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }
  
  displayUserNames();
  
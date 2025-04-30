const user = {
    name: "John",
    age: 25,
    email: "john@example.com"
  };
  
  function updateUserInfo(user, updates) {
    const { name, age, email } = { ...user, ...updates }; 
    return { name, age, email };
  }
  
  const printUserInfo = (user) => {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
  };
  
  const updatedUser = updateUserInfo(user, { age: 26, email: "john_new@example.com" });
  printUserInfo(updatedUser);
  
  const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 28 }
  ];
  
  const userNames = users.map(user => user.name);
  console.log("User Names:", userNames);
  
  function fetchUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 5000); 
    });
  }
  
  async function displayUsers() {
    try {
      const fetchedUsers = await fetchUsers(); 
      console.log("Fetched Users:", fetchedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  
  displayUsers();
  
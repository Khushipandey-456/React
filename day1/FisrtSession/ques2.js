function updateUser(user, updates) {
    const { name = user.name, age = user.age, email = user.email } = updates;
  
    return { ...user, name, age, email };
  }
  
  const user = { name: "Alice", age: 30, email: "alice@example.com" };
  const updatedUser = updateUser(user, { age: 31 });
  
  console.log(updatedUser);
  
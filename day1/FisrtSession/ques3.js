const printUser = ({ name, age, email }) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
  };
  
  const updatedUser = { name: "Alice", age: 26, email: "alice@example.com" };
  printUser(updatedUser);
  
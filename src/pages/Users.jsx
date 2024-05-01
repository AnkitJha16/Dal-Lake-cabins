import SignupForm from "../features/authentication/SignupForm";
// import UserTable from "../features/authentication/UserTable";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      {/* <UserTable /> */}
      <SignupForm />
    </>
  );
}

export default NewUsers;

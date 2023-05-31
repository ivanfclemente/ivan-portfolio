import IngredientsApp from "../projects/ingredients/Ingredients";
import AuthContextProvider from "../projects/ingredients/context/auth-context";

function IngredientsPage() {
  return (
    <AuthContextProvider>
      <IngredientsApp />;
    </AuthContextProvider>
  );
}

export default IngredientsPage;

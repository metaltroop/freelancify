// Dashboard.jsx
import { useEffect } from "react";
import useAuth from "../../auth/useAuth";

const Dashboard = () => {
  const { requireAuth, isAuthenticated } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await requireAuth();
        // User is authenticated, continue with the dashboard rendering logic
      } catch (error) {
        // User is not authenticated, handle the unauthenticated state (e.g., redirect to sign-in page)
        console.error("User not authenticated", error);
      }
    };

    checkAuth();
  }, [requireAuth, isAuthenticated]);

  // Render nothing if the user is not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <h1>Hello Dashboard</h1>
    </div>
  );
};

export default Dashboard;

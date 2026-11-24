
import "./index.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">

      <div className="dashboard__welcome">
        <div>
          <span>OVERVIEW</span>
          <h1>Welcome back, Admin 👋</h1>
          <p>
            Here's what's happening with your account today.
          </p>
        </div>
      </div>

      <div className="dashboard__stats">

        <div className="dashboard__card">
          <div className="dashboard__card-icon">👤</div>
          <span>Account Status</span>
          <h3>Active</h3>
          <small>Your account is active and ready.</small>
        </div>

        <div className="dashboard__card">
          <div className="dashboard__card-icon">🛡️</div>
          <span>Security</span>
          <h3>Protected</h3>
          <small>Your account security is enabled.</small>
        </div>

        <div className="dashboard__card">
          <div className="dashboard__card-icon">⚙️</div>
          <span>Account Type</span>
          <h3>Administrator</h3>
          <small>Full workspace access.</small>
        </div>

      </div>

      <div className="dashboard__activity">

        <div className="dashboard__activity-header">
          <h2>Recent Activity</h2>
          <span>Last updates</span>
        </div>

        <div className="dashboard__activity-item">
          <div className="dashboard__activity-dot" />
          <div>
            <strong>Account created</strong>
            <p>Your AuthLab account was created successfully.</p>
          </div>
          <small>Today</small>
        </div>

        <div className="dashboard__activity-item">
          <div className="dashboard__activity-dot" />
          <div>
            <strong>Profile updated</strong>
            <p>Your profile information is up to date.</p>
          </div>
          <small>Recently</small>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
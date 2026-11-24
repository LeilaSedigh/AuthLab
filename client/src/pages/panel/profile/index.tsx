
import { Form, Input, Button } from "antd";
import "./index.scss";

const Profile = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: {
    fullName: string;
    email: string;
  }) => {
    console.log("Profile:", values);
  };

  return (
    <div className="profile">

      <div className="profile__header">
        <span>ACCOUNT</span>
        <h1>My Profile</h1>
        <p>
          Manage your personal information and account details.
        </p>
      </div>

      <div className="profile__card">

        <div className="profile__user">
          <div className="profile__avatar">
            A
          </div>

          <div>
            <h2>Admin User</h2>
            <span>Administrator</span>
          </div>

          <div className="profile__status">
            Active
          </div>
        </div>

        <div className="profile__divider" />

        <div className="profile__section">
          <h3>Personal Information</h3>
          <p>Update your account information.</p>

          <Form
            form={form}
            layout="vertical"
            initialValues={{
              fullName: "Admin User",
              email: "admin@authlab.com"
            }}
            onFinish={handleSubmit}
            className="profile__form"
          >

            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Please enter your name"
                }
              ]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email"
                },
                {
                  type: "email",
                  message: "Please enter a valid email"
                }
              ]}
            >
              <Input
                type="email"
                placeholder="Enter your email"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
              >
                Save Changes
              </Button>
            </Form.Item>

          </Form>
        </div>

      </div>

    </div>
  );
};

export default Profile;
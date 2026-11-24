
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";

const Login = () => {
    return (
        <div className="login">

            {/* Header */}
            <div className="login__header">
                <h2>Welcome Back</h2>
                <p>
                    Sign in to continue to your AuthLab account.
                </p>
            </div>

            {/* Form */}
            <Form
                layout="vertical"
                className="login__form"
            >

                <Form.Item
                    label="Email Address"
                    name="email"
                >
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                >
                    <Input.Password
                        placeholder="Enter your password"
                        autoComplete="current-password"
                    />
                </Form.Item>

                {/* Remember & Forgot Password */}
                <div className="login__options">

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        noStyle
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Link to="/forgot-password">
                        Forgot password?
                    </Link>

                </div>

                {/* Submit */}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                    >
                        Sign In
                    </Button>
                </Form.Item>

            </Form>

            {/* Footer */}
            <div className="login__footer">
                <span>Don't have an account?</span>
                <Link to="/register"> Create account</Link>
            </div>

        </div>
    );
};

export default Login;

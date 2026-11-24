
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import './index.scss'

const Register = () => {
    return (
        <div className="register">

            <div className="register__header">
                <h2>Create Account</h2>
                <p>
                    Create your account to get started with AuthLab.
                </p>
            </div>

            <Form
                layout="vertical"
                className="register__form"
            >

                <Form.Item
                    label="Full Name"
                    name="fullName"
                >
                    <Input placeholder="Enter your full name" />
                </Form.Item>

                <Form.Item
                    label="Email Address"
                    name="email"
                >
                    <Input
                        type="email"
                        placeholder="Enter your email"
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                >
                    <Input.Password
                        placeholder="Create a password"
                    />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                >
                    <Input.Password
                        placeholder="Confirm your password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                    >
                        Create Account
                    </Button>
                </Form.Item>

            </Form>

            <div className="register__footer">
                <span>Already have an account?</span>
                <Link to="/login"> Sign in</Link>
            </div>

        </div>
    );
};

export default Register;

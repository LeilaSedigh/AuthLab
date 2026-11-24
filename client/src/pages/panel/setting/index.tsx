
import { useState } from "react";
import { Form, Input, Button, Switch, message } from "antd";
import "./index.scss";

const Settings = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [securityAlerts, setSecurityAlerts] = useState(true);

    const handlePasswordChange = (values: {
        currentPassword: string;
        newPassword: string;
        confirmPassword: string;
    }) => {
        console.log("Password:", values);
        message.success("Password form submitted successfully.");
    };

    return (
        <div className="settings">

            {/* Header */}
            <div className="settings__header">
                <span>CONFIGURATION</span>
                <h1>Settings</h1>
                <p>
                    Manage your account preferences and security settings.
                </p>
            </div>

            {/* Account Settings */}
            <section className="settings__card">

                <div className="settings__section-header">
                    <h2>Account Settings</h2>
                    <p>Manage your account information.</p>
                </div>

                <div className="settings__option">
                    <div>
                        <h3>Email Notifications</h3>
                        <p>Receive important updates via email.</p>
                    </div>

                    <Switch
                        checked={emailNotifications}
                        onChange={setEmailNotifications}
                    />
                </div>

                <div className="settings__option">
                    <div>
                        <h3>Security Alerts</h3>
                        <p>Get notified about suspicious activities.</p>
                    </div>

                    <Switch
                        checked={securityAlerts}
                        onChange={setSecurityAlerts}
                    />
                </div>

            </section>

            {/* Security */}
            <section className="settings__card">

                <div className="settings__section-header">
                    <h2>Security</h2>
                    <p>Keep your account secure.</p>
                </div>

                <Form
                    layout="vertical"
                    className="settings__form"
                    onFinish={handlePasswordChange}
                >

                    <Form.Item
                        label="Current Password"
                        name="currentPassword"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your current password"
                            }
                        ]}
                    >
                        <Input.Password placeholder="Enter current password" />
                    </Form.Item>

                    <Form.Item
                        label="New Password"
                        name="newPassword"
                        rules={[
                            {
                                required: true,
                                message: "Please enter a new password"
                            },
                            {
                                min: 8,
                                message: "Password must be at least 8 characters"
                            }
                        ]}
                    >
                        <Input.Password placeholder="Enter new password" />
                    </Form.Item>

                    <Form.Item
                        label="Confirm New Password"
                        name="confirmPassword"
                        dependencies={["newPassword"]}
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your new password"
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("newPassword") === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(
                                        new Error("Passwords do not match")
                                    );
                                }
                            })
                        ]}
                    >
                        <Input.Password placeholder="Confirm new password" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Update Password
                        </Button>
                    </Form.Item>

                </Form>

            </section>

            {/* Preferences */}
            <section className="settings__card">

                <div className="settings__section-header">
                    <h2>Preferences</h2>
                    <p>Customize your workspace experience.</p>
                </div>

                <div className="settings__option">
                    <div>
                        <h3>Dark Mode</h3>
                        <p>Use the dark appearance across AuthLab.</p>
                    </div>

                    <Switch checked disabled />
                </div>

            </section>

        </div>
    );
};

export default Settings;
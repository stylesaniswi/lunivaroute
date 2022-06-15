import React from 'react';
import { useStepsForm } from 'sunflower-antd';
import { Steps, Input, Button, Form, Result, Checkbox } from 'antd';
import {Trans, useTranslation } from 'react-i18next';

const { Step } = Steps;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default props => {
  const {
    form,
    current,
    gotoStep,
    stepsProps,
    formProps,
    submit,
    formLoading,
  } = useStepsForm({
    async submit(values) {
      const { fullname, email, address, education, companyname,remarks } = values;
      console.log(fullname, email, address, education, companyname,remarks);
      await new Promise(r => setTimeout(r, 1000));
      return 'ok';
    },
    total: 7,
  });
  const { t } = useTranslation();

  const formList = [
    <>
      <Form.Item
        label="Full Name"
        name="fullname"
        rules={[
          {
            required: true,
            message: 'Please input fullname',
          },
        ]}
      >
        <Input placeholder="Enter Full Name" />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input address',
          },
        ]}
      >
        <Input placeholder="Address" />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button onClick={() => gotoStep(current + 1)}>Next</Button>
      </Form.Item>
    </>,

    <>
      <Form.Item
        label="Educational Qualifiacation"
        name="education"
        rules={[
          {
            required: true,
            message: 'Please input your qualification',
          },
        ]}
      >
        <Input placeholder="Educational Qualification" />
      </Form.Item>
      <Form.Item
        label={t('company')} 
        name="companyname"
        rules={[
          {
            required: true,
            message: 'Please input your company name',
          },
        ]}
      >
        <Input placeholder={t("Company Name")} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        {/* <Button
          style={{ marginRight: 10 }}
          type="primary"
          loading={formLoading}
          onClick={() => {
            submit().then(result => {
              if (result === 'ok') {
                gotoStep(current + 1);
              }
            });
          }}
        >
          Submit
        </Button> */}

        <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
        <Button onClick={() => gotoStep(current + 1)}>Next</Button>
      </Form.Item>
    </>,
    <>
    <Form.Item
      label="Remarks"
      name="remarks"
    >
      <Input placeholder="Remarks" />
    </Form.Item>
    <Form.Item
      label="Terms and condition"
      name="terms"
    >
      <Checkbox
      >I accept all the terms and condition</Checkbox>
    </Form.Item>
    <Form.Item {...tailLayout}>
      <Button
        style={{ marginRight: 10 }}
        type="primary"
        loading={formLoading}
        onClick={() => {
          submit().then(result => {
            if (result === 'ok') {
              gotoStep(current + 1);
            }
          });
        }}
      >
        Submit
      </Button>
      <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
      {/* <Button onClick={() => gotoStep(current + 1)}>Next</Button> */}
    </Form.Item>
  </>,
  ];

  return (
    <div>
      <Steps {...stepsProps}>
        <Step title="Personal Info" />
        <Step title="Your Designation" />
        <Step title="Remarks" />
      </Steps>

      <div style={{ marginTop: 60 }}>
        <Form {...layout} {...formProps} style={{ maxWidth: 600 }}>
          {formList[current]}
        </Form>

        {current === 3 && (
          <Result
            status="success"
            title="Submit is succeed!"
            extra={
              <>
                <Button
                  type="primary"
                  onClick={() => {
                    form.resetFields();
                    gotoStep(0);
                  }}
                >
                  Buy it again
                </Button>
                <Button
                 onClick={() => {
                    form.resetFields();
                    gotoStep(2);
                  }}
                  >Check detail</Button>
              </>
            }
          />
        )}
      </div>
    </div>
  );
};
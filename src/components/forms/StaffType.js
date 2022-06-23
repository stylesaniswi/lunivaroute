import axios from 'axios';
import moment from 'moment';
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Switch,
    message
  } from 'antd';



const StaffType = () => {

    const url = 'https://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/InsertUpdateStaffType';
    const generateUrlEncodedData = (initialObject) => {
        const formData = Object.keys(initialObject)
          .map((key) => {
              return `${key}=${encodeURIComponent(initialObject[key])}`
          })
          .join('&');
        return formData;
      }
    //   const info = () => {
    //     message.info('The form has been submitted');
    //         }; 
const handleInputs = async (e) => {
    const baseData = {
       'StId': 0,
       'StaffType': e.StaffType,
       'IsActive': true,
    }
    let newData = generateUrlEncodedData(baseData);
    

    try {
        const response1 = await axios.post(url, newData)
        console.log(response1);
        
    } catch (error) {
       console.log(error.response);
    }
    // info();

}
    return(
        <>
         <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 4,
        }}
        style={{marginTop:100}}
        onFinish={handleInputs}
         >
        
        <Form.Item label="Staff Type" name='StaffType' rules={[
          {
            required: true,
            message: 'Please input the Staff Type!',
          },
        ]}>
          <Input/>
        </Form.Item >
               
        <Form.Item label="Is Active" name='IsActive' valuePropName="checked"
         >
          <Switch />
        </Form.Item>
        <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Form>
        </>
    )
}

export default StaffType;
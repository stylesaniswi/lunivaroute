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



const UpdateRole = () => {

    const url = 'https://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/InsertUpdateRole';
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
       'RId': 0,
       'RoleType': e.RoleType,
       'IsActive': e.IsActive,
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
        
        <Form.Item label="Role Type" name='RoleType' rules={[
          {
            required: true,
            message: 'Please input the Role Type!',
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

export default UpdateRole;
import React, { useState, useEffect } from 'react'
import { Form, Card, Input, Button, message } from "antd";
import { createApi, getById, change } from "../../Operation/Thingsop"

function Change(props) {

    const { getFieldDecorator } = props.form;
    const [currentData, setCurrentData] = useState({});

  
    const handleSubmit = e => {
        
        e.preventDefault();
    
        //  验证
        props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            
            //  此处需要调用api接口
            if (props.match.params.id) {
              change(props.match.params.id, {
                ...values,
              })
                .then(res => {
                  
                  props.history.push("/admin/list");
                })
                .catch(err => {
                  
                });
            } else {
              createApi({
                ...values,
              })
                .then(res => {
                  
                  props.history.push("/admin/list");
                })
                .catch(err => {
                  
                });
            }
          } else {
            message.error("请输入正确的内容");
          }
        });
      };
      useEffect(() => {
        if (props.match.params.id) {
          getById(props.match.params.id).then(res => {
            setCurrentData(res);
          });
        }
      }, []);
    
      
      const priceValidate = (rule, value, callback) => {
        if (value * 1 < 1) {
          callback("价格不能小于1");
        } else {
          callback();
        }
      };


    return (
        <Card
      title="商品编辑"
      extra={
        <Button onClick={() => props.history.push("/admin/list")}>
          返回
        </Button>
      }
    >
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Item label="名字">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "请输入商品名字"
              }
            ],
            initialValue: currentData.name
          })(<Input placeholder="请输入商品名字" />)}
        </Form.Item>
        <Form.Item label="价格">
          {getFieldDecorator("price", {
            rules: [
              {
                required: true,
                message: "请输入商品价格"
              },
              {
                validator: priceValidate
              }
            ],
            initialValue: currentData.price
          })(<Input placeholder="请输入商品价格" />)}
        </Form.Item>
        
        <Form.Item>
          <Button htmlType="submit" type="primary" >
            保存
          </Button>
        </Form.Item>
      </Form>
    </Card>
    )
}

export default Form.create({ name: "productEdit" })(Change);

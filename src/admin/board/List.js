import React, { useEffect,useState } from "react";
import { Card, Table, Button, Popconfirm,Form,Switch} from "antd";
import { connect } from "react-redux";
import { delt } from '../../Operation/Thingsop'
import { loadThings } from '../../Operation/dataChange'

const title = () => 'Here is title';


const scroll = { y: 240 };

function List(props){

  const { list, page, total } = props;

  useEffect(() => {
    props.dispatch(
      loadThings({
        page: 1
      })
    );
  }, []);
  const loadData = () => {
    props.dispatch(
      loadThings({
        page: page
      })
    );
  };


  const [size, setSize] = useState('default');
  const [tableLayout, setTablelayout] = useState(undefined);
  const [ellipsis, setEllipsis] = useState();

  const handleSizeChange = e => {
    setSize({ size: e.target.value });
  };

  const handleTableLayoutChange = e => {
    setTablelayout({ tableLayout: e.target.value });
  };


  const handleEllipsisChange = enable => {
    setEllipsis({ ellipsis: enable });
  };

  const columns = [
    {
      title: "序号",
      key: "_id",
      width: 80,
      align: "center",
      render: (txt,record,index) => index + 1,
      
    },
    {
      title: "名字",
      dataIndex: "name",
      filters: [
        {
          text: 'AMD',
          value: 'AMD',
          children: [
            {
              text: 'RDNA1',
              value: 'RDNA1',
            },
            {
              text: 'RDNA2',
              value: 'RDNA2',
            },
          ],
        },
        {
          text: 'NV',
          value: 'NV',
          children: [
            {
              text: 'GTX',
              value: 'GTX',
            },
            {
              text: 'RTX',
              value: 'RTX',
            },
          ],
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    
    {
      title: "价格",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "操作",
      render: (record) => {
        return (
          <div>
            <Button
              type="default"
              size="small"
              onClick={() => {
                props.history.push(`/admin/list/change/${record._id}`);
              }}
            >
              修改
            </Button>
            <Popconfirm
              title="确定删除此项？"
              onCancel={() => console.log("用户取消删除")}
              onConfirm={() => {
                // 此处调用api接口进行相关操作
                delt(record._id).then(res => {
                  loadData();
                });
              }}
            >
              <Button style={{ margin: "0 1rem" }} type="danger" size="small">
                删除
              </Button>
            </Popconfirm>
             
          </div>
        );
      }
    }
  ];
 

  
    return (
      <Card
      title="商品列表"
      extra={
        
        <Button
          type="primary"
          size="small"
          onClick={() => props.history.push("/admin/list/change")}
        >
          添加新成员
        </Button>

        
      }
      >
        <Form
          layout="inline"
          className="components-table-demo-control-bar"
          style={{ marginBottom: 16 }}
        >
          
          
          <Form.Item label="Ellipsis">
            <Switch checked={!!ellipsis} onChange={handleEllipsisChange} />
          </Form.Item>
          
          
        </Form>
        <Table
        

          rowKey="_id"
          pagination={{
            total,
            defaultPageSize: 5,
            onChange: p => { 
              props.dispatch(loadThings({ page: p })); 
            }
          }}
          columns={columns.map(item => ({ ...item, ellipsis: ellipsis }))}
          dataSource={list}
          bordered
        />
      </Card>
    );
  
}



export default connect(state=>state.product)(List)

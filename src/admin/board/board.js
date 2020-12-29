import React from 'react'
import { Skeleton,Collapse } from 'antd';

function board() {
    const { Panel } = Collapse;

    const text = `
  RTX3080魔龙已无货
`;


    return (
        <div>
            <h1 style={{fontSize: "50px"}}><b>欢迎</b> <b style={{fontSize: "30px"}}>Welcome</b></h1>
            <br/>
            <Skeleton/>
            <br/><br/><br/>
            <Collapse defaultActiveKey={['1']} style={{backgroundColor:"snow"}}>
                <Panel header="重要通知" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="今日事项" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="其他" key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        </div>
    )
}

export default board

import React from 'react'
import styled from 'styled-components'
import RcGantt, { GanttProps } from 'rc-gantt'

const GanttchartDiv = styled.div`
margin-left:210px;
`

const data = new Array(100).fill({
  name: 'タスク名',
  startDate: '2021-07-10',
  endDate: '2021-07-12',
  collapsed: false,
  children: [
      {
          startDate: '2021-07-10',
          endDate: '2021-07-12',
          name: '名称',
          collapsed: false,
          content: '123123123',
      },
  ],
})

const Sample = () => {

  return (
      <GanttchartDiv>
          <div style={{ height: 500 }}>
              <RcGantt
                  data={data}
                  columns={[
                      {
                          name: 'name',
                          label: '名称',
                          width: 200,
                          maxWidth: 200,
                          minWidth: 200,
                      },
                  ]}
                  onUpdate={async () => {
                      return true
                  }}
              />
          </div>
      </GanttchartDiv>
  );
};

export default Sample;
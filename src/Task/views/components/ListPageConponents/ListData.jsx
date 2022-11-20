import React from 'react'

export const columns = [
    { Header: "クライアント名", accessor: "cliant" },
    { Header: "案件名", accessor: "job" },
    { Header: "工数/タスク名", accessor: "task" },
    { Header: "担当者", accessor: "responsible " },
    { Header: "レベル", accessor: "lebel" },
    { Header: "想定工数", accessor: "expect" },
    { Header: "予定完了日", accessor: "complete" },
    { Header: "ステータス", accessor: "status" },
  ];

  export const data = [
    {
    cliant: "株式会社RYOMA",
    job: "資料作成関連/名刺管理ツール作成",
    task: "提案資料作成",
    responsible:"木村太郎",
    lebel:"レベル2",
    expect:1.5,
    complete:"11/11",
    status:"承認済み"
    },
    {
        cliant: "株式会社RYOMA",
        job: "資料作成関連/名刺管理ツール作成",
        task: "提案資料作成",
        responsible:"木村太郎",
        lebel:"レベル2",
        expect:1.5,
        complete:"11/11",
        status:"承認済み"
        }
]